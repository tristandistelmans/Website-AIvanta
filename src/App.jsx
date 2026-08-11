import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import OrbitingCirclesGlobe from '@/components/ui/orbiting-circles-02'
import tristanPhoto from './assets/0267e3e3-c7ba-4952-a327-10ed2614011d.jpg'

gsap.registerPlugin(ScrollTrigger)

const LINKEDIN_URL = 'https://www.linkedin.com/in/tristan-distelmans-423398238'
const EMAIL = 'tristan@ainova.be'
const GSM = '0474 50 74 78'
const GSM_HREF = 'tel:+32474507478'
const BTW = 'BE 1009.167.610'
const ADRES = 'Prinsenstraat 47, 3500 Hasselt'

/* Zachte fade-in, gescoped op een sectie. Bewust ingetogen: kleine
   verplaatsing, korte duur — beweging mag niet opvallen. */
function useReveal(ref, selector = '.reveal') {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(selector,
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: 'power2.out', stagger: 0.07,
          scrollTrigger: { trigger: ref.current, start: 'top 85%' } }
      )
    }, ref)
    return () => ctx.revert()
  }, [ref, selector])
}

/* ─────────────────────────────────────────────────────────────────────────
   HEADER — naam links, contact rechts. Geen zwevende navigatie.
───────────────────────────────────────────────────────────────────────── */
function Header() {
  return (
    <header className="border-b border-charcoal/10">
      <div className="mx-auto flex max-w-4xl items-baseline justify-between px-6 py-6 md:px-8">
        <a href="/" className="font-heading text-base font-semibold tracking-tight text-charcoal">
          Ainova
        </a>
        <a
          href={`mailto:${EMAIL}`}
          className="font-mono-brand text-xs text-charcoal/50 transition-colors hover:text-clay md:text-sm"
        >
          {EMAIL}
        </a>
      </div>
    </header>
  )
}

