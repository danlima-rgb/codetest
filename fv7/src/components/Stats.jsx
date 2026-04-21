const stats = [
  { value: '+15.000', label: 'ALUNAS ATIVAS' },
  { value: '15', label: 'PAÍSES' },
  { value: '7 dias', label: 'PRA PRIMEIRA VENDA', accent: true },
]

export default function Stats() {
  return (
    <section className="bg-bg border-y border-border">
      <div className="max-w-content mx-auto px-6 py-12">
        <div className="grid grid-cols-3 gap-8">
          {stats.map(({ value, label, accent }) => (
            <div key={label} className="flex flex-col gap-1">
              <span
                className="font-bold leading-none"
                style={{ fontSize: 'clamp(32px, 6vw, 52px)', color: accent ? '#F5A020' : '#FFFFFF' }}
              >
                {value}
              </span>
              <span className="eyebrow text-text-muted">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
