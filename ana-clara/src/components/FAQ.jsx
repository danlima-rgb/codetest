import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

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

function Item({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-stone-200 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
      >
        <span className="font-medium text-stone-800">{q}</span>
        <ChevronDown
          size={18}
          className="shrink-0 transition-transform duration-200 text-stone-400"
          style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
        />
      </button>
      {open && (
        <p className="pb-5 text-stone-500 text-sm leading-relaxed">{a}</p>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24" style={{ background: '#FAF8F5' }}>
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="eyebrow mb-4">Dúvidas frequentes</p>
          <h2 className="section-headline text-stone-900">
            Perguntas &amp; respostas
          </h2>
        </div>

        <div className="bg-white rounded-3xl px-8 py-2 shadow-sm border border-stone-100">
          {faqs.map((f) => (
            <Item key={f.q} q={f.q} a={f.a} />
          ))}
        </div>

        <p className="mt-8 text-center text-stone-500 text-sm">
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
        </p>
      </div>
    </section>
  );
}
