import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ArrowUpRight } from 'lucide-react'

import IridescentObject from '@/components/ui/iridescent-object'
import { FlowerMark } from '@/components/ui/flower'
import { meldConversie } from '@/lib/gtag'

/* HeroPastel
   ------------------------------------------------------------------
   Hero in de stijl van de aangeleverde referentie: bijna witte
   achtergrond met zachte pastelwassingen, een pil-navigatie, een grote
   lichte kop links en een glanzend object rechts.

   De vormgeving is nagebouwd, niet gekopieerd: het object is eigen SVG
   en de kleuren zijn opnieuw opgebouwd.                               */

const EMAIL = 'tristan@ainova.be'

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
      <div className="hero-object pointer-events-none absolute aspect-square -right-[36%] bottom-0 w-[76%] sm:bottom-auto sm:-right-[12%] sm:top-1/2 sm:w-[58%] sm:-translate-y-1/2 lg:-right-[6%] lg:w-[52%]">
        <IridescentObject className="slow-float" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 md:px-10">
        {/* navigatie */}
        <nav className="hero-op flex items-center justify-between gap-4 pt-7">
          <a href="/" className="flex items-center gap-2.5">
            <FlowerMark className="h-6 w-6 text-[#0A0A0A]" />
            <span className="font-body text-xl font-semibold tracking-tight text-[#0A0A0A]">
              Ainova
            </span>
          </a>

          <div className="flex items-center gap-2">
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
            <FlowerMark className="h-3.5 w-3.5 text-[#0A0A0A]" />
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
            AI systems that generate leads, close deals and scale operations.
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
              href="#contact"
              className="inline-flex items-center rounded-full border border-[#0A0A0A]/20 bg-white/50 px-6 py-3.5 font-mono-brand text-xs uppercase tracking-[0.14em] text-[#0A0A0A] backdrop-blur-sm transition-colors hover:border-[#0A0A0A]/45"
            >
              Contact
            </a>
          </div>
        </div>
      </div>

      {/* zachte overgang naar de cream sectie eronder */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent to-white" />
    </section>
  )
}
