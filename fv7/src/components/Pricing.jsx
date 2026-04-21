export default function Pricing() {
  return (
    <section id="preco" className="bg-bg py-24 relative overflow-hidden">
      {/* Watermark */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span className="watermark-text opacity-100 whitespace-nowrap">OFERTA</span>
      </div>

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 600px 400px at 50% 50%, rgba(245,160,32,0.06) 0%, transparent 70%)' }}
      />

      <div className="relative max-w-content mx-auto px-6">
        <div className="max-w-copy mx-auto mb-14 text-center">
          <p className="eyebrow mb-4">PREÇO</p>
          <h2 className="section-headline text-text-primary mb-4">
            Preço basicão, conteúdo{' '}
            <span className="text-accent">que ninguém ensina</span>
          </h2>
          <p className="text-text-muted text-body-lg leading-relaxed">
            O método que já tirou 15 mil mulheres da estagnação financeira.
            Por menos de R$ 20 por mês.
          </p>
        </div>

        {/* Pricing card */}
        <div
          className="max-w-md mx-auto rounded-3xl border border-border p-10 flex flex-col gap-8"
          style={{ background: '#161616' }}
        >
          {/* Price */}
          <div className="text-center">
            <div className="flex items-baseline justify-center gap-3 mb-2">
              <span className="price-display text-text-primary">12x</span>
              <span className="price-display text-accent">R$ 19,90</span>
            </div>
            <p className="text-text-muted text-body">
              ou <span className="line-through">R$ 502,00</span>{' '}
              <span className="text-text-primary font-semibold">R$ 197 à vista no Pix</span>
            </p>
          </div>

          {/* Separator */}
          <div className="border-t border-border" />

          {/* Urgency */}
          <div className="bg-accent/10 border border-accent/20 rounded-xl px-5 py-3 text-center">
            <p className="text-accent text-sm font-semibold">
              ⏰ Bônus Doces Juninos sai em julho
            </p>
          </div>

          {/* CTA */}
          <a
            href="#"
            className="btn-primary w-full text-base py-5 text-center shadow-cta text-lg font-bold"
          >
            QUERO VENDER EM 7 DIAS →
          </a>

          {/* Guarantee */}
          <div
            className="flex items-start gap-3 rounded-xl p-5"
            style={{ background: '#1E1E1E', border: '1px solid #2A2A2A' }}
          >
            <svg className="w-5 h-5 text-success flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.955 11.955 0 003 12c0 6.627 5.373 12 12 12s12-5.373 12-12c0-2.172-.579-4.208-1.598-5.964A11.955 11.955 0 0112 2.964z" />
            </svg>
            <p className="text-body text-text-muted leading-relaxed">
              <span className="text-text-primary font-semibold">30 dias de garantia incondicional</span>
              {' '}— se em 30 dias você seguir o método e não fizer a primeira venda,
              devolvemos 100% sem burocracia.
            </p>
          </div>

          {/* Trust */}
          <p className="text-center text-text-disabled text-sm">
            🔒 Pagamento seguro · Hotmart · SSL · Acesso em minutos
          </p>
        </div>
      </div>
    </section>
  )
}
