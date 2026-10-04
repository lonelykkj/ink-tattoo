import { useRef, useState } from 'react'

// Thumbs (600px) for the grid, full size (900px) only loads when the lightbox opens.
const thumbs = import.meta.glob<string>('../assets/works/thumbs/*.webp', { eager: true, import: 'default' })
const photos = import.meta.glob<string>('../assets/works/*.webp', { eager: true, import: 'default' })

const works = [
  { cat: 'Fineline', title: 'Cordilheira', place: 'pulso', time: '1h30', file: 'cordilheira', alt: 'Tatuagem fineline de montanhas no pulso' },
  { cat: 'Blackwork', title: 'Folhagem noturna', place: 'antebraço', time: '4h', file: 'folhagem-noturna', alt: 'Tatuagem blackwork floral no antebraço' },
  { cat: 'Old school', title: 'Rosa & serpente', place: 'perna', time: '4h', file: 'rosa-serpente', alt: 'Tatuagem old school colorida na perna' },
  { cat: 'Fineline', title: 'Jardim de mão', place: 'mão', time: '2h', file: 'jardim-de-mao', alt: 'Tatuagem fineline floral na mão' },
  { cat: 'Blackwork', title: 'Ornamental', place: 'braço', time: '5h', file: 'ornamental', alt: 'Tatuagem blackwork ornamental no braço' },
  { cat: 'Flash', title: 'Borboleta', place: 'costas', time: '1h', file: 'borboleta', alt: 'Tatuagem flash de borboleta nas costas' },
  { cat: 'Old school', title: 'Rosa clássica', place: 'mão', time: '2h', file: 'rosa-classica', alt: 'Tatuagem old school de rosa vermelha na mão' },
  { cat: 'Blackwork', title: 'Olho que vê', place: 'mão', time: '2h', file: 'olho-que-ve', alt: 'Tatuagem blackwork de olho na mão' },
  { cat: 'Fineline', title: 'Coluna botânica', place: 'coluna', time: '3h', file: 'coluna-botanica', alt: 'Tatuagem fineline botânica ao longo da coluna' },
  { cat: 'Flash', title: 'Musa', place: 'antebraço', time: '3h', file: 'musa', alt: 'Tatuagem flash ilustrativa no antebraço' },
]

type Work = (typeof works)[number]

const tabs = ['Todos', 'Fineline', 'Blackwork', 'Old school', 'Flash']

export default function Works() {
  const [filter, setFilter] = useState('Todos')
  const [selected, setSelected] = useState<Work | null>(null)
  const dialog = useRef<HTMLDialogElement>(null)
  const shown = works.filter((w) => filter === 'Todos' || w.cat === filter)

  function openPhoto(w: Work) {
    setSelected(w)
    dialog.current?.showModal()
  }

  return (
    <section id="trabalhos" aria-labelledby="trabalhos-t" className="gutter flex flex-col gap-10 py-24">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div className="flex flex-col gap-3.5">
          <span className="font-mono text-[13px] font-bold">02/07 — {'{TRABALHOS/SELECIONADOS}'}</span>
          <h2 id="trabalhos-t" className="text-[clamp(44px,6vw,88px)] leading-[.9]">
            Pele
            <br />& tinta
          </h2>
          <span className="text-[15px] font-bold text-[#444]">{shown.length} trabalhos recentes · 2025–2026</span>
        </div>
        <div role="group" aria-label="Filtrar por estilo" className="flex flex-wrap gap-2">
          {tabs.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setFilter(t)}
              aria-pressed={filter === t}
              className={`min-h-11 cursor-pointer rounded-full border-2 border-ink px-5 text-[15px] font-extrabold text-ink ${filter === t ? 'bg-accent' : 'bg-transparent'}`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-6">
        {shown.map((w, i) => (
          <article key={w.title} className="reveal flex flex-col gap-3">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[18px] border-2 border-ink bg-[#DADAD6] bg-[repeating-linear-gradient(135deg,rgba(18,18,18,.07)_0_2px,transparent_2px_12px)] transition-all duration-350 ease-out-soft hover:[transform:translateY(-8px)_rotate(-1.5deg)] hover:shadow-[8px_10px_0_#121212]">
              <button type="button" onClick={() => openPhoto(w)} aria-label={`Ampliar foto: ${w.title}`} className="block size-full cursor-zoom-in p-0">
                <img src={thumbs[`../assets/works/thumbs/${w.file}.webp`]} alt={w.alt} loading="lazy" className="block size-full object-cover" />
              </button>
              <span className="pointer-events-none absolute top-3 left-3 rounded-full bg-ink px-2 py-1 font-mono text-[11px] font-bold text-paper">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="pointer-events-none absolute right-3 bottom-3 rounded-full border-[1.5px] border-ink bg-accent px-2.5 py-1 text-[12px] font-extrabold text-ink">
                {w.cat}
              </span>
            </div>
            <div className="flex items-baseline justify-between gap-3">
              <span className="text-[17px] font-extrabold">{w.title}</span>
              <span className="font-mono text-[12px] whitespace-nowrap text-[#555]">
                {w.place} · {w.time}
              </span>
            </div>
          </article>
        ))}
      </div>

      {/* lightbox: Esc or a click outside the photo closes it */}
      <dialog
        ref={dialog}
        onClose={() => setSelected(null)}
        onClick={(e) => e.target === e.currentTarget && dialog.current?.close()}
        className="m-auto max-h-none max-w-none bg-transparent p-0 backdrop:bg-ink/90"
      >
        {selected && (
          <figure className="m-0 flex flex-col gap-3">
            <img
              src={photos[`../assets/works/${selected.file}.webp`]}
              alt={selected.alt}
              className="block max-h-[82dvh] max-w-[92vw] rounded-[18px] border-2 border-paper object-contain"
            />
            <figcaption className="flex items-center justify-between gap-4 font-mono text-[13px] font-bold text-paper">
              <span>
                {selected.title} · {selected.place} · {selected.time}
              </span>
              <button type="button" onClick={() => dialog.current?.close()} className="min-h-11 cursor-pointer px-2 text-paper underline">
                FECHAR ✕
              </button>
            </figcaption>
          </figure>
        )}
      </dialog>
    </section>
  )
}
