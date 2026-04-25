import { useState, useEffect, useRef } from 'react'

const STEPS = [
  { id: 1, text: 'Conectando ao Google Places...',          ms: 600  },
  { id: 2, text: 'Buscando negócios na região...',          ms: 800  },
  { id: 3, text: 'Coletando telefones e endereços...',      ms: 700  },
  { id: 4, text: 'Verificando presença de sites...',        ms: 700  },
  { id: 5, text: 'Analisando avaliações e porte...',        ms: 600  },
  { id: 6, text: 'Calculando score de qualificação...',     ms: 500  },
  { id: 7, text: 'Ordenando leads por potencial...',        ms: 400  },
]

// apiDone: boolean controlled by parent (true when fetch resolves)
// onComplete: called when animation is done AND apiDone is true
export default function AgentProgress({ niche, cidade, apiDone, onComplete }) {
  const [currentStep, setCurrentStep] = useState(0)
  const [completedSteps, setCompletedSteps] = useState([])
  const [waitingApi, setWaitingApi] = useState(false)
  const animDone = useRef(false)

  useEffect(() => {
    let step = 0
    let cancelled = false

    function runNext() {
      if (cancelled) return
      if (step >= STEPS.length) {
        animDone.current = true
        setWaitingApi(true)
        return
      }
      setCurrentStep(step)
      setTimeout(() => {
        if (cancelled) return
        setCompletedSteps(prev => [...prev, step])
        step++
        setTimeout(runNext, 80)
      }, STEPS[step].ms)
    }

    setTimeout(runNext, 200)
    return () => { cancelled = true }
  }, [])

  // When api resolves after animation is done, complete
  useEffect(() => {
    if (apiDone && animDone.current) {
      setTimeout(onComplete, 300)
    }
  }, [apiDone, onComplete])

  const progress = Math.round((completedSteps.length / STEPS.length) * 100)

  return (
    <div className="w-full max-w-lg mx-auto animate-fade-in">
      <div className="bg-surface border border-border rounded-2xl p-8">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="relative w-10 h-10 flex-shrink-0">
            <svg className="w-10 h-10 rotate-[-90deg]" viewBox="0 0 40 40">
              <circle cx="20" cy="20" r="16" fill="none" stroke="#252525" strokeWidth="3" />
              <circle
                cx="20" cy="20" r="16"
                fill="none" stroke="#F5A020" strokeWidth="3"
                strokeDasharray={`${2 * Math.PI * 16}`}
                strokeDashoffset={`${2 * Math.PI * 16 * (1 - progress / 100)}`}
                strokeLinecap="round"
                style={{ transition: 'stroke-dashoffset 0.5s ease-out' }}
              />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-[10px] font-mono text-accent font-bold">
              {progress}%
            </span>
          </div>
          <div>
            <p className="text-text-primary text-sm font-medium">
              {waitingApi && !apiDone ? 'Aguardando resposta da API...' : 'Agente trabalhando...'}
            </p>
            <p className="text-text-muted text-xs">{niche} · {cidade}</p>
          </div>
        </div>

        {/* Progress bar */}
        <div className="h-0.5 bg-elevated rounded-full mb-6 overflow-hidden">
          <div
            className="h-full bg-accent rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Steps */}
        <div className="space-y-2.5">
          {STEPS.map((step, idx) => {
            const done   = completedSteps.includes(idx)
            const active = currentStep === idx && !done
            return (
              <div
                key={step.id}
                className={`flex items-center gap-3 transition-opacity duration-300 ${
                  idx > currentStep && !done ? 'opacity-20' : 'opacity-100'
                }`}
              >
                <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                  done   ? 'bg-success/20 border border-success/40' :
                  active ? 'bg-accent/20 border border-accent/40' :
                           'bg-elevated border border-border'
                }`}>
                  {done ? (
                    <svg className="w-2.5 h-2.5 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  ) : active ? (
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  ) : (
                    <span className="w-1 h-1 rounded-full bg-text-faint" />
                  )}
                </div>
                <span className={`text-xs transition-colors ${
                  done   ? 'text-text-muted line-through' :
                  active ? 'text-text-primary' :
                           'text-text-muted'
                }`}>
                  {step.text}
                </span>
                {active && (
                  <span className="ml-auto w-3 h-3 border border-accent/40 border-t-accent rounded-full animate-spin flex-shrink-0" />
                )}
              </div>
            )
          })}
        </div>

        {waitingApi && !apiDone && (
          <div className="mt-5 flex items-center justify-center gap-2 text-xs text-text-muted">
            <span className="w-3 h-3 border border-accent/40 border-t-accent rounded-full animate-spin" />
            Buscando dados reais no Google Places...
          </div>
        )}
      </div>
    </div>
  )
}
