import { Heart, Lightbulb, Users } from 'lucide-react';
import foto from '../assets/foto.js';

const values = [
  {
    icon: Heart,
    title: 'Escuta ativa',
    text: 'Cada pessoa é única. Ofereço um espaço seguro e sem julgamentos para você se expressar livremente.',
  },
  {
    icon: Lightbulb,
    title: 'Autoconhecimento',
    text: 'Juntos exploramos seus padrões, crenças e emoções para construir uma vida com mais sentido e leveza.',
  },
  {
    icon: Users,
    title: 'Cuidado integral',
    text: 'Trabalho com intervenções baseadas em evidências, adaptadas à sua realidade e aos seus objetivos.',
  },
];

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Top: texto + foto */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-16">

          {/* Texto */}
          <div>
            <p className="eyebrow mb-4">Sobre mim</p>
            <h2 className="section-headline text-stone-900 mb-6">
              Cuidar de quem cuida do mundo
            </h2>
            <p className="text-stone-600 leading-relaxed mb-5">
              Sou Ana Clara Laranja, psicóloga recém‑formada com registro CRP 16/11510.
              Atuo na <strong>Clínica Integra</strong>, no Espírito Santo, oferecendo
              atendimentos individuais online e presenciais.
            </p>
            <p className="text-stone-600 leading-relaxed mb-5">
              Tenho habilidades em comunicação empática, escuta ativa e criatividade.
              Minhas áreas de maior interesse são a <strong>psicologia clínica</strong> e
              o bem‑estar emocional — acredito que cada pessoa merece suporte para
              viver de forma mais plena e saudável.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Se você busca um espaço de acolhimento, onde possa trabalhar suas
              emoções e construir uma vida mais leve, estou aqui.
            </p>

            <div className="mt-8 inline-flex items-center gap-3 px-5 py-3 rounded-2xl" style={{ background: '#F5EDE3' }}>
              <div className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-serif font-medium" style={{ background: '#B5734A' }}>
                AC
              </div>
              <div>
                <p className="text-sm font-medium text-stone-800">Ana Clara Laranja</p>
                <p className="text-xs text-stone-500">Psicóloga · CRP 16/11510</p>
              </div>
            </div>
          </div>

          {/* Foto */}
          <div className="relative hidden md:block" style={{ height: '520px' }}>
            <div
              className="w-full h-full rounded-3xl overflow-hidden"
              style={{ background: '#F5EDE3' }}
            >
              <img
                src={foto}
                alt="Ana Clara Laranja — Psicóloga"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: '50% 30%',
                }}
              />
            </div>
          </div>
        </div>

        {/* Cards na horizontal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="flex flex-col gap-4 p-6 rounded-2xl"
              style={{ background: '#FAF8F5', border: '1px solid #EDE8E1' }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center"
                style={{ background: '#F5EDE3' }}
              >
                <Icon size={20} style={{ color: '#B5734A' }} />
              </div>
              <div>
                <h3 className="font-semibold text-stone-800 mb-2">{title}</h3>
                <p className="text-sm text-stone-500 leading-relaxed">{text}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