/* ─────────────────────────────────────────────────────────────────────────
   INTRO — wie ik ben en wat ik doe, in gewone taal
───────────────────────────────────────────────────────────────────────── */
function Intro() {
  const ref = useRef(null)
  useReveal(ref)

  return (
    <section ref={ref} className="mx-auto max-w-4xl px-6 pb-20 pt-16 md:px-8 md:pb-28 md:pt-24">
      <p className="reveal opacity-0 font-mono-brand text-xs uppercase tracking-[0.18em] text-charcoal/40">
        Tristan Distelmans — Hasselt
      </p>

      <h1
        className="reveal mt-6 max-w-3xl font-heading font-semibold leading-[1.14] tracking-tight text-charcoal opacity-0"
        style={{ fontSize: 'clamp(1.85rem, 4vw, 2.9rem)' }}
      >
        Ik automatiseer marketing en verkoop bij kleine bedrijven — met AI waar dat
        iets oplevert.
      </h1>

      <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-[1fr_auto] md:gap-14">
        <div className="flex max-w-xl flex-col gap-5">
          <p className="reveal font-body text-base leading-[1.75] text-charcoal/75 opacity-0 md:text-lg">
            Concreet: ik bouw AI-workflows die terugkerend werk overnemen, zet e-mailmarketing
            en uw verkooppijplijn op, richt uw CRM in zodat het bijhoudt waar elke klant staat,
            en maak dashboards waarin u ziet wat er binnenkomt. Voor advertenties en social
            media genereer ik beeld, video en teksten met AI.
          </p>
          <p className="reveal font-body text-base leading-[1.75] text-charcoal/75 opacity-0 md:text-lg">
            Ik werk alleen, en ik werk in de programma&apos;s die u al gebruikt — er komt geen
            nieuw platform bij dat u moet leren. AI is daarbij een middel en geen doel: als
            iets in uw geval sneller of goedkoper zonder kan, zeg ik dat ook.
          </p>
        </div>

        <div className="reveal w-40 shrink-0 opacity-0 md:w-44">
          <img
            src={tristanPhoto}
            alt="Tristan Distelmans"
            className="w-full rounded-sm"
          />
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────────────────────────────────
   WERK — de zes dingen die ik doe, elk in gewone woorden
───────────────────────────────────────────────────────────────────────── */
const WERK = [
  {
    titel: 'AI-workflows',
    tekst: 'Terugkerend werk dat niet door een mens gedaan hoeft te worden: binnenkomende berichten sorteren en beantwoorden, documenten uitlezen, gegevens overzetten, offertes voorbereiden. Ik bouw de workflow en laat hem op de achtergrond draaien.',
  },
  {
    titel: 'E-mailmarketing',
    tekst: 'Campagnes naar nieuwe contacten en naar wie u al kent. Wie krijgt welk bericht, op welk moment, en wat er gebeurt zodra iemand antwoordt.',
  },
  {
    titel: 'Sales pipeline',
    tekst: 'Van eerste contact tot getekende offerte in vaste stappen. Elke lead krijgt opvolging op het juiste moment, ook wanneer u er zelf even niet aan denkt.',
  },
  {
    titel: 'CRM-optimalisatie en automatisering',
    tekst: 'Uw CRM zo inrichten dat het werk uit handen neemt in plaats van er werk bij te geven. Vaste fases, opvolgtaken die vanzelf verschijnen, velden die automatisch ingevuld raken.',
  },
  {
    titel: 'Dashboards',
    tekst: 'Eén scherm met wat er werkelijk gebeurt: hoeveel aanvragen er binnenkomen, waar ze vandaan komen en wat ervan verkocht raakt. Zodat u beslist op cijfers in plaats van op gevoel.',
  },
  {
    titel: 'AI-contentgeneratie',
    tekst: 'Beeld, video en teksten voor advertenties en social media, gegenereerd in plaats van geproduceerd. Handig wanneer u tien varianten van dezelfde advertentie wil uittesten.',
  },
]

function Werk() {
  const ref = useRef(null)
  useReveal(ref)

  return (
    <section ref={ref} id="werk" className="border-t border-charcoal/10">
      <div className="mx-auto max-w-4xl px-6 py-20 md:px-8 md:py-28">
        <h2 className="reveal font-mono-brand text-xs uppercase tracking-[0.18em] text-charcoal/40 opacity-0">
          Wat dat in de praktijk betekent
        </h2>

        <dl className="mt-12 flex flex-col">
          {WERK.map((w, i) => (
            <div
              key={w.titel}
              className="reveal grid grid-cols-1 gap-x-10 gap-y-2 border-t border-charcoal/10 py-7 opacity-0 md:grid-cols-[2.5rem_1fr_1.4fr] md:py-8"
            >
              <span className="font-mono-brand text-xs text-charcoal/30">
                {String(i + 1).padStart(2, '0')}
              </span>
              <dt className="font-heading text-lg font-semibold tracking-tight text-charcoal md:text-xl">
                {w.titel}
              </dt>
              <dd className="font-body text-base leading-[1.7] text-charcoal/65">
                {w.tekst}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────────────────────────────────
   KOPPELINGEN — visuele uitwerking van punt 05 uit de lijst hierboven
───────────────────────────────────────────────────────────────────────── */
function Koppelingen() {
  const ref = useRef(null)
  useReveal(ref)

  return (
    <section ref={ref} className="overflow-hidden border-t border-charcoal/10">
      <div className="mx-auto max-w-4xl px-6 pt-20 md:px-8 md:pt-28">
        <h2 className="reveal font-mono-brand text-xs uppercase tracking-[0.18em] text-charcoal/40 opacity-0">
          Koppelingen
        </h2>
        <p className="reveal mt-8 max-w-xl font-body text-base leading-[1.75] text-charcoal/75 opacity-0 md:text-lg">
          Uw mailbox, CRM, agenda en facturatie hoeven niet in één pakket te zitten. Ik laat ze
          met elkaar praten, zodat gegevens maar één keer ingevoerd worden en er een workflow
          bovenop kan draaien.
        </p>
      </div>

      <div className="reveal mt-14 opacity-0 md:mt-16">
        <OrbitingCirclesGlobe />
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────────────────────────────────
   CONTACT — geen formulier, gewoon hoe u mij bereikt
───────────────────────────────────────────────────────────────────────── */
function Contact() {
  const ref = useRef(null)
  useReveal(ref)

  return (
    <section ref={ref} id="contact" className="border-t border-charcoal/10">
      <div className="mx-auto max-w-4xl px-6 py-20 md:px-8 md:py-28">
        <h2 className="reveal font-mono-brand text-xs uppercase tracking-[0.18em] text-charcoal/40 opacity-0">
          Contact
        </h2>

        <p className="reveal mt-8 max-w-xl font-body text-base leading-[1.75] text-charcoal/75 opacity-0 md:text-lg">
          Heeft u iets concreets in gedachten, of wilt u eerst weten of dit bij u iets oplevert?
          Stuur gerust een mail of bel. Een eerste gesprek is vrijblijvend.
        </p>

        <div className="reveal mt-10 flex flex-col gap-3 opacity-0">
          <a
            href={`mailto:${EMAIL}`}
            className="font-heading font-semibold tracking-tight text-charcoal underline decoration-clay decoration-2 underline-offset-[6px] transition-colors hover:text-clay"
            style={{ fontSize: 'clamp(1.35rem, 3vw, 2rem)' }}
          >
            {EMAIL}
          </a>
          <a
            href={GSM_HREF}
            className="font-body text-lg text-charcoal/70 transition-colors hover:text-clay"
          >
            {GSM}
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-lg text-charcoal/70 transition-colors hover:text-clay"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────────────────────────────────
   FOOTER — wettelijk verplichte ondernemersinformatie
───────────────────────────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="border-t border-charcoal/10">
      <div className="mx-auto flex max-w-4xl flex-col gap-1 px-6 py-8 font-mono-brand text-xs text-charcoal/40 md:flex-row md:justify-between md:px-8">
        <span>Ainova — {ADRES}</span>
        <span>Ondernemingsnummer {BTW}</span>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <Intro />
      <Werk />
      <Koppelingen />
      <Contact />
      <Footer />
    </div>
  )
}
