const facts = [
  { value: 'R$ 250', label: 'valor mínimo' },
  { value: '30%', label: 'sinal p/ reservar', highlight: true },
  { value: '60 dias', label: 'retoque grátis' },
  { value: '18+', label: 'com documento' },
]

const faqs = [
  { q: 'Como é calculado o orçamento?', a: 'Pelo tamanho, nível de detalhe e região do corpo. Peças pequenas em fineline partem de R$ 250; fechamentos e projetos grandes são orçados por sessão (R$ 1.100 por sessão de até 5h).' },
  { q: 'Como funciona o sinal?', a: '30% do valor via Pix garantem a data e o desenho. O sinal é descontado no dia e pode ser remarcado uma vez com 48h de antecedência.' },
  { q: 'Você faz cobertura?', a: 'Sim, principalmente em blackwork. Mande uma foto da tatuagem antiga com boa luz para avaliarmos juntos o que é possível.' },
  { q: 'Como me preparo para a sessão?', a: 'Durma bem, coma antes de vir, evite álcool nas 24h anteriores e venha com roupa que deixe a região livre. Água e lanche por nossa conta.' },
  { q: 'Quais os cuidados depois?', a: 'Você sai com filme protetor e um guia impresso: lavar com sabonete neutro, hidratar 3x ao dia, nada de sol, piscina ou mar por 20 dias.' },
]

export default function Faq() {
  return (
    <section aria-labelledby="faq-t" className="gutter flex flex-wrap gap-12 pb-24">
      <div className="flex min-w-0 flex-[1_1_300px] flex-col gap-4">
        <span className="font-mono text-[13px] font-bold">06/07 — {'{DÚVIDAS}'}</span>
        <h2 id="faq-t" className="text-[clamp(40px,5vw,72px)] leading-[.92]">
          Antes de
          <br />
          marcar
        </h2>
        <div className="mt-3 grid max-w-[420px] grid-cols-2 gap-3">
          {facts.map((f) => (
            <div key={f.value} className={`flex flex-col gap-1 rounded-[18px] border-2 border-ink p-4 ${f.highlight ? 'bg-accent' : 'bg-white'}`}>
              <span className="text-[32px] font-black font-stretch-[112%]">{f.value}</span>
              <span className={`text-[13px] font-bold ${f.highlight ? 'text-ink' : 'text-[#444]'}`}>{f.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex min-w-0 flex-[1.6_1_520px] flex-col gap-3">
        {faqs.map((f, i) => (
          <details
            key={f.q}
            open={i === 0}
            className="group reveal rounded-[20px] border-2 border-ink bg-white px-6 transition-shadow duration-300 hover:shadow-[6px_6px_0_#121212]"
          >
            <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 text-[19px] font-extrabold [&::-webkit-details-marker]:hidden">
              {f.q}
              <span
                aria-hidden="true"
                className="flex size-8 flex-none items-center justify-center rounded-full border-2 border-ink bg-accent text-[20px] font-black transition-transform duration-350 ease-spring group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="m-0 mb-[22px] text-[16px] leading-[1.6] text-[#333]">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
