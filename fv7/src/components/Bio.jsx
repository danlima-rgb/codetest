const chips = [
  { icon: '👩', label: '+15.000 alunas' },
  { icon: '🌍', label: '15 países' },
  { icon: '📅', label: 'Desde 2021' },
]

export default function Bio() {
  return (
    <section className="bg-bg-light py-24">
      <div className="max-w-content mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <p className="text-[#888888] text-xs font-medium uppercase tracking-widest mb-4">
              QUEM É A MARI
            </p>
            <h2
              className="font-bold mb-6 leading-tight"
              style={{ fontSize: 'clamp(32px, 5vw, 44px)', color: '#0D0D0D', letterSpacing: '-0.02em' }}
            >
              Confeiteira. Professora.{' '}
              <span style={{ color: '#D4880E' }}>Mãe.</span>
            </h2>

            <p className="text-[#444444] text-body-lg leading-relaxed mb-6">
              Fundadora do Plano FV7. Começou vendendo brigadeiro por necessidade depois que o filho
              foi internado no CTI aos 5 meses de vida.
            </p>
            <p className="text-[#444444] text-body-lg leading-relaxed mb-6">
              Descobriu que com um método certo, uma mulher comum na cozinha de casa consegue
              construir renda de verdade — sem precisar sair pra vender, sem depender de Instagram,
              sem equipamento caro.
            </p>
            <p className="text-[#444444] text-body-lg leading-relaxed mb-8">
              Hoje já ensinou +15.000 mulheres em 15 países a fazerem o mesmo caminho que ela percorreu.
            </p>

            {/* Chips */}
            <div className="flex flex-wrap gap-2 mb-8">
              {chips.map(({ icon, label }) => (
                <span
                  key={label}
                  className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
                  style={{ background: '#E8D5C0', color: '#6B4226' }}
                >
                  {icon} {label}
                </span>
              ))}
            </div>

            <a href="#preco" className="btn-primary">
              Começar agora por R$ 197
            </a>
          </div>

          {/* Right — avatar card */}
          <div className="flex justify-center">
            <div
              className="w-64 h-64 rounded-3xl flex flex-col items-center justify-center gap-4"
              style={{ background: '#E8D5C0' }}
            >
              <div className="w-24 h-24 rounded-full bg-accent border-4 border-accent-hover flex items-center justify-center">
                <span className="font-bold text-on-accent text-3xl">M</span>
              </div>
              <div className="text-center">
                <p className="font-semibold text-text-dark text-lg">Mari</p>
                <p className="text-[#888] text-sm">Fundadora do Plano FV7</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
