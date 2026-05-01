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
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : ''
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#topo" className="flex items-center gap-2">
          <span
            className="font-serif text-xl font-medium"
            style={{ color: scrolled ? '#B5734A' : '#FAF8F5' }}
          >
            Ana Clara Laranja
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium transition-colors"
              style={{ color: scrolled ? '#57534E' : 'rgba(255,255,255,0.85)' }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/message/6UVITCQEF3U"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium px-5 py-2.5 rounded-full transition-all"
            style={{
              background: '#B5734A',
              color: '#fff',
            }}
          >
            Agendar sessão
          </a>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2"
          style={{ color: scrolled ? '#57534E' : '#FAF8F5' }}
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
