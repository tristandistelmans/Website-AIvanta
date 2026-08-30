import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import OrbitingCirclesGlobe from '@/components/ui/orbiting-circles-02'
import HeroLines from '@/components/ui/hero-lines'
import MagneticLink from '@/components/ui/magnetic'
import { Logos3 } from '@/components/ui/logos3'
import { meldConversie } from '@/lib/gtag'
import tristanPhoto from './assets/tristan-distelmans.jpg'

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
          onClick={() => meldConversie('e-mail header')}
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
  const linesRef = useRef(null)
  useReveal(ref)

  // Parallax: de lijnen schuiven trager weg dan de tekst erboven.
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(linesRef.current, {
        yPercent: 14,
        ease: 'none',
        scrollTrigger: { trigger: ref.current, start: 'top top', end: 'bottom top', scrub: 0.6 },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      // Zelfde opzet als de referentie: licht bovenaan, snel naar donker.
      // Cream en charcoal i.p.v. #fff en #000, anders ontstaat er een naad
      // met de header erboven en botst het met de rest van de pagina.
      style={{ background: 'linear-gradient(to bottom, #F2F0E9 0%, #1A1A1A 26%, #1A1A1A 100%)' }}
    >
      {/* Traag drijvende gloeivlekken */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="hero-glow-a absolute left-[-12%] top-[8%] h-[78%] w-[72%] rounded-full"
          style={{
            background:
              'radial-gradient(ellipse closest-side, rgba(54,157,253,0.34) 0%, rgba(54,157,253,0.12) 48%, transparent 100%)',
          }}
        />
        <div
          className="hero-glow-b absolute right-[-16%] top-[26%] h-[68%] w-[60%] rounded-full"
          style={{
            background:
              'radial-gradient(ellipse closest-side, rgba(46,64,54,0.68) 0%, rgba(46,64,54,0.24) 48%, transparent 100%)',
          }}
        />
      </div>

      {/* Lijnenpatroon — nu licht, want het ligt op een donkere ondergrond */}
      <div
        ref={linesRef}
        className="pointer-events-none absolute inset-x-0 -top-[10%] h-[125%]"
        style={{
          maskImage: 'linear-gradient(100deg, transparent 4%, rgba(0,0,0,0.5) 36%, #000 70%)',
          WebkitMaskImage: 'linear-gradient(100deg, transparent 4%, rgba(0,0,0,0.5) 36%, #000 70%)',
        }}
      >
        <HeroLines color="242, 240, 233" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 pb-20 pt-28 md:px-8 md:pb-28 md:pt-40">
      <p className="reveal font-mono-brand text-xs uppercase tracking-[0.18em] text-cream/45">
        Tristan Distelmans — Hasselt
      </p>

      <h1
        className="reveal mt-6 font-heading font-semibold leading-[1.08] tracking-tight text-cream"
        style={{ fontSize: 'clamp(2.2rem, 5.4vw, 3.6rem)' }}
      >
        A.I. &amp; automations voor bedrijven
      </h1>

      <p className="reveal mt-6 max-w-2xl font-body text-lg leading-[1.6] text-cream/75 md:text-xl">
        Ik bouw AI-systemen die leads genereren, deals sluiten en de dagelijkse werking
        opschalen.
      </p>

      <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-[1fr_auto] md:gap-14">
        <div className="flex max-w-xl flex-col gap-5">
          <p className="reveal font-body text-base leading-[1.75] text-cream/70 md:text-lg">
            Concreet: ik bouw AI-workflows die terugkerend werk overnemen, zorg dat er nieuwe
            leads binnenkomen en opgevolgd worden, richt uw CRM en verkoopproces in als één
            geheel, en maak dashboards waarin u ziet wat het oplevert. Voor advertenties en
            social media genereer ik beeld, video en teksten met AI.
          </p>
          <p className="reveal font-body text-base leading-[1.75] text-cream/70 md:text-lg">
            Ik werk alleen, en ik werk in de programma&apos;s die u al gebruikt — er komt geen
            nieuw platform bij dat u moet leren. AI is daarbij een middel en geen doel: als
            iets in uw geval sneller of goedkoper zonder kan, zeg ik dat ook.
          </p>
        </div>

        <div className="reveal w-40 shrink-0 md:w-44">
          <img
            src={tristanPhoto}
            alt="Tristan Distelmans"
            width={800}
            height={1075}
            className="w-full rounded-sm"
          />
        </div>
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
    titel: 'AI-leadgeneratie',
    tekst: 'Bedrijven zoeken die uw klant kunnen worden, en ze benaderen met berichten die op hun situatie slaan in plaats van op iedereen. De lijst, de teksten en de opvolging, tot er een gesprek uit komt.',
  },
  {
    titel: 'E-mailmarketing',
    tekst: 'Campagnes naar nieuwe contacten en naar wie u al kent. Wie krijgt welk bericht, op welk moment, en wat er gebeurt zodra iemand antwoordt.',
  },
  {
    titel: 'CRM- en salesautomatisering',
    tekst: 'Van eerste contact tot getekende offerte in vaste stappen, met een CRM dat werk uit handen neemt in plaats van er werk bij te geven. Opvolgtaken die vanzelf verschijnen, velden die automatisch ingevuld raken, en geen lead die blijft liggen.',
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

  // Regels schuiven één voor één van links binnen, iets uitgesprokener
  // dan de fade die de rest van de pagina gebruikt.
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.werk-regel',
        { x: -32, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.75, ease: 'power3.out', stagger: 0.1,
          scrollTrigger: { trigger: '.werk-lijst', start: 'top 82%' } }
      )
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} id="werk" className="border-t border-charcoal/10">
      <div className="mx-auto max-w-4xl px-6 py-20 md:px-8 md:py-28">
        <h2 className="reveal font-mono-brand text-xs uppercase tracking-[0.18em] text-charcoal/40">
          Wat dat in de praktijk betekent
        </h2>

        <dl className="werk-lijst mt-12 flex flex-col">
          {WERK.map((w, i) => (
            <div
              key={w.titel}
              className="werk-regel group grid grid-cols-1 gap-x-10 gap-y-2 border-t border-charcoal/10 py-7 transition-colors duration-300 hover:border-charcoal/25 md:grid-cols-[2.5rem_1fr_1.4fr] md:py-8"
            >
              <span className="font-mono-brand text-xs text-charcoal/30 transition-colors duration-300 group-hover:text-clay">
                {String(i + 1).padStart(2, '0')}
              </span>
              <dt className="font-heading text-lg font-semibold tracking-tight text-charcoal transition-transform duration-300 group-hover:translate-x-1.5 md:text-xl">
                {w.titel}
              </dt>
              <dd className="font-body text-base leading-[1.7] text-charcoal/65 transition-colors duration-300 group-hover:text-charcoal/85">
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
        <h2 className="reveal font-mono-brand text-xs uppercase tracking-[0.18em] text-charcoal/40">
          Koppelingen
        </h2>
        <p className="reveal mt-8 max-w-xl font-body text-base leading-[1.75] text-charcoal/75 md:text-lg">
          Uw mailbox, CRM, agenda en facturatie hoeven niet in één pakket te zitten. Ik laat ze
          met elkaar praten, zodat gegevens maar één keer ingevoerd worden en er een workflow
          bovenop kan draaien.
        </p>
      </div>

      <div className="reveal mt-14 md:mt-16">
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
        <h2 className="reveal font-mono-brand text-xs uppercase tracking-[0.18em] text-charcoal/40">
          Contact
        </h2>

        <p className="reveal mt-8 max-w-xl font-body text-base leading-[1.75] text-charcoal/75 md:text-lg">
          Heeft u iets concreets in gedachten, of wilt u eerst weten of dit bij u iets oplevert?
          Stuur gerust een mail of bel. Een eerste gesprek is vrijblijvend.
        </p>

        <div className="reveal mt-10 flex flex-col items-start gap-3">
          <MagneticLink
            href={`mailto:${EMAIL}`}
            onClick={() => meldConversie('e-mail contact')}
            strength={0.28}
            className="inline-block font-heading font-semibold tracking-tight text-charcoal underline decoration-clay decoration-2 underline-offset-[6px] transition-colors hover:text-clay"
            style={{ fontSize: 'clamp(1.35rem, 3vw, 2rem)' }}
          >
            {EMAIL}
          </MagneticLink>
          <a
            href={GSM_HREF}
            onClick={() => meldConversie('telefoon contact')}
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
      <Logos3 />
      <Werk />
      <Koppelingen />
      <Contact />
      <Footer />
    </div>
  )
}
