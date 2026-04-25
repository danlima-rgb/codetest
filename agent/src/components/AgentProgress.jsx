import { useState, useEffect } from 'react'

const STEPS = [
  { id: 1, text: 'Mapeando negócios na região...',        duration: 900  },
  { id: 2, text: 'Verificando presença no Google Maps..', duration: 700  },
  { id: 3, text: 'Analisando perfis no Instagram...',     duration: 800  },
  { id: 4, text: 'Detectando ausência de sites...',       duration: 700  },
  { id: 5, text: 'Avaliando porte e tempo de mercado...', duration: 600  },
  { id: 6, text: 'Calculando score de qualificação...',   duration: 800  },
  { id: 7, text: 'Gerando lista ranqueada de leads...',   duration: 500  },
]

export default function AgentProgress({ niche, cidade, onComplete }) {
  const [currentStep, setCurrentStep] = useState(0)
  const [completedSteps, setCompletedSteps] = useState([])

  useEffect(() => {
    let step = 0
    let delay = 200

    function runNext() {
      if (step >= STEPS.length) {
        setTimeout(onComplete, 300)
        return
      }
      setCurrentStep(step)
      const duration = STEPS[step].duration
      setTimeout(() => {
        setCompletedSteps(prev => [...prev, step])
        step++
        setTimeout(runNext, 120)
      }, duration)
    }

    const t = setTimeout(runNext, delay)
    return () => clearTimeout(t)
  }, [onComplete])

  const progress = Math.round(((completedSteps.length) / STEPS.length) * 100)

  return (
    <div className="w-full max-w-lg mx-auto animate-fade-in">
      <div className="bg-surface border border-border rounded-2xl p-8">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="relative w-10 h-10">
            <div className="absolute inset-0 rounded-full border-2 border-text-faint" />
            <div
              className="absolute inset-0 rounded-full border-2 border-accent transition-all duration-500"
              style={{
                clipPath: `inset(0 ${100 - progress}% 0 0)`,
              }}
            />
            <span className="absolute inset-0 flex items-center justify-center text-xs font-mono text-accent font-bold">
              {progress}%
            </span>
          </div>
          <div>
            <p className="text-text-primary text-sm font-medium">Agente trabalhando...</p>
            <p className="text-text-muted text-xs">{niche} · {cidade}</p>
          </div>
        </div>

        {/* Progress bar */}
        <div className="h-1 bg-elevated rounded-full mb-6 overflow-hidden">
          <div
            className="h-full bg-accent rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Steps */}
        <div className="space-y-3">
          {STEPS.map((step, idx) => {
            const done = completedSteps.includes(idx)
            const active = currentStep === idx && !done
            return (
              <div
                key={step.id}
                className={`flex items-center gap-3 transition-opacity duration-300 ${
                  idx > currentStep && !done ? 'opacity-25' : 'opacity-100'
                }`}
              >
                {/* Icon */}
                <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                  done   ? 'bg-success/20 border border-success/40' :
                  active ? 'bg-accent/20 border border-accent/40' :
                           'bg-elevated border border-border'
                }`}>
                  {done ? (
                    <svg className="w-3 h-3 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  ) : active ? (
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  ) : (
                    <span className="w-1.5 h-1.5 rounded-full bg-text-faint" />
                  )}
                </div>

                {/* Text */}
                <span className={`text-sm transition-colors duration-200 ${
                  done   ? 'text-text-muted line-through' :
                  active ? 'text-text-primary' :
                           'text-text-muted'
                }`}>
                  {step.text}
                </span>

                {/* Spinner for active */}
                {active && (
                  <span className="ml-auto w-3 h-3 border border-accent/40 border-t-accent rounded-full animate-spin flex-shrink-0" />
                )}
              </div>
            )
          })}
        </div>

        {/* Bottom note */}
        <p className="text-center text-xs text-text-muted mt-6">
          Analisando {niche.toLowerCase()} em {cidade}
        </p>
      </div>
    </div>
  )
}
