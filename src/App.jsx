import { useEffect, useRef } from 'react'
import { Routes, Route } from 'react-router-dom'
import { gsap } from 'gsap'
import { ArrowRight, ChevronLeft, ChevronRight, Compass, Cpu, Database, Linkedin, Mail, SearchX, ShieldAlert, UserX } from 'lucide-react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import HeroLandschap from '@/components/ui/hero-landschap'
import UseCases from '@/components/ui/use-cases'
import TaalProvider from '@/components/ui/taal-provider'
import { useTaal } from '@/lib/taal'
import Bedankt from '@/pages/bedankt'
import tristanPortret from './assets/tristan-portret.webp'

gsap.registerPlugin(ScrollTrigger)

const LINKEDIN_URL = 'https://www.linkedin.com/in/tristan-distelmans-423398238'
const EMAIL = 'tristan@ainova.be'
const GSM = '0474 50 74 78'
const GSM_HREF = 'tel:+32474507478'
const BTW = 'BE 1009.167.610'
const KANTOOR = 'Corda Incubator, Kempische Steenweg 303, 3500 Hasselt'
const JAAR = 2026

/* Zachte fade-in, gescoped op een sectie. */
function useReveal(ref, selector = '.reveal') {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(selector,
        { y: 18, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', stagger: 0.08,
          scrollTrigger: { trigger: ref.current, start: 'top 85%' } }
      )
    }, ref)
    return () => ctx.revert()
  }, [ref, selector])
}

/* Kleuren uit de huisstijl (ochtendmist, boomschaduw, veldgroen, ...). */
const INKT = 'text-[#0B1B2E]'
const BIJTEKST = 'text-[#2F3D50]'

/* ─────────────────────────────────────────────────────────────────────────
   SECTIEKOP — kop in Newsreader, zonder bovenschrift. Zelfde maat overal.
───────────────────────────────────────────────────────────────────────── */
function SectieKop({ sleutel }) {
  const { t } = useTaal()
  return (
    <>
      <h2
        className={`reveal max-w-3xl font-hero-serif font-normal leading-[1.04] tracking-[-0.025em] ${INKT}`}
        style={{ fontSize: 'clamp(2.25rem, 4.4vw, 3.75rem)' }}
      >
        {t(`${sleutel}.titel`)}
      </h2>
    </>
  )
}

/* Respecteert prefers-reduced-motion: dan staat alles meteen in beeld. */
const rustig = () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

/* ─────────────────────────────────────────────────────────────────────────
   PROBLEEM — gecentreerde kop, daaronder een
   horizontaal scrollbare rij kaarten met elk een rond "orb"-icoon: dubbele rand, zachte gloed
   erachter. Naar Feature 07 van Hirael (MIT), zonder motion-bibliotheek:
   de bestaande reveal-animatie doet het inschuiven.
───────────────────────────────────────────────────────────────────────── */
const PROBLEEM_ICONEN = [SearchX, Cpu, Compass, UserX, Database, ShieldAlert]

