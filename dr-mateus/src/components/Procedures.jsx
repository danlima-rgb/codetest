const procedures = [
  {
    title: 'Rinoplastia',
    subtitle: 'Nariz',
    img: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=500&h=380&auto=format&fit=crop&q=80',
    tag: 'Mais Procurado',
  },
  {
    title: 'Lipoaspiração',
    subtitle: 'Contorno Corporal',
    img: 'https://images.unsplash.com/photo-1611072337226-1d7f61db88d4?w=500&h=380&auto=format&fit=crop&q=80',
  },
  {
    title: 'Mamoplastia',
    subtitle: 'Busto',
    img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&h=380&auto=format&fit=crop&q=80',
  },
  {
    title: 'Abdominoplastia',
    subtitle: 'Abdômen',
    img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=380&auto=format&fit=crop&q=80',
  },
  {
    title: 'Blefaroplastia',
    subtitle: 'Pálpebras',
    img: 'https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?w=500&h=380&auto=format&fit=crop&q=80',
  },
  {
    title: 'Lifting Facial',
    subtitle: 'Rejuvenescimento',
    img: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=500&h=380&auto=format&fit=crop&q=80',
  },
]

export default function Procedures() {
  return (
    <section className="py-24 bg-cream" id="procedimentos">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-6">
          <div>
            <p className="text-xs uppercase tracking-widest text-muted font-medium mb-3">Nossos procedimentos</p>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-dark">
              Cirurgia Plástica{' '}
              <span className="text-gold font-serif italic">Estética</span>
            </h2>
          </div>
          <a
            href="#contato"
            className="flex items-center gap-2 text-sm font-medium text-dark border-b border-dark/30 pb-0.5 hover:border-dark transition-colors self-start sm:self-auto"
          >
            Ver todos
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {procedures.map((p) => (
            <a
              key={p.title}
              href="#contato"
              className="group relative bg-card rounded-3xl overflow-hidden aspect-[4/3] cursor-pointer"
            >
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-dark/10 to-transparent" />

              {/* Tag */}
              {p.tag && (
                <div className="absolute top-4 left-4 bg-gold text-white text-xs font-medium px-3 py-1.5 rounded-full">
                  {p.tag}
                </div>
              )}

              {/* Arrow */}
              <div className="absolute top-4 right-4 w-9 h-9 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>

              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-cream/70 text-xs uppercase tracking-widest mb-1">{p.subtitle}</p>
                <p className="font-serif text-cream text-xl font-semibold">{p.title}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
