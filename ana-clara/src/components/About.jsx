import { Heart, Lightbulb, Users } from 'lucide-react';

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
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Left */}
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

          {/* Right — values */}
          <div className="flex flex-col gap-5">
            {values.map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex gap-4 p-5 cream-card">
                <div
                  className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: '#F5EDE3' }}
                >
                  <Icon size={18} style={{ color: '#B5734A' }} />
                </div>
                <div>
                  <h3 className="font-semibold text-stone-800 mb-1">{title}</h3>
                  <p className="text-sm text-stone-500 leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
