import About from '@/components/About'
import Booking from '@/components/Booking'
import Faq from '@/components/Faq'
import Flash from '@/components/Flash'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import WhatsAppIcon from '@/components/WhatsAppIcon'
import Works from '@/components/Works'
import { CHAT_URL } from '@/lib/whatsapp'

export default function App() {
  return (
    <div id="top" className="overflow-hidden">
      <Hero />
      <Marquee />
      <main>
        <Works />
        <Flash />
        <About />
        <Booking />
        <Faq />
      </main>
      <Footer />
      <a
        href={CHAT_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com o tatuador no WhatsApp"
        className="fixed right-4 bottom-[max(16px,env(safe-area-inset-bottom))] z-40 grid size-14 place-items-center rounded-full border-2 border-ink bg-[#25D366] text-ink shadow-[4px_4px_0_#121212] transition-transform duration-300 ease-spring hover:scale-110"
      >
        <WhatsAppIcon className="size-7" />
      </a>
    </div>
  )
}
