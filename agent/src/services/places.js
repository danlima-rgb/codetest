import { NICHES } from '../data/niches.js'
import { calcScore, estimateTicket, scoreLabel, generateAbordagem } from '../utils/scoring.js'

const API_KEY = import.meta.env.VITE_GOOGLE_PLACES_API_KEY

const NICHE_QUERIES = {
  odontologia:    'dentista clínica odontológica',
  clinica_medica: 'clínica médica',
  advocacia:      'escritório advocacia advogado',
  imobiliaria:    'imobiliária corretor imóveis',
  academia:       'academia ginástica fitness',
  restaurante:    'restaurante',
  salao_beleza:   'salão beleza cabeleireiro barbearia',
  psicologia:     'psicólogo clínica psicologia',
  nutricionista:  'nutricionista',
  contabilidade:  'contabilidade escritório contábil',
  arquitetura:    'escritório arquitetura arquiteto',
  veterinaria:    'clínica veterinária veterinário',
  engenharia:     'engenharia construção',
  estetica:       'clínica estética dermatologia',
  fotografia:     'fotógrafo estúdio fotografia',
  escola:         'escola curso educação',
}

const FIELDS = [
  'places.id',
  'places.displayName',
  'places.formattedAddress',
  'places.internationalPhoneNumber',
  'places.nationalPhoneNumber',
  'places.websiteUri',
  'places.rating',
  'places.userRatingCount',
  'places.businessStatus',
  'places.googleMapsUri',
].join(',')

function mapPlaceToLead(place, nicheData) {
  const nome = place.displayName?.text || 'Sem nome'
  const semSite = !place.websiteUri
  const avaliacoes = place.userRatingCount || 0
  const rating = place.rating || 0

  // Estimate porte from rating count (heuristic)
  const porte = avaliacoes >= 150 ? 'Grande' : avaliacoes >= 40 ? 'Médio' : 'Pequeno'
  const porteScore = porte === 'Grande' ? 28 : porte === 'Médio' ? 18 : 8

  // Estimate years in market from review count (heuristic)
  const tempoMercado = Math.min(20, Math.max(1, Math.floor(avaliacoes / 25)))

  const flags = {
    semSite,
    siteDesatualizado: false,
    instagramAtivo: false,
    googleMaps: true,
    porteScore,
    tempoMercado,
    avaliacoes,
    nichoCompetitivo: nicheData.competitivo,
  }

  const score = calcScore(flags)
  const ticket = estimateTicket(score, nicheData)
  const meta = scoreLabel(score)

  const lead = {
    id: place.id,
    nome,
    niche: nicheData.label,
    nicheIcon: nicheData.icon,
    cidade: place.formattedAddress || '',
    telefone: place.internationalPhoneNumber || place.nationalPhoneNumber || null,
    email: null,
    score,
    scoreMeta: meta,
    ticket,
    semSite,
    siteDesatualizado: false,
    siteUrl: place.websiteUri || null,
    instagramAtivo: false,
    // Google search for Instagram profile — real profile must be found manually
    instagramUrl: `https://www.google.com/search?q=site%3Ainstagram.com+%22${encodeURIComponent(nome)}%22`,
    googleMaps: true,
    googleMapsUrl: place.googleMapsUri || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(nome)}`,
    tempoMercado,
    avaliacoes,
    rating,
    porte,
    abordagem: '',
    status: 'novo',
    isReal: true,
  }

  lead.abordagem = generateAbordagem(lead)
  return lead
}

export function hasApiKey() {
  return Boolean(API_KEY && API_KEY.trim() && API_KEY !== 'sua_chave_aqui')
}

export async function fetchPlacesLeads(niche, cidade, count) {
  if (!hasApiKey()) {
    throw new Error('API_KEY_MISSING')
  }

  const query = `${NICHE_QUERIES[niche] || niche} em ${cidade}`
  const nicheData = NICHES.find(n => n.value === niche) || NICHES[0]

  const res = await fetch('https://places.googleapis.com/v1/places:searchText', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Goog-Api-Key': API_KEY,
      'X-Goog-FieldMask': FIELDS,
    },
    body: JSON.stringify({
      textQuery: query,
      languageCode: 'pt-BR',
      maxResultCount: Math.min(count, 20),
    }),
  })

  if (!res.ok) {
    const body = await res.json().catch(() => ({}))
    const msg = body.error?.message || `Erro ${res.status} na API do Google`
    throw new Error(msg)
  }

  const data = await res.json()
  const places = data.places || []

  if (places.length === 0) {
    throw new Error('ZERO_RESULTS')
  }

  return places
    .filter(p => p.businessStatus !== 'CLOSED_PERMANENTLY')
    .map(p => mapPlaceToLead(p, nicheData))
    .sort((a, b) => b.score - a.score)
}
