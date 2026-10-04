import estudio from '@/assets/estudio.webp'
import { ARTIST } from '@/data/site'

const chips = ['8 anos de traço', '+1.200 tatuagens', 'Estúdio privado', 'Material descartável']

const steps = [
  { n: '01', title: 'Briefing', text: 'Você conta a ideia, a região do corpo e o tamanho.' },
  { n: '02', title: 'Desenho', text: 'Crio o projeto autoral e ajustamos juntos até ficar certo.' },
  { n: '03', title: 'Sessão', text: 'Dia marcado, estúdio preparado, sem pressa.', highlight: true },
  { n: '04', title: 'Cuidados', text: 'Guia de cicatrização e retoque incluso se precisar.' },
]

export default function About() {
  return (
    <section aria-labelledby="sobre-t" className="gutter flex flex-wrap gap-14 py-24">
      <div className="flex min-w-0 flex-[1_1_380px] flex-col gap-6">
        <span className="font-mono text-[13px] font-bold">04/07 — {'{SOBRE}'}</span>
        <h2 id="sobre-t" className="text-[clamp(40px,5vw,72px)] leading-[.92]">
          Oi, eu sou
          <br />
          <span className="relative inline-block">
            {ARTIST}
            <svg aria-hidden="true" viewBox="0 0 300 20" preserveAspectRatio="none" className="absolute bottom-[-.12em] left-0 h-[.2em] w-full">
              <path d="M4 14 C80 4 200 4 296 12" stroke="var(--color-accent)" strokeWidth="8" fill="none" strokeLinecap="round" />
            </svg>
          </span>
        </h2>
        <p className="m-0 max-w-[520px] text-[18px] leading-[1.55]">
          Tatuo há 8 anos em Pinheiros, São Paulo. Comecei desenhando flash em caderno de escola e nunca parei: hoje cada peça sai de um
          projeto feito só pra você, com traço limpo e preto que dura.
        </p>
        <figure className="reveal relative m-0 max-w-[520px]">
          <img
            src={estudio}
            alt="Tatuador trabalhando no braço de um cliente no estúdio"
            loading="lazy"
            className="block h-[300px] w-full rounded-[22px] border-2 border-ink object-cover"
          />
          <figcaption className="absolute bottom-[18px] -left-2.5 -rotate-4 rounded-full border-2 border-ink bg-accent px-[18px] py-1 font-hand text-[26px] font-bold text-ink">
            no estúdio, terça à tarde
          </figcaption>
        </figure>
        <div className="flex flex-wrap gap-3">
          {chips.map((c) => (
            <span
              key={c}
              className="rounded-full border-2 border-ink px-[18px] py-2.5 text-[14px] font-extrabold transition-transform duration-200 hover:-translate-y-[3px]"
            >
              {c}
            </span>
          ))}
        </div>
      </div>

      <ol className="m-0 grid min-w-0 flex-[1.3_1_520px] list-none grid-cols-2 gap-4 p-0">
        {steps.map((s) => (
          <li
            key={s.n}
            className={`reveal flex flex-col gap-2.5 rounded-[20px] border-2 border-ink p-6 transition-[transform,box-shadow] duration-300 hover:[transform:translate(-4px,-4px)] hover:shadow-[6px_6px_0_#121212] ${s.highlight ? 'bg-accent' : 'bg-white'}`}
          >
            <span className="font-mono text-[13px] font-bold">{s.n}</span>
            <span className="text-[24px] font-black uppercase font-stretch-[112%]">{s.title}</span>
            <span className={`text-[15px] leading-normal ${s.highlight ? 'text-ink' : 'text-[#444]'}`}>{s.text}</span>
          </li>
        ))}
      </ol>
    </section>
  )
}
