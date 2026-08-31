import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ArrowUpRight } from 'lucide-react'

import IridescentObject from '@/components/ui/iridescent-object'
import { meldConversie } from '@/lib/gtag'

/* HeroPastel
   ------------------------------------------------------------------
   Hero in de stijl van de aangeleverde referentie: bijna witte
   achtergrond met zachte pastelwassingen, een pil-navigatie, een grote
   lichte kop links en een glanzend object rechts.

   De vormgeving is nagebouwd, niet gekopieerd: het object is eigen SVG
   en de kleuren zijn opnieuw opgebouwd.                               */

const NAV = [
  { label: 'Services', href: '#werk' },
  { label: 'Clients', href: '#klanten' },
  { label: 'Contact', href: '#contact' },
]

const EMAIL = 'tristan@ainova.be'

function Sparkle({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M12 0c.9 6.3 4.8 10.2 11.1 11.1C16.8 12 12.9 15.9 12 22.2 11.1 15.9 7.2 12 .9 11.1 7.2 10.2 11.1 6.3 12 0Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function HeroPastel() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-op',
        { y: 22, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out', stagger: 0.09, delay: 0.1 }
      )
      gsap.fromTo('.hero-object',
        { scale: 0.92, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.4, ease: 'power2.out', delay: 0.15 }
      )
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="relative overflow-hidden bg-white">
      {/* pastelwassingen — los van elkaar zodat ze zacht in elkaar lopen */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 12% 88%, rgba(206,190,247,0.42) 0%, rgba(206,190,247,0) 100%),' +
            'radial-gradient(ellipse 60% 55% at 2% 55%, rgba(247,196,222,0.30) 0%, rgba(247,196,222,0) 100%),' +
            'radial-gradient(ellipse 80% 75% at 92% 42%, rgba(178,238,238,0.52) 0%, rgba(178,238,238,0) 100%),' +
            'radial-gradient(ellipse 55% 45% at 68% 96%, rgba(191,214,250,0.45) 0%, rgba(191,214,250,0) 100%)',
        }}
      />

      {/* glanzend object rechts */}
      <div className="hero-object pointer-events-none absolute -right-[24%] top-[58%] h-[36%] w-[76%] sm:-right-[8%] sm:top-[10%] sm:h-[76%] sm:w-[50%] lg:right-[-2%] lg:top-[8%] lg:h-[84%] lg:w-[44%]">
        <IridescentObject className="slow-float" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 md:px-10">
        {/* navigatie */}
        <nav className="hero-op flex items-center justify-between gap-4 pt-7">
          <a href="/" className="flex items-center gap-2.5">
            <Sparkle className="h-6 w-6 text-[#0A0A0A]" />
            <span className="font-body text-xl font-semibold tracking-tight text-[#0A0A0A]">
              Ainova
            </span>
          </a>

          <div className="flex items-center gap-2">
            <div className="hidden items-center gap-1 rounded-full border border-black/5 bg-white/70 px-2 py-2 shadow-[0_1px_2px_rgba(16,24,40,0.04)] backdrop-blur-md md:flex">
              {NAV.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="rounded-full px-4 py-2 font-mono-brand text-xs uppercase tracking-[0.14em] text-[#0A0A0A]/70 transition-colors hover:bg-black/[0.04] hover:text-[#0A0A0A]"
                >
                  {l.label}
                </a>
              ))}
            </div>

            <a
              href={`mailto:${EMAIL}`}
              onClick={() => meldConversie('e-mail hero-nav')}
              className="rounded-full bg-[#0A0A0A] px-5 py-3 font-mono-brand text-xs uppercase tracking-[0.14em] text-white transition-transform hover:-translate-y-0.5"
            >
              Get in touch
            </a>
          </div>
        </nav>

        {/* inhoud */}
        <div className="max-w-2xl pb-28 pt-24 md:pb-40 md:pt-32">
          <p className="hero-op flex items-center gap-2.5 font-mono-brand text-xs uppercase tracking-[0.18em] text-[#0A0A0A]/80">
            <Sparkle className="h-3.5 w-3.5 text-[#0A0A0A]" />
            AI growth systems for B2B
          </p>

          <h1
            className="hero-op mt-7 font-body font-normal leading-[1.06] tracking-[-0.02em] text-[#0A0A0A]"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4.25rem)' }}
          >
            Your AI growth partner
            <br className="hidden sm:block" /> for B2B companies
          </h1>

          <p className="hero-op mt-7 max-w-xl font-body text-base leading-[1.7] text-[#0A0A0A]/55 md:text-lg">
            I build the systems that generate leads, close deals and scale day-to-day
            operations — inside the tools your team already uses.
          </p>

          <div className="hero-op mt-12 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${EMAIL}`}
              onClick={() => meldConversie('e-mail hero')}
              className="group inline-flex items-center gap-2 rounded-full bg-[#0A0A0A] px-6 py-3.5 font-mono-brand text-xs uppercase tracking-[0.14em] text-white transition-transform hover:-translate-y-0.5"
            >
              Start now
              <span className="relative flex h-4 w-4 items-center justify-center overflow-hidden">
                <ArrowUpRight
                  size={16}
                  className="absolute transition-transform duration-500 group-hover:-translate-y-5 group-hover:translate-x-4"
                />
                <ArrowUpRight
                  size={16}
                  className="absolute -translate-x-4 translate-y-5 transition-transform duration-500 group-hover:translate-x-0 group-hover:translate-y-0"
                />
              </span>
            </a>

            <a
              href="#werk"
              className="inline-flex items-center rounded-full border border-[#0A0A0A]/20 bg-white/50 px-6 py-3.5 font-mono-brand text-xs uppercase tracking-[0.14em] text-[#0A0A0A] backdrop-blur-sm transition-colors hover:border-[#0A0A0A]/45"
            >
              See the work
            </a>
          </div>
        </div>
      </div>

      {/* zachte overgang naar de cream sectie eronder */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent to-cream" />
    </section>
  )
}
