import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import foto from '../assets/foto.js';
import fotoDesktop from '../assets/fotoDesktop.js';

const trustItems = [
  { value: 'Online', label: 'e presencial' },
  { value: 'CRP', label: '16/11510' },
  { value: 'Clínica', label: 'Integra' },
  { value: 'ES', label: 'Brasil' },
];

const ease = [0.22, 1, 0.36, 1];

function TrustBar() {
  return (
    <div style={{ background: 'rgba(10,5,2,0.88)', backdropFilter: 'blur(12px)' }}>
      <div className="grid grid-cols-4 px-4 py-3 gap-2 max-w-6xl mx-auto">
        {trustItems.map((item, i) => (
          <motion.div
            key={item.label}
            className="text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease, delay: 0.8 + i * 0.08 }}
          >
            <p className="font-serif text-sm font-medium" style={{ color: '#D4956E' }}>{item.value}</p>
            <p style={{ fontSize: '10px', color: 'rgba(255,255,255,0.4)', marginTop: '1px' }}>{item.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <div id="topo">

      {/* ── MOBILE (< 768px) ─────────────────────────────── */}
      <div
        className="md:hidden relative flex flex-col"
        style={{ height: '844px', overflow: 'hidden', background: '#1C1008' }}
      >
        <div className="absolute inset-0">
          <img
            src={foto}
            alt="Ana Clara Laranja — Psicóloga"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 55%' }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: `
                linear-gradient(to bottom, rgba(12,6,2,0.82) 0%, rgba(12,6,2,0.55) 35%, rgba(12,6,2,0.10) 60%, transparent 100%),
                linear-gradient(to top, rgba(10,5,2,0.60) 0%, transparent 20%)
              `,
            }}
          />
        </div>

        <div className="relative z-10 flex-1 px-6 pt-24 flex flex-col justify-start">
          <motion.div
            className="flex items-center gap-2 mb-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease, delay: 0.2 }}
          >
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.70)' }}>
              Aceita novos pacientes · CRP 16/11510
            </span>
          </motion.div>

          <motion.h1
            className="font-serif mb-3"
            style={{ fontSize: '36px', fontWeight: 400, color: '#fff', lineHeight: 1.15 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.35 }}
          >
            Sua vida merece
            <br />
            <em className="not-italic" style={{ color: '#D4956E' }}>leveza e cuidado</em>
            <br />
            além da correria
          </motion.h1>

          <motion.p
            className="mb-6 leading-relaxed"
            style={{ fontSize: '14px', color: 'rgba(255,255,255,0.68)', maxWidth: '320px' }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.5 }}
          >
            Psicoterapia individual online e presencial —
            um espaço seguro para se reconectar consigo.
          </motion.p>

          <motion.div
            className="flex gap-3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.62 }}
          >
            <a
              href="https://wa.me/message/6UVITCQEF3U"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-medium rounded-full"
              style={{ background: '#B5734A', color: '#fff', padding: '12px 20px', fontSize: '14px' }}
            >
              Agendar sessão <ArrowRight size={14} />
            </a>
            <a
              href="#sobre"
              className="inline-flex items-center font-medium rounded-full"
              style={{
                background: 'rgba(255,255,255,0.10)',
                color: '#fff',
                padding: '12px 20px',
                fontSize: '14px',
                border: '1px solid rgba(255,255,255,0.22)',
                backdropFilter: 'blur(8px)',
              }}
            >
              Conhecer mais
            </a>
          </motion.div>
        </div>

        <div className="relative z-10">
          <TrustBar />
        </div>
      </div>

      {/* ── DESKTOP (≥ 768px) ────────────────────────────── */}
      <div
        className="relative hidden md:flex flex-col"
        style={{ height: '100svh', minHeight: '650px', background: '#1C1008', overflow: 'hidden' }}
      >
        <div className="absolute inset-0">
          <img
            src={fotoDesktop}
            alt="Ana Clara Laranja"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: '52% center',
              transform: 'scale(1.18)',
              transformOrigin: '62% center',
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: `
                linear-gradient(to right, rgba(15,8,3,0.92) 0%, rgba(15,8,3,0.75) 35%, rgba(15,8,3,0.20) 55%, transparent 72%),
                linear-gradient(to top, rgba(15,8,3,0.55) 0%, transparent 25%)
              `,
            }}
          />
        </div>

        <div className="relative z-10 flex-1 flex flex-col justify-center" style={{ paddingLeft: '360px', paddingRight: '360px' }}>
          <div>
            <motion.div
              className="flex items-center gap-2 mb-5"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease, delay: 0.2 }}
            >
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.70)' }}>
                Aceita novos pacientes · CRP 16/11510
              </span>
            </motion.div>

            <motion.h1
              className="font-serif mb-4 leading-tight"
              style={{ fontSize: 'clamp(42px, 5vw, 68px)', fontWeight: 400, color: '#fff' }}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.35 }}
            >
              Sua vida merece
              <br />
              <em className="not-italic" style={{ color: '#D4956E' }}>leveza e cuidado</em>
              <br />além da correria
            </motion.h1>

            <motion.p
              className="mb-8 leading-relaxed"
              style={{ fontSize: '16px', color: 'rgba(255,255,255,0.68)', maxWidth: '400px' }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease, delay: 0.52 }}
            >
              Psicoterapia individual online e presencial —
              um espaço seguro para se reconectar consigo.
            </motion.p>

            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease, delay: 0.65 }}
            >
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
            </motion.div>
          </div>
        </div>

        <div className="relative z-10">
          <TrustBar />
        </div>
      </div>

    </div>
  );
}
