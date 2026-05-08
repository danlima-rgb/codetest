export default function Contact() {
  return (
    <section className="py-24 bg-cream" id="contato">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-start">

          {/* Left — content */}
          <div className="flex-1">
            <p className="text-xs uppercase tracking-widest text-muted font-medium mb-4">Entre em contato</p>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-dark leading-tight mb-6">
              Agende sua
              <br />
              <em className="not-italic text-gold">consulta</em>
            </h2>
            <p className="text-muted leading-relaxed font-light max-w-sm mb-10">
              Dê o primeiro passo para a transformação que você sempre desejou.
              Entre em contato e marque sua consulta com o Dr. Mateus Casotti.
            </p>

            <div className="space-y-5">
              <a
                href="tel:+5527999999999"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-dark flex items-center justify-center flex-shrink-0 group-hover:bg-gold transition-colors">
                  <svg className="w-5 h-5 text-cream" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-muted uppercase tracking-wide">Telefone / WhatsApp</p>
                  <p className="font-medium text-dark">(27) 9 9999-9999</p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-card flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-muted uppercase tracking-wide">Endereço</p>
                  <p className="font-medium text-dark">Vitória, Espírito Santo</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-card flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-muted uppercase tracking-wide">Horário de atendimento</p>
                  <p className="font-medium text-dark">Seg – Sex: 8h às 18h</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — form card */}
          <div className="flex-1 w-full">
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="font-serif text-2xl font-semibold text-dark mb-6">Solicitar consulta</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-muted uppercase tracking-wide block mb-2">Nome</label>
                    <input
                      type="text"
                      placeholder="Seu nome"
                      className="w-full bg-cream rounded-xl px-4 py-3 text-sm text-dark placeholder:text-muted/60 outline-none focus:ring-2 focus:ring-gold/30 transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-muted uppercase tracking-wide block mb-2">Telefone</label>
                    <input
                      type="tel"
                      placeholder="(27) 9 9999-9999"
                      className="w-full bg-cream rounded-xl px-4 py-3 text-sm text-dark placeholder:text-muted/60 outline-none focus:ring-2 focus:ring-gold/30 transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs text-muted uppercase tracking-wide block mb-2">Procedimento de interesse</label>
                  <select className="w-full bg-cream rounded-xl px-4 py-3 text-sm text-dark outline-none focus:ring-2 focus:ring-gold/30 transition-all appearance-none">
                    <option value="">Selecione um procedimento</option>
                    <option>Rinoplastia</option>
                    <option>Lipoaspiração</option>
                    <option>Mamoplastia</option>
                    <option>Abdominoplastia</option>
                    <option>Blefaroplastia</option>
                    <option>Lifting Facial</option>
                    <option>Outro</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs text-muted uppercase tracking-wide block mb-2">Mensagem (opcional)</label>
                  <textarea
                    rows={3}
                    placeholder="Conte-nos um pouco sobre o que você deseja..."
                    className="w-full bg-cream rounded-xl px-4 py-3 text-sm text-dark placeholder:text-muted/60 outline-none focus:ring-2 focus:ring-gold/30 transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-dark text-cream text-sm font-medium py-4 rounded-xl hover:bg-dark/80 transition-colors mt-2"
                >
                  Enviar solicitação
                </button>
                <p className="text-xs text-muted text-center">
                  Ou entre em contato pelo WhatsApp para atendimento rápido
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
