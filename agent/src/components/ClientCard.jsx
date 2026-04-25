import { useState } from 'react'

function ScoreRing({ score, color }) {
  const radius = 30
  const circ = 2 * Math.PI * radius
  const offset = circ - (score / 100) * circ
  const stroke = color === 'hot' ? '#EF4444' : color === 'warm' ? '#F5A020' : '#3B82F6'

  return (
    <svg width="72" height="72" viewBox="0 0 72 72" className="rotate-[-90deg]">
      <circle cx="36" cy="36" r={radius} fill="none" stroke="#252525" strokeWidth="5" />
      <circle
        cx="36" cy="36" r={radius}
        fill="none" stroke={stroke} strokeWidth="5"
        strokeDasharray={circ}
        strokeDashoffset={offset}
        strokeLinecap="round"
        style={{ transition: 'stroke-dashoffset 1s ease-out' }}
      />
    </svg>
  )
}

const STATUS_CONFIG = {
  novo:      { label: 'Novo',      bg: 'bg-elevated',            text: 'text-text-muted',  dot: 'bg-text-muted'  },
  contatado: { label: 'Contatado', bg: 'bg-info/10',             text: 'text-info',        dot: 'bg-info'        },
  proposta:  { label: 'Proposta',  bg: 'bg-warning/10',          text: 'text-warning',     dot: 'bg-warning'     },
  fechado:   { label: 'Fechado',   bg: 'bg-success/10',          text: 'text-success',     dot: 'bg-success'     },
}

const STATUS_ORDER = ['novo', 'contatado', 'proposta', 'fechado']

