export default function About() {
  return (
    <section className="py-24 bg-cream" id="sobre-dr">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          {/* Left — content */}
          <div className="flex-1">
            <p className="text-xs uppercase tracking-widest text-muted font-medium mb-4">Sobre o médico</p>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-dark leading-tight mb-8">
              Dr. Mateus Casotti
            </h2>

            <div className="space-y-5 text-muted leading-relaxed font-light">
              <p>
                Cirurgião plástico em Vitória – Espírito Santo, com atuação em cirurgia plástica estética
                e atendimento individualizado. O Dr. Mateus Casotti é reconhecido por sua abordagem
                cuidadosa e personalizada, sempre priorizando a segurança e o bem-estar de cada paciente.
              </p>
              <p>
                Com formação sólida e mais de uma década dedicada à cirurgia plástica, o Dr. Mateus
                combina técnica apurada com sensibilidade estética para entregar resultados que respeitam
                a beleza natural de cada pessoa.
              </p>
              <p>
                Comprometido com a atualização constante, frequenta cursos e congressos nacionais e
                internacionais para estar sempre à frente das melhores práticas da área.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold text-dark">Verificado Google</p>
                  <p className="text-xs text-muted">5,0 ⭐ (12 avaliações)</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold text-dark">Vitória · ES</p>
                  <p className="text-xs text-muted">Espírito Santo, Brasil</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — photo */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative max-w-sm w-full">
              <div className="rounded-3xl overflow-hidden aspect-[3/4] bg-card shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=500&h=660&auto=format&fit=crop&q=80"
                  alt="Dr. Mateus Casotti - Cirurgião Plástico em Vitória ES"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decoration circle */}
              <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full border-2 border-gold/30 -z-10" />
              <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-gold/10 -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
