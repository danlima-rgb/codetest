const steps = [
  {
    number: '01',
    title: 'Entre em contato',
    text: 'Mande uma mensagem pelo WhatsApp. Vamos conversar sobre o que você está buscando e verificar a disponibilidade de horários.',
  },
  {
    number: '02',
    title: 'Sessão inicial',
    text: 'Na primeira sessão nos conhecemos, você fala sobre sua história e juntos definimos os objetivos do nosso trabalho.',
  },
  {
    number: '03',
    title: 'Processo terapêutico',
    text: 'Ao longo das sessões, trabalhamos emoções, padrões e estratégias concretas para o seu bem‑estar.',
  },
  {
    number: '04',
    title: 'Evolução contínua',
    text: 'Você desenvolve mais autoconhecimento, ferramentas para lidar com desafios e uma vida com mais leveza.',
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="eyebrow mb-4">Como funciona</p>
          <h2 className="section-headline text-stone-900 max-w-lg mx-auto">
            Do primeiro contato ao seu bem‑estar
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              {/* connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px -translate-y-1/2 z-0" style={{ background: '#EDE6DC' }} />
              )}

              <div className="relative z-10 p-6 warm-card flex flex-col gap-4 h-full">
                <span
                  className="font-serif text-4xl font-medium leading-none"
                  style={{ color: '#E8D5C4' }}
                >
                  {step.number}
                </span>
                <div>
                  <h3 className="font-semibold text-stone-800 mb-2">{step.title}</h3>
                  <p className="text-sm text-stone-500 leading-relaxed">{step.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://wa.me/message/6UVITCQEF3U"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Começar agora
          </a>
        </div>
      </div>
    </section>
  );
}
