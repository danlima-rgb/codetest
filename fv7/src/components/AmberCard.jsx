export default function AmberCard() {
  return (
    <section className="bg-bg py-8 px-6">
      <div className="max-w-content mx-auto">
        <div className="amber-card p-10 md:p-14">
          <p
            className="text-xs font-medium uppercase tracking-widest mb-6"
            style={{ color: 'rgba(0,0,0,0.5)' }}
          >
            A PROPOSTA
          </p>
          <h2
            className="font-bold mb-6 leading-none"
            style={{ fontSize: 'clamp(48px, 8vw, 72px)', color: '#000', letterSpacing: '-0.03em' }}
          >
            Plano FV7
          </h2>
          <p className="text-[#000000cc] text-body-lg leading-relaxed max-w-lg mb-8">
            O sistema que transforma a cozinha de casa em fonte de renda real — sem precisar
            sair pra vender, sem depender de Instagram, sem equipamento caro.
          </p>
          <a
            href="#preco"
            className="inline-flex items-center gap-2 bg-bg text-text-primary rounded-full px-6 py-3 text-sm font-medium hover:bg-surface transition-colors"
          >
            ✦ Do zero à primeira venda em 7 dias
          </a>
        </div>
      </div>
    </section>
  )
}
