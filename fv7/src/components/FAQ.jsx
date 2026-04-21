import { useState } from 'react'

const faqs = [
  {
    q: 'Preciso saber cozinhar?',
    a: 'Não. O método foi feito pra quem nunca cozinhou. Receita do zero, ingredientes simples, sem técnica avançada.',
  },
  {
    q: 'Preciso de equipamento profissional?',
    a: 'Não. Panela comum, espátula, forno de casa. Nada industrial, nada importado.',
  },
  {
    q: 'Tenho vergonha de vender. Funciona pra mim?',
    a: 'Sim. O Ebook de Revenda ensina vendas sem sair na rua, sem postar stories, sem abordar conhecidos. Tudo por WhatsApp e encomenda.',
  },
  {
    q: 'Quanto tempo leva pra fazer a primeira venda?',
    a: 'A maioria das alunas faz a primeira venda em até 7 dias seguindo o checklist. Se em 30 dias não vender, devolvemos 100%.',
  },
  {
    q: 'Funciona em cidade pequena?',
    a: 'Sim. +15.000 alunas em todo Brasil e em 15 países, incluindo cidades de menos de 10 mil habitantes.',
  },
  {
    q: 'Quanto tempo por dia preciso dedicar?',
    a: 'Uma produção semanal de 3-4 horas num sábado ou noite de quinta. O resto é vender pelo celular no seu ritmo.',
  },
  {
    q: 'Como funciona o acesso?',
    a: 'Após o pagamento, acesso imediato por e-mail. Todas as aulas, bônus e planilhas ficam disponíveis pra sempre (vitalício).',
  },
  {
    q: 'E se eu não conseguir vender?',
    a: '30 dias de garantia incondicional. Se seguir o método e não fizer a primeira venda, devolvemos 100% sem perguntas.',
  },
]

function Item({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-border">
      <button
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
        onClick={() => setOpen(!open)}
      >
        <span className="text-text-primary font-medium text-body">{q}</span>
        <span
          className="text-accent text-xl flex-shrink-0 transition-transform duration-200"
          style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
        >
          ›
        </span>
      </button>
      {open && (
        <p className="text-text-muted text-body leading-relaxed pb-5">{a}</p>
      )}
    </div>
  )
}

export default function FAQ() {
  return (
    <section className="bg-bg py-24">
      <div className="max-w-copy mx-auto px-6">
        <p className="eyebrow mb-4">PERGUNTAS FREQUENTES</p>
        <h2 className="section-headline text-text-primary mb-10">
          Perguntas{' '}
          <span className="text-accent">frequentes</span>
        </h2>

        <div>
          {faqs.map(item => (
            <Item key={item.q} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}
