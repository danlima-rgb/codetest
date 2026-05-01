import { MessageCircle, Instagram, ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <p className="eyebrow mb-5">Dar o primeiro passo</p>
        <h2 className="section-headline text-stone-900 mb-5">
          Pronta para cuidar de{' '}
          <em className="not-italic" style={{ color: '#B5734A' }}>
            você mesma?
          </em>
        </h2>
        <p className="text-stone-500 text-lg leading-relaxed mb-10 max-w-lg mx-auto">
          Não espere o momento perfeito. O cuidado começa com um único passo.
          Estou aqui para caminhar com você.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
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
        </div>

        <div
          className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl text-sm text-stone-600"
          style={{ background: '#F5EDE3' }}
        >
          <div className="w-2 h-2 rounded-full bg-green-400" />
          Atendimentos online e presenciais disponíveis
        </div>
      </div>
    </section>
  );
}
