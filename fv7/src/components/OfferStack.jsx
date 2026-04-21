const offers = [
  {
    icon: '📹',
    title: 'Método FV7 Completo (5 módulos em vídeo)',
    desc: 'Receita dos 3 produtos, técnica, precificação, canais de venda, primeiros clientes',
    value: 'R$ 297',
    bonus: false,
  },
  {
    icon: '📘',
    title: 'Checklist: Primeiras Vendas em 7 Dias',
    desc: 'Guia dia a dia do que fazer na primeira semana pra chegar na primeira venda',
    value: 'R$ 47',
    bonus: true,
  },
  {
    icon: '💬',
    title: 'Ebook de Revenda: Venda Sem Vergonha',
    desc: 'Scripts de WhatsApp, canais que não exigem Instagram, como vender sem abordar ninguém',
    value: 'R$ 37',
    bonus: true,
  },
  {
    icon: '📊',
    title: 'Planilha de Custo e Precificação',
    desc: 'Você sabe quanto custa cada brigadeiro antes de fazer o primeiro',
    value: 'R$ 27',
    bonus: true,
  },
  {
    icon: '🌽',
    title: 'Doces Juninos',
    desc: 'Receitas especiais de festa junina pra aproveitar o mês mais lucrativo do ano',
    value: 'R$ 97',
    bonus: true,
    warning: 'SAI EM JULHO',
  },
  {
    icon: '❄️',
    title: 'Quem Congela Cresce',
    desc: 'Treinamento prático de produção em escala e congelamento sem perder qualidade',
    value: 'R$ 97',
    bonus: true,
  },
]

export default function OfferStack() {
  return (
    <section className="bg-bg py-24">
      <div className="max-w-content mx-auto px-6">
        <div className="max-w-copy mb-14">
          <p className="eyebrow mb-4">O QUE VOCÊ RECEBE</p>
          <h2 className="section-headline text-text-primary mb-4">
            Não é receita.{' '}
            <span className="text-accent">É o sistema completo.</span>
          </h2>
          <p className="text-text-muted text-body-lg">
            Receita tá no YouTube de graça. O que você recebe aqui é o método de fazer, precificar,
            embalar e vender.
          </p>
        </div>

        <div className="max-w-copy space-y-3 mb-10">
          {offers.map(({ icon, title, desc, value, bonus, warning }) => (
            <div key={title} className="dark-card p-6 flex items-start gap-4">
              <span className="text-2xl flex-shrink-0 mt-0.5">{icon}</span>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-4 mb-1.5">
                  <p className="text-text-primary font-semibold text-body">{title}</p>
                  <div className="flex flex-col items-end gap-1 flex-shrink-0">
                    {bonus ? (
                      <>
                        {warning ? (
                          <span className="text-[10px] font-bold uppercase tracking-wider bg-accent/20 text-accent px-2 py-0.5 rounded-full whitespace-nowrap">
                            {warning}
                          </span>
                        ) : (
                          <span className="text-[10px] font-bold uppercase tracking-wider bg-success/15 text-success px-2 py-0.5 rounded-full">
                            GRÁTIS
                          </span>
                        )}
                        <span className="text-text-disabled text-sm line-through">{value}</span>
                      </>
                    ) : (
                      <span className="text-accent font-bold text-body">{value}</span>
                    )}
                  </div>
                </div>
                <p className="text-text-muted text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Total */}
        <div className="max-w-copy dark-card p-6 flex items-center justify-between">
          <span className="text-text-muted text-body">Total dos bônus:</span>
          <span className="text-accent font-bold text-2xl">R$ 305 em brinde</span>
        </div>
      </div>
    </section>
  )
}
