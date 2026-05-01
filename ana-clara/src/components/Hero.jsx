import { ArrowRight, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="topo"
      className="relative overflow-hidden"
      style={{ height: '100svh', minHeight: '600px', background: '#2A1F1A' }}
    >
      {/* Full-bleed background photo */}
      <div className="absolute inset-0">
        <img
          src="/foto.jpg"
          alt="Ana Clara Laranja"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 12%',
          }}
        />
        {/* Gradient overlay — strong on left, fades right on desktop; bottom on mobile */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(to right, rgba(30,18,10,0.82) 0%, rgba(30,18,10,0.55) 45%, rgba(30,18,10,0.10) 100%),
              linear-gradient(to top, rgba(30,18,10,0.6) 0%, transparent 40%)
            `,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full max-w-6xl mx-auto px-6 flex flex-col justify-center">
        <div className="max-w-xl">

          {/* Badge */}
          <div className="flex items-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.75)' }}>
              Aceita novos pacientes · CRP 16/11510
            </span>
          </div>

          {/* Headline */}
          <h1
            className="font-serif mb-5 leading-tight"
            style={{ fontSize: 'clamp(40px, 6vw, 72px)', fontWeight: 400, color: '#fff' }}
          >
            Entre a rotina,{' '}
            <em className="not-italic" style={{ color: '#D4956E' }}>o cuidado</em>
            <br />e uma vida leve
          </h1>

          {/* Sub */}
          <p
            className="text-lg leading-relaxed mb-8"
            style={{ color: 'rgba(255,255,255,0.72)', maxWidth: '440px' }}
          >
            Atendimentos psicológicos individuais com foco em bem‑estar emocional,
            autoconhecimento e qualidade de vida.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 mb-10">
            <a
              href="https://wa.me/message/6UVITCQEF3U"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-medium rounded-full transition-all"
              style={{
                background: '#B5734A',
                color: '#fff',
                padding: '14px 28px',
                fontSize: '15px',
              }}
            >
              Agendar minha sessão
              <ArrowRight size={16} />
            </a>
            <a
              href="#sobre"
              className="inline-flex items-center gap-2 font-medium rounded-full transition-all"
              style={{
                background: 'rgba(255,255,255,0.12)',
                color: '#fff',
                padding: '14px 28px',
                fontSize: '15px',
                border: '1px solid rgba(255,255,255,0.25)',
                backdropFilter: 'blur(8px)',
              }}
            >
              Conhecer mais
            </a>
          </div>

          {/* Location */}
          <div className="flex items-center gap-2" style={{ color: 'rgba(255,255,255,0.5)' }}>
            <MapPin size={13} style={{ color: '#D4956E' }} />
            <span className="text-sm">Clínica Integra · Espírito Santo · Online e presencial</span>
          </div>
        </div>
      </div>

      {/* Trust bar — bottom strip */}
      <div
        className="absolute bottom-0 left-0 right-0 z-10"
        style={{ background: 'rgba(20,12,6,0.55)', backdropFilter: 'blur(12px)' }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { value: 'Online', label: 'e presencial' },
            { value: 'CRP', label: '16/11510' },
            { value: 'Clínica', label: 'Integra' },
            { value: 'ES', label: 'Espírito Santo' },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <p className="font-serif text-base font-medium" style={{ color: '#D4956E' }}>{item.value}</p>
              <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.5)' }}>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
