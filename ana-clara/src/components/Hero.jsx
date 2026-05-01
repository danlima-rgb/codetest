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

          {/* Photo */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative">
              {/* Decorative rings */}
              <div
                className="absolute -top-4 -right-4 w-40 h-40 rounded-full border-2 opacity-20 z-0"
                style={{ borderColor: '#B5734A' }}
              />
              <div
                className="absolute -bottom-4 -left-4 w-24 h-24 rounded-full border-2 opacity-15 z-0"
                style={{ borderColor: '#8B9E88' }}
              />

              {/* 3:4 photo frame */}
              <div
                className="relative z-10 rounded-3xl overflow-hidden shadow-2xl"
                style={{ width: '300px', aspectRatio: '3/4' }}
              >
                <img
                  src="/foto.jpg"
                  alt="Ana Clara Laranja — Psicóloga"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center 15%',
                  }}
                />

                {/* Badge */}
                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-white rounded-2xl px-4 py-2.5 shadow-lg flex items-center gap-2 whitespace-nowrap">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs font-medium text-stone-700">Aceita novos pacientes</span>
                </div>
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
