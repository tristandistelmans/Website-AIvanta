import { useState, useEffect } from 'react'
import { ChevronRight } from 'lucide-react'

const CALENDLY_URL = 'https://calendly.com/tristan-distelmans/30min'

export default function DemoHubNavbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between gap-8 px-6 py-3 rounded-full transition-all duration-500 bg-cream/80 backdrop-blur-xl border border-moss/15 text-charcoal ${
        scrolled ? 'shadow-lg border-moss/25' : 'shadow-sm'
      }`}
      style={{ width: 'min(560px, calc(100vw - 2rem))' }}
    >
      <a href="/" className="font-heading font-bold text-lg tracking-tight select-none">
        <span className="text-clay">Ai</span><span className="text-moss">nova</span>
        <span className="text-charcoal/30 font-body font-normal text-xs ml-2 hidden sm:inline">× WerfWacht</span>
      </a>

      <a
        href={CALENDLY_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-magnetic flex items-center gap-2 bg-clay text-cream px-5 py-2.5 rounded-full text-sm font-heading font-semibold"
      >
        <span className="btn-bg bg-clay-dark rounded-full" />
        <span className="btn-label flex items-center gap-2">
          Gratis demo aanvragen <ChevronRight size={14} />
        </span>
      </a>
    </nav>
  )
}
