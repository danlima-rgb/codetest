import { ArrowRight } from 'lucide-react';
import foto from '../assets/foto.js';

const trustItems = [
  { value: 'Online', label: 'e presencial' },
  { value: 'CRP', label: '16/11510' },
  { value: 'Clínica', label: 'Integra' },
  { value: 'ES', label: 'Brasil' },
];

export default function Hero() {
  return (
    <>
      {/* ── MOBILE ─────────────────────────────────────────── */}
      <section id="topo" className="md:hidden flex flex-col" style={{ minHeight: '110svh' }}>

        {/* Bloco superior: texto sobre fundo escuro */}
        <div
          className="flex flex-col justify-end px-6 pb-8 pt-24"
          style={{
            background: 'linear-gradient(160deg, #1C1008 0%, #2E1A0A 100%)',
            flex: '0 0 auto',
          }}
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.65)' }}>
              Aceita novos pacientes · CRP 16/11510
            </span>
          </div>

          <h1
            className="font-serif mb-3 leading-tight"
            style={{ fontSize: 'clamp(32px, 9vw, 44px)', fontWeight: 400, color: '#fff' }}
          >
            Entre a rotina,{' '}
            <em className="not-italic" style={{ color: '#D4956E' }}>o cuidado</em>
            <br />e uma vida leve
          </h1>

          <p className="mb-6 leading-relaxed" style={{ fontSize: '14px', color: 'rgba(255,255,255,0.62)', maxWidth: '360px' }}>
            Psicoterapia individual online e presencial —
            um espaço seguro para se reconectar consigo.
          </p>

          <div className="flex gap-3">
            <a
              href="https://wa.me/message/6UVITCQEF3U"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-medium rounded-full"
              style={{ background: '#B5734A', color: '#fff', padding: '12px 22px', fontSize: '14px' }}
            >
              Agendar sessão <ArrowRight size={14} />
            </a>
            <a
              href="#sobre"
              className="inline-flex items-center font-medium rounded-full"
              style={{
                background: 'rgba(255,255,255,0.08)',
                color: '#fff',
                padding: '12px 22px',
                fontSize: '14px',
                border: '1px solid rgba(255,255,255,0.18)',
              }}
            >
              Conhecer mais
            </a>
          </div>
        </div>

        {/* Bloco inferior: foto com rosto visível */}
        <div className="relative flex-1" style={{ minHeight: '460px' }}>
          <img
            src={foto}
            alt="Ana Clara Laranja — Psicóloga"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: '50% 42%',
              display: 'block',
            }}
          />
          {/* sutil escurecimento nas bordas */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom, rgba(30,16,4,0.25) 0%, transparent 30%, transparent 80%, rgba(10,5,2,0.5) 100%)',
            }}
          />
        </div>

        {/* Trust bar */}
        <div style={{ background: 'rgba(10,5,2,0.88)', backdropFilter: 'blur(12px)' }}>
          <div className="px-4 py-3 grid grid-cols-4 gap-2">
            {trustItems.map((item) => (
              <div key={item.label} className="text-center">
                <p className="font-serif text-sm font-medium" style={{ color: '#D4956E' }}>{item.value}</p>
                <p style={{ fontSize: '10px', color: 'rgba(255,255,255,0.4)', marginTop: '1px' }}>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DESKTOP ────────────────────────────────────────── */}
      <section
        id="topo-desktop"
        className="relative overflow-hidden hidden md:flex flex-col"
        style={{ height: '100svh', minHeight: '650px', background: '#1C1008' }}
      >
        <div className="absolute inset-0">
          <img
            src={foto}
            alt="Ana Clara Laranja"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 42%' }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: `
                linear-gradient(to right, rgba(15,8,3,0.90) 0%, rgba(15,8,3,0.60) 42%, rgba(15,8,3,0.10) 70%, transparent 100%),
                linear-gradient(to top, rgba(15,8,3,0.55) 0%, transparent 25%)
              `,
            }}
          />
        </div>

        <div className="relative z-10 flex-1 max-w-6xl mx-auto px-10 flex flex-col justify-center">
          <div className="max-w-lg">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.70)' }}>
                Aceita novos pacientes · CRP 16/11510
              </span>
            </div>
            <h1
              className="font-serif mb-4 leading-tight"
              style={{ fontSize: 'clamp(42px, 5vw, 68px)', fontWeight: 400, color: '#fff' }}
            >
              Entre a rotina,{' '}
              <em className="not-italic" style={{ color: '#D4956E' }}>o cuidado</em>
              <br />e uma vida leve
            </h1>
            <p className="mb-8 leading-relaxed" style={{ fontSize: '16px', color: 'rgba(255,255,255,0.68)', maxWidth: '400px' }}>
              Psicoterapia individual online e presencial —
              um espaço seguro para se reconectar consigo.
            </p>
            <div className="flex gap-4">
              <a
                href="https://wa.me/message/6UVITCQEF3U"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-medium rounded-full"
                style={{ background: '#B5734A', color: '#fff', padding: '14px 28px', fontSize: '15px' }}
              >
                Agendar sessão <ArrowRight size={16} />
              </a>
              <a
                href="#sobre"
                className="inline-flex items-center font-medium rounded-full"
                style={{
                  background: 'rgba(255,255,255,0.10)',
                  color: '#fff',
                  padding: '14px 28px',
                  fontSize: '15px',
                  border: '1px solid rgba(255,255,255,0.22)',
                  backdropFilter: 'blur(8px)',
                }}
              >
                Conhecer mais
              </a>
            </div>
          </div>
        </div>

        <div className="relative z-10" style={{ background: 'rgba(10,5,2,0.60)', backdropFilter: 'blur(14px)' }}>
          <div className="max-w-6xl mx-auto px-10 py-3 grid grid-cols-4 gap-4">
            {trustItems.map((item) => (
              <div key={item.label} className="text-center">
                <p className="font-serif text-sm font-medium" style={{ color: '#D4956E' }}>{item.value}</p>
                <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.45)', marginTop: '2px' }}>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
