const paths = [
  {
    num: '01',
    title: 'Fechar essa página',
    body: 'Continuar como está. Sem renda extra. Esperando que alguma coisa mude sozinha.',
    icon: '✗',
    iconColor: '#555',
    iconBg: '#2E2E2E',
    featured: false,
    badge: null,
  },
  {
    num: '02',
    title: 'Tentar sozinha',
    body: 'Pesquisar receita no YouTube, inventar preço, tentar vender sem sistema. Vai gastar tempo, dinheiro e paciência.',
    icon: '⚠',
    iconColor: '#888',
    iconBg: '#2E2E2E',
    featured: false,
    badge: null,
  },
  {
    num: '03',
    title: 'Entrar no FV7 agora',
    body: 'Plano completo, passo a passo das primeiras vendas em 7 dias, todos os bônus e garantia de 30 dias. Começa hoje.',
    icon: '✓',
    iconColor: '#000',
    iconBg: '#F5A020',
    featured: true,
    badge: 'RECOMENDADO',
  },
]

export default function ThreePaths() {
  return (
    <section className="bg-bg py-24">
      <div className="max-w-content mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="section-headline text-text-primary">
            Agora você tem{' '}
            <span className="text-accent">3 caminhos</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {paths.map(({ num, title, body, icon, iconColor, iconBg, featured, badge }) => (
            <div
              key={num}
              className={`p-8 flex flex-col gap-5 ${featured ? 'amber-glow-card' : 'dark-card'}`}
            >
              <div className="flex items-start justify-between gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0"
                  style={{ background: iconBg, color: iconColor }}
                >
                  {icon}
                </div>
                {badge && (
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-accent text-on-accent px-3 py-1 rounded-full">
                    {badge}
                  </span>
                )}
              </div>

              <div>
                <p className="eyebrow mb-2">CAMINHO {num}</p>
                <p
                  className="font-semibold text-xl leading-snug mb-3"
                  style={{ color: featured ? '#FFFFFF' : '#888888' }}
                >
                  {title}
                </p>
                <p className="text-text-muted text-body leading-relaxed">{body}</p>
              </div>

              {featured && (
                <a href="#preco" className="btn-primary w-full text-sm py-3 mt-auto">
                  ENTRAR AGORA →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
