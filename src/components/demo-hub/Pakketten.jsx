import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, Check } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const CALENDLY_URL = 'https://calendly.com/tristan-distelmans/30min'

const pakketten = [
  {
    naam: 'Full Package',
    subtitel: 'Voor vakmannen zonder website of met een verouderde website',
    setup: '3.000',
    maand: '200',
    features: [
      'Nieuwe professionele website',
      'WerfWacht geïntegreerd met sectorspecifieke vragen',
      'Automatische leadnotificatie via WhatsApp of e-mail',
      'Bevestigingsbericht naar de klant',
      'Optioneel: agenda-integratie voor afspraken',
    ],
    accent: true,
  },
  {
    naam: 'WerfWacht Only',
    subtitel: 'Voor vakmannen die al een goede website hebben',
    setup: '1.500',
    maand: '200',
    features: [
      'WerfWacht geïntegreerd op bestaande website',
      'Sectorspecifieke kwalificatievragen op maat',
      'Automatische leadnotificatie via WhatsApp of e-mail',
      'Bevestigingsbericht naar de klant',
      'Optioneel: agenda-integratie voor afspraken',
    ],
    accent: false,
  },
]

export default function Pakketten() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.pakket-header',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 72%' } }
      )
      gsap.fromTo('.pakket-card',
        { y: 28, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out', stagger: 0.15,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 65%' } }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 px-6 md:px-12"
      style={{ background: 'linear-gradient(135deg, #1e2b24 0%, #1A1A1A 100%)' }}
    >
      <div className="max-w-4xl mx-auto">

        <div className="pakket-header opacity-0 text-center mb-14">
          <span className="font-mono text-clay/70 text-xs tracking-widest uppercase block mb-3">
            Pakketten
          </span>
          <h2 className="font-heading font-bold text-cream text-3xl md:text-5xl leading-tight mb-4">
            Twee opties.{' '}
            <span className="font-drama text-clay" style={{ fontSize: '1.1em' }}>Geen verrassingen.</span>
          </h2>
          <p className="font-body text-cream/50 text-base max-w-xl mx-auto leading-relaxed">
            Geen verborgen kosten. Geen lange contracten. Maandelijks opzegbaar na 3 maanden.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pakketten.map((p) => (
            <div
              key={p.naam}
              className={`pakket-card opacity-0 flex flex-col p-8 md:p-9 rounded-2xl border transition-colors ${
                p.accent
                  ? 'border-clay/30 bg-clay/[0.06]'
                  : 'border-cream/10 hover:border-cream/20'
              }`}
            >
              {p.accent && (
                <span className="inline-block self-start font-mono text-clay text-xs tracking-widest uppercase mb-4 px-3 py-1 rounded-full bg-clay/10">
                  Populairst
                </span>
              )}

              <h3 className="font-heading font-bold text-cream text-2xl mb-1">{p.naam}</h3>
              <p className="font-body text-cream/40 text-sm mb-6">{p.subtitel}</p>

              {/* Prijs */}
              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="font-heading font-bold text-cream text-4xl">€{p.setup}</span>
                  <span className="font-body text-cream/40 text-sm">eenmalig</span>
                </div>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="font-heading font-semibold text-cream/70 text-lg">+ €{p.maand}</span>
                  <span className="font-body text-cream/40 text-sm">/maand</span>
                </div>
              </div>

              {/* Features */}
              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {p.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <Check size={16} className="text-clay flex-none mt-0.5" />
                    <span className="font-body text-cream/60 text-sm leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn-magnetic inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-full font-heading font-semibold text-sm ${
                  p.accent
                    ? 'bg-clay text-cream'
                    : 'bg-cream/10 text-cream hover:bg-cream/15'
                }`}
              >
                <span className={`btn-bg rounded-full ${p.accent ? 'bg-clay-dark' : 'bg-cream/20'}`} />
                <span className="btn-label flex items-center gap-2">
                  Vraag een gratis demo aan <ArrowRight size={15} />
                </span>
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
