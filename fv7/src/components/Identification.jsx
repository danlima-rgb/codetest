const painPoints = [
  {
    eyebrow: 'O DINHEIRO',
    headline: 'Está cansada de ver o dinheiro acabar antes do mês.',
    icon: '💸',
  },
  {
    eyebrow: 'OS FILHOS',
    headline: 'Vê os filhos crescendo e sabe que não está presente como queria.',
    icon: '👦',
  },
  {
    eyebrow: 'O CAMINHO',
    headline: 'Tem vontade de trabalhar de casa, mas não sabe por onde começar.',
    icon: '🏠',
  },
]

export default function Identification() {
  return (
    <section className="bg-bg py-24">
      <div className="max-w-content mx-auto px-6">
        <div className="max-w-copy mb-14">
          <p className="eyebrow mb-4">SE VOCÊ SE RECONHECE AQUI</p>
          <h2 className="section-headline text-text-primary mb-6">
            Você trabalha muito, ganha pouco,{' '}
            <span className="text-accent">e a conta nunca fecha.</span>
          </h2>
          <p className="text-text-muted text-body-lg leading-relaxed">
            Abre o banco com medo de ver o saldo. Vê o mês passar e não sobra nada. E ainda por cima,
            sente que tá vivendo longe de quem ama — no trânsito, no trabalho, longe dos filhos.
          </p>
        </div>

        {/* Pain point cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {painPoints.map(({ eyebrow, headline, icon }) => (
            <div key={eyebrow} className="dark-card p-7 flex flex-col gap-4">
              <span className="text-3xl">{icon}</span>
              <p className="eyebrow">{eyebrow}</p>
              <p className="text-text-primary font-semibold text-lg leading-snug">{headline}</p>
            </div>
          ))}
        </div>

        {/* Callout */}
        <div className="border-l-4 border-accent bg-surface rounded-r-2xl px-7 py-5">
          <p className="text-text-muted text-body-lg italic leading-relaxed">
            "Foi exatamente assim que eu comecei. E o que mudou não foi sorte —
            foi ter um passo a passo validado."
          </p>
        </div>
      </div>
    </section>
  )
}
