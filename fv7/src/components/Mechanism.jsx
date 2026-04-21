const products = [
  { icon: '🍫', name: 'BRIGADEIRO', price: 'R$ 12/caixa', badge: 'MAIS VENDIDO' },
  { icon: '🎂', name: 'BROWNIE', price: 'R$ 10/un' },
  { icon: '🍬', name: 'PALHA ITALIANA', price: 'R$ 10/un' },
]

const features = [
  { icon: '🎯', label: 'ZERO OBJEÇÃO', body: 'Todo mundo já comeu, gostou e sabe o que esperar. A memória afetiva do Brasil inteiro já convenceu por você.' },
  { icon: '🏠', label: 'VENDE EM QUALQUER CANAL', body: 'Condomínio, trabalho, padaria, café do bairro, iFood, WhatsApp, encomenda. O cliente já existe.' },
  { icon: '❄️', label: 'OS 3 CONGELAM BEM', body: 'Produz uma vez por semana. Descongela conforme os pedidos chegam. Zero desperdício, zero correria.' },
  { icon: '🔥', label: 'SEM EQUIPAMENTO CARO', body: 'Uma panela comum, uma espátula, ingredientes de supermercado. Nada industrial, nada importado.' },
  { icon: '📊', label: 'MARGEM ALTA', body: 'Ingredientes baratos viram produto de valor percebido alto. Brigadeiro de R$ 1 vira caixa de R$ 12.' },
]

export default function Mechanism() {
  return (
    <section className="bg-bg py-24">
      <div className="max-w-content mx-auto px-6">
        <div className="max-w-copy mb-14">
          <p className="eyebrow mb-4">POR QUE ESSES 3 PRODUTOS</p>
          <h2 className="section-headline text-text-primary mb-4">
            Os 3 mais vendidos do Brasil{' '}
            <span className="text-accent">em confeitaria caseira.</span>
          </h2>
          <p className="text-text-muted text-body-lg">
            Brigadeiro, brownie e palha italiana não são escolha aleatória.
          </p>
        </div>

        {/* Product trio */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-14">
          {products.map(({ icon, name, price, badge }) => (
            <div key={name} className="dark-card p-7 flex flex-col gap-3">
              <span className="text-4xl">{icon}</span>
              <div className="flex items-center gap-2 flex-wrap">
                <p className="eyebrow">{name}</p>
                {badge && (
                  <span className="text-[10px] font-semibold uppercase tracking-wider bg-accent text-on-accent px-2 py-0.5 rounded-full">
                    {badge}
                  </span>
                )}
              </div>
              <p className="text-text-primary font-bold text-xl">{price}</p>
            </div>
          ))}
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {features.map(({ icon, label, body }) => (
            <div key={label} className="dark-card p-7 flex flex-col gap-3">
              <span className="text-2xl">{icon}</span>
              <p className="eyebrow">{label}</p>
              <p className="text-text-muted text-body leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
