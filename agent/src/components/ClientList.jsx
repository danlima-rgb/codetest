import { useState, useMemo } from 'react'
import ClientCard from './ClientCard.jsx'
import { exportCSV } from '../utils/scoring.js'

const SORT_OPTIONS = [
  { value: 'score',   label: 'Score (maior → menor)' },
  { value: 'ticket',  label: 'Ticket (maior → menor)' },
  { value: 'nome',    label: 'Nome (A → Z)' },
]

const STATUS_FILTERS = ['todos', 'novo', 'contatado', 'proposta', 'fechado']

export default function ClientList({ leads: initialLeads, searchParams, onReset }) {
  const [leads, setLeads] = useState(initialLeads)
  const [sort, setSort] = useState('score')
  const [filterStatus, setFilterStatus] = useState('todos')
  const [filterSemSite, setFilterSemSite] = useState(false)

  function handleStatusChange(id, status) {
    setLeads(prev => prev.map(l => l.id === id ? { ...l, status } : l))
  }

  const sorted = useMemo(() => {
    let list = [...leads]
    if (filterStatus !== 'todos') list = list.filter(l => l.status === filterStatus)
    if (filterSemSite) list = list.filter(l => l.semSite)

    if (sort === 'score')  list.sort((a, b) => b.score - a.score)
    if (sort === 'ticket') list.sort((a, b) => b.ticket.high - a.ticket.high)
    if (sort === 'nome')   list.sort((a, b) => a.nome.localeCompare(b.nome))
    return list
  }, [leads, sort, filterStatus, filterSemSite])

  const stats = useMemo(() => {
    const semSite   = leads.filter(l => l.semSite).length
    const hot       = leads.filter(l => l.score >= 80).length
    const avgTicket = Math.round(leads.reduce((s, l) => s + (l.ticket.low + l.ticket.high) / 2, 0) / leads.length)
    return { semSite, hot, avgTicket }
  }, [leads])

  return (
    <div className="w-full max-w-3xl mx-auto animate-fade-in">
      {/* Summary header */}
      <div className="flex items-start justify-between gap-4 mb-6">
        <div>
          <h2 className="text-text-primary font-semibold text-lg">
            {leads.length} leads encontrados
          </h2>
          <p className="text-text-muted text-xs mt-0.5">
            {searchParams.niche} · {searchParams.cidade}
          </p>
        </div>
        <button onClick={onReset} className="btn-ghost text-xs">
          ← Nova busca
        </button>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        {[
          { label: 'Sem site',       val: stats.semSite,  unit: 'leads', color: 'text-danger' },
          { label: 'Score 80+',      val: stats.hot,      unit: 'leads', color: 'text-accent' },
          { label: 'Ticket médio',   val: `R$ ${(stats.avgTicket/1000).toFixed(1)}k`, unit: '', color: 'text-success' },
        ].map(s => (
          <div key={s.label} className="bg-surface border border-border rounded-xl p-4 text-center">
            <p className={`text-xl font-bold ${s.color}`}>{s.val}</p>
            <p className="text-text-muted text-[11px] mt-0.5">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="flex flex-wrap items-center gap-2 mb-4">
        {/* Sort */}
        <select
          className="select-field max-w-[220px] text-xs py-2"
          value={sort}
          onChange={e => setSort(e.target.value)}
        >
          {SORT_OPTIONS.map(o => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </select>

        {/* Status filter */}
        <div className="flex gap-1 flex-wrap">
          {STATUS_FILTERS.map(s => (
            <button
              key={s}
              onClick={() => setFilterStatus(s)}
              className={`text-[11px] font-medium px-2.5 py-1.5 rounded-lg border transition-colors capitalize ${
                filterStatus === s
                  ? 'bg-accent text-on-accent border-accent'
                  : 'border-border text-text-muted hover:border-text-faint'
              }`}
            >
              {s}
            </button>
          ))}
        </div>

        {/* Sem site toggle */}
        <button
          onClick={() => setFilterSemSite(v => !v)}
          className={`text-[11px] font-medium px-2.5 py-1.5 rounded-lg border transition-colors ml-auto ${
            filterSemSite
              ? 'bg-danger/15 text-red-300 border-danger/40'
              : 'border-border text-text-muted hover:border-text-faint'
          }`}
        >
          ❌ Sem site only
        </button>

        {/* Export */}
        <button
          onClick={() => exportCSV(leads)}
          className="btn-ghost text-[11px] px-3 py-1.5"
        >
          ⬇ Exportar CSV
        </button>
      </div>

      {/* Results count */}
      <p className="text-text-muted text-xs mb-3">
        Exibindo {sorted.length} de {leads.length} leads
      </p>

      {/* Cards */}
      <div className="space-y-3">
        {sorted.length === 0 ? (
          <div className="text-center py-16 text-text-muted">
            <p className="text-2xl mb-2">🔍</p>
            <p className="text-sm">Nenhum lead encontrado com esses filtros.</p>
          </div>
        ) : (
          sorted.map((client, idx) => (
            <div key={client.id} className="animate-slide-up" style={{ animationDelay: `${idx * 40}ms` }}>
              <ClientCard
                client={client}
                rank={idx}
                onStatusChange={handleStatusChange}
              />
            </div>
          ))
        )}
      </div>

      {sorted.length > 0 && (
        <div className="mt-8 text-center">
          <button
            onClick={() => exportCSV(leads)}
            className="btn-primary text-sm"
          >
            ⬇ Exportar lista completa (CSV)
          </button>
          <p className="text-text-muted text-xs mt-3">
            Lista gerada pelo Agente de Prospecção IA · {new Date().toLocaleDateString('pt-BR')}
          </p>
        </div>
      )}
    </div>
  )
}
