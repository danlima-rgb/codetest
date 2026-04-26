import { useState, useCallback, useRef } from 'react'
import './index.css'
import SearchForm from './components/SearchForm.jsx'
import AgentProgress from './components/AgentProgress.jsx'
import ClientList from './components/ClientList.jsx'
import { generateLeads } from './utils/scoring.js'
import { fetchPlacesLeads, hasApiKey } from './services/places.js'
import { NICHES } from './data/niches.js'

const VIEW = { FORM: 'form', LOADING: 'loading', RESULTS: 'results' }

export default function App() {
  const [view, setView]                 = useState(VIEW.FORM)
  const [searchParams, setSearchParams] = useState(null)
  const [leads, setLeads]               = useState([])
  const [apiDone, setApiDone]           = useState(false)
  const [error, setError]               = useState(null)
  const [usingMock, setUsingMock]       = useState(false)
  const leadsRef = useRef([])

  function handleSearch(params) {
    setSearchParams(params)
    setApiDone(false)
    setError(null)
    setUsingMock(false)
    leadsRef.current = []
    setView(VIEW.LOADING)

    const doFetch = hasApiKey()
      ? fetchPlacesLeads(params.niche, params.cidade, params.quantidade)
      : Promise.resolve(null)

    doFetch
      .then(results => {
        if (results === null) {
          leadsRef.current = generateLeads(params.niche, params.cidade, params.quantidade, Date.now())
          setUsingMock(true)
        } else {
          leadsRef.current = results
        }
        setApiDone(true)
      })
      .catch(err => {
        if (err.message === 'ZERO_RESULTS') {
          setError('Nenhum negócio encontrado. Tente outra cidade ou nicho.')
          leadsRef.current = []
        } else {
          leadsRef.current = generateLeads(params.niche, params.cidade, params.quantidade, Date.now())
          setError(`Erro na API: ${err.message} — exibindo dados simulados.`)
          setUsingMock(true)
        }
        setApiDone(true)
      })
  }

  // Called by AgentProgress when animation + API are both done
  const handleComplete = useCallback(() => {
    if (leadsRef.current.length === 0) {
      setView(VIEW.FORM)
    } else {
      setLeads(leadsRef.current)
      setView(VIEW.RESULTS)
    }
  }, [])

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

      {/* Error banner */}
      {error && view === VIEW.FORM && (
        <div className="relative z-10 max-w-5xl mx-auto px-4 pt-4">
          <div className="bg-danger/8 border border-danger/25 rounded-xl px-5 py-3 text-danger text-xs">
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
              onComplete={handleComplete}
            />
          </div>
        )}

        {view === VIEW.RESULTS && (
          <>
            {error && (
              <div className="max-w-3xl mx-auto mb-4">
                <div className="bg-warning/8 border border-warning/25 rounded-xl px-5 py-3 text-warning text-xs">
                  ⚠️ {error}
                </div>
              </div>
            )}
            <ClientList
              leads={leads}
              searchParams={{ ...searchParams, niche: nicheLabel }}
              isReal={hasApiKey() && !usingMock}
              onReset={handleReset}
            />
          </>
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
