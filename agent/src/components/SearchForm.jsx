import { useState } from 'react'
import { NICHES, CIDADES_BR } from '../data/niches.js'

export default function SearchForm({ onSearch, loading }) {
  const [niche, setNiche] = useState('')
  const [cidade, setCidade] = useState('')
  const [cidadeCustom, setCidadeCustom] = useState('')
  const [quantidade, setQuantidade] = useState('15')

  const cidadeFinal = cidade === '__custom__' ? cidadeCustom : cidade

  function handleSubmit(e) {
    e.preventDefault()
    if (!niche || !cidadeFinal.trim()) return
    onSearch({ niche, cidade: cidadeFinal.trim(), quantidade: Number(quantidade) })
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 bg-surface border border-border rounded-full px-4 py-1.5 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          <span className="text-[11px] font-medium tracking-widest uppercase text-text-muted">
            Agente de Prospecção IA
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-light tracking-tight text-text-primary mb-3">
          Encontre clientes prontos para{' '}
          <span className="text-accent font-semibold">comprar um site</span>
        </h1>
        <p className="text-text-muted text-sm leading-relaxed max-w-md mx-auto">
          O agente analisa presença digital, porte e potencial de investimento
          para gerar uma lista ranqueada de leads qualificados.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="bg-surface border border-border rounded-2xl p-6 space-y-5">
        {/* Niche */}
        <div>
          <label className="block text-xs font-medium text-text-muted uppercase tracking-wider mb-2">
            Nicho / Segmento
          </label>
          <select
            className="select-field"
            value={niche}
            onChange={e => setNiche(e.target.value)}
            required
          >
            <option value="" disabled>Selecione o segmento...</option>
            {NICHES.map(n => (
              <option key={n.value} value={n.value}>
                {n.icon}  {n.label}
              </option>
            ))}
          </select>
        </div>

        {/* Cidade */}
        <div>
          <label className="block text-xs font-medium text-text-muted uppercase tracking-wider mb-2">
            Cidade / Região
          </label>
          <select
            className="select-field"
            value={cidade}
            onChange={e => setCidade(e.target.value)}
            required
          >
            <option value="" disabled>Selecione a cidade...</option>
            {CIDADES_BR.map(c => (
              <option key={c} value={c}>{c}</option>
            ))}
            <option value="__custom__">✏️  Outra cidade...</option>
          </select>
          {cidade === '__custom__' && (
            <input
              className="input-field mt-2"
              placeholder="Ex: Londrina, PR"
              value={cidadeCustom}
              onChange={e => setCidadeCustom(e.target.value)}
              required
            />
          )}
        </div>

        {/* Quantidade */}
        <div>
          <label className="block text-xs font-medium text-text-muted uppercase tracking-wider mb-2">
            Quantidade de leads
          </label>
          <div className="flex gap-2">
            {['10', '15', '20', '30'].map(q => (
              <button
                key={q}
                type="button"
                onClick={() => setQuantidade(q)}
                className={`flex-1 py-2 rounded-lg text-sm font-medium border transition-colors ${
                  quantidade === q
                    ? 'bg-accent text-on-accent border-accent'
                    : 'bg-transparent text-text-muted border-border hover:border-text-faint'
                }`}
              >
                {q}
              </button>
            ))}
          </div>
        </div>

        {/* Info chips */}
        <div className="flex flex-wrap gap-2 pt-1">
          {[
            'Sem site detectado',
            'Site desatualizado',
            'Presença no Instagram',
            'Google Maps ativo',
            'Porte do negócio',
            'Tempo de mercado',
          ].map(tag => (
            <span
              key={tag}
              className="text-[11px] px-2.5 py-1 rounded-full bg-elevated border border-border text-text-muted"
            >
              ✓ {tag}
            </span>
          ))}
        </div>

        <button
          type="submit"
          disabled={loading || !niche || !cidadeFinal.trim()}
          className="btn-primary w-full text-sm py-3.5"
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
              Analisando mercado...
            </span>
          ) : (
            'Buscar Clientes Qualificados →'
          )}
        </button>
      </form>

      {/* Value range */}
      <p className="text-center text-xs text-text-muted mt-4">
        Faixa de projetos analisada:{' '}
        <span className="text-accent font-medium">R$ 2.500 — R$ 10.000</span>
      </p>
    </div>
  )
}
