export default function FinalCTA() {
  return (
    <section
      className="bg-bg py-28 relative overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse 700px 500px at 50% 50%, rgba(245,160,32,0.07) 0%, #0D0D0D 70%)',
      }}
    >
      <div className="max-w-copy mx-auto px-6 text-center">
        <h2
          className="font-light text-text-primary mb-8 leading-tight"
          style={{ fontSize: 'clamp(32px, 6vw, 52px)', letterSpacing: '-0.02em' }}
        >
          Depois que você entrar aqui, nunca mais vai olhar pra sua{' '}
          <span className="text-accent">cozinha do mesmo jeito.</span>
        </h2>

        {/* Trust points */}
        <div className="flex flex-wrap justify-center gap-6 mb-10">
          {[
            'Acesso imediato',
            '30 dias de garantia',
            'Bônus Doces Juninos só até junho',
          ].map(item => (
            <div key={item} className="flex items-center gap-2">
              <span className="text-accent">✓</span>
              <span className="text-text-muted text-sm">{item}</span>
            </div>
          ))}
        </div>

        <a
          href="#preco"
          className="btn-primary text-lg py-5 px-12 shadow-cta inline-flex"
        >
          QUERO VENDER EM 7 DIAS →
        </a>

        <p className="text-text-disabled text-sm mt-6">
          🔒 Pagamento 100% seguro · Hotmart · SSL · Acesso em minutos
        </p>
      </div>
    </section>
  )
}
