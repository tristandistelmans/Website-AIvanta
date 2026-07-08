import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { SplineScene } from '@/components/ui/splite'
import tristanPhoto from './assets/0267e3e3-c7ba-4952-a327-10ed2614011d.jpg'

gsap.registerPlugin(ScrollTrigger)

const SPLINE_SCENE = 'https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode'

const LINKEDIN_URL = 'https://www.linkedin.com/in/tristan-distelmans-423398238'
const EMAIL = 'tristan@ainova.be'
const GSM = '0474 50 74 78'
const GSM_HREF = 'tel:+32474507478'
const BTW = 'BE 1009.167.610'

function ComingSoon() {
  const rootRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.cs-elem',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out', stagger: 0.12 }
      )
    }, rootRef)
    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={rootRef}
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #1e2b24 0%, #1A1A1A 100%)' }}
    >
      {/* 3D robot — interactieve achtergrond (volgt de cursor) */}
      <div className="absolute inset-0 z-0 opacity-[0.6] md:opacity-80">
        <SplineScene scene={SPLINE_SCENE} className="w-full h-full" />
      </div>

      {/* donkere sluiers zodat de tekst leesbaar blijft boven de robot */}
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            'radial-gradient(ellipse 60% 55% at 50% 45%, rgba(20,26,22,0.88) 0%, rgba(20,26,22,0.55) 45%, rgba(20,26,22,0.15) 75%, transparent 100%)',
        }}
      />

      {/* soft ambient glow */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] opacity-60"
        style={{
          background:
            'radial-gradient(circle at 50% 25%, rgba(204,88,51,0.14) 0%, rgba(204,88,51,0) 55%)',
        }}
      />

      {/* main content — laag klikt door naar de robot, enkel de knoppen zijn interactief */}
      <main className="pointer-events-none relative z-10 flex-1 flex items-center justify-center px-6 py-20">
        <div className="w-full max-w-xl mx-auto flex flex-col items-center text-center">
          {/* titel */}
          <h1 className="cs-elem opacity-0 font-drama text-cream text-5xl md:text-6xl leading-none mb-8">
            Ainova
          </h1>

          {/* intro text */}
          <p className="cs-elem opacity-0 font-body text-cream/75 text-base md:text-lg leading-relaxed">
            <span className="text-cream font-medium">Ik ben Tristan, oprichter van Ainova.</span>{' '}
            Ik help bedrijven groeien met behulp van AI-automatiseringen. Dit doe ik door uw
            huidige processen te analyseren en kansen te spotten waar technologie het werk van u
            en/of uw werknemers kan overnemen. U hoeft zelf geen kennis van deze technologie te
            hebben om ze te gebruiken, en u moet uw huidige manier van werken niet aanpassen.
          </p>
          <p className="cs-elem opacity-0 font-body text-cream/75 text-base md:text-lg leading-relaxed mt-4">
            Omdat de vraag naar AI-implementatie in bedrijven hoog is en ik kwalitatief werk wil
            afleveren, kan ik met slechts een beperkt en selectief aantal mensen samenwerken. Neem
            vrijblijvend contact met mij op via LinkedIn of e-mail. Hopelijk tot snel.
          </p>

          {/* photo — onder de tekst, boven de knoppen */}
          <div className="cs-elem opacity-0 w-36 md:w-44 mt-10">
            <img
              src={tristanPhoto}
              alt="Tristan Distelmans — Ainova"
              className="w-full rounded-sm"
              style={{ filter: 'contrast(1.08) brightness(0.96) saturate(0.68)' }}
            />
          </div>

          {/* call to action */}
          <div className="cs-elem opacity-0 mt-8 flex flex-col sm:flex-row items-center gap-4">
            <a
              href={`mailto:${EMAIL}`}
              className="pointer-events-auto inline-flex items-center justify-center gap-2 bg-clay text-cream font-heading font-semibold px-7 py-3.5 rounded-full text-sm md:text-base transition-transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-clay/25"
            >
              Mail mij direct
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="pointer-events-auto inline-flex items-center justify-center gap-2 border border-cream/25 text-cream font-heading font-semibold px-7 py-3.5 rounded-full text-sm md:text-base transition-colors hover:border-clay hover:text-clay"
            >
              Volg mij op LinkedIn
            </a>
          </div>
        </div>
      </main>

      {/* footer — wettelijke info & contact */}
      <footer className="pointer-events-none relative z-10 px-6 py-8 border-t border-cream/10">
        <div className="max-w-xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-x-6 gap-y-2 text-center font-mono-brand text-xs md:text-sm text-cream/45">
          <span>Ainova · BTW {BTW}</span>
          <a href={`mailto:${EMAIL}`} className="pointer-events-auto hover:text-clay transition-colors">
            {EMAIL}
          </a>
          <a href={GSM_HREF} className="pointer-events-auto hover:text-clay transition-colors">
            {GSM}
          </a>
        </div>
      </footer>
    </div>
  )
}

export default function App() {
  return <ComingSoon />
}
