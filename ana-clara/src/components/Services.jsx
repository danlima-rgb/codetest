import { Monitor, MapPin, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: Monitor,
    tag: 'Online',
    title: 'Atendimento Online',
    description:
      'Sessões por videochamada, de onde você estiver. Confortável, flexível e com a mesma qualidade e cuidado do presencial.',
    items: [
      'Sessões de 50 minutos',
      'Link de acesso fácil e seguro',
      'Disponível em todo o Brasil',
      'Horários flexíveis',
    ],
    cta: 'Agendar sessão online',
    featured: false,
  },
  {
    icon: MapPin,
    tag: 'Presencial',
    title: 'Atendimento Presencial',
    description:
      'Consultas na Clínica Integra, em Espírito Santo. Um ambiente acolhedor e reservado para você se sentir seguro.',
    items: [
      'Sessões de 50 minutos',
      'Clínica Integra — ES',
      'Ambiente acolhedor e sigiloso',
      'Agendamento via WhatsApp',
    ],
    cta: 'Agendar sessão presencial',
    featured: true,
  },
];

const ease = [0.22, 1, 0.36, 1];
const vp = { once: true, margin: '-80px' };

export default function Services() {
  return (
    <section id="atendimentos" className="py-24" style={{ background: '#FAF8F5' }}>
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.6, ease }}
        >
          <p className="eyebrow mb-4">Atendimentos</p>
          <h2 className="section-headline text-stone-900 max-w-xl mx-auto">
            Do jeito que funciona melhor{' '}
            <em className="not-italic" style={{ color: '#B5734A' }}>para você</em>
          </h2>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto"
          initial="hidden"
          whileInView="show"
          viewport={vp}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.14 } } }}
        >
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.tag}
                className={`rounded-3xl p-8 flex flex-col gap-6 ${s.featured ? 'accent-card' : 'cream-card'}`}
                variants={{
                  hidden: { opacity: 0, y: 32 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease } },
                }}
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ background: s.featured ? 'rgba(255,255,255,0.2)' : '#F5EDE3' }}
                    >
                      <Icon size={18} style={{ color: s.featured ? '#fff' : '#B5734A' }} />
                    </div>
                    <span
                      className="text-xs font-semibold tracking-widest uppercase"
                      style={{ color: s.featured ? 'rgba(255,255,255,0.7)' : '#B5734A' }}
                    >
                      {s.tag}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl font-medium mb-3" style={{ color: s.featured ? '#fff' : '#1C1010' }}>
                    {s.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: s.featured ? 'rgba(255,255,255,0.8)' : '#78716C' }}>
                    {s.description}
                  </p>
                </div>

                <ul className="flex flex-col gap-2.5">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5">
                      <CheckCircle2 size={15} style={{ color: s.featured ? 'rgba(255,255,255,0.8)' : '#8B9E88' }} className="shrink-0" />
                      <span className="text-sm" style={{ color: s.featured ? 'rgba(255,255,255,0.9)' : '#57534E' }}>{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://wa.me/message/6UVITCQEF3U"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-auto text-center py-3 px-6 rounded-2xl text-sm font-medium transition-all ${
                    s.featured ? 'bg-white text-stone-800 hover:bg-stone-50' : 'btn-primary'
                  }`}
                >
                  {s.cta}
                </a>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
