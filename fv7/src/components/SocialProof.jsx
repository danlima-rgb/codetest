const testimonials = [
  {
    initials: 'ME',
    name: 'Maria Eduarda',
    result: 'R$ 1.400 no primeiro mês',
    badge: 'Começou do zero total',
    quote: 'Eu não sabia fazer brigadeiro. Entrei no FV7 numa terça, na outra terça vendi a primeira caixa pra vizinha. Em 3 semanas já tinha pedido fixo semanal pro café da esquina.',
    featured: false,
  },
  {
    initials: 'N',
    name: 'Nathany',
    result: 'R$ 2.800/mês complementando o salário',
    badge: 'Renda extra sem largar o emprego',
    quote: 'Sou CLT. Produzo nas quintas à noite, congelo, e vendo pelo WhatsApp o resto da semana. Nunca precisei largar o emprego. A renda extra paga a creche da minha filha.',
    featured: false,
  },
  {
    initials: 'RS',
    name: 'Roberta Siqueira',
    result: 'Substituiu o salário CLT',
    badge: 'A história que me emociona até hoje',
    quote: 'Eu tava desempregada, com conta atrasada, chorando na cozinha sem saber o que fazer. Entrei no FV7 no limite. Hoje, dois anos depois, ganho mais vendendo brigadeiro do que no meu último emprego CLT. E tô com meus filhos em casa.',
    featured: true,
  },
]

function Stars() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <span key={i} className="text-accent text-sm">★</span>
      ))}
    </div>
  )
}

export default function SocialProof() {
  return (
    <section className="bg-bg py-24">
      <div className="max-w-content mx-auto px-6">
        <div className="max-w-copy mb-14">
          <p className="eyebrow mb-4">ALUNAS REAIS, RESULTADOS REAIS</p>
          <h2 className="section-headline text-text-primary">
            Elas começaram{' '}
            <span className="text-accent">do zero.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {testimonials.map(({ initials, name, result, badge, quote, featured }) => (
            <div
              key={name}
              className={`p-7 flex flex-col gap-4 ${featured ? 'amber-glow-card' : 'dark-card'}`}
            >
              <Stars />

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-on-accent text-sm">{initials}</span>
                </div>
                <div>
                  <p className="text-text-primary font-semibold text-sm">{name}</p>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <span className="inline-flex self-start bg-accent/15 text-accent text-xs font-semibold px-3 py-1 rounded-full">
                  {result}
                </span>
                <span className="inline-flex self-start bg-elevated text-text-muted text-xs px-3 py-1 rounded-full">
                  {badge}
                </span>
              </div>

              <p className="text-text-muted text-body leading-relaxed">{quote}</p>
            </div>
          ))}
        </div>

        {/* Stat */}
        <div className="text-center mb-10">
          <p className="font-bold text-accent mb-1" style={{ fontSize: 'clamp(48px, 10vw, 64px)', lineHeight: 1 }}>
            +15.000
          </p>
          <p className="text-text-muted text-body">mulheres em 15 países já aprenderam o método</p>
        </div>

        <div className="flex justify-center">
          <a href="#preco" className="btn-primary text-base py-4 px-10">
            QUERO SER A PRÓXIMA →
          </a>
        </div>
      </div>
    </section>
  )
}
