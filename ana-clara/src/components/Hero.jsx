import { ArrowRight, MapPin } from 'lucide-react';
import foto from '../assets/foto.js';

export default function Hero() {
  return (
    <section
      id="topo"
      className="relative overflow-hidden"
      style={{ height: '100svh', minHeight: '620px', background: '#1C1008' }}
    >
      {/* Full-bleed background photo */}
      <div className="absolute inset-0">
        <img
          src={foto}
          alt="Ana Clara Laranja"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: '55% 35%',
          }}
        />

        {/* Gradiente escuro no TOPO — texto legível; base transparente — rosto visível */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to bottom,
              rgba(15,8,3,0.82) 0%,
              rgba(15,8,3,0.65) 20%,
              rgba(15,8,3,0.30) 42%,
              rgba(15,8,3,0.05) 62%,
              transparent 100%
            )`,
          }}
        />
      </div>

      {/* Content — mobile: fica na base; desktop: centralizado à esquerda */}
      <div className="relative z-10 h-full max-w-6xl mx-auto px-6 flex flex-col justify-start pt-20">
        <div className="max-w-lg">

          {/* Badge */}
          <div className="flex items-center gap-2 mb-5">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.70)' }}>
              Aceita novos pacientes · CRP 16/11510
            </span>
          </div>

          {/* Headline */}
          <h1
            className="font-serif mb-4 leading-tight"
            style={{ fontSize: 'clamp(34px, 5.5vw, 68px)', fontWeight: 400, color: '#fff' }}
          >
            Entre a rotina,{' '}
            <em className="not-italic" style={{ color: '#D4956E' }}>o cuidado</em>
            <br />e uma vida leve
          </h1>

          {/* Sub — mais curto no mobile */}
          <p
            className="leading-relaxed mb-7"
            style={{ fontSize: '15px', color: 'rgba(255,255,255,0.68)', maxWidth: '400px' }}
          >
            Psicoterapia individual online e presencial.
            Um espaço seguro para se reconectar consigo.
          </p>

          {/* CTAs — lado a lado */}
          <div className="flex flex-row gap-3 flex-wrap">
            <a
              href="https://wa.me/message/6UVITCQEF3U"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-medium rounded-full"
              style={{
                background: '#B5734A',
                color: '#fff',
                padding: '13px 24px',
                fontSize: '14px',
              }}
            >
              Agendar sessão
              <ArrowRight size={15} />
            </a>
            <a
              href="#sobre"
              className="inline-flex items-center font-medium rounded-full"
              style={{
                background: 'rgba(255,255,255,0.10)',
                color: '#fff',
                padding: '13px 24px',
                fontSize: '14px',
                border: '1px solid rgba(255,255,255,0.22)',
                backdropFilter: 'blur(8px)',
              }}
            >
              Conhecer mais
            </a>
          </div>
        </div>
      </div>

      {/* Trust bar */}
      <div
        className="absolute bottom-0 left-0 right-0 z-10"
        style={{ background: 'rgba(10,5,2,0.65)', backdropFilter: 'blur(14px)' }}
      >
        <div className="max-w-6xl mx-auto px-6 py-3 grid grid-cols-4 gap-2">
          {[
            { value: 'Online', label: 'e presencial' },
            { value: 'CRP', label: '16/11510' },
            { value: 'Clínica', label: 'Integra' },
            { value: 'ES', label: 'Brasil' },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <p className="font-serif text-sm font-medium" style={{ color: '#D4956E' }}>{item.value}</p>
              <p style={{ fontSize: '10px', color: 'rgba(255,255,255,0.45)', marginTop: '1px' }}>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
