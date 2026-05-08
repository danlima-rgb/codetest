const reviews = [
  {
    name: 'Ana Paula S.',
    text: 'Atendimento excepcional! O Dr. Mateus é muito cuidadoso e transparente em todo o processo. O resultado ficou perfeito, muito natural. Super recomendo!',
    procedure: 'Rinoplastia',
    rating: 5,
  },
  {
    name: 'Fernanda R.',
    text: 'Profissional incrível, desde a primeira consulta até o pós-operatório. Me senti acolhida e segura. O resultado superou todas as minhas expectativas!',
    procedure: 'Mamoplastia',
    rating: 5,
  },
  {
    name: 'Mariana L.',
    text: 'Muito satisfeita com o resultado! O Dr. Mateus é extremamente competente e atencioso. A clínica é linda e o atendimento é de primeira qualidade.',
    procedure: 'Lipoaspiração',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 bg-dark" id="resultados">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-6">
          <div>
            <p className="text-xs uppercase tracking-widest text-gold/70 font-medium mb-3">Depoimentos</p>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-cream leading-tight">
              O que nossos
              <br />
              pacientes dizem
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="font-serif text-5xl font-bold text-cream">5,0</p>
              <div className="flex gap-0.5 justify-end mt-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-gold" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-cream/50 text-xs mt-1">Google · 12 avaliações</p>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(r.rating)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-gold" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-cream/80 text-sm leading-relaxed font-light flex-1 mb-6 italic">
                "{r.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 border-t border-white/10 pt-5">
                <div className="w-9 h-9 rounded-full bg-gold/20 flex items-center justify-center">
                  <span className="text-gold text-xs font-semibold">{r.name[0]}</span>
                </div>
                <div>
                  <p className="text-cream text-sm font-medium">{r.name}</p>
                  <p className="text-cream/40 text-xs">{r.procedure}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
