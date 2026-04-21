const items = [
  { label: '10 caixas de brigadeiro', value: 'R$ 120' },
  { label: '10 brownies recheados', value: 'R$ 100' },
  { label: '10 palhas italianas', value: 'R$ 100' },
]

const timeline = [
  { month: 'MÊS 1', desc: '~R$ 100/dia, 3 dias por semana. R$ 1.200 no mês.' },
  { month: 'MÊS 2', desc: 'Cliente começa a voltar. R$ 150/dia, 4 dias. R$ 2.400.' },
  { month: 'MÊS 3-4', desc: 'Pega ritmo, vende pra salão/café/escritório. R$ 3-4k/mês.' },
  { month: 'TETO', desc: 'Parceria fixa com cafeteria. R$ 7.000/mês.', accent: true },
]

export default function MathSection() {
  return (
    <section className="bg-bg py-24">
      <div className="max-w-content mx-auto px-6">
        <div className="max-w-copy mb-14">
          <p className="eyebrow mb-4">A CONTA</p>
          <h2 className="section-headline text-text-primary mb-4">
            A conta que você pode{' '}
            <span className="text-accent">fazer junto comigo</span>
          </h2>
          <p className="text-text-muted text-body-lg">
            Eu prefiro te mostrar o realista, não o máximo possível.
          </p>
        </div>

        {/* Calculation card */}
        <div className="dark-card p-8 mb-14 max-w-copy">
          <div className="space-y-4 mb-6">
            {items.map(({ label, value }) => (
              <div key={label} className="flex items-center justify-between gap-4">
                <span className="text-text-muted text-body">{label}</span>
                <span className="text-text-primary font-semibold text-body">{value}</span>
              </div>
            ))}
          </div>

          {/* Separator */}
          <div className="border-t border-dashed border-accent/40 mb-6" />

          <div className="flex items-center justify-between">
            <span className="text-text-primary font-bold text-xl">Total num dia bom</span>
            <span className="text-accent font-bold text-2xl">R$ 320</span>
          </div>
        </div>

        {/* Timeline */}
        <div className="max-w-copy">
          <p className="text-text-primary font-semibold text-xl mb-8">Mas como é na vida real:</p>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 top-6 bottom-6 w-px bg-border" />

            <div className="space-y-8">
              {timeline.map(({ month, desc, accent }) => (
                <div key={month} className="flex gap-6 pl-12 relative">
                  {/* Dot */}
                  <div
                    className="absolute left-0 top-1 w-8 h-8 rounded-full flex items-center justify-center text-[9px] font-bold border"
                    style={{
                      background: accent ? '#F5A020' : '#1A1A1A',
                      borderColor: accent ? '#F5A020' : '#2A2A2A',
                      color: accent ? '#000' : '#888',
                    }}
                  >
                    {accent ? '★' : '○'}
                  </div>

                  <div className={`dark-card p-5 flex-1 ${accent ? 'border-accent/50' : ''}`}>
                    <p className="eyebrow mb-2" style={{ color: accent ? '#F5A020' : '#888' }}>
                      {month}
                    </p>
                    <p className="text-text-primary text-body">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="text-text-muted italic text-body mt-8 leading-relaxed">
            "Essa progressão é o que 15 mil alunas já fizeram. Não é mágica. É método."
          </p>
        </div>
      </div>
    </section>
  )
}
