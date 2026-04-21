export default function VSL() {
  return (
    <section id="vsl" className="bg-bg py-24">
      <div className="max-w-copy mx-auto px-6">
        <p className="eyebrow mb-4">ASSISTA ANTES DE DECIDIR</p>
        <h2 className="section-headline text-text-primary mb-4">
          18 minutos que podem{' '}
          <span className="text-accent">mudar o seu próximo mês</span>
        </h2>
        <p className="text-text-muted text-body-lg mb-10">
          Assista ao vídeo completo antes de tomar qualquer decisão.
        </p>

        {/* Video card terminal style */}
        <div className="dark-card overflow-hidden mb-8">
          {/* Terminal header */}
          <div className="flex items-center gap-2 px-5 py-3 border-b border-border">
            <span className="w-3 h-3 rounded-full bg-elevated" />
            <span className="w-3 h-3 rounded-full bg-elevated" />
            <span className="w-3 h-3 rounded-full bg-elevated" />
            <span className="ml-3 font-mono text-xs text-text-muted tracking-widest">FV7.MÉTODO</span>
          </div>
          {/* Video placeholder */}
          <div className="relative aspect-video bg-elevated flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center shadow-cta cursor-pointer hover:scale-105 transition-transform">
                <svg className="w-7 h-7 text-on-accent ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <span className="text-text-muted text-sm">▶ Assistir agora</span>
            </div>
          </div>
        </div>

        <a href="#preco" className="btn-primary w-full text-base py-4">
          QUERO COMEÇAR EM 7 DIAS →
        </a>
      </div>
    </section>
  )
}
