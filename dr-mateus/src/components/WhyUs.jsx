const reasons = [
  {
    num: '01',
    title: 'Equipe Qualificada',
    desc: 'Especialista com mais de 10 anos de experiência em cirurgia plástica estética, formado e certificado pelos melhores órgãos da área.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Localização Central',
    desc: 'Clínica localizada no coração de Vitória, Espírito Santo, com fácil acesso e estacionamento próximo para seu conforto.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Atendimento Individual',
    desc: 'Cada paciente recebe um plano de tratamento exclusivo. Seu caso é único e merece uma abordagem personalizada e dedicada.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Técnicas Modernas',
    desc: 'Atualização constante com as mais recentes técnicas e tecnologias em cirurgia plástica, garantindo resultados naturais e seguros.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
]

export default function WhyUs() {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

          {/* Left label */}
          <div className="lg:sticky lg:top-32 lg:w-72 flex-shrink-0">
            <p className="text-xs uppercase tracking-widest text-muted font-medium mb-4">Nossa diferença</p>
            <h2 className="font-serif text-5xl lg:text-6xl font-bold text-dark leading-tight">
              Por que<br />
              <em className="not-italic text-gold">nos</em><br />
              escolher?
            </h2>
          </div>

          {/* Cards grid */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {reasons.map((r) => (
              <div
                key={r.num}
                className="bg-white rounded-3xl p-8 hover:shadow-lg transition-shadow group"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-colors">
                    {r.icon}
                  </div>
                  <span className="font-serif text-5xl font-bold text-dark/5 group-hover:text-dark/10 transition-colors">
                    {r.num}
                  </span>
                </div>
                <h3 className="font-serif text-xl font-semibold text-dark mb-3">{r.title}</h3>
                <p className="text-muted text-sm leading-relaxed font-light">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
