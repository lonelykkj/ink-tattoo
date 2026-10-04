import About from '@/components/About'
import Booking from '@/components/Booking'
import Faq from '@/components/Faq'
import Flash from '@/components/Flash'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import Works from '@/components/Works'

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
    </div>
  )
}