function Probleem() {
  const ref = useRef(null)
  const { t } = useTaal()
  useReveal(ref)
  const punten = t('probleem.punten')
  const rij = useRef(null)
  const schuif = (richting) => {
    const el = rij.current
    if (!el) return
    const kaart = el.querySelector('li')
    const stap = kaart ? kaart.offsetWidth + 12 : el.clientWidth * 0.8
    el.scrollBy({ left: richting * stap, behavior: rustig() ? 'auto' : 'smooth' })
  }

  return (
    <section ref={ref} id="probleem" className="bg-[#FBFCFD] px-6 py-24 md:px-10 md:py-36">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
        <h2
          className={`reveal font-hero-serif font-normal leading-[1.06] tracking-[-0.025em] ${INKT}`}
          style={{ fontSize: 'clamp(2.25rem, 4.4vw, 3.75rem)' }}
        >
          {t('probleem.titel')}
        </h2>
      </div>

      {/* de rij loopt over de volle schermbreedte; de eerste kaart lijnt uit
          met de rest van de pagina (max-w-7xl met px-10) */}
      <div className="relative -mx-6 mt-14 md:-mx-10 md:mt-20">
        <ul
          ref={rij}
          style={{
            maskImage: 'linear-gradient(to right, #000 92%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, #000 92%, transparent)',
          }}
          className="geen-scrollbalk flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-px-6 px-6 pb-2 md:[padding-inline:max(2.5rem,calc((100%-80rem)/2))] md:[scroll-padding-inline:max(2.5rem,calc((100%-80rem)/2))]"
        >
          {punten.map((punt, i) => {
            const Icoon = PROBLEEM_ICONEN[i % PROBLEEM_ICONEN.length]
            return (
              <li
                key={punt.titel}
                className="reveal group flex w-[16.5rem] shrink-0 snap-start flex-col items-center gap-7 overflow-hidden rounded-2xl border border-[#E2E8EF] bg-[#FBFCFD] px-8 pb-9 pt-11 text-center transition-colors duration-500 hover:bg-[#F1F4F8]/60 sm:w-[19rem]"
              >
                <span className="relative flex h-28 w-28 items-center justify-center rounded-full border border-[#E2E8EF] bg-[#FBFCFD] shadow-[0_1px_2px_rgba(11,27,46,0.05)] outline outline-1 outline-offset-4 outline-[#E2E8EF] transition-transform duration-500 group-hover:scale-[1.03]">
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 z-0 scale-125 rounded-full blur-xl"
                    style={{ background: 'radial-gradient(circle, rgba(31,90,148,0.16) 0%, rgba(31,90,148,0.04) 45%, transparent 70%)' }}
                  />
                  <Icoon aria-hidden="true" size={40} strokeWidth={1.25} className="relative z-10 text-[#1F5A94]" />
                </span>
                <h3 className={`font-hero-serif text-[1.4rem] font-normal leading-tight tracking-[-0.015em] ${INKT}`}>
                  {punt.titel}
                </h3>
              </li>
            )
          })}
        </ul>

        {/* pijlen voor wie met een muis zit; op gsm volstaat vegen */}
        <div className="mt-8 hidden justify-center gap-2 md:flex">
          {[
            { richting: -1, Pijl: ChevronLeft, label: t('probleem.vorige') },
            { richting: 1, Pijl: ChevronRight, label: t('probleem.volgende') },
          ].map(({ richting, Pijl: icoon, label }) => {
            const Pijl = icoon
            return (
            <button
              key={richting}
              type="button"
              aria-label={label}
              onClick={() => schuif(richting)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E2E8EF] bg-[#FBFCFD] text-[#1F5A94] transition-colors duration-300 hover:bg-[#1F5A94] hover:text-[#F4F7FA]"
            >
              <Pijl size={18} strokeWidth={1.5} />
            </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────────────────────────────────
   AANPAK — strategie (AI-audit), adoptie, implementatie, optimalisatie als tijdlijn. De lijn tussen
   de stappen loopt mee met het scrollen: horizontaal vanaf md, verticaal
   op gsm. Geen prijs: die komt in het gesprek.
───────────────────────────────────────────────────────────────────────── */
function Aanpak() {
  const ref = useRef(null)
  const { t } = useTaal()
  useReveal(ref)

  useEffect(() => {
    if (rustig()) return
    const ctx = gsap.context(() => {
      const scroll = { trigger: '.aanpak-lijst', start: 'top 75%', end: 'bottom 55%', scrub: 0.6 }
      gsap.fromTo('.aanpak-lijn-h', { scaleX: 0 }, { scaleX: 1, ease: 'none', scrollTrigger: scroll })
      gsap.fromTo('.aanpak-lijn-v', { scaleY: 0 }, { scaleY: 1, ease: 'none', scrollTrigger: { ...scroll } })
      gsap.utils.toArray('.aanpak-stip').forEach((stip, i) => {
        gsap.fromTo(stip,
          { backgroundColor: '#FBFCFD', color: '#1F5A94' },
          { backgroundColor: '#1F5A94', color: '#F4F7FA', duration: 0.4,
            scrollTrigger: { trigger: '.aanpak-lijst', start: `top+=${i * 90} 65%`, toggleActions: 'play none none reverse' } }
        )
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} id="aanpak" className="bg-[#FBFCFD] px-6 pb-24 md:px-10 md:pb-36">
      <div className="mx-auto max-w-7xl border-t border-[#E2E8EF] pt-16 md:pt-28">
        <div className="grid gap-6 md:grid-cols-2 md:items-end md:gap-16">
          <div>
            <SectieKop sleutel="aanpak" />
          </div>
          <p className={`reveal max-w-md font-hero-sans text-lg leading-[1.6] ${BIJTEKST}`}>
            {t('aanpak.intro')}
          </p>
        </div>

        <div className="aanpak-lijst relative mt-16 md:mt-24">
          {/* basislijn en de lijn die meeloopt met het scrollen */}
          <span className="absolute left-[1.125rem] top-2 bottom-2 w-px bg-[#E2E8EF] md:hidden" />
          <span className="aanpak-lijn-v absolute left-[1.125rem] top-2 bottom-2 w-px origin-top bg-[#1F5A94] md:hidden" />
          <span className="absolute inset-x-[1.125rem] top-[1.125rem] hidden h-px bg-[#E2E8EF] md:block" />
          <span className="aanpak-lijn-h absolute inset-x-[1.125rem] top-[1.125rem] hidden h-px origin-left bg-[#1F5A94] md:block" />

          <ol className="relative grid gap-12 md:grid-cols-4 md:gap-10">
            {t('aanpak.stappen').map((stap, i) => (
              <li key={stap.titel} className="reveal relative pl-14 md:pl-0">
                <span className="aanpak-stip absolute left-0 flex h-9 w-9 items-center justify-center rounded-full bg-[#1F5A94] font-hero-sans text-xs font-medium tabular-nums text-[#F4F7FA] ring-1 ring-[#1F5A94] md:relative">
                  0{i + 1}
                </span>
                <h3 className={`font-hero-serif text-[1.75rem] font-normal leading-tight tracking-[-0.02em] md:mt-10 ${INKT}`}>
                  {stap.titel}
                </h3>
                <p className={`mt-3 max-w-sm font-hero-sans text-[0.95rem] leading-[1.6] ${BIJTEKST}`}>{stap.tekst}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────────────────────────────────
   OVER AINOVA — wie erachter staat. Alleen echte referenties.
───────────────────────────────────────────────────────────────────────── */
function OverAinova() {
  const ref = useRef(null)
  const { t } = useTaal()
  useReveal(ref)

  return (
    <section ref={ref} id="over" className="bg-[#FBFCFD] px-6 pb-24 md:px-10 md:pb-32">
      <div className="mx-auto grid max-w-7xl gap-10 border-t border-[#E2E8EF] pt-16 md:grid-cols-[1fr_minmax(0,10rem)] md:gap-20 md:pt-24">
        <div>
          <SectieKop sleutel="overmij" />
          <div className="mt-8 max-w-2xl space-y-4">
            {t('overmij.alineas').map((alinea) => (
              <p key={alinea} className={`reveal font-hero-sans text-lg leading-[1.6] ${BIJTEKST}`}>
                {alinea}
              </p>
            ))}
          </div>
        </div>

        <figure className="reveal w-full max-w-[7rem] sm:max-w-[10rem]">
          <div
            className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#13345f] bg-cover bg-center"
            style={{ backgroundImage: 'linear-gradient(180deg, rgba(8,22,44,0.1) 0%, rgba(8,22,44,0.3) 100%), url(/hero-blauw.webp)' }}
          >
            <img
              src={tristanPortret}
              alt={t('overmij.bijschrift')}
              width={680}
              height={801}
              loading="lazy"
              className="absolute left-1/2 top-[7%] w-[140%] max-w-none -translate-x-[53%]"
            />
          </div>
          <figcaption className={`mt-3 font-hero-sans text-sm ${BIJTEKST}`}>
            {t('overmij.bijschrift')}
          </figcaption>
        </figure>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────────────────────────────────
   CONTACT — geen formulier: een knop naar de mail en een naar LinkedIn.
   Drempel zo laag mogelijk, en het antwoord komt rechtstreeks van Tristan.
───────────────────────────────────────────────────────────────────────── */
function Contact() {
  const ref = useRef(null)
  const { t } = useTaal()
  useReveal(ref)

  return (
    <section ref={ref} id="contact" className="bg-[#FBFCFD] px-4 pb-4 sm:px-6 sm:pb-6">
      <div
        className="flex min-h-[70svh] w-full flex-col items-center justify-center overflow-hidden rounded-[2rem] bg-[#13345f] bg-cover bg-center px-6 py-20 text-center sm:px-10 md:py-28"
        style={{ backgroundImage: 'linear-gradient(180deg, rgba(8,22,44,0.5) 0%, rgba(8,22,44,0.35) 50%, rgba(8,22,44,0.6) 100%), url(/hero-blauw.webp)' }}
      >
        <h2
          className="reveal max-w-3xl font-hero-serif font-normal leading-[1.04] tracking-[-0.025em] text-[#F4F7FA]"
          style={{ fontSize: 'clamp(2.25rem, 4.4vw, 3.75rem)' }}
        >
          {t('contact.titel')}
        </h2>
        <p className="reveal mt-6 max-w-lg font-hero-sans text-base leading-[1.6] text-[#EEF3F8] md:text-lg">
          {t('contact.sub')}
        </p>

        <div className="reveal mt-10 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href={`mailto:${EMAIL}`}
            className="group inline-flex items-center gap-2.5 rounded-full bg-[#F4F7FA] px-6 py-3.5 font-hero-sans text-[0.95rem] font-medium text-[#0B1B2E] transition-transform hover:-translate-y-0.5"
          >
            <Mail size={16} />
            {t('contact.mail')}
            <span className="text-[#2F3D50]">· {EMAIL}</span>
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 rounded-full px-6 py-3.5 font-hero-sans text-[0.95rem] font-medium text-[#F4F7FA] ring-1 ring-white/30 transition-all hover:-translate-y-0.5 hover:ring-white/60"
          >
            <Linkedin size={16} />
            {t('contact.linkedin')}
            <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────────────────────────────────
   FOOTER — contact en de wettelijk verplichte ondernemersgegevens
───────────────────────────────────────────────────────────────────────── */
const FOOTER_GROOT = 'block font-hero-serif text-2xl leading-tight tracking-[-0.02em] text-[#F4F7FA] md:text-3xl'
const FOOTER_KLEIN = 'font-hero-sans text-sm text-[#A9BBD0]'

function Footer() {
  const ref = useRef(null)
  useReveal(ref)

  return (
    <footer ref={ref} className="bg-[#0A1A2E]">
      <div className="mx-auto max-w-7xl px-6 pb-10 pt-16 md:px-10 md:pb-12 md:pt-20">
        <div className="flex flex-col gap-12 md:flex-row md:items-end md:justify-between md:gap-16">
          <div className="reveal">
            <p className={FOOTER_GROOT}>Ainova</p>
            <p className={`mt-1.5 ${FOOTER_KLEIN}`}>Corda Incubator, Hasselt</p>
          </div>

          <div className="reveal md:text-right">
            <a href={`mailto:${EMAIL}`} className={`${FOOTER_GROOT} transition-colors hover:text-[#A9BBD0]`}>
              {EMAIL}
            </a>
            <p className={`mt-1.5 ${FOOTER_KLEIN}`}>
              <a href={GSM_HREF} className="transition-colors hover:text-[#F4F7FA]">{GSM}</a>
              <span className="mx-2 text-white/25">·</span>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-[#F4F7FA]"
              >
                <Linkedin size={13} />
                LinkedIn
              </a>
            </p>
          </div>
        </div>

        {/* wettelijke gegevens */}
        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-7 font-hero-sans text-sm text-[#A9BBD0]/70 md:flex-row md:items-center md:justify-between">
          <span>
            Ainova · BTW {BTW} · Kantoor: {KANTOOR}
          </span>
          <span>© {JAAR} Ainova</span>
        </div>
      </div>
    </footer>
  )
}

function HomePage() {
  return (
    <div className="min-h-screen bg-[#FBFCFD]">
      <main>
        <HeroLandschap />
        <Probleem />
        <Aanpak />
        <UseCases />
        <OverAinova />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <TaalProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/bedankt" element={<Bedankt />} />
      </Routes>
    </TaalProvider>
  )
}
