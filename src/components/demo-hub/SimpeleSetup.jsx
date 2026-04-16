import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Phone, Wrench, Rocket, ArrowRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const CALENDLY_URL = 'https://calendly.com/tristan-distelmans/30min'

const stappen = [
  {
    number: '01',
    icon: Phone,
    title: 'Jij plant een call van 30 minuten',
    desc: 'Wij stellen de vragen over jouw stiel. Welke klanten wil je? Welke wil je niet? Wat moet de assistent weten?',
  },
  {
    number: '02',
    icon: Wrench,
    title: 'Wij bouwen jouw WerfWacht',
    desc: 'Op maat. In jouw taal. Voor jouw klanten. Met de kwalificatievragen die passen bij jouw vak.',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Live binnen 48 uur',
    desc: 'Geen installatie. Geen wachtwoorden. Geen IT-kennis nodig. Wij zetten het live op jouw website. Jij werkt gewoon door.',
  },
]

export default function SimpeleSetup() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.setup-header',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 72%' } }
      )
      gsap.fromTo('.setup-elem',
        { y: 28, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out', stagger: 0.13,
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

        <div className="setup-header opacity-0 mb-16">
          <span className="font-mono text-clay/70 text-xs tracking-widest uppercase block mb-3">
            Setup
          </span>
          <h2 className="font-heading font-bold text-cream text-3xl md:text-5xl leading-tight mb-4">
            Wij installeren het.{' '}
            <span className="font-drama text-clay" style={{ fontSize: '1.1em' }}>Jij werkt gewoon door.</span>
          </h2>
        </div>

        {/* 3 stappen */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {stappen.map((s) => {
            const Icon = s.icon
            return (
              <div
                key={s.number}
                className="setup-elem opacity-0 flex flex-col p-7 rounded-2xl border border-cream/10 hover:border-clay/20 transition-colors"
              >
                <div className="flex items-center gap-4 mb-5">
                  <span className="w-12 h-12 rounded-xl bg-clay/15 flex items-center justify-center text-clay flex-none">
                    <Icon size={22} />
                  </span>
                  <span className="font-heading font-semibold text-xs tracking-widest text-cream/25">
                    STAP {s.number}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-cream text-lg mb-2">{s.title}</h3>
                <p className="font-body text-cream/55 text-sm leading-relaxed">{s.desc}</p>
              </div>
            )
          })}
        </div>

        {/* Geruststelling */}
        <div className="setup-elem opacity-0 border border-clay/15 bg-clay/[0.06] rounded-2xl p-8 md:p-10">
          <p className="font-heading font-semibold text-cream text-lg mb-4">
            Als jij WhatsApp kan gebruiken, kan jij dit gebruiken.
          </p>
          <div className="flex flex-col gap-2.5 font-body text-cream/55 text-sm leading-relaxed">
            <p>Er is geen app om te downloaden. Geen dashboard om te leren.</p>
            <p>Elke ochtend krijg jij een overzicht via WhatsApp: hoeveel mensen er langs zijn geweest en welke afspraken er klaarstaan.</p>
            <p>Wij bouwen het. Wij zetten het live. <span className="font-semibold text-cream/80">Jij werkt gewoon door.</span></p>
          </div>

          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-magnetic inline-flex items-center gap-3 bg-clay text-cream px-7 py-3.5 rounded-full font-heading font-semibold text-sm mt-6"
          >
            <span className="btn-bg bg-clay-dark rounded-full" />
            <span className="btn-label flex items-center gap-2">
              Plan jouw call in <ArrowRight size={15} />
            </span>
          </a>
        </div>

      </div>
    </section>
  )
}
