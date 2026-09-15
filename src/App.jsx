import { useEffect, useRef } from 'react'
import { Routes, Route } from 'react-router-dom'
import { gsap } from 'gsap'
import { Linkedin } from 'lucide-react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import HeroLandschap from '@/components/ui/hero-landschap'
import ReadingTextReveal from '@/components/ui/reading-text-reveal'
import UseCases from '@/components/ui/use-cases'
import TaalProvider from '@/components/ui/taal-provider'
import { useTaal } from '@/lib/taal'
import ContactForm from '@/components/ui/contact-form'
import Bedankt from '@/pages/bedankt'
import tristanPortret from './assets/tristan-portret.webp'

gsap.registerPlugin(ScrollTrigger)

const LINKEDIN_URL = 'https://www.linkedin.com/in/tristan-distelmans-423398238'
const EMAIL = 'tristan@ainova.be'
const GSM = '0474 50 74 78'
const GSM_HREF = 'tel:+32474507478'
const BTW = 'BE 1009.167.610'
const ADRES = 'Prinsenstraat 47, 3500 Hasselt'
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

/* ─────────────────────────────────────────────────────────────────────────
   CONTACT — het formulier; verstuurt via Web3Forms naar /bedankt
───────────────────────────────────────────────────────────────────────── */
function Contact() {
  const ref = useRef(null)
  const { t } = useTaal()
  useReveal(ref)

  return (
    <section ref={ref} id="contact" className="bg-[#2f3a2e]">
      {/* volle breedte zoals de hero, maar niet hoger dan de inhoud nodig heeft */}
      <div className="relative overflow-hidden">
        {/* dezelfde foto als de hero, iets donkerder links voor de witte tekst */}
        <div
          className="absolute inset-0 bg-cover"
          style={{
            backgroundImage: 'url(/hero-boom-1200.webp)',
            backgroundPosition: '40% 60%',
            filter: 'brightness(1.05) contrast(0.85) saturate(0.85)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(120,138,178,0.30) 0%, rgba(10,14,10,0) 40%, rgba(10,14,10,0.35) 100%),' +
              'linear-gradient(90deg, rgba(10,14,10,0.55) 0%, rgba(10,14,10,0.25) 55%, rgba(10,14,10,0.10) 100%)',
          }}
        />

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-8 px-6 py-12 md:px-10 md:py-14 lg:grid-cols-[1fr_1.15fr] lg:gap-12 xl:grid-cols-[0.75fr_1.25fr]">
          <div className="reveal flex items-center text-white">
            <h2
              className="font-hero-serif font-normal leading-[1.02] tracking-[-0.025em]"
              style={{ fontSize: 'clamp(2.25rem, 3.8vw, 3.5rem)', textShadow: '0 2px 24px rgba(0,0,0,0.3)' }}
            >
              {t('contact.titel')}
            </h2>
          </div>

          <div className="reveal">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────────────────────────────────
   FOOTER — foto, contact en de wettelijk verplichte ondernemersgegevens
───────────────────────────────────────────────────────────────────────── */
function Footer() {
  const ref = useRef(null)
  const { t } = useTaal()
  useReveal(ref)

  return (
    <footer ref={ref} className="bg-[#0A0A0A]">
      <div className="mx-auto max-w-7xl px-6 pb-10 pt-16 md:px-10 md:pb-12 md:pt-20">
        <div className="flex flex-col gap-12 md:flex-row md:items-end md:justify-between md:gap-16">
          {/* wie: portret op een sfeerachtergrond, zoals de kaarten bij de use cases */}
          <div className="reveal flex flex-col gap-6 sm:flex-row sm:items-end">
            <div className="relative h-56 w-44 shrink-0 overflow-hidden rounded-[1.25rem] bg-[#2f3a2e] ring-1 ring-white/10 md:h-64 md:w-52">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/sfeer/schemer.webp)' }} />
              {/* h-[92%] + object-bottom: het volledige hoofd past, met wat lucht erboven */}
              <img
                src={tristanPortret}
                alt="Tristan Distelmans, oprichter van Ainova"
                width={680}
                height={801}
                loading="lazy"
                className="absolute inset-x-0 bottom-0 h-[92%] w-full object-cover object-top"
              />
              <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            <div>
              <p className="font-hero-serif text-3xl leading-tight tracking-[-0.02em] text-white md:text-4xl">
                Tristan Distelmans
              </p>
              <p className="mt-1.5 font-hero-sans text-sm text-white/55">{t('footer.rol')}</p>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 font-hero-sans text-sm text-white ring-1 ring-white/15 transition-colors hover:bg-white/20"
              >
                <Linkedin size={14} />
                {t('footer.volgen')}
              </a>
            </div>
          </div>

          {/* contact */}
          <div className="reveal flex flex-col gap-2 md:items-end md:text-right">
            <span className="font-mono-brand text-xs uppercase tracking-[0.18em] text-white/40">
              {t('footer.contact')}
            </span>
            <a
              href={`mailto:${EMAIL}`}
              className="mt-1 font-hero-serif text-2xl tracking-[-0.01em] text-white transition-colors hover:text-white/60 md:text-3xl"
            >
              {EMAIL}
            </a>
            <a href={GSM_HREF} className="font-hero-sans text-base text-white/65 transition-colors hover:text-white">
              {GSM}
            </a>
          </div>
        </div>

        {/* wettelijke gegevens */}
        <div className="mt-12 flex flex-col gap-2 border-t border-dashed border-white/15 pt-7 font-hero-sans text-xs text-white/40 md:flex-row md:items-center md:justify-between">
          <span>
            Ainova · {ADRES} · BTW {BTW}
          </span>
          <span>© {JAAR} Ainova</span>
        </div>
      </div>
    </footer>
  )
}

function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <HeroLandschap />
        <ReadingTextReveal sleutel="visie" />
        <UseCases />
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
