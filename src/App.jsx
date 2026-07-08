import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import tristanPhoto from './assets/0267e3e3-c7ba-4952-a327-10ed2614011d.jpg'

gsap.registerPlugin(ScrollTrigger)

function ComingSoon() {
  const rootRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.cs-elem',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out', stagger: 0.15 }
      )
    }, rootRef)
    return () => ctx.revert()
  }, [])

  return (
    <main
      ref={rootRef}
      className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #1e2b24 0%, #1A1A1A 100%)' }}
    >
      {/* soft ambient glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            'radial-gradient(circle at 50% 30%, rgba(204,88,51,0.14) 0%, rgba(204,88,51,0) 55%)',
        }}
      />

      <div className="relative z-10 w-full max-w-md mx-auto flex flex-col items-center text-center">
        {/* photo */}
        <div className="cs-elem opacity-0 w-40 md:w-52 mb-8">
          <img
            src={tristanPhoto}
            alt="Tristan Distelmans — Ainova"
            className="w-full rounded-sm"
            style={{ filter: 'contrast(1.08) brightness(0.96) saturate(0.68)' }}
          />
        </div>

        {/* coming soon */}
        <p className="cs-elem opacity-0 font-mono-brand text-clay text-xs md:text-sm tracking-[0.3em] uppercase mb-3">
          Coming soon
        </p>
        <h1 className="cs-elem opacity-0 font-drama text-cream text-5xl md:text-6xl leading-none mb-8">
          Ainova
        </h1>

        {/* intro text */}
        <p className="cs-elem opacity-0 font-body text-cream/70 text-base md:text-lg leading-relaxed max-w-sm">
          Ik ben Tristan en ik wou mee. Ik maak gebruik van AI en automatiseringen om
          repetitieve taken weg te nemen, tijd te besparen en groei te stimuleren voor bedrijven.
        </p>

        {/* contact */}
        <a
          href="mailto:tristan@ainova.be"
          className="cs-elem opacity-0 mt-10 font-mono-brand text-cream/50 hover:text-clay text-sm tracking-wide transition-colors"
        >
          tristan@ainova.be
        </a>
      </div>
    </main>
  )
}

export default function App() {
  return <ComingSoon />
}
