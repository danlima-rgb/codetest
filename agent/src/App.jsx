import { useState, useCallback } from 'react'
import './index.css'
import SearchForm from './components/SearchForm.jsx'
import AgentProgress from './components/AgentProgress.jsx'
import ClientList from './components/ClientList.jsx'
import { generateLeads } from './utils/scoring.js'
import { NICHES } from './data/niches.js'

const VIEW = { FORM: 'form', LOADING: 'loading', RESULTS: 'results' }

export default function App() {
  const [view, setView] = useState(VIEW.FORM)
  const [searchParams, setSearchParams] = useState(null)
  const [leads, setLeads] = useState([])

  function handleSearch(params) {
    setSearchParams(params)
    setView(VIEW.LOADING)
  }

  const handleComplete = useCallback(() => {
    const nicheData = NICHES.find(n => n.label === searchParams.niche || n.value === searchParams.niche)
    const results = generateLeads(
      nicheData?.value || searchParams.niche,
      searchParams.cidade,
      searchParams.quantidade,
      Date.now(),
    )
    setLeads(results)
    setView(VIEW.RESULTS)
  }, [searchParams])

  function handleReset() {
    setView(VIEW.FORM)
    setSearchParams(null)
    setLeads([])
  }

  // Resolve human-readable niche label for progress display
  const nicheLabel = searchParams
    ? (NICHES.find(n => n.value === searchParams.niche)?.label ?? searchParams.niche)
    : ''

  return (
    <div className="min-h-screen bg-bg relative">
      {/* Background grid */}
      <div className="fixed inset-0 amber-grid pointer-events-none opacity-60" />
      {/* Top glow */}
      <div className="fixed top-0 left-0 right-0 h-64 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 600px 200px at 50% 0%, rgba(245,160,32,0.05) 0%, transparent 100%)' }}
      />

      {/* Nav bar */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-4 border-b border-border/50 max-w-5xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-accent flex items-center justify-center">
            <span className="text-black text-sm font-bold">A</span>
          </div>
          <span className="text-text-primary font-semibold text-sm">ProspecAgent</span>
          <span className="text-text-muted text-xs hidden sm:block">· para designers de sites</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-text-muted">
          <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
          Agente ativo
        </div>
      </nav>

      {/* Main content */}
      <main className="relative z-10 px-4 py-12 max-w-5xl mx-auto">
        {view === VIEW.FORM && (
          <SearchForm onSearch={handleSearch} loading={false} />
        )}

        {view === VIEW.LOADING && searchParams && (
          <div className="flex items-center justify-center min-h-[60vh]">
            <AgentProgress
              niche={nicheLabel}
              cidade={searchParams.cidade}
              onComplete={handleComplete}
            />
          </div>
        )}

        {view === VIEW.RESULTS && (
          <ClientList
            leads={leads}
            searchParams={{ ...searchParams, niche: nicheLabel }}
            onReset={handleReset}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border/50 py-6 text-center">
        <p className="text-text-muted text-xs">
          ProspecAgent · Agente de qualificação de leads para designers web ·{' '}
          <span className="text-accent">R$ 2.500 – R$ 10.000</span>
        </p>
      </footer>
    </div>
  )
}
