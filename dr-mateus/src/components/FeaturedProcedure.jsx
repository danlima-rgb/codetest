export default function FeaturedProcedure() {
  const benefits = [
    'Resultados naturais e harmoniosos',
    'Recuperação acompanhada de perto',
    'Técnica minimamente invasiva',
    'Adequado para mulheres e homens',
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <p className="text-xs uppercase tracking-widest text-muted font-medium mb-4">Procedimento em destaque</p>

        <div className="flex flex-col lg:flex-row gap-16 items-center">

          {/* Left — images collage */}
          <div className="flex-1 relative">
            <div className="flex gap-4">
              <div className="flex-1 rounded-3xl overflow-hidden aspect-[3/4] bg-card">
                <img
                  src="https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?w=400&h=550&auto=format&fit=crop&q=80"
                  alt="Rinoplastia resultado"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-4 flex-1">
                <div className="rounded-3xl overflow-hidden aspect-[3/2.5] bg-card">
                  <img
                    src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=400&h=280&auto=format&fit=crop&q=80"
                    alt="Procedimento estético"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-3xl overflow-hidden aspect-[3/2.5] bg-card">
                  <img
                    src="https://images.unsplash.com/photo-1588776814546-1ffbb0ab00e8?w=400&h=280&auto=format&fit=crop&q=80"
                    alt="Consulta médica"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Floating quote */}
            <div className="absolute -bottom-6 -right-4 lg:right-8 bg-dark text-cream rounded-2xl p-5 max-w-xs shadow-xl">
              <p className="font-serif text-sm italic leading-relaxed">
                "Cada procedimento é pensado para realçar sua beleza natural, preservando sua essência."
              </p>
              <div className="flex items-center gap-3 mt-4">
                <div className="w-8 h-8 rounded-full bg-gold/30 flex items-center justify-center">
                  <span className="text-gold text-xs font-semibold font-serif">MC</span>
                </div>
                <p className="text-cream/70 text-xs">Dr. Mateus Casotti</p>
              </div>
            </div>
          </div>

          {/* Right — content */}
          <div className="flex-1 lg:pl-8 pt-8 lg:pt-0">
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-dark leading-tight mb-6">
              Rinoplastia
              <br />
              <em className="not-italic text-gold">Estética</em>
            </h2>

            <p className="text-muted leading-relaxed mb-8 font-light">
              A rinoplastia é um dos procedimentos mais transformadores da cirurgia plástica.
              O Dr. Mateus Casotti utiliza técnicas modernas para remodelar o nariz de forma
              harmoniosa com os demais traços do rosto, garantindo um resultado belo e natural.
            </p>

            <ul className="space-y-3 mb-10">
              {benefits.map((b) => (
                <li key={b} className="flex items-center gap-3 text-sm text-dark">
                  <span className="w-5 h-5 rounded-full bg-gold/15 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {b}
                </li>
              ))}
            </ul>

            <a
              href="#contato"
              className="inline-flex items-center gap-3 bg-dark text-cream text-sm font-medium px-8 py-4 rounded-full hover:bg-dark/80 transition-colors"
            >
              Saiba mais
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
