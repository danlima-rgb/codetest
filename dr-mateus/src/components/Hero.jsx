const quickServices = [
  {
    label: 'Rinoplastia',
    count: 'Nariz',
    img: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=120&h=120&auto=format&fit=crop&q=80',
  },
  {
    label: 'Lipoaspiração',
    count: 'Corpo',
    img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=120&h=120&auto=format&fit=crop&q=80',
  },
  {
    label: 'Mamoplastia',
    count: 'Busto',
    img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=120&h=120&auto=format&fit=crop&q=80',
  },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-cream overflow-hidden" id="sobre">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-16 flex flex-col lg:flex-row items-start gap-12 lg:gap-0">

        {/* Left — Text */}
        <div className="flex-1 flex flex-col justify-center pt-8 lg:pt-20">
          <p className="text-xs uppercase tracking-widest2 text-muted font-medium mb-6">
            Vitória · Espírito Santo
          </p>

          <h1 className="font-serif text-5xl sm:text-6xl xl:text-7xl font-bold text-dark leading-[1.05] tracking-tight mb-8">
            Beleza com
            <br />
            <em className="not-italic text-gold">precisão</em>
            <br />
            e cuidado
          </h1>

          <p className="text-muted text-base lg:text-lg leading-relaxed max-w-md mb-10 font-light">
            Cirurgião plástico especializado em procedimentos estéticos com resultados naturais
            e atendimento completamente individualizado.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <a
              href="#contato"
              className="bg-dark text-cream text-sm font-medium px-8 py-4 rounded-full hover:bg-dark/80 transition-colors"
            >
              Agendar Consulta
            </a>
            <a
              href="#procedimentos"
              className="border border-dark/20 text-dark text-sm font-medium px-8 py-4 rounded-full hover:border-dark/50 transition-colors"
            >
              Ver Procedimentos
            </a>
          </div>

          {/* Stats row */}
          <div className="flex gap-10 border-t border-dark/10 pt-8">
            <div>
              <p className="font-serif text-3xl font-bold text-dark">5,0</p>
              <div className="flex gap-0.5 mt-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-3 h-3 fill-gold" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-xs text-muted">12 avaliações</p>
            </div>
            <div>
              <p className="font-serif text-3xl font-bold text-dark">10+</p>
              <p className="text-xs text-muted mt-1">Anos de experiência</p>
            </div>
            <div>
              <p className="font-serif text-3xl font-bold text-dark">100%</p>
              <p className="text-xs text-muted mt-1">Atendimento individual</p>
            </div>
          </div>
        </div>

        {/* Right — Doctor photo */}
        <div className="relative flex-1 flex flex-col items-end">
          <div className="relative w-full max-w-sm lg:max-w-md xl:max-w-lg">
            {/* Main photo card */}
            <div className="relative rounded-3xl overflow-hidden bg-card aspect-[3/4] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&h=800&auto=format&fit=crop&q=80&crop=top"
                alt="Dr. Mateus Casotti - Cirurgião Plástico"
                className="w-full h-full object-cover object-top"
              />
              {/* Gradient overlay bottom */}
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-dark/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="font-serif text-cream text-xl font-semibold">Dr. Mateus Casotti</p>
                <p className="text-cream/80 text-xs tracking-widest uppercase mt-1">Cirurgião Plástico · CRM-ES</p>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -left-6 top-10 bg-white rounded-2xl shadow-lg px-5 py-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold text-dark">Verificado Google</p>
                <p className="text-xs text-muted">Profissional certificado</p>
              </div>
            </div>
          </div>

          {/* Quick services row */}
          <div className="mt-6 w-full max-w-sm lg:max-w-md xl:max-w-lg">
            <p className="text-xs text-muted uppercase tracking-widest mb-3">Nossos serviços</p>
            <div className="flex gap-3">
              {quickServices.map((s) => (
                <a
                  key={s.label}
                  href="#procedimentos"
                  className="flex-1 bg-white rounded-2xl p-3 flex items-center gap-3 hover:shadow-md transition-shadow group"
                >
                  <img
                    src={s.img}
                    alt={s.label}
                    className="w-10 h-10 rounded-xl object-cover"
                  />
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-dark truncate">{s.label}</p>
                    <p className="text-xs text-muted">{s.count}</p>
                  </div>
                  <svg className="w-3 h-3 text-muted ml-auto flex-shrink-0 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
