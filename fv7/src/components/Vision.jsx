const stories = [
  'Uma aluna me disse que o primeiro dinheiro que entrou ela usou pra pagar uma conta que tava vencendo. Simples assim. Mas deu uma liberdade que ela não sentia há anos.',
  'Outra comprou o presente de aniversário do filho sem precisar pedir dinheiro pra ninguém.',
]

export default function Vision() {
  return (
    <section className="bg-bg py-24">
      <div className="max-w-copy mx-auto px-6">
        <p className="eyebrow mb-4">VISÃO DE FUTURO</p>
        <h2 className="section-headline text-text-primary mb-10">
          O que você faria se na semana que vem já começasse a{' '}
          <span className="text-accent">receber dinheiro da sua cozinha?</span>
        </h2>

        <div className="space-y-4 mb-10">
          {stories.map((story, i) => (
            <div key={i} className="border-l-4 border-accent/30 bg-surface rounded-r-2xl px-6 py-5">
              <p className="text-text-muted text-body-lg leading-relaxed">{story}</p>
            </div>
          ))}
        </div>

        <div className="dark-card p-8 text-center">
          <p className="text-text-primary font-semibold text-2xl">
            Isso não é um sonho.{' '}
            <span className="text-accent">É um checklist.</span>
          </p>
        </div>
      </div>
    </section>
  )
}
