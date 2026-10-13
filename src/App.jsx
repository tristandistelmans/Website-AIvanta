import { useEffect, useRef } from 'react'
import { Routes, Route } from 'react-router-dom'
import { gsap } from 'gsap'
import { ArrowRight, Linkedin, Mail } from 'lucide-react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import HeroLandschap from '@/components/ui/hero-landschap'
import UseCases from '@/components/ui/use-cases'
import TaalProvider from '@/components/ui/taal-provider'
import { useTaal } from '@/lib/taal'
import Bedankt from '@/pages/bedankt'
import tristanPortret from './assets/tristan-portret-sfeer.webp'

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
const INKT = 'text-[#1A1A12]'
const BIJTEKST = 'text-[#6E6857]'

/* ─────────────────────────────────────────────────────────────────────────
   SECTIEKOP — label in veldgroen, kop in Newsreader. Zelfde maat overal.
───────────────────────────────────────────────────────────────────────── */
function SectieKop({ sleutel }) {
  const { t } = useTaal()
  return (
    <>
      <p className="reveal font-mono-brand text-xs uppercase tracking-[0.16em] text-[#4A5130]">
        {t(`${sleutel}.label`)}
      </p>
      <h2
        className={`reveal mt-5 max-w-3xl font-hero-serif font-normal leading-[1.04] tracking-[-0.025em] ${INKT}`}
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
   PROBLEEM — vier open kolommen, geen kaarten. Bij het inscrollen
   tekent boven elke kolom een lijn zich van links naar rechts.
───────────────────────────────────────────────────────────────────────── */
function Probleem() {
  const ref = useRef(null)
  const { t } = useTaal()
  useReveal(ref)
  const punten = t('probleem.punten')

  useEffect(() => {
    if (rustig()) return
    const ctx = gsap.context(() => {
      gsap.fromTo('.probleem-lijn',
        { scaleX: 0 },
        { scaleX: 1, duration: 1.3, ease: 'power3.out', stagger: 0.15,
          scrollTrigger: { trigger: '.probleem-lijst', start: 'top 80%' } }
      )
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} id="probleem" className="bg-[#FCFAF6] px-6 pb-24 pt-24 md:px-10 md:pb-36 md:pt-36">
      <div className="mx-auto max-w-7xl">
        <SectieKop sleutel="probleem" />

        <ol className="probleem-lijst mt-16 grid gap-x-10 gap-y-14 sm:grid-cols-2 md:mt-24 lg:grid-cols-4">
          {punten.map((punt, i) => (
            <li key={punt.titel} className="reveal group relative pt-8">
              <span className="probleem-lijn absolute inset-x-0 top-0 h-px origin-left bg-[#1A1A12]/25 transition-colors duration-500 group-hover:bg-[#4A5130]" />
              <span className="font-hero-serif text-5xl leading-none text-[#4A5130] transition-transform duration-500 group-hover:-translate-y-1 inline-block">
                0{i + 1}
              </span>
              <h3 className={`mt-8 font-hero-serif text-[1.55rem] font-normal leading-tight tracking-[-0.02em] ${INKT}`}>
                {punt.titel}
              </h3>
              <p className={`mt-3 max-w-xs font-hero-sans text-[0.95rem] leading-[1.6] ${BIJTEKST}`}>{punt.tekst}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────────────────────────────────
   AANPAK — analyse, implementatie, adoptie als tijdlijn. De lijn tussen
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
          { backgroundColor: '#FCFAF6', color: '#4A5130' },
          { backgroundColor: '#4A5130', color: '#F7F3EC', duration: 0.4,
            scrollTrigger: { trigger: '.aanpak-lijst', start: `top+=${i * 90} 65%`, toggleActions: 'play none none reverse' } }
        )
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} id="aanpak" className="bg-[#FCFAF6] px-6 pb-24 md:px-10 md:pb-36">
      <div className="mx-auto max-w-7xl border-t border-[#E6DFD3] pt-16 md:pt-28">
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
          <span className="absolute left-[1.125rem] top-2 bottom-2 w-px bg-[#E6DFD3] md:hidden" />
          <span className="aanpak-lijn-v absolute left-[1.125rem] top-2 bottom-2 w-px origin-top bg-[#4A5130] md:hidden" />
          <span className="absolute inset-x-[1.125rem] top-[1.125rem] hidden h-px bg-[#E6DFD3] md:block" />
          <span className="aanpak-lijn-h absolute inset-x-[1.125rem] top-[1.125rem] hidden h-px origin-left bg-[#4A5130] md:block" />

          <ol className="relative grid gap-12 md:grid-cols-3 md:gap-10">
            {t('aanpak.stappen').map((stap, i) => (
              <li key={stap.titel} className="reveal relative pl-14 md:pl-0">
                <span className="aanpak-stip absolute left-0 flex h-9 w-9 items-center justify-center rounded-full bg-[#4A5130] font-mono-brand text-xs text-[#F7F3EC] ring-1 ring-[#4A5130] md:relative">
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
    <section ref={ref} id="over" className="bg-[#FCFAF6] px-6 pb-24 md:px-10 md:pb-32">
      <div className="mx-auto grid max-w-7xl gap-10 border-t border-[#E6DFD3] pt-16 md:grid-cols-[1fr_minmax(0,20rem)] md:gap-20 md:pt-24">
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

        <figure className="reveal w-full max-w-[20rem]">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-[#F5F1EA] ring-1 ring-[#E6DFD3]">
            <img
              src={tristanPortret}
              alt={t('overmij.bijschrift')}
              width={493}
              height={620}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover object-top"
            />
          </div>
          <figcaption className={`mt-3 font-mono-brand text-[0.7rem] uppercase tracking-[0.12em] ${BIJTEKST}`}>
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
    <section ref={ref} id="contact" className="bg-[#FCFAF6] px-4 pb-4 sm:px-6 sm:pb-6">
      <div className="mx-auto flex max-w-7xl flex-col items-center rounded-[2rem] bg-[#F5F1EA] px-6 py-20 text-center sm:px-10 md:py-28">
        <h2
          className={`reveal max-w-3xl font-hero-serif font-normal leading-[1.04] tracking-[-0.025em] ${INKT}`}
          style={{ fontSize: 'clamp(2.25rem, 4.4vw, 3.75rem)' }}
        >
          {t('contact.titel')}
        </h2>
        <p className={`reveal mt-6 max-w-lg font-hero-sans text-base leading-[1.6] md:text-lg ${BIJTEKST}`}>
          {t('contact.sub')}
        </p>

        <div className="reveal mt-10 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href={`mailto:${EMAIL}`}
            className="group inline-flex items-center gap-2.5 rounded-full bg-[#1A1A12] px-6 py-3.5 font-hero-sans text-[0.95rem] font-medium text-[#F7F3EC] transition-transform hover:-translate-y-0.5"
          >
            <Mail size={16} />
            {t('contact.mail')}
            <span className="text-[#D2C9B8]">· {EMAIL}</span>
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`group inline-flex items-center gap-2.5 rounded-full px-6 py-3.5 font-hero-sans text-[0.95rem] font-medium ring-1 ring-[#1A1A12]/20 transition-all hover:-translate-y-0.5 hover:ring-[#1A1A12]/50 ${INKT}`}
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
const FOOTER_GROOT = 'block font-hero-serif text-2xl leading-tight tracking-[-0.02em] text-[#F7F3EC] md:text-3xl'
const FOOTER_KLEIN = 'font-hero-sans text-sm text-[#D2C9B8]'

function Footer() {
  const ref = useRef(null)
  useReveal(ref)

  return (
    <footer ref={ref} className="bg-[#1A1A12]">
      <div className="mx-auto max-w-7xl px-6 pb-10 pt-16 md:px-10 md:pb-12 md:pt-20">
        <div className="flex flex-col gap-12 md:flex-row md:items-end md:justify-between md:gap-16">
          <div className="reveal">
            <p className={FOOTER_GROOT}>Ainova</p>
            <p className={`mt-1.5 ${FOOTER_KLEIN}`}>Corda Incubator, Hasselt</p>
          </div>

          <div className="reveal md:text-right">
            <a href={`mailto:${EMAIL}`} className={`${FOOTER_GROOT} transition-colors hover:text-[#D2C9B8]`}>
              {EMAIL}
            </a>
            <p className={`mt-1.5 ${FOOTER_KLEIN}`}>
              <a href={GSM_HREF} className="transition-colors hover:text-[#F7F3EC]">{GSM}</a>
              <span className="mx-2 text-white/25">·</span>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-[#F7F3EC]"
              >
                <Linkedin size={13} />
                LinkedIn
              </a>
            </p>
          </div>
        </div>

        {/* wettelijke gegevens */}
        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-7 font-hero-sans text-sm text-[#D2C9B8]/70 md:flex-row md:items-center md:justify-between">
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
    <div className="min-h-screen bg-[#FCFAF6]">
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
