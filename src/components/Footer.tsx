import WhatsAppIcon from '@/components/WhatsAppIcon'
import { ARTIST, CONTACT, WHATSAPP } from '@/data/site'
import { CHAT_URL } from '@/lib/whatsapp'

export default function Footer() {
  return (
    <footer className="gutter flex flex-col gap-10 bg-ink pt-16 pb-8 text-paper">
      <div className="text-[clamp(64px,13vw,210px)] leading-[.82] font-black tracking-[-.045em] uppercase font-stretch-[112%]">
        Agende<span className="inline-block animate-spin-slow text-accent">✱</span>
      </div>
      <div className="flex flex-wrap justify-between gap-x-8 gap-y-4 font-mono text-[13px] font-bold text-muted">
        <span>07/07 — © 2026 {ARTIST.toUpperCase()} TATTOO · CNPJ 00.000.000/0001-00 (fictício) · Fotos: Unsplash</span>
        <div className="flex flex-wrap gap-6 text-paper">
          <a href={CONTACT.instagramUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 py-3 text-paper underline">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" className="size-4">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
            INSTAGRAM {CONTACT.instagram}
          </a>
          <a href={CHAT_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 py-3 text-paper underline">
            <WhatsAppIcon className="size-4" />
            WHATSAPP {WHATSAPP.display}
          </a>
          <a href="#top" className="py-3 text-paper underline">
            ↑ TOPO
          </a>
        </div>
      </div>
    </footer>
  )
}
