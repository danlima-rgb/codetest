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

function instagramSearchUrl(nome) {
  return `https://www.google.com/search?q=site%3Ainstagram.com+%22${encodeURIComponent(nome)}%22`
}

function mapPlaceToLead(place, nicheData) {
  const nome      = place.displayName?.text || 'Sem nome'
  const avaliacoes = place.userRatingCount || 0
  const rating    = place.rating || 0

  const porte      = avaliacoes >= 150 ? 'Grande' : avaliacoes >= 40 ? 'Médio' : 'Pequeno'
  const porteScore = porte === 'Grande' ? 28 : porte === 'Médio' ? 18 : 8
  const tempoMercado = Math.min(20, Math.max(2, Math.floor(avaliacoes / 20)))

  // Todos os leads aqui TÊM site (filtramos antes) e assumimos site desatualizado
  // Instagram não é confirmado — fornecemos link de busca
  const flags = {
    siteDesatualizado: true,   // tem site, mas assumimos desatualizado (comum em pequenos negócios)
    instagramAtivo: true,      // sinal positivo assumido (filtramos por negócios ativos)
    googleMaps: true,
    porteScore,
    tempoMercado,
    avaliacoes,
    nichoCompetitivo: nicheData.competitivo,
  }

  const score  = calcScore(flags)
  const ticket = estimateTicket(score, nicheData)
  const meta   = scoreLabel(score)

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
    semSite: false,
    siteDesatualizado: true,
    siteUrl: place.websiteUri,
    instagramAtivo: true,
    instagramUrl: instagramSearchUrl(nome),
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
  if (!hasApiKey()) throw new Error('API_KEY_MISSING')

  const query = `${NICHE_QUERIES[niche] || niche} em ${cidade}`
  const nicheData = NICHES.find(n => n.value === niche) || NICHES[0]

  // Pedimos mais resultados para compensar os que não têm site
  const maxResultCount = Math.min(count * 2, 20)

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
      maxResultCount,
    }),
  })

  if (!res.ok) {
    const body = await res.json().catch(() => ({}))
    throw new Error(body.error?.message || `Erro ${res.status} na API do Google`)
  }

  const data = await res.json()
  const places = data.places || []

  if (places.length === 0) throw new Error('ZERO_RESULTS')

  return places
    .filter(p => p.businessStatus !== 'CLOSED_PERMANENTLY')
    .filter(p => p.websiteUri)          // apenas quem TEM site
    .slice(0, count)
    .map(p => mapPlaceToLead(p, nicheData))
    .sort((a, b) => b.score - a.score)
}
