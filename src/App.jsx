import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowUpRight } from 'lucide-react'

import HeroPastel from '@/components/ui/hero-pastel'
import { FlowerMark } from '@/components/ui/flower'
import { meldConversie } from '@/lib/gtag'
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

          <p className="reveal mx-auto mt-6 max-w-xl font-body text-base leading-[1.7] text-[#0A0A0A]/55 md:text-lg">
            Cases, services and pricing are being written. In the meantime, the fastest
            route is a direct message — I answer personally.
          </p>

          <div className="reveal mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${EMAIL}`}
              onClick={() => meldConversie('e-mail coming soon')}
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
   FOOTER — foto, contact en de wettelijk verplichte ondernemersgegevens
───────────────────────────────────────────────────────────────────────── */
function Footer() {
  const ref = useRef(null)
  useReveal(ref)

  return (
    <footer ref={ref} id="contact" className="bg-white px-6 pb-8 md:px-10">
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
            <div>
              <div className="flex items-center gap-2.5">
                <FlowerMark className="h-5 w-5 text-white" />
                <span className="font-body text-lg font-semibold tracking-tight text-white">
                  Ainova
                </span>
              </div>
              <p className="mt-3 font-body text-sm leading-relaxed text-white/55">
                Tristan Distelmans — I build AI systems that generate leads, close deals
                and scale operations for B2B companies.
              </p>
            </div>
          </div>

          {/* contact */}
          <div className="reveal flex flex-col gap-3">
            <span className="font-mono-brand text-xs uppercase tracking-[0.18em] text-white/40">
              Contact
            </span>
            <a
              href={`mailto:${EMAIL}`}
              onClick={() => meldConversie('e-mail footer')}
              className="font-body text-base text-white transition-colors hover:text-white/60"
            >
              {EMAIL}
            </a>
            <a
              href={GSM_HREF}
              onClick={() => meldConversie('telefoon footer')}
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
          <span>© {JAAR} Ainova</span>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <HeroPastel />
      <ComingSoon />
      <Footer />
    </div>
  )
}
