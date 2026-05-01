import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Atendimentos', href: '#atendimentos' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Perguntas', href: '#faq' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#topo" className="flex items-center gap-2">
          <span
            className="font-serif text-xl font-medium"
            style={{ color: '#B5734A' }}
          >
            Ana Clara Laranja
          </span>
          <span className="hidden sm:block text-xs text-stone-400 font-medium tracking-wide">
            Psicóloga
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/message/6UVITCQEF3U"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm py-2.5 px-5"
          >
            Agendar sessão
          </a>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-stone-700"
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-stone-100 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-base font-medium text-stone-700"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/message/6UVITCQEF3U"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm text-center mt-2"
          >
            Agendar sessão
          </a>
        </div>
      )}
    </header>
  );
}