export default function ClientCard({ client, onStatusChange, rank }) {
  const [expanded, setExpanded] = useState(false)
  const { scoreMeta } = client
  const st = STATUS_CONFIG[client.status]

  function nextStatus() {
    const idx = STATUS_ORDER.indexOf(client.status)
    const next = STATUS_ORDER[Math.min(idx + 1, STATUS_ORDER.length - 1)]
    onStatusChange(client.id, next)
  }

  return (
    <div className={`bg-surface border border-border rounded-xl card-hover transition-all duration-300 ${
      expanded ? 'border-accent/30' : ''
    }`}
      style={{ animationDelay: `${rank * 60}ms` }}
    >
      <div className="p-5">
        <div className="flex items-start gap-4">
          {/* Rank + Score ring */}
          <div className="flex-shrink-0 flex flex-col items-center gap-1">
            <span className="text-[10px] font-mono text-text-muted">#{rank + 1}</span>
            <div className="relative">
              <ScoreRing score={client.score} color={scoreMeta.color} />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className={`text-lg font-bold leading-none ${
                  scoreMeta.color === 'hot' ? 'text-danger' :
                  scoreMeta.color === 'warm' ? 'text-accent' : 'text-info'
                }`}>{client.score}</span>
                <span className="text-[9px] text-text-muted">score</span>
              </div>
            </div>
          </div>

          {/* Main info */}
          <div className="flex-1 min-w-0">
            {/* Name + badge */}
            <div className="flex items-start justify-between gap-2 mb-1">
              <h3 className="text-text-primary font-semibold text-sm leading-snug truncate">
                {client.nicheIcon} {client.nome}
              </h3>
              <span className={`badge-${scoreMeta.color} text-[10px] font-medium px-2 py-0.5 rounded-full flex-shrink-0`}>
                {scoreMeta.emoji} {scoreMeta.label}
              </span>
            </div>

            {/* Location + niche */}
            <p className="text-text-muted text-xs mb-3">
              {client.niche} · {client.cidade} · {client.porte}
            </p>

            {/* Signals */}
            <div className="flex flex-wrap gap-1.5 mb-3">
              {client.semSite && (
                <span className="text-[11px] px-2 py-0.5 rounded-md bg-danger/10 border border-danger/25 text-red-300">
                  ❌ Sem site
                </span>
              )}
              {client.siteDesatualizado && !client.semSite && (
                <span className="text-[11px] px-2 py-0.5 rounded-md bg-warning/10 border border-warning/25 text-yellow-300">
                  ⚠️ Site desatualizado
                </span>
              )}
              {!client.semSite && !client.siteDesatualizado && (
                <span className="text-[11px] px-2 py-0.5 rounded-md bg-success/10 border border-success/25 text-green-300">
                  ✅ Tem site
                </span>
              )}
              {client.instagramAtivo && (
                <span className="text-[11px] px-2 py-0.5 rounded-md bg-purple-500/10 border border-purple-500/25 text-purple-300">
                  📱 Instagram ativo
                </span>
              )}
              {client.googleMaps && (
                <span className="text-[11px] px-2 py-0.5 rounded-md bg-blue-500/10 border border-blue-500/25 text-blue-300">
                  📍 Google Maps ({client.avaliacoes} av.)
                </span>
              )}
            </div>

            {/* Ticket + Status */}
            <div className="flex items-center justify-between gap-3">
              <div>
                <span className="text-[10px] text-text-muted uppercase tracking-wider">Ticket estimado</span>
                <p className="text-accent font-bold text-sm">
                  R$ {client.ticket.low.toLocaleString('pt-BR')} — R$ {client.ticket.high.toLocaleString('pt-BR')}
                </p>
              </div>

              <div className="flex items-center gap-2">
                {/* Status badge */}
                <span className={`text-[11px] font-medium px-2.5 py-1 rounded-full flex items-center gap-1.5 ${st.bg} ${st.text}`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${st.dot}`} />
                  {st.label}
                </span>

                {/* Expand toggle */}
                <button
                  onClick={() => setExpanded(v => !v)}
                  className="btn-ghost text-[11px] px-2 py-1"
                >
                  {expanded ? '▲ Menos' : '▼ Mais'}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Expanded section */}
        {expanded && (
          <div className="mt-5 pt-5 border-t border-border space-y-4 animate-slide-up">
            {/* Score breakdown */}
            <div>
              <p className="text-[11px] uppercase tracking-wider text-text-muted font-medium mb-2">
                Análise de qualificação
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {[
                  { label: 'Ausência de site', val: client.semSite ? 35 : client.siteDesatualizado ? 20 : 0, max: 35 },
                  { label: 'Presença digital', val: (client.instagramAtivo ? 12 : 0) + (client.googleMaps ? 8 : 0), max: 20 },
                  { label: 'Porte do negócio', val: client.porte === 'Grande' ? 28 : client.porte === 'Médio' ? 18 : 8, max: 28 },
                  { label: 'Tempo de mercado', val: Math.min(10, Math.floor(client.tempoMercado / 2)), max: 10 },
                  { label: 'Avaliações', val: client.avaliacoes >= 100 ? 8 : client.avaliacoes >= 30 ? 5 : client.avaliacoes >= 10 ? 2 : 0, max: 8 },
                  { label: 'Nicho premium', val: 5, max: 5 },
                ].map(item => (
                  <div key={item.label} className="bg-elevated rounded-lg p-2.5">
                    <p className="text-[10px] text-text-muted mb-1">{item.label}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex-1 h-1 bg-border rounded-full mr-2 overflow-hidden">
                        <div
                          className="h-full bg-accent rounded-full"
                          style={{ width: `${(item.val / item.max) * 100}%` }}
                        />
                      </div>
                      <span className="text-[11px] font-mono text-accent">{item.val}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact info */}
            <div>
              <p className="text-[11px] uppercase tracking-wider text-text-muted font-medium mb-2">Contato</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div className="bg-elevated rounded-lg p-3">
                  <p className="text-[10px] text-text-muted mb-0.5">Telefone</p>
                  <p className="text-sm text-text-primary font-mono">{client.telefone}</p>
                </div>
                <div className="bg-elevated rounded-lg p-3">
                  <p className="text-[10px] text-text-muted mb-0.5">E-mail</p>
                  <p className="text-sm text-text-primary font-mono truncate">{client.email}</p>
                </div>
              </div>
            </div>

            {/* Script de abordagem */}
            <div>
              <p className="text-[11px] uppercase tracking-wider text-text-muted font-medium mb-2">
                Script de abordagem sugerido
              </p>
              <div className="bg-elevated rounded-lg p-3 border-l-2 border-accent">
                <p className="text-xs text-text-primary leading-relaxed italic">{client.abordagem}</p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-2 pt-1">
              {STATUS_ORDER.map(s => (
                <button
                  key={s}
                  onClick={() => onStatusChange(client.id, s)}
                  className={`flex-1 text-[11px] font-medium py-2 rounded-lg border transition-colors ${
                    client.status === s
                      ? `${STATUS_CONFIG[s].bg} ${STATUS_CONFIG[s].text} border-current`
                      : 'border-border text-text-muted hover:border-text-faint'
                  }`}
                >
                  {STATUS_CONFIG[s].label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
