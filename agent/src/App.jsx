import { useState, useCallback, useEffect, useRef } from 'react'
import './index.css'
import SearchForm from './components/SearchForm.jsx'
import AgentProgress from './components/AgentProgress.jsx'
import ClientList from './components/ClientList.jsx'
import { generateLeads } from './utils/scoring.js'
import { fetchPlacesLeads, hasApiKey } from './services/places.js'
import { NICHES } from './data/niches.js'

const VIEW = { FORM: 'form', LOADING: 'loading', RESULTS: 'results' }

const ERROR_MESSAGES = {
  API_KEY_MISSING: null, // handled separately as warning
  ZERO_RESULTS: 'Nenhum negócio encontrado para esse nicho e cidade. Tente outra combinação.',
}

export default function App() {
  const [view, setView]               = useState(VIEW.FORM)
  const [searchParams, setSearchParams] = useState(null)
  const [leads, setLeads]             = useState([])
  const [apiDone, setApiDone]         = useState(false)
  const [animDone, setAnimDone]       = useState(false)
  const [error, setError]             = useState(null)
  const [usingMock, setUsingMock]     = useState(false)
  const leadsRef = useRef([])

  function handleSearch(params) {
    setSearchParams(params)
    setApiDone(false)
    setAnimDone(false)
    setError(null)
    setUsingMock(false)
    setView(VIEW.LOADING)

    const nicheData = NICHES.find(n => n.value === params.niche) || NICHES[0]

    const doFetch = hasApiKey()
      ? fetchPlacesLeads(params.niche, params.cidade, params.quantidade)
      : Promise.resolve(null)

    doFetch
      .then(results => {
        if (results === null) {
          // No API key — fall back to mock
          const mock = generateLeads(params.niche, params.cidade, params.quantidade, Date.now())
          leadsRef.current = mock
          setUsingMock(true)
        } else {
          leadsRef.current = results
        }
        setApiDone(true)
      })
      .catch(err => {
        if (err.message === 'ZERO_RESULTS') {
          setError(ERROR_MESSAGES.ZERO_RESULTS)
        } else {
          // Any other API error → fallback to mock with warning
          const mock = generateLeads(params.niche, params.cidade, params.quantidade, Date.now())
          leadsRef.current = mock
          setError(`API: ${err.message} — exibindo dados simulados.`)
          setUsingMock(true)
        }
        setApiDone(true)
      })
  }

  const handleAnimComplete = useCallback(() => {
    setAnimDone(true)
  }, [])

  useEffect(() => {
    if (apiDone && animDone) {
      if (error && leadsRef.current.length === 0) {
        setView(VIEW.FORM)
      } else {
        setLeads(leadsRef.current)
        setView(VIEW.RESULTS)
      }
    }
  }, [apiDone, animDone, error])

  function handleReset() {
    setView(VIEW.FORM)
    setSearchParams(null)
    setLeads([])
    setError(null)
    setUsingMock(false)
    leadsRef.current = []
  }

  const nicheLabel = searchParams
    ? (NICHES.find(n => n.value === searchParams.niche)?.label ?? searchParams.niche)
    : ''

  return (
    <div className="min-h-screen bg-bg relative">
      <div className="fixed inset-0 amber-grid pointer-events-none opacity-60" />
      <div className="fixed top-0 left-0 right-0 h-64 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 600px 200px at 50% 0%, rgba(245,160,32,0.05) 0%, transparent 100%)' }}
      />

      {/* Nav */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-4 border-b border-border/50 max-w-5xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-accent flex items-center justify-center">
            <span className="text-black text-sm font-bold">A</span>
          </div>
          <span className="text-text-primary font-semibold text-sm">ProspecAgent</span>
          <span className="text-text-muted text-xs hidden sm:block">· para designers de sites</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-text-muted">
          {hasApiKey() ? (
            <>
              <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
              Google Places conectado
            </>
          ) : (
            <>
              <span className="w-1.5 h-1.5 rounded-full bg-warning" />
              Modo demo
            </>
          )}
        </div>
      </nav>

      {/* API key warning banner */}
      {!hasApiKey() && view === VIEW.FORM && (
        <div className="relative z-10 max-w-5xl mx-auto px-4 pt-4">
          <div className="bg-warning/8 border border-warning/25 rounded-xl px-5 py-3.5 flex flex-col sm:flex-row sm:items-center gap-3">
            <div className="flex-1">
              <p className="text-warning text-xs font-semibold mb-0.5">API key não configurada — modo demonstração</p>
              <p className="text-text-muted text-xs">
                Crie <code className="bg-elevated px-1.5 py-0.5 rounded text-accent font-mono">.env.local</code> com{' '}
                <code className="bg-elevated px-1.5 py-0.5 rounded text-accent font-mono">VITE_GOOGLE_PLACES_API_KEY=sua_chave</code>{' '}
                para buscar negócios reais do Google Maps.
              </p>
            </div>
            <a
              href="https://console.cloud.google.com/apis/library/places-backend.googleapis.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost text-xs whitespace-nowrap"
            >
              Obter API key ↗
            </a>
          </div>
        </div>
      )}

      {/* Error banner */}
      {error && view !== VIEW.FORM && (
        <div className="relative z-10 max-w-5xl mx-auto px-4 pt-4">
          <div className="bg-warning/8 border border-warning/25 rounded-xl px-5 py-3 text-warning text-xs">
            ⚠️ {error}
          </div>
        </div>
      )}

      {/* Main */}
      <main className="relative z-10 px-4 py-12 max-w-5xl mx-auto">
        {view === VIEW.FORM && (
          <SearchForm onSearch={handleSearch} loading={false} />
        )}

        {view === VIEW.LOADING && searchParams && (
          <div className="flex items-center justify-center min-h-[60vh]">
            <AgentProgress
              niche={nicheLabel}
              cidade={searchParams.cidade}
              apiDone={apiDone}
              onComplete={handleAnimComplete}
            />
          </div>
        )}

        {view === VIEW.RESULTS && (
          <ClientList
            leads={leads}
            searchParams={{ ...searchParams, niche: nicheLabel }}
            isReal={hasApiKey() && !usingMock}
            onReset={handleReset}
          />
        )}
      </main>

      <footer className="relative z-10 border-t border-border/50 py-6 text-center">
        <p className="text-text-muted text-xs">
          ProspecAgent · Dados via{' '}
          <span className={hasApiKey() ? 'text-success' : 'text-warning'}>
            {hasApiKey() ? 'Google Places API' : 'modo demonstração'}
          </span>{' '}
          · <span className="text-accent">R$ 2.500 – R$ 10.000</span>
        </p>
      </footer>
    </div>
  )
}
