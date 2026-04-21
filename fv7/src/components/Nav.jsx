import { useState } from 'react'

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-content mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
            <span className="text-on-accent font-bold text-sm">F</span>
          </div>
          <span className="text-text-primary font-semibold text-base">FV7</span>
        </div>

        <a href="#preco" className="btn-primary hidden md:inline-flex py-2 px-5 text-sm">
          Quero começar
        </a>

        <button
          className="md:hidden text-text-muted"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18M3 12h18M3 18h18" />
            }
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-surface border-t border-border px-6 py-4">
          <a
            href="#preco"
            className="btn-primary w-full"
            onClick={() => setOpen(false)}
          >
            Quero começar
          </a>
        </div>
      )}
    </nav>
  )
}
