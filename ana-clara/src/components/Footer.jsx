import { Instagram, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-stone-200" style={{ background: '#FAF8F5' }}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          <div className="text-center md:text-left">
            <p className="font-serif text-lg font-medium" style={{ color: '#B5734A' }}>
              Ana Clara Laranja
            </p>
            <p className="text-stone-500 text-sm mt-1">
              Psicóloga · CRP 16/11510 · Clínica Integra — ES
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/anaclaralaranja/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl flex items-center justify-center transition-colors hover:opacity-80"
              style={{ background: '#F5EDE3', color: '#B5734A' }}
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://wa.me/message/6UVITCQEF3U"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl flex items-center justify-center transition-colors hover:opacity-80"
              style={{ background: '#F5EDE3', color: '#B5734A' }}
              aria-label="WhatsApp"
            >
              <MessageCircle size={18} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-stone-200 text-center text-xs text-stone-400">
          <p>
            © {new Date().getFullYear()} Ana Clara Laranja. Todos os direitos reservados.
          </p>
          <p className="mt-1">
            O sigilo profissional é garantido conforme o Código de Ética dos Psicólogos.
          </p>
        </div>
      </div>
    </footer>
  );
}
