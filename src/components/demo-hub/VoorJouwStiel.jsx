import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Sun, Zap, PaintBucket, Settings } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const sectoren = [
  {
    id: 'elektricien',
    icon: Zap,
    titel: 'Elektricien / Loodgieter',
    vragen: [
      'Gaat het om een dringende herstelling of een geplande installatie?',
      'In welke gemeente bevindt het project zich?',
      'Is er al een bestaande elektrische installatie aanwezig?',
      'Wanneer zou u graag iemand langs hebben?',
    ],
  },
  {
    id: 'solar',
    icon: Sun,
    titel: 'Zonnepanelen installateur',
    vragen: [
      'Wat is uw jaarlijks elektriciteitsverbruik?',
      'Heeft u een digitale meter?',
      'Wat is de oriëntatie van uw dak?',
      'Bent u eigenaar van de woning?',
    ],
  },
  {
    id: 'schilder',
    icon: PaintBucket,
    titel: 'Schilder / Renovatie',
    vragen: [
      'Gaat het om binnen- of buitenschilderwerk?',
      'Wat is de oppervlakte bij benadering?',
      'Is er momenteel behang aanwezig?',
      'Wanneer zou u de werken gepland willen hebben?',
    ],
  },
]

export default function VoorJouwStiel() {
  const sectionRef = useRef(null)
  const [actief, setActief] = useState('elektricien')

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.stiel-header',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 72%' } }
      )
      gsap.fromTo('.stiel-content',
        { y: 28, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 65%' } }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const huidige = sectoren.find(s => s.id === actief)

  return (
    <section ref={sectionRef} className="py-24 md:py-32 px-6 md:px-12 bg-cream">
      <div className="max-w-5xl mx-auto">

        <div className="stiel-header opacity-0 mb-14">
          <span className="font-mono text-clay/70 text-xs tracking-widest uppercase block mb-3">
            Op maat gebouwd
          </span>
          <h2 className="font-heading font-bold text-charcoal text-3xl md:text-5xl leading-tight mb-4">
            Gebouwd voor Vlaamse vakmannen.{' '}
            <span className="font-drama text-clay" style={{ fontSize: '1.1em' }}>Niet voor Silicon Valley.</span>
          </h2>
          <p className="font-body text-charcoal/50 text-base max-w-2xl leading-relaxed">
            WerfWacht stelt de vragen die jij zou stellen. Per stiel. In jouw taal.
            Jouw klanten krijgen het gevoel dat ze met een echte medewerker spreken.
          </p>
        </div>

        <div className="stiel-content opacity-0">
          {/* Sector tabs */}
          <div className="flex flex-wrap gap-3 mb-8">
            {sectoren.map((s) => {
              const Icon = s.icon
              return (
                <button
                  key={s.id}
                  onClick={() => setActief(s.id)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-full font-heading font-semibold text-sm transition-all ${
                    actief === s.id
                      ? 'bg-clay text-cream'
                      : 'bg-charcoal/5 text-charcoal/50 hover:text-charcoal/80 hover:bg-charcoal/8'
                  }`}
                >
                  <Icon size={16} />
                  {s.titel}
                </button>
              )
            })}
          </div>

          {/* Gesimuleerd chat-gesprek */}
          {huidige && (
            <div className="max-w-2xl border border-charcoal/10 rounded-2xl overflow-hidden mb-8">
              {/* Chat header */}
              <div className="bg-charcoal/[0.04] px-6 py-4 border-b border-charcoal/8 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                <span className="font-heading font-semibold text-charcoal text-sm">WerfWacht - {huidige.titel}</span>
              </div>

              {/* Chat berichten */}
              <div className="p-6 flex flex-col gap-4">
                {/* Opening */}
                <div className="flex gap-3">
                  <span className="w-8 h-8 rounded-full bg-clay/10 flex items-center justify-center text-clay flex-none text-xs font-bold">W</span>
                  <div className="bg-charcoal/[0.04] rounded-2xl rounded-tl-md px-4 py-3 max-w-sm">
                    <p className="font-body text-charcoal/70 text-sm">Goedenavond! Waarmee kan ik u helpen?</p>
                  </div>
                </div>

                {/* Kwalificatievragen */}
                {huidige.vragen.map((v, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="w-8 h-8 rounded-full bg-clay/10 flex items-center justify-center text-clay flex-none text-xs font-bold">W</span>
                    <div className="bg-charcoal/[0.04] rounded-2xl rounded-tl-md px-4 py-3 max-w-sm">
                      <p className="font-body text-charcoal/70 text-sm">{v}</p>
                    </div>
                  </div>
                ))}

                {/* Afsluiting */}
                <div className="flex gap-3">
                  <span className="w-8 h-8 rounded-full bg-clay/10 flex items-center justify-center text-clay flex-none text-xs font-bold">W</span>
                  <div className="bg-clay/10 border border-clay/15 rounded-2xl rounded-tl-md px-4 py-3 max-w-sm">
                    <p className="font-body text-charcoal/70 text-sm">
                      Bedankt! Ik stuur uw gegevens door. U ontvangt zo een bevestiging.
                    </p>
                  </div>
                </div>
              </div>

              {/* Result */}
              <div className="bg-charcoal/[0.03] px-6 py-4 border-t border-charcoal/8">
                <p className="font-body text-charcoal/40 text-xs">
                  → Jij ontvangt dit overzicht direct via WhatsApp of e-mail. Klaar om te offreren.
                </p>
              </div>
            </div>
          )}

          {/* Op maat blok */}
          <div className="border border-clay/15 bg-clay/[0.04] rounded-2xl p-7 md:p-8 max-w-2xl">
            <div className="flex items-center gap-3 mb-3">
              <Settings size={18} className="text-clay" />
              <h3 className="font-heading font-bold text-charcoal text-lg">Volledig aanpasbaar</h3>
            </div>
            <p className="font-body text-charcoal/60 text-sm leading-relaxed mb-2">
              Dit zijn voorbeeldvragen. Jij kiest zelf welke vragen WerfWacht stelt.
              Wil je vragen over budget? Over urgentie? Over specifieke materialen?
            </p>
            <p className="font-body text-charcoal/60 text-sm leading-relaxed">
              Alles wordt op maat ingesteld voor jouw bedrijf.
              De toon, de vragen, de opvolging, het kanaal waarop jij verwittigd wordt.
              En als je wensen veranderen, passen wij het aan.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
