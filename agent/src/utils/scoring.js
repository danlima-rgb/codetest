import {
  NOME_PREFIXOS, SOBRENOMES_BR, NOMES_BR, NICHES,
} from '../data/niches.js'

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function seededRand(seed) {
  let s = seed
  return () => {
    s = (s * 1664525 + 1013904223) & 0xffffffff
    return (s >>> 0) / 0xffffffff
  }
}

function generateBusinessName(niche, seed) {
  const r = seededRand(seed)
  const prefixos = NOME_PREFIXOS[niche] || ['Empresa']
  const tipo = prefixos[Math.floor(r() * prefixos.length)]
  const sobrenome = SOBRENOMES_BR[Math.floor(r() * SOBRENOMES_BR.length)]
  const nome = NOMES_BR[Math.floor(r() * NOMES_BR.length)]
  const patterns = [
    `${tipo} ${sobrenome}`,
    `${tipo} ${nome} ${sobrenome}`,
    `${tipo} ${sobrenome} & ${SOBRENOMES_BR[Math.floor(r() * SOBRENOMES_BR.length)]}`,
    `Dr. ${sobrenome} ${tipo}`,
  ]
  return patterns[Math.floor(r() * patterns.length)]
}

function generatePhone(seed) {
  const r = seededRand(seed + 1)
  const ddd = ['11', '21', '31', '41', '51', '61', '71', '81', '85', '91'][Math.floor(r() * 10)]
  const n = Math.floor(r() * 90000000) + 10000000
  return `(${ddd}) 9${String(n).slice(0, 4)}-${String(n).slice(4, 8)}`
}

function generateEmail(name) {
  const slug = name
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, '')
    .slice(0, 12)
  return `contato@${slug}.com.br`
}

function instagramSearchUrl(nome) {
  return `https://www.google.com/search?q=site%3Ainstagram.com+%22${encodeURIComponent(nome)}%22`
}

function googleMapsSearchUrl(nome, cidade) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${nome} ${cidade}`)}`
}

// Score para clientes com SITE EXISTENTE + INSTAGRAM ATIVO
// Foco em: quão urgente é o redesign e quão provável o investimento
export function calcScore(flags) {
  const {
    siteDesatualizado,  // tem site velho = precisa de redesign
    instagramAtivo,     // tem Instagram = investe em marketing
    googleMaps,         // está no Maps = negócio ativo
    porteScore,         // porte do negócio
    tempoMercado,       // anos no mercado
    avaliacoes,         // avaliações no Google
    nichoCompetitivo,
  } = flags

  let score = 0

  // Site desatualizado = necessidade clara de redesign
  if (siteDesatualizado) score += 30

  // Instagram ativo = já investe em marketing, tem orçamento
  if (instagramAtivo) score += 20

  // Presença no Google Maps = negócio estabelecido
  if (googleMaps) score += 10

  // Porte
  score += porteScore

  // Tempo de mercado (consolidado = mais orçamento)
  score += Math.min(10, Math.floor(tempoMercado / 2))

  // Avaliações
  if (avaliacoes >= 100) score += 8
  else if (avaliacoes >= 30) score += 5
  else if (avaliacoes >= 10) score += 2

  // Nicho premium (concorrência = disposição para pagar mais)
  if (nichoCompetitivo) score += 5

  return Math.min(100, Math.max(0, score))
}

export function estimateTicket(score, nicheData) {
  const [min, max] = nicheData.baseTicket
  const ratio = score / 100
  const low = Math.round((min + (max - min) * ratio * 0.6) / 500) * 500
  const high = Math.round((min + (max - min) * ratio) / 500) * 500
  return { low, high }
}

export function scoreLabel(score) {
  if (score >= 80) return { label: 'Altíssimo', color: 'hot', emoji: '🔥' }
  if (score >= 65) return { label: 'Alto',      color: 'warm', emoji: '⚡' }
  if (score >= 50) return { label: 'Médio',     color: 'cold', emoji: '💧' }
  return             { label: 'Baixo',           color: 'cold', emoji: '❄️' }
}

