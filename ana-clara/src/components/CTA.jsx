import { MessageCircle, Instagram, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];
const vp = { once: true, margin: '-80px' };

export default function CTA() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.p
          className="eyebrow mb-5"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.5, ease }}
        >
          Dar o primeiro passo
        </motion.p>

        <motion.h2
          className="section-headline text-stone-900 mb-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.6, ease, delay: 0.1 }}
        >
          Pronta para cuidar de{' '}
          <em className="not-italic" style={{ color: '#B5734A' }}>você mesma?</em>
        </motion.h2>

        <motion.p
          className="text-stone-500 text-lg leading-relaxed mb-10 max-w-lg mx-auto"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.6, ease, delay: 0.2 }}
        >
          Não espere o momento perfeito. O cuidado começa com um único passo.
          Estou aqui para caminhar com você.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.6, ease, delay: 0.3 }}
        >
          <a
            href="https://wa.me/message/6UVITCQEF3U"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-base py-4 px-8"
          >
            <MessageCircle size={18} />
            Agendar pelo WhatsApp
            <ArrowRight size={16} />
          </a>
          <a
            href="https://www.instagram.com/anaclaralaranja/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline text-base py-4 px-8"
          >
            <Instagram size={18} />
            Seguir no Instagram
          </a>
        </motion.div>

        <motion.div
          className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl text-sm text-stone-600"
          style={{ background: '#F5EDE3' }}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={vp}
          transition={{ duration: 0.5, ease, delay: 0.4 }}
        >
          <div className="w-2 h-2 rounded-full bg-green-400" />
          Atendimentos online e presenciais disponíveis
        </motion.div>
      </div>
    </section>
  );
}
