import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MessageCircle, ClipboardList, Bell, MailCheck, CalendarCheck } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const stappen = [
  {
    number: '01',
    icon: MessageCircle,
    title: 'Bezoeker wordt aangesproken',
    desc: 'De assistent verschijnt proactief op jouw website. Niet opdringerig, maar vriendelijk en herkenbaar. "Goedenavond! Waarmee kan ik u helpen?"',
  },
  {
    number: '02',
    icon: ClipboardList,
    title: 'Het systeem kwalificeert',
    desc: 'De juiste vragen voor jouw stiel. Type werk, locatie, urgentie, budget. Bandentrappers worden eruit gefilterd. Alleen serieuze klanten komen door.',
  },
  {
    number: '03',
    icon: Bell,
    title: 'Jij wordt verwittigd',
    desc: 'Na elk gesprek ontvang je een volledig overzicht via WhatsApp of e-mail. Naam, telefoon, type werk, locatie, urgentie. Alles klaar om te offreren.',
  },
  {
    number: '04',
    icon: MailCheck,
    title: 'De klant wordt bevestigd',
    desc: '"Bedankt voor uw aanvraag. [Naam] neemt zo snel mogelijk contact met u op." De klant voelt zich gehoord. Minder kans dat hij ondertussen verder zoekt.',
  },
  {
    number: '05',
    icon: CalendarCheck,
    title: 'Optioneel: afspraak inplannen',
    desc: 'Relevant voor huisbezoeken of schouwen? De assistent plant direct een afspraak in jouw agenda. Automatische bevestiging naar beide partijen.',
  },
]

export default function HetMechanisme() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.mech-header',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 72%' } }
      )
      gsap.fromTo('.mech-elem',
        { y: 28, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out', stagger: 0.1,
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

        <div className="mech-header opacity-0 mb-14">
          <span className="font-mono text-clay/70 text-xs tracking-widest uppercase block mb-3">
            Hoe het werkt
          </span>
          <h2 className="font-heading font-bold text-cream text-3xl md:text-5xl leading-tight mb-5">
            De taxicentrale die altijd als eerste{' '}
            <span className="font-drama text-clay" style={{ fontSize: '1.1em' }}>antwoordt.</span>
          </h2>
        </div>

        {/* Taxicentrale metafoor */}
        <div className="mech-elem opacity-0 border-l-2 border-clay/30 pl-6 md:pl-8 mb-14 max-w-3xl">
          <p className="font-body text-cream/65 text-base leading-relaxed mb-3">
            Een klant belt drie vakmannen. De eerste neemt niet op.
            De tweede belooft terug te bellen.
          </p>
          <p className="font-body text-cream/65 text-base leading-relaxed mb-3">
            De derde heeft via zijn website al alle info gekregen
            en stuurt binnen het uur een offerte.
          </p>
          <p className="font-heading font-semibold text-clay text-base">
            Die derde wint altijd, ook al is hij duurder.
          </p>
        </div>

        {/* Slapende medewerker metafoor */}
        <div className="mech-elem opacity-0 bg-cream/[0.04] border border-cream/10 rounded-2xl p-7 md:p-8 mb-14 max-w-3xl">
          <p className="font-body text-cream/60 text-base leading-relaxed">
            Terwijl jij slaapt, staat jouw digitale assistent klaar op je website.
            Hij beantwoordt vragen. Stelt de juiste vragen terug.
            En legt alles klaar zodat jij 's ochtends gewoon kan offreren.
          </p>
        </div>

        {/* 5 stappen */}
        <div className="flex flex-col gap-4">
          {stappen.map((s) => {
            const Icon = s.icon
            return (
              <div
                key={s.number}
                className="mech-elem opacity-0 flex items-start gap-5 p-6 md:p-7 rounded-2xl border border-cream/8 hover:border-clay/15 transition-colors"
              >
                <div className="flex items-center gap-4 flex-none">
                  <span className="w-11 h-11 rounded-xl bg-clay/15 flex items-center justify-center text-clay">
                    <Icon size={20} />
                  </span>
                  <span className="font-heading font-semibold text-xs tracking-widest text-cream/25 hidden sm:block">
                    STAP {s.number}
                  </span>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-cream text-lg mb-1">{s.title}</h3>
                  <p className="font-body text-cream/50 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Op maat boodschap */}
        <div className="mech-elem opacity-0 mt-10 bg-clay/[0.06] border border-clay/15 rounded-2xl p-7 md:p-8">
          <h3 className="font-heading font-bold text-cream text-lg mb-3">
            Volledig op maat, voor jouw bedrijf
          </h3>
          <p className="font-body text-cream/55 text-sm leading-relaxed mb-3">
            Elke WerfWacht wordt speciaal gebouwd voor jouw stiel en jouw klanten.
            Welke vragen wil je stellen? Welke klanten wil je filteren? Hoe wil je verwittigd worden?
          </p>
          <p className="font-body text-cream/55 text-sm leading-relaxed">
            Jij bepaalt het. Wij bouwen het. Van de toon van het gesprek tot de vragen die gesteld worden,
            alles is aanpasbaar. En als je wensen veranderen, passen wij het aan.
          </p>
        </div>

      </div>
    </section>
  )
}
