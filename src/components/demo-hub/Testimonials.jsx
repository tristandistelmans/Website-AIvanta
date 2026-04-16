import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const getuigenissen = [
  {
    naam: 'Marc V.',
    stiel: 'Zonnepanelen installateur',
    gemeente: 'Gent',
    quote: 'Eerste maand al 3 extra installaties ingepland. Zonder dat ik één telefoontje heb gemist op de werf.',
    resultaat: '3 extra installaties/maand',
  },
  {
    naam: 'Kevin D.',
    stiel: 'Elektricien',
    gemeente: 'Mechelen',
    quote: 'Mijn vrouw zei altijd: je zit weer achter die laptop. Sinds WerfWacht zijn mijn avonden terug van mij.',
    resultaat: '8 uur/week bespaard',
  },
  {
    naam: 'Peter L.',
    stiel: 'Schilder',
    gemeente: 'Brugge',
    quote: 'Geen bandentrappers meer. Enkel nog klanten die effectief willen tekenen. Dat scheelt een wereld.',
    resultaat: '40% hogere close rate',
  },
]

export default function Testimonials() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.test-header',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 72%' } }
      )
      gsap.fromTo('.test-card',
        { y: 28, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out', stagger: 0.12,
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
      <div className="max-w-5xl mx-auto">

        <div className="test-header opacity-0 mb-14">
          <span className="font-mono text-clay/70 text-xs tracking-widest uppercase block mb-3">
            Vakmannen aan het woord
          </span>
          <h2 className="font-heading font-bold text-cream text-3xl md:text-5xl leading-tight">
            Wat zij{' '}
            <span className="font-drama text-clay" style={{ fontSize: '1.1em' }}>zeggen.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {getuigenissen.map((t) => (
            <div
              key={t.naam}
              className="test-card opacity-0 flex flex-col p-7 rounded-2xl border border-cream/10 hover:border-clay/20 transition-colors"
            >
              <p className="font-drama text-cream/70 text-lg md:text-xl italic leading-relaxed mb-6 flex-1">
                "{t.quote}"
              </p>

              <div className="border-t border-cream/10 pt-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-heading font-bold text-cream text-sm">{t.naam}</span>
                  <span className="font-mono text-clay text-xs font-semibold">{t.resultaat}</span>
                </div>
                <span className="font-body text-cream/40 text-xs">
                  {t.stiel}, {t.gemeente}
                </span>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center font-body text-cream/20 text-xs mt-8">
          * Resultaten op basis van gemiddelden. Individuele resultaten kunnen variëren.
        </p>

      </div>
    </section>
  )
}
