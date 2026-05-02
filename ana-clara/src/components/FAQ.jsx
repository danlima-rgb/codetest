import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    q: 'Quanto tempo dura cada sessão?',
    a: 'Cada sessão tem duração de 50 minutos, seja online ou presencial.',
  },
  {
    q: 'Com que frequência devo fazer terapia?',
    a: 'O mais indicado é a frequência semanal, especialmente no início do processo. Porém, a frequência pode ser ajustada conforme suas necessidades e objetivos.',
  },
  {
    q: 'Como funciona o atendimento online?',
    a: 'As sessões online são realizadas por videochamada em uma plataforma segura e de fácil acesso. Você precisa apenas de uma conexão de internet estável e um local tranquilo e privado.',
  },
  {
    q: 'Onde fica a Clínica Integra?',
    a: 'A Clínica Integra está localizada no Espírito Santo. Após o contato inicial, você receberá o endereço completo e informações para o agendamento presencial.',
  },
  {
    q: 'Como faço para agendar uma sessão?',
    a: 'É simples! Basta enviar uma mensagem pelo WhatsApp clicando no botão "Agendar sessão". Responderei o mais rápido possível para verificarmos os horários disponíveis.',
  },
  {
    q: 'O processo terapêutico é sigiloso?',
    a: 'Sim. O sigilo profissional é um princípio ético fundamental da psicologia. Tudo o que é conversado nas sessões permanece estritamente confidencial.',
  },
];

const ease = [0.22, 1, 0.36, 1];
const vp = { once: true, margin: '-80px' };

function Item({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-stone-200 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
      >
        <span className="font-medium text-stone-800">{q}</span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }}>
          <ChevronDown size={18} className="shrink-0 text-stone-400" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease }}
            style={{ overflow: 'hidden' }}
          >
            <p className="pb-5 text-stone-500 text-sm leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24" style={{ background: '#FAF8F5' }}>
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.6, ease }}
        >
          <p className="eyebrow mb-4">Dúvidas frequentes</p>
          <h2 className="section-headline text-stone-900">Perguntas &amp; respostas</h2>
        </motion.div>

        <motion.div
          className="bg-white rounded-3xl px-8 py-2 shadow-sm border border-stone-100"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.6, ease, delay: 0.1 }}
        >
          {faqs.map((f) => <Item key={f.q} q={f.q} a={f.a} />)}
        </motion.div>

        <motion.p
          className="mt-8 text-center text-stone-500 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={vp}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Ainda tem dúvidas?{' '}
          <a
            href="https://wa.me/message/6UVITCQEF3U"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium underline underline-offset-2"
            style={{ color: '#B5734A' }}
          >
            Fale comigo pelo WhatsApp
          </a>
        </motion.p>
      </div>
    </section>
  );
}
