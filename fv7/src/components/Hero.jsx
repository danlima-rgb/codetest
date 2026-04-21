export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-16 overflow-hidden bg-bg">
      {/* Grid texture */}
      <div className="absolute inset-0 amber-grid opacity-100 pointer-events-none" />
      {/* Radial glow */}
      <div className="absolute inset-0 amber-radial pointer-events-none" />

      <div className="relative max-w-copy mx-auto px-6 py-24">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-surface border border-border rounded-full px-4 py-2 mb-10">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span className="eyebrow">PLANO FV7 · +15.000 ALUNAS EM 15 PAÍSES</span>
        </div>

        {/* Headline */}
        <h1 className="hero-headline text-text-primary mb-6">
          Enquanto a maioria usa a cozinha só pra fazer comida, ela faz{' '}
          <span className="text-accent">R$ 200 num sábado de manhã</span>{' '}
          com 3 produtos simples.
        </h1>

        {/* Sub */}
        <p className="text-text-muted text-body-lg leading-relaxed mb-10 max-w-lg">
          Brigadeiro, brownie e palha italiana. Sem forno industrial. Sem chocolate nobre.
          Sem precisar sair de casa pra vender.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 mb-10">
          <a href="#preco" className="btn-primary text-base py-4 px-8">
            QUERO VER COMO FUNCIONA →
          </a>
          <a href="#vsl" className="btn-secondary text-base py-4 px-8">
            Acesso imediato e vitalício
          </a>
        </div>

        {/* Micro trust */}
        <div className="flex flex-wrap gap-6">
          {['Acesso imediato', 'Garantia 30 dias', 'Suporte incluso'].map(item => (
            <div key={item} className="flex items-center gap-2">
              <span className="text-accent text-sm">✓</span>
              <span className="text-text-muted text-sm">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
