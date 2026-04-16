import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { X, Check } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const vergelijking = [
  {
    platform: 'Jouw aanvraag wordt verkocht aan 5 anderen',
    werfwacht: 'Exclusief voor jou, niemand anders ziet die klant',
  },
  {
    platform: 'Jij betaalt per aanvraag, ongeacht resultaat',
    werfwacht: 'Vast maandelijks bedrag, ongeacht hoeveel klanten',
  },
  {
    platform: 'Klanten zijn koud en onverwacht',
    werfwacht: 'Klanten zijn gekwalificeerd vóór jij ze spreekt',
  },
  {
    platform: 'Jij moet zelf nog bellen en opvolgen',
    werfwacht: 'Alle info staat klaar via WhatsApp of e-mail',
  },
  {
    platform: 'Geen controle over kwaliteit',
    werfwacht: 'Prijsjagers en tijdvreters worden automatisch gefilterd',
  },
]

export default function HetProbleem() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.prob-header',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 72%' } }
      )
      gsap.fromTo('.prob-elem',
        { y: 28, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out', stagger: 0.12,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 65%' } }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 md:py-32 px-6 md:px-12 bg-cream">
      <div className="max-w-5xl mx-auto">

        <div className="prob-header opacity-0 mb-14">
          <span className="font-mono text-clay/70 text-xs tracking-widest uppercase block mb-3">
            Herkenbaar?
          </span>
          <h2 className="font-heading font-bold text-charcoal text-3xl md:text-5xl leading-tight">
            Drie problemen die jou elke maand{' '}
            <span className="font-drama text-clay" style={{ fontSize: '1.1em' }}>geld kosten.</span>
          </h2>
        </div>

        {/* Probleem 1 - contactformulier vs WerfWacht */}
        <div className="prob-elem opacity-0 mb-8">
          <div className="border border-charcoal/8 rounded-2xl p-8 md:p-10">
            <div className="flex items-start gap-4 mb-4">
              <span className="w-10 h-10 rounded-xl bg-clay/10 flex items-center justify-center font-heading font-bold text-clay text-sm flex-none">01</span>
              <h3 className="font-heading font-bold text-charcoal text-xl md:text-2xl">
                Bezoekers vertrekken zonder actie
              </h3>
            </div>
            <p className="font-body text-charcoal/60 text-base leading-relaxed pl-14 mb-5">
              De meeste vakmannen hebben een website met een statisch contactformulier.
              Naam, e-mail, bericht, versturen. Klinkt logisch, maar 80% van de bezoekers haakt daar op af.
              Ze willen geen formulier invullen. Ze willen gehoord worden.
            </p>

            {/* Formulier vs WerfWacht contrast */}
            <div className="pl-14 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-charcoal/[0.03] border border-charcoal/8 rounded-xl p-5">
                <span className="font-heading font-bold text-charcoal/40 text-xs uppercase tracking-wide block mb-3">Statisch formulier</span>
                <ul className="flex flex-col gap-2">
                  <li className="flex items-start gap-2">
                    <X size={14} className="text-red-400/70 flex-none mt-0.5" />
                    <span className="font-body text-charcoal/50 text-sm">Wacht passief tot iemand invult</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X size={14} className="text-red-400/70 flex-none mt-0.5" />
                    <span className="font-body text-charcoal/50 text-sm">Geen kwalificatie, enkel naam + bericht</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X size={14} className="text-red-400/70 flex-none mt-0.5" />
                    <span className="font-body text-charcoal/50 text-sm">Geen bevestiging naar de klant</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X size={14} className="text-red-400/70 flex-none mt-0.5" />
                    <span className="font-body text-charcoal/50 text-sm">80% verlaat de pagina zonder actie</span>
                  </li>
                </ul>
              </div>
              <div className="bg-clay/[0.04] border border-clay/15 rounded-xl p-5">
                <span className="font-heading font-bold text-clay text-xs uppercase tracking-wide block mb-3">WerfWacht</span>
                <ul className="flex flex-col gap-2">
                  <li className="flex items-start gap-2">
                    <Check size={14} className="text-green-500/70 flex-none mt-0.5" />
                    <span className="font-body text-charcoal/70 text-sm">Spreekt bezoekers proactief aan</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={14} className="text-green-500/70 flex-none mt-0.5" />
                    <span className="font-body text-charcoal/70 text-sm">Stelt de juiste vragen per stiel</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={14} className="text-green-500/70 flex-none mt-0.5" />
                    <span className="font-body text-charcoal/70 text-sm">Automatische bevestiging naar de klant</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={14} className="text-green-500/70 flex-none mt-0.5" />
                    <span className="font-body text-charcoal/70 text-sm">Tot 300% hogere conversie dan formulieren</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Probleem 2 */}
        <div className="prob-elem opacity-0 mb-8">
          <div className="border border-charcoal/8 rounded-2xl p-8 md:p-10">
            <div className="flex items-start gap-4 mb-4">
              <span className="w-10 h-10 rounded-xl bg-clay/10 flex items-center justify-center font-heading font-bold text-clay text-sm flex-none">02</span>
              <h3 className="font-heading font-bold text-charcoal text-xl md:text-2xl">
                Trage opvolging kost klanten
              </h3>
            </div>
            <p className="font-body text-charcoal/60 text-base leading-relaxed pl-14 mb-4">
              78% van klanten koopt bij het bedrijf dat als eerste reageert.
              Niet het beste. Het snelste. Maar jij staat op de werf. Jij kan niet opnemen.
              Tegen de avond is die klant al bij je concurrent beland.
            </p>
            <p className="font-heading font-semibold text-charcoal/70 text-sm pl-14">
              De kans op conversie daalt met 80% na 5 minuten wachttijd.
            </p>
          </div>
        </div>

        {/* Probleem 3 */}
        <div className="prob-elem opacity-0 mb-12">
          <div className="border border-charcoal/8 rounded-2xl p-8 md:p-10">
            <div className="flex items-start gap-4 mb-4">
              <span className="w-10 h-10 rounded-xl bg-clay/10 flex items-center justify-center font-heading font-bold text-clay text-sm flex-none">03</span>
              <h3 className="font-heading font-bold text-charcoal text-xl md:text-2xl">
                Slechte kwaliteit verspilt jouw tijd
              </h3>
            </div>
            <p className="font-body text-charcoal/60 text-base leading-relaxed pl-14">
              Vaag mailtje: "Ik wil graag een offerte." Geen info. Geen context. Geen urgentie.
              Jij belt terug. Niemand thuis. Twee dagen telefoontagtje spelen. Uiteindelijk: geen klus.
              En je hebt er een uur aan verloren.
            </p>
          </div>
        </div>

        {/* Bobex/Werkspot, de valse oplossing */}
        <div className="prob-elem opacity-0">
          <div className="rounded-2xl p-8 md:p-10" style={{ background: 'linear-gradient(135deg, #1e2b24 0%, #1A1A1A 100%)' }}>
            <h3 className="font-heading font-bold text-cream text-xl md:text-2xl mb-4">
              "Maar ik heb toch al een platform geprobeerd?"
            </h3>
            <p className="font-body text-cream/55 text-base leading-relaxed mb-6">
              Je hebt je ingeschreven. Je hebt betaald. Je hebt gebeld.
              De helft nam niet op. De andere helft vroeg enkel de laagste prijs.
              En ondertussen zaten er nog vier andere vakmannen te bellen naar diezelfde klant.
              Dat is geen oplossing. <span className="text-clay font-semibold">Dat is een loterij.</span>
            </p>

            {/* Vergelijkingstabel */}
            <div className="overflow-hidden rounded-xl border border-cream/10">
              <div className="grid grid-cols-2 bg-cream/[0.05]">
                <div className="p-4 md:p-5 border-r border-cream/10">
                  <span className="font-heading font-bold text-cream/40 text-xs md:text-sm">Platform</span>
                </div>
                <div className="p-4 md:p-5">
                  <span className="font-heading font-bold text-clay text-xs md:text-sm">WerfWacht</span>
                </div>
              </div>
              {vergelijking.map((row, i) => (
                <div key={i} className="grid grid-cols-2 border-t border-cream/8">
                  <div className="p-4 md:p-5 border-r border-cream/8 flex items-start gap-2">
                    <X size={14} className="text-red-400/70 flex-none mt-0.5" />
                    <span className="font-body text-cream/40 text-xs md:text-sm leading-relaxed">{row.platform}</span>
                  </div>
                  <div className="p-4 md:p-5 flex items-start gap-2">
                    <Check size={14} className="text-green-400/70 flex-none mt-0.5" />
                    <span className="font-body text-cream/70 text-xs md:text-sm leading-relaxed">{row.werfwacht}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
