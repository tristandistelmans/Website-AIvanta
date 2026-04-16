import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, Globe } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const CALENDLY_URL = 'https://calendly.com/tristan-distelmans/30min'

export default function DemoHubCTA() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.dhcta-elem',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out', stagger: 0.12,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' } }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-32 md:py-40 px-6 md:px-12 bg-cream">
      <div className="max-w-3xl mx-auto text-center">

        <h2
          className="dhcta-elem opacity-0 font-heading font-bold text-charcoal leading-[1.08] mb-6"
          style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}
        >
          Wil je zien hoe WerfWacht eruitziet{' '}
          <span className="font-drama text-clay" style={{ fontSize: '1.05em' }}>voor jouw bedrijf?</span>
        </h2>

        <p className="dhcta-elem opacity-0 font-body text-charcoal/50 text-lg mb-10 leading-relaxed max-w-xl mx-auto">
          Wij bouwen een gratis demo op basis van jouw eigen website.
          Geen verplichtingen. Geen verkoopgesprek.
          Gewoon: kijk zelf of het iets voor jou is.
        </p>

        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="dhcta-elem opacity-0 btn-magnetic inline-flex items-center gap-3 bg-clay text-cream px-10 py-5 rounded-full font-heading font-semibold text-base"
        >
          <span className="btn-bg bg-clay-dark rounded-full" />
          <span className="btn-label flex items-center gap-3">
            Vraag een gratis demo aan <ArrowRight size={16} />
          </span>
        </a>

        <p className="dhcta-elem opacity-0 font-body text-charcoal/30 text-sm mt-6 max-w-sm mx-auto">
          Gratis en vrijblijvend. Setup in 30 minuten als je beslist om verder te gaan.
          Maandelijks opzegbaar na 3 maanden.
        </p>

        {/* Website hint */}
        <div className="dhcta-elem opacity-0 mt-12 pt-8 border-t border-charcoal/8 max-w-md mx-auto">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Globe size={14} className="text-charcoal/30" />
            <span className="font-heading font-semibold text-charcoal/40 text-xs uppercase tracking-wide">Nog geen website?</span>
          </div>
          <p className="font-body text-charcoal/35 text-sm">
            Wij bouwen ook professionele websites op maat.
            Vraag ernaar tijdens het gesprek.
          </p>
        </div>

      </div>
    </section>
  )
}
