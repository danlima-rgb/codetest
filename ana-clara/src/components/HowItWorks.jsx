import { motion } from 'framer-motion';

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

const ease = [0.22, 1, 0.36, 1];
const vp = { once: true, margin: '-80px' };

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.6, ease }}
        >
          <p className="eyebrow mb-4">Como funciona</p>
          <h2 className="section-headline text-stone-900 max-w-lg mx-auto">
            Do primeiro contato ao seu bem‑estar
          </h2>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="show"
          viewport={vp}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
        >
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              className="relative"
              variants={{
                hidden: { opacity: 0, y: 32 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
              }}
            >
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px -translate-y-1/2 z-0" style={{ background: '#EDE6DC' }} />
              )}
              <div className="relative z-10 p-6 warm-card flex flex-col gap-4 h-full">
                <span className="font-serif text-4xl font-medium leading-none" style={{ color: '#E8D5C4' }}>
                  {step.number}
                </span>
                <div>
                  <h3 className="font-semibold text-stone-800 mb-2">{step.title}</h3>
                  <p className="text-sm text-stone-500 leading-relaxed">{step.text}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.5, ease, delay: 0.4 }}
        >
          <a href="https://wa.me/message/6UVITCQEF3U" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Começar agora
          </a>
        </motion.div>
      </div>
    </section>
  );
}
