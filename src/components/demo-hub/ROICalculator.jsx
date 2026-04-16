import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const CALENDLY_URL = 'https://calendly.com/tristan-distelmans/30min'

const fmt = new Intl.NumberFormat('nl-BE', {
  style: 'currency',
  currency: 'EUR',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
})

const voorbeelden = [
  { stiel: 'Elektricien', klus: 850 },
  { stiel: 'Schilder', klus: 2500 },
  { stiel: 'Zonnepanelen', klus: 8000 },
]

function Slider({ label, sublabel, value, onChange, min, max, step, format }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <div>
          <label className="font-heading font-semibold text-charcoal/70 text-sm block">{label}</label>
          {sublabel && <span className="font-body text-charcoal/35 text-xs">{sublabel}</span>}
        </div>
        <span className="font-heading font-bold text-charcoal text-lg tabular-nums">
          {format ? format(value) : value}
        </span>
      </div>
      <input
        type="range"
        className="roi-slider w-full"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
      <div className="flex justify-between">
        <span className="font-mono text-charcoal/25 text-xs">{format ? format(min) : min}</span>
        <span className="font-mono text-charcoal/25 text-xs">{format ? format(max) : max}</span>
      </div>
    </div>
  )
}

export default function ROICalculator() {
  const sectionRef = useRef(null)
  const [opdrachtwaarde, setOpdrachtwaarde] = useState(2500)
  const [maandBezoekers, setMaandBezoekers] = useState(300)
  const [huidigeConversie, setHuidigeConversie] = useState(2)
  const [gemistOproepen, setGemistOproepen] = useState(8)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.roi-header',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 72%' } }
      )
      gsap.fromTo('.roi-content',
        { y: 28, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 65%' } }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  // Huidige situatie
  const huidigeKlanten = Math.round(maandBezoekers * (huidigeConversie / 100))

  // Met WerfWacht: conversie stijgt met factor 2-3x (conservatief 2.5x)
  const verbeterdeConversie = Math.min(huidigeConversie * 2.5, 15)
  const nieuweKlanten = Math.round(maandBezoekers * (verbeterdeConversie / 100))
  const extraViaWebsite = nieuweKlanten - huidigeKlanten

  // Gemiste oproepen: 70% recovery (conservatief)
  const herstelleOproepen = Math.round(gemistOproepen * 0.7)

  // Totaal extra potentiële klanten
  const totaalExtra = extraViaWebsite + herstelleOproepen

  // Niet iedereen wordt klus, gemiddeld 40% close rate
  const closeRate = 40
  const extraKlussen = Math.round(totaalExtra * (closeRate / 100))
  const extraOmzetPerMaand = extraKlussen * opdrachtwaarde
  const extraOmzetPerJaar = extraOmzetPerMaand * 12

  return (
    <section ref={sectionRef} className="py-24 md:py-32 px-6 md:px-12 bg-cream">
      <div className="max-w-5xl mx-auto">

        <div className="roi-header opacity-0 mb-14">
          <span className="font-mono text-clay/70 text-xs tracking-widest uppercase block mb-3">
            De rekensom
          </span>
          <h2 className="font-heading font-bold text-charcoal text-3xl md:text-5xl leading-tight mb-4">
            Eén extra klus per maand.{' '}
            <span className="font-drama text-clay" style={{ fontSize: '1.1em' }}>Meer hoeft het niet te zijn.</span>
          </h2>
          <p className="font-body text-charcoal/50 text-base max-w-2xl leading-relaxed">
            Vul jouw cijfers in. Zie zelf hoeveel potentiële klanten je nu laat lopen,
            en wat WerfWacht daar concreet aan verandert.
          </p>
        </div>

        <div className="roi-content opacity-0 grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10">

          {/* Sliders */}
          <div className="lg:col-span-3 flex flex-col gap-7 p-8 border border-charcoal/8 rounded-2xl">

            {/* Presets per stiel */}
            <div>
              <p className="font-mono text-charcoal/30 text-xs tracking-widest uppercase mb-3">Snelkeuze per stiel</p>
              <div className="grid grid-cols-3 gap-3">
                {voorbeelden.map((v) => (
                  <button
                    key={v.stiel}
                    onClick={() => setOpdrachtwaarde(v.klus)}
                    className={`text-left p-3 rounded-xl border transition-colors ${
                      opdrachtwaarde === v.klus
                        ? 'border-clay/30 bg-clay/5'
                        : 'border-charcoal/8 hover:border-charcoal/15'
                    }`}
                  >
                    <span className="font-heading font-bold text-charcoal/70 text-xs block">{v.stiel}</span>
                    <span className="font-body text-charcoal/40 text-xs">{fmt.format(v.klus)}/klus</span>
                  </button>
                ))}
              </div>
            </div>

            <Slider
              label="Gemiddelde opdrachtwaarde"
              value={opdrachtwaarde}
              onChange={setOpdrachtwaarde}
              min={250}
              max={15000}
              step={250}
              format={fmt.format}
            />
            <Slider
              label="Maandelijkse websitebezoekers"
              sublabel="Schat of check Google Analytics"
              value={maandBezoekers}
              onChange={setMaandBezoekers}
              min={50}
              max={3000}
              step={50}
            />
            <Slider
              label="Huidige conversie (%)"
              sublabel="Hoeveel % van bezoekers neemt nu contact op?"
              value={huidigeConversie}
              onChange={setHuidigeConversie}
              min={1}
              max={10}
              step={0.5}
              format={(v) => `${v}%`}
            />
            <Slider
              label="Gemiste oproepen per maand"
              sublabel="Hoeveel oproepen mis je op de werf?"
              value={gemistOproepen}
              onChange={setGemistOproepen}
              min={0}
              max={30}
              step={1}
            />
          </div>

          {/* Resultaat */}
          <div className="lg:col-span-2 flex flex-col gap-4 p-8 rounded-2xl" style={{ background: 'linear-gradient(135deg, #1e2b24 0%, #1A1A1A 100%)' }}>
            <span className="font-mono text-cream/30 text-xs tracking-widest uppercase">
              Wat WerfWacht oplevert
            </span>

            {/* Breakdown */}
            <div className="bg-cream/[0.04] rounded-xl p-4 flex flex-col gap-2">
              <div className="flex justify-between font-body text-cream/50 text-xs">
                <span>Website nu: {huidigeKlanten} contacten/maand</span>
                <span className="text-cream/30">{huidigeConversie}%</span>
              </div>
              <div className="flex justify-between font-body text-cream/70 text-xs">
                <span>Website met WerfWacht: {nieuweKlanten} contacten/maand</span>
                <span className="text-clay">{verbeterdeConversie.toFixed(1)}%</span>
              </div>
              <div className="flex justify-between font-body text-cream/70 text-xs">
                <span>Herstelde gemiste oproepen: {herstelleOproepen}/maand</span>
                <span className="text-clay">70%</span>
              </div>
              <div className="w-full h-px bg-cream/10 my-1" />
              <div className="flex justify-between font-heading font-semibold text-cream/80 text-xs">
                <span>Extra potentiële klanten</span>
                <span className="text-clay">+{totaalExtra}/maand</span>
              </div>
              <div className="flex justify-between font-body text-cream/50 text-xs">
                <span>Waarvan effectief klus (±{closeRate}%)</span>
                <span>{extraKlussen}/maand</span>
              </div>
            </div>

            <div className="w-full h-px bg-cream/10" />

            <div>
              <span className="font-heading font-bold text-clay text-4xl md:text-5xl block">
                {fmt.format(extraOmzetPerMaand)}
              </span>
              <span className="font-body text-cream/40 text-sm">extra per maand</span>
            </div>

            <div>
              <span className="font-heading font-bold text-cream text-2xl md:text-3xl block">
                {fmt.format(extraOmzetPerJaar)}
              </span>
              <span className="font-body text-cream/40 text-sm">extra per jaar</span>
            </div>

            <div className="w-full h-px bg-cream/10" />

            <p className="font-heading font-semibold text-clay/80 text-sm italic">
              "Niet proberen kost je elke maand meer dan proberen ooit kan kosten."
            </p>

            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-magnetic inline-flex items-center justify-center gap-3 bg-clay text-cream px-6 py-3.5 rounded-full font-heading font-semibold text-sm mt-auto"
            >
              <span className="btn-bg bg-clay-dark rounded-full" />
              <span className="btn-label flex items-center gap-2">
                Vraag een gratis demo aan <ArrowRight size={15} />
              </span>
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
