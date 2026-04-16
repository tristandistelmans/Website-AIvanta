import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, Play } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const CALENDLY_URL = 'https://calendly.com/tristan-distelmans/30min'

export default function DemoHubHero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.dh-hero-elem',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.1, ease: 'power3.out', stagger: 0.14, delay: 0.3 }
      )
    }, heroRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative w-full overflow-hidden pt-28 md:pt-36 pb-20 md:pb-28"
      style={{ background: 'linear-gradient(135deg, #1e2b24 0%, #1A1A1A 100%)' }}
    >
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12">

        <div className="dh-hero-elem opacity-0 mb-3">
          <span className="inline-block font-mono text-clay/80 text-xs tracking-widest uppercase mb-4">
            Voor zonnepaneel-installateurs, elektriciens &amp; schilders
          </span>
        </div>

        <h1
          className="dh-hero-elem opacity-0 font-heading font-bold text-cream leading-[1.08] mb-6"
          style={{ fontSize: 'clamp(2rem, 5vw, 3.8rem)' }}
        >
          Mensen bezoeken jouw website en vertrekken.<br />
          <span className="text-clay">Wat als ze voortaan altijd contact opnemen?</span>
        </h1>

        <p
          className="dh-hero-elem opacity-0 font-body text-cream/60 max-w-2xl mb-10 leading-relaxed"
          style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)' }}
        >
          Ik installeer een slim systeem op jouw website dat bezoekers omzet in gekwalificeerde potentiële klanten,
          zodat jij sneller reageert, betere informatie hebt,
          en nooit meer tijd verliest aan slechte communicatie.
        </p>

        {/* VSL Placeholder */}
        <div className="dh-hero-elem opacity-0 relative w-full max-w-3xl rounded-2xl overflow-hidden border border-cream/10 mb-10 bg-charcoal/50">
          <div className="aspect-video flex items-center justify-center">
            <div className="text-center">
              <button className="w-20 h-20 rounded-full bg-clay/90 hover:bg-clay flex items-center justify-center transition-colors shadow-lg shadow-clay/20 mx-auto mb-4">
                <Play size={32} className="text-cream ml-1" fill="currentColor" />
              </button>
              <span className="font-body text-cream/40 text-sm block">Bekijk in 2 minuten hoe het werkt</span>
            </div>
          </div>
        </div>

        <div className="dh-hero-elem opacity-0 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-magnetic inline-flex items-center gap-3 bg-clay text-cream px-8 py-4 rounded-full font-heading font-semibold text-base"
          >
            <span className="btn-bg bg-clay-dark rounded-full" />
            <span className="btn-label flex items-center gap-3">
              Vraag een gratis demo aan <ArrowRight size={16} />
            </span>
          </a>
          <span className="font-body text-cream/25 text-sm">Vrijblijvend. Geen verkoopgesprek.</span>
        </div>
      </div>
    </section>
  )
}
