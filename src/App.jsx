import { useEffect, useRef } from 'react'
import { Routes, Route } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowUpRight } from 'lucide-react'

import HeroPastel from '@/components/ui/hero-pastel'
import { FlowerMark } from '@/components/ui/flower'
import ContactForm from '@/components/ui/contact-form'
import Bedankt from '@/pages/bedankt'
import CookieBanner, { OPEN_EVENEMENT } from '@/components/ui/cookie-banner'
import { Logos3 } from '@/components/ui/logos3'
import tristanPhoto from './assets/tristan-distelmans.jpg'

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
   COMING SOON — de site wordt uitgebouwd; dit blok houdt de pagina af
───────────────────────────────────────────────────────────────────────── */
function ComingSoon() {
  const ref = useRef(null)
  useReveal(ref)

  return (
    <section ref={ref} className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-6xl px-6 pb-24 pt-8 md:px-10 md:pb-32">
        <div
          className="relative overflow-hidden rounded-[2rem] px-8 py-20 text-center md:px-16 md:py-28"
          style={{
            background:
              'radial-gradient(ellipse 80% 90% at 8% 10%, rgba(206,190,247,0.40) 0%, rgba(206,190,247,0) 100%),' +
              'radial-gradient(ellipse 70% 80% at 95% 85%, rgba(178,238,238,0.45) 0%, rgba(178,238,238,0) 100%),' +
              'linear-gradient(180deg, #FBFBFD 0%, #F6F7FB 100%)',
          }}
        >
          <p className="reveal flex items-center justify-center gap-2.5 font-mono-brand text-xs uppercase tracking-[0.18em] text-[#0A0A0A]/70">
            <FlowerMark className="h-3.5 w-3.5 text-[#0A0A0A]" />
            Coming soon
          </p>

          <h2
            className="reveal mx-auto mt-7 max-w-3xl font-body font-normal leading-[1.08] tracking-[-0.02em] text-[#0A0A0A]"
            style={{ fontSize: 'clamp(2rem, 4.6vw, 3.25rem)' }}
          >
            The full site is on its way
          </h2>

          <div className="reveal mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${EMAIL}`}
              className="group inline-flex items-center gap-2 rounded-full bg-[#0A0A0A] px-6 py-3.5 font-mono-brand text-xs uppercase tracking-[0.14em] text-white transition-transform hover:-translate-y-0.5"
            >
              Email me
              <span className="relative flex h-4 w-4 items-center justify-center overflow-hidden">
                <ArrowUpRight
                  size={16}
                  className="absolute transition-transform duration-500 group-hover:-translate-y-5 group-hover:translate-x-4"
                />
                <ArrowUpRight
                  size={16}
                  className="absolute -translate-x-4 translate-y-5 transition-transform duration-500 group-hover:translate-x-0 group-hover:translate-y-0"
                />
              </span>
            </a>

            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-[#0A0A0A]/20 bg-white/60 px-6 py-3.5 font-mono-brand text-xs uppercase tracking-[0.14em] text-[#0A0A0A] backdrop-blur-sm transition-colors hover:border-[#0A0A0A]/45"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────────────────────────────────
   CONTACT — het formulier; verstuurt via Web3Forms naar /bedankt
───────────────────────────────────────────────────────────────────────── */
function Contact() {
  const ref = useRef(null)
  useReveal(ref)

  return (
    <section ref={ref} id="contact" className="bg-white px-6 py-16 md:px-10 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 rounded-[2rem] border border-black/5 bg-white px-8 py-12 shadow-[0_1px_2px_rgba(16,24,40,0.04)] md:grid-cols-[0.85fr_1.15fr] md:gap-16 md:px-12 md:py-14">
        <div className="reveal">
          <p className="flex items-center gap-2.5 font-mono-brand text-xs uppercase tracking-[0.18em] text-[#0A0A0A]/70">
            <FlowerMark className="h-3.5 w-3.5 text-[#0A0A0A]" />
            Contact
          </p>

          <h2
            className="mt-6 font-body font-normal leading-[1.1] tracking-[-0.02em] text-[#0A0A0A]"
            style={{ fontSize: 'clamp(1.75rem, 3.2vw, 2.4rem)' }}
          >
            Tell me what you are trying to fix
          </h2>
        </div>

        <div className="reveal">
          <ContactForm />
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
  useReveal(ref)

  return (
    <footer ref={ref} className="bg-white px-6 pb-8 md:px-10">
      <div className="mx-auto max-w-6xl rounded-[2rem] bg-[#0A0A0A] px-8 py-14 md:px-14 md:py-16">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between md:gap-16">
          {/* wie */}
          <div className="reveal flex max-w-md items-start gap-6">
            <img
              src={tristanPhoto}
              alt="Tristan Distelmans"
              width={800}
              height={1075}
              className="h-28 w-24 shrink-0 rounded-2xl object-cover object-top grayscale md:h-32 md:w-28"
            />
            <span className="self-center font-body text-lg font-semibold tracking-tight text-white md:text-xl">
              Tristan Distelmans
            </span>
          </div>

          {/* contact */}
          <div className="reveal flex flex-col gap-3">
            <span className="font-mono-brand text-xs uppercase tracking-[0.18em] text-white/40">
              Contact
            </span>
            <a
              href={`mailto:${EMAIL}`}
              className="font-body text-base text-white transition-colors hover:text-white/60"
            >
              {EMAIL}
            </a>
            <a
              href={GSM_HREF}
              className="font-body text-base text-white/70 transition-colors hover:text-white"
            >
              {GSM}
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-base text-white/70 transition-colors hover:text-white"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* wettelijke gegevens */}
        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-7 font-mono-brand text-xs text-white/40 md:flex-row md:items-center md:justify-between">
          <span>
            Ainova — {ADRES} · BTW {BTW}
          </span>
          <div className="flex items-center gap-5">
            <button
              type="button"
              onClick={() => window.dispatchEvent(new Event(OPEN_EVENEMENT))}
              className="font-mono-brand text-xs text-white/40 underline-offset-4 transition-colors hover:text-white/70 hover:underline"
            >
              Cookies
            </button>
            <span>© {JAAR} Ainova</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroPastel />
      <Logos3 />
      <ComingSoon />
      <Contact />
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/bedankt" element={<Bedankt />} />
      </Routes>
      <CookieBanner />
    </>
  )
}
