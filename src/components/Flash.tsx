import type { ReactNode } from 'react'
import { whatsappUrl } from '@/lib/whatsapp'

const accent = 'var(--color-accent)'

const flashes: { name: string; price: string; label: string; reserved?: boolean; art: ReactNode }[] = [
  {
    name: 'Coração',
    price: 'R$ 380',
    label: 'coração com faixa',
    art: (
      <>
        <path d="M60 104 C18 74 8 46 28 30 C44 18 58 28 60 40 C62 28 76 18 92 30 C112 46 102 74 60 104Z" fill={accent} stroke="#121212" strokeWidth="3.5" />
        <path d="M10 56 L110 56 L102 68 L110 80 L10 80 L18 68Z" fill="#ECECEA" stroke="#121212" strokeWidth="3.5" strokeLinejoin="round" />
        <text x="60" y="73" textAnchor="middle" fontFamily="Archivo, sans-serif" fontWeight="900" fontSize="14" fill="#121212">
          ETERNO
        </text>
      </>
    ),
  },
  {
    name: 'Adaga',
    price: 'R$ 450',
    label: 'adaga',
    art: (
      <g stroke="#121212" strokeWidth="3.5" strokeLinejoin="round">
        <path d="M60 8 L69 70 L51 70Z" fill="#FFFFFF" />
        <line x1="60" y1="14" x2="60" y2="66" />
        <rect x="34" y="70" width="52" height="9" rx="4" fill={accent} />
        <rect x="54" y="79" width="12" height="24" fill="#121212" />
        <circle cx="60" cy="108" r="7" fill={accent} />
      </g>
    ),
  },
  {
    name: 'Lua',
    price: 'R$ 320',
    label: 'lua e estrela',
    art: (
      <>
        <path d="M66 14 A46 46 0 1 0 106 84 A36 36 0 1 1 66 14Z" fill={accent} stroke="#121212" strokeWidth="3.5" strokeLinejoin="round" />
        <path d="M88 26 L91 35 L100 36 L93 42 L95 51 L88 46 L81 51 L83 42 L76 36 L85 35Z" fill="#121212" />
        <circle cx="100" cy="64" r="3" fill="#121212" />
        <circle cx="78" cy="60" r="2" fill="#121212" />
      </>
    ),
  },
  {
    name: 'Olho',
    price: 'R$ 400',
    label: 'olho',
    art: (
      <g stroke="#121212" strokeWidth="3.5" strokeLinecap="round">
        <line x1="60" y1="10" x2="60" y2="24" />
        <line x1="28" y1="18" x2="35" y2="30" />
        <line x1="92" y1="18" x2="85" y2="30" />
        <line x1="60" y1="96" x2="60" y2="110" />
        <line x1="28" y1="102" x2="35" y2="90" />
        <line x1="92" y1="102" x2="85" y2="90" />
        <path d="M10 60 Q60 18 110 60 Q60 102 10 60Z" fill="#FFFFFF" strokeLinejoin="round" />
        <circle cx="60" cy="60" r="19" fill={accent} />
        <circle cx="60" cy="60" r="8" fill="#121212" />
      </g>
    ),
  },
  {
    name: 'Rosa',
    price: 'R$ 520',
    label: 'rosa',
    art: (
      <g stroke="#121212" strokeWidth="3.5" strokeLinejoin="round" strokeLinecap="round">
        <path d="M60 84 L60 114" fill="none" />
        <path d="M60 100 C44 96 34 104 30 112 C44 114 54 108 60 100Z" fill="#FFFFFF" />
        <path d="M60 94 C76 88 88 94 92 104 C78 108 66 104 60 94Z" fill="#FFFFFF" />
        <circle cx="60" cy="52" r="34" fill={accent} />
        <path d="M60 36 C78 36 80 62 62 64 C48 66 44 50 56 46 C64 44 68 52 62 55" fill="none" />
        <path d="M30 42 C38 30 48 26 56 28 M90 42 C84 30 74 26 66 28 M34 70 C42 80 52 84 60 82" fill="none" />
      </g>
    ),
  },
  {
    name: 'Brilho',
    price: 'R$ 280',
    label: 'brilho de quatro pontas',
    reserved: true,
    art: (
      <>
        <path d="M60 8 Q66 54 112 60 Q66 66 60 112 Q54 66 8 60 Q54 54 60 8Z" fill={accent} stroke="#121212" strokeWidth="3.5" strokeLinejoin="round" />
        <path d="M96 14 Q98 24 108 26 Q98 28 96 38 Q94 28 84 26 Q94 24 96 14Z" fill="#121212" />
      </>
    ),
  },
]

export default function Flash() {
  return (
    <section aria-labelledby="flash-t" className="gutter flex flex-col gap-12 bg-ink py-24 text-paper">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div className="flex flex-col gap-3.5">
          <span className="font-mono text-[13px] font-bold text-muted">03/07 — {'{FLASH/DISPONÍVEL}'}</span>
          <h2 id="flash-t" className="text-[clamp(44px,6vw,88px)] leading-[.9]">
            Flash sheet<span className="text-accent">*</span>
          </h2>
        </div>
        <div className="flex max-w-[400px] flex-col gap-4">
          <p className="m-0 text-[16px] leading-normal text-muted">
            Desenhos autorais, tatuados uma única vez. Escolha o seu, reserve com sinal de 30% e ele sai da folha. Tamanhos de 5 a 10 cm.
          </p>
          <div className="inline-flex items-stretch self-start overflow-hidden rounded-full border-2 border-paper text-[14px] font-extrabold">
            <span className="bg-accent px-4 py-2.5 text-ink">PRÓXIMO FLASH DAY</span>
            <span className="px-4 py-2.5">14 NOV · SÁB · 10h–20h</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-5">
        {flashes.map((f) => (
          <div
            key={f.name}
            className="group reveal relative flex flex-col gap-3.5 rounded-[18px] bg-paper p-5 text-ink transition-transform duration-350 ease-spring hover:scale-104 hover:-rotate-3 even:hover:rotate-3"
          >
            {f.reserved && (
              <span className="absolute top-3.5 right-3.5 rounded-full bg-ink px-2 py-1 font-mono text-[11px] font-bold text-paper">RESERVADO</span>
            )}
            <svg
              viewBox="0 0 120 120"
              role="img"
              aria-label={`Flash: ${f.label}`}
              className={`h-auto w-full transition-transform duration-500 ease-spring group-hover:scale-108 ${f.reserved ? 'opacity-55' : ''}`}
            >
              {f.art}
            </svg>
            <div className="flex items-center justify-between">
              <span className="font-extrabold">{f.name}</span>
              <span className={`font-mono text-[13px] ${f.reserved ? 'line-through' : ''}`}>{f.price}</span>
            </div>
            {!f.reserved && (
              <a
                href={whatsappUrl(`Quero reservar o flash ${f.name} (${f.price})`)}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border-2 border-ink bg-accent py-2 text-center text-[14px] font-extrabold text-ink no-underline transition-colors hover:bg-ink hover:text-paper"
              >
                Quero esse ✱
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