export function generateAbordagem(client) {
  const primeiroNome = client.nome.split(' ').find(p => p.length > 2) || client.nome.split(' ')[0]
  if (client.siteDesatualizado) {
    return `"Olá, ${primeiroNome}! Vi o perfil de vocês no Instagram e fui ao site — percebi que ele não reflete mais o nível do negócio. Com um site moderno integrado ao Instagram, vocês podem converter muito mais seguidores em clientes. Posso apresentar uma proposta em 5 minutos?"`
  }
  return `"${primeiroNome}, vi que vocês têm uma boa presença no Instagram. Um site mais profissional e rápido pode dobrar a conversão dos visitantes em clientes. Tenho cases no seu segmento — quando podemos conversar?"`
}

export function generateLeads(niche, cidade, count = 15, searchSeed = Date.now()) {
  const nicheData = NICHES.find(n => n.value === niche) || NICHES[0]
  const leads = []

  for (let i = 0; i < count; i++) {
    const seed = searchSeed + i * 7919
    const r = seededRand(seed)

    // Perfil alvo: TEM site (mesmo desatualizado) + TEM Instagram
    const semSite        = false                   // nunca sem site
    const siteDesatualizado = r() < 0.78           // maioria com site velho
    const instagramAtivo = true                    // sempre tem Instagram
    const googleMaps     = r() < 0.85             // maioria no Maps
    const tempoMercado   = randInt(2, 18)
    const avaliacoes     = googleMaps ? randInt(8, 320) : 0
    const porteOptions   = [
      { label: 'Pequeno', score: 8  },
      { label: 'Médio',   score: 18 },
      { label: 'Grande',  score: 28 },
    ]
    const porte = porteOptions[Math.floor(r() * 3)]

    const flags = {
      semSite,
      siteDesatualizado,
      instagramAtivo,
      googleMaps,
      porteScore: porte.score,
      tempoMercado,
      avaliacoes,
      nichoCompetitivo: nicheData.competitivo,
    }

    const nome   = generateBusinessName(niche, seed)
    const score  = calcScore(flags)
    const ticket = estimateTicket(score, nicheData)
    const meta   = scoreLabel(score)

    leads.push({
      id: seed,
      nome,
      niche: nicheData.label,
      nicheIcon: nicheData.icon,
      cidade,
      telefone: generatePhone(seed),
      email: generateEmail(nome),
      score,
      scoreMeta: meta,
      ticket,
      semSite: false,
      siteDesatualizado,
      siteUrl: null,
      instagramAtivo: true,
      instagramUrl: instagramSearchUrl(nome),
      googleMaps,
      googleMapsUrl: googleMapsSearchUrl(nome, cidade),
      tempoMercado,
      avaliacoes,
      porte: porte.label,
      abordagem: '',
      status: 'novo',
    })
  }

  for (const lead of leads) {
    lead.abordagem = generateAbordagem(lead)
  }

  return leads.sort((a, b) => b.score - a.score)
}

export function exportCSV(leads) {
  const headers = [
    'Nome', 'Cidade', 'Score', 'Qualificação',
    'Site Desatualizado', 'Link Site', 'Link Instagram', 'Google Maps',
    'Porte', 'Anos no Mercado', 'Avaliações',
    'Ticket Min (R$)', 'Ticket Max (R$)', 'Telefone', 'Email', 'Status',
  ]
  const rows = leads.map(l => [
    l.nome, l.cidade, l.score, l.scoreMeta.label,
    l.siteDesatualizado ? 'Sim' : 'Não',
    l.siteUrl || '',
    l.instagramUrl || '',
    l.googleMapsUrl || '',
    l.porte, l.tempoMercado, l.avaliacoes,
    l.ticket.low, l.ticket.high,
    l.telefone || '', l.email || '', l.status,
  ])
  const csv = [headers, ...rows].map(r => r.map(c => `"${c}"`).join(',')).join('\n')
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `leads-qualificados-${Date.now()}.csv`
  a.click()
  URL.revokeObjectURL(url)
}
