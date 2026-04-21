const milestones = [
  { num: '01', title: 'Comecei por necessidade, não por plano' },
  { num: '02', title: 'Validei o método vendendo de casa' },
  { num: '03', title: 'Ensinei +15.000 mulheres a fazerem o mesmo' },
]

export default function Story() {
  return (
    <section className="bg-bg-light py-24">
      <div className="max-w-copy mx-auto px-6">
        <p className="eyebrow text-text-muted mb-4">MINHA HISTÓRIA</p>
        <h2 className="section-headline text-text-dark mb-10">
          Meu filho tinha 5 meses{' '}
          <strong className="font-bold">quando foi pro CTI.</strong>
        </h2>

        <div className="space-y-6 text-[#444444] text-body-lg leading-relaxed mb-12">
          <p>
            Eu trabalhava fora, com rotina puxada. Ele tinha ido pra creche com 3 meses e meio
            e vivia doente. Febre, remédio, preocupação.
          </p>
          <p>
            Até que aos 5 meses, tudo saiu do controle. Foi internado no CTI. Eu lembro de olhar
            pra aquilo e sentir que meu mundo tinha desmoronado. Nenhum trabalho fazia sentido mais.
          </p>
          <p>
            Eu trabalhava o dia inteiro, chegava em casa exausta, e o dinheiro nunca parecia suficiente
            pra compensar o que eu tava perdendo. Mas a pior parte não era o dinheiro. Era a sensação
            de não ter escolha.
          </p>
          <p>
            Até que um dia eu pensei: preciso dar um jeito de trabalhar de casa. E foi aí que o brigadeiro
            entrou. A primeira caixa que vendi foi pra uma vizinha. Por necessidade, não por plano.
            Depois vieram os amigos. Depois o iFood. Depois encomendas pra escritórios.
          </p>
          <p>
            A grande diferença entre a Mari de antes e a Mari de agora é um caminho validado.
            Quando eu percebi que um passo a passo claro podia tirar qualquer mulher da estagnação,
            tudo mudou. Hoje já ensinei mais de 15 mil mulheres a fazerem o mesmo.
          </p>
        </div>

        {/* Milestones */}
        <div className="space-y-6 mb-12">
          {milestones.map(({ num, title }) => (
            <div key={num} className="flex items-start gap-4">
              <div
                className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-sm font-medium"
                style={{ background: '#E8D5C0', color: '#666' }}
              >
                {num}
              </div>
              <div className="pt-2.5">
                <p className="text-text-dark font-semibold text-lg">{title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bio */}
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-accent border-2 border-accent-hover flex items-center justify-center">
            <span className="font-bold text-on-accent text-lg">M</span>
          </div>
          <div>
            <p className="font-semibold text-text-dark">Mari</p>
            <p className="text-[#888888] text-sm">Fundadora do Plano FV7</p>
          </div>
        </div>
      </div>
    </section>
  )
}
