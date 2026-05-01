import { ArrowRight, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="topo"
      className="min-h-screen flex items-center pt-16"
      style={{ background: 'linear-gradient(160deg, #FAF8F5 60%, #F5EDE3 100%)' }}
    >
      <div className="max-w-5xl mx-auto px-6 py-20 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Text */}
          <div className="order-2 md:order-1">
            <p className="eyebrow mb-5">Psicóloga · CRP 16/11510</p>

            <h1 className="hero-headline text-stone-900 mb-6">
              Entre a rotina,{' '}
              <em className="not-italic" style={{ color: '#B5734A' }}>
                o cuidado
              </em>{' '}
              e uma vida leve
            </h1>

            <p className="text-stone-600 text-lg leading-relaxed mb-8 max-w-md">
              Atendimentos psicológicos individuais com foco em bem‑estar emocional,
              autoconhecimento e qualidade de vida. Online e presencial.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <a
                href="https://wa.me/message/6UVITCQEF3U"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Agendar minha sessão
                <ArrowRight size={16} />
              </a>
              <a href="#sobre" className="btn-outline">
                Conhecer mais
              </a>
            </div>

            <div className="flex items-center gap-2 text-stone-500 text-sm">
              <MapPin size={14} style={{ color: '#B5734A' }} />
              <span>Clínica Integra · Espírito Santo, Brasil</span>
            </div>
          </div>

          {/* Photo placeholder */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div
              className="relative w-72 h-80 md:w-80 md:h-96 rounded-3xl overflow-hidden shadow-xl"
              style={{ background: '#EDE6DC' }}
            >
              {/* Decorative rings */}
              <div
                className="absolute -top-6 -right-6 w-40 h-40 rounded-full border-2 opacity-30"
                style={{ borderColor: '#B5734A' }}
              />
              <div
                className="absolute -bottom-4 -left-4 w-28 h-28 rounded-full border-2 opacity-20"
                style={{ borderColor: '#8B9E88' }}
              />

              {/* Initials placeholder */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center text-white text-2xl font-serif font-medium shadow-md"
                  style={{ background: '#B5734A' }}
                >
                  AC
                </div>
                <span className="text-stone-500 text-sm font-medium">Ana Clara Laranja</span>
                <span className="text-stone-400 text-xs">Psicóloga</span>
              </div>

              {/* Badge */}
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-white rounded-2xl px-4 py-2.5 shadow-lg flex items-center gap-2 whitespace-nowrap">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs font-medium text-stone-700">Aceita novos pacientes</span>
              </div>
            </div>
          </div>
        </div>

        {/* Trust bar */}
        <div className="mt-16 pt-10 border-t border-stone-200 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {[
            { value: 'Online', label: 'e presencial' },
            { value: 'CRP', label: '16/11510' },
            { value: 'Clínica', label: 'Integra' },
            { value: 'ES', label: 'Espírito Santo' },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <p className="font-serif text-xl font-medium text-stone-800">{item.value}</p>
              <p className="text-sm text-stone-500 mt-0.5">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
