import {
  NOME_PREFIXOS, SOBRENOMES_BR, NOMES_BR, NICHES,
} from '../data/niches.js'

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

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

function generateEmail(name, seed) {
  const r = seededRand(seed + 2)
  const slug = name
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, '')
    .slice(0, 18)
  const domains = ['gmail.com', 'hotmail.com', 'outlook.com', slug.slice(0, 10) + '.com.br']
  return `contato@${slug.slice(0, 12)}.com.br`
}

function calcScore(flags) {
  const {
    semSite,        // 0 or 1
    siteDesatualizado, // 0 or 1
    instagramAtivo, // 0 or 1
    googleMaps,     // 0 or 1
    porteScore,     // 0-30
    tempoMercado,   // anos (1-20)
    avaliacoes,     // count
    nichoCompetitivo,
  } = flags

  let score = 0

  // Ausência de site (maior peso)
  if (semSite) score += 35
  else if (siteDesatualizado) score += 20

  // Presença digital indica orçamento para marketing
  if (instagramAtivo) score += 12
  if (googleMaps) score += 8

  // Porte
  score += porteScore

  // Tempo de mercado (negócio consolidado = mais dinheiro)
  score += Math.min(10, Math.floor(tempoMercado / 2))

  // Avaliações (reputação = faturamento)
  if (avaliacoes >= 100) score += 8
  else if (avaliacoes >= 30) score += 5
  else if (avaliacoes >= 10) score += 2

  // Nicho premium
  if (nichoCompetitivo) score += 5

  return Math.min(100, Math.max(0, score))
}

function estimateTicket(score, nicheData) {
  const [min, max] = nicheData.baseTicket
  const ratio = score / 100
  const low = Math.round((min + (max - min) * ratio * 0.6) / 500) * 500
  const high = Math.round((min + (max - min) * ratio) / 500) * 500
  return { low, high }
}

function scoreLabel(score) {
  if (score >= 80) return { label: 'Altíssimo', color: 'hot', emoji: '🔥' }
  if (score >= 65) return { label: 'Alto',      color: 'warm', emoji: '⚡' }
  if (score >= 50) return { label: 'Médio',     color: 'cold', emoji: '💧' }
  return             { label: 'Baixo',           color: 'cold', emoji: '❄️' }
}

function generateAbordagem(client) {
  const nome = client.nome.split(' ')[0]
  if (client.semSite) {
    return `"Olá, ${nome}! Vi seu negócio no Google e notei que você ainda não tem um site. Tenho ajudado clientes na mesma situação a atrair 3x mais clientes online. Posso apresentar uma proposta rápida?"`
  }
  if (client.siteDesatualizado) {
    return `"${nome}, seu site atual não reflete a qualidade do seu trabalho. Com um site moderno, você pode aumentar sua captação de leads em 60%. Quando podemos conversar?"`
  }
  return `"${nome}, encontrei sua empresa e acredito que posso ajudá-lo a converter mais visitantes em clientes através de um site otimizado. Tenho disponibilidade para uma call de 20min?"`
}

export function generateLeads(niche, cidade, count = 15, searchSeed = Date.now()) {
  const nicheData = NICHES.find(n => n.value === niche) || NICHES[0]
  const leads = []

  for (let i = 0; i < count; i++) {
    const seed = searchSeed + i * 7919

    const r = seededRand(seed)

    const semSite        = r() < 0.52
    const siteDesatualizado = !semSite && r() < 0.45
    const instagramAtivo = r() < 0.72
    const googleMaps     = r() < 0.65
    const tempoMercado   = randInt(1, 18)
    const avaliacoes     = googleMaps ? randInt(3, 280) : 0
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

    const score = calcScore(flags)
    const ticket = estimateTicket(score, nicheData)
    const nome   = generateBusinessName(niche, seed)
    const meta   = scoreLabel(score)

    leads.push({
      id: seed,
      nome,
      niche: nicheData.label,
      nicheIcon: nicheData.icon,
      cidade,
      telefone: generatePhone(seed),
      email: generateEmail(nome, seed),
      score,
      scoreMeta: meta,
      ticket,
      semSite,
      siteDesatualizado,
      instagramAtivo,
      googleMaps,
      tempoMercado,
      avaliacoes,
      porte: porte.label,
      abordagem: '',
      status: 'novo', // 'novo' | 'contatado' | 'proposta' | 'fechado'
    })
  }

  // Assign abordagem after object is created
  for (const lead of leads) {
    lead.abordagem = generateAbordagem(lead)
  }

  return leads.sort((a, b) => b.score - a.score)
}

export function exportCSV(leads) {
  const headers = [
    'Nome', 'Cidade', 'Score', 'Qualificação', 'Sem Site', 'Site Desatualizado',
    'Instagram Ativo', 'Google Maps', 'Porte', 'Anos no Mercado', 'Avaliações',
    'Ticket Min (R$)', 'Ticket Max (R$)', 'Telefone', 'Email', 'Status',
  ]
  const rows = leads.map(l => [
    l.nome, l.cidade, l.score, l.scoreMeta.label,
    l.semSite ? 'Sim' : 'Não',
    l.siteDesatualizado ? 'Sim' : 'Não',
    l.instagramAtivo ? 'Sim' : 'Não',
    l.googleMaps ? 'Sim' : 'Não',
    l.porte, l.tempoMercado, l.avaliacoes,
    l.ticket.low, l.ticket.high,
    l.telefone, l.email, l.status,
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
