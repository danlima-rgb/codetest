export default function Footer() {
  return (
    <footer className="bg-[#0A0503] border-t border-border pt-16 pb-10">
      <div className="max-w-content mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="font-bold text-on-accent text-sm">F</span>
              </div>
              <span className="text-text-primary font-semibold">FV7</span>
            </div>
            <p className="text-text-muted text-sm leading-relaxed max-w-xs">
              O método que ensina mulheres a construírem renda real da cozinha de casa,
              sem sair pra vender.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="eyebrow text-text-disabled mb-4">LINKS</p>
            <ul className="space-y-2">
              {['YouTube', 'Instagram', 'Suporte'].map(link => (
                <li key={link}>
                  <a href="#" className="text-text-muted text-sm hover:text-text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="eyebrow text-text-disabled mb-4">LEGAL</p>
            <ul className="space-y-2">
              {['Termos de Uso', 'Política de Privacidade', 'Reembolso'].map(link => (
                <li key={link}>
                  <a href="#" className="text-text-muted text-sm hover:text-text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 space-y-3">
          <p className="text-text-disabled text-xs text-center">
            © 2026 Massucar Doceria · Todos os direitos reservados
          </p>
          <p className="text-text-disabled text-xs text-center max-w-2xl mx-auto leading-relaxed">
            Este site não é afiliado ao Facebook ou a qualquer entidade dele. A compra deste
            material não garante resultado. Usamos resultados reais de alunas como referência.
          </p>
        </div>
      </div>
    </footer>
  )
}
