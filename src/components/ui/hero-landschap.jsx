import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ArrowRight } from 'lucide-react'

import HeroLogostrip from '@/components/ui/hero-logostrip'
import TaalSchakelaar from '@/components/ui/taal-schakelaar'
import { useTaal } from '@/lib/taal'

/* HeroLandschap
   ------------------------------------------------------------------
   Effen boomschaduw (#0B1B2E) met een zachte veldgroene gloed en een
   heel fijn lijnenraster dat naar de randen uitdooft. Geen foto: rustig
   en neutraal, zoals de hero van Wonka. Koppen in Newsreader, tekst in
   gebroken wit en zand uit de huisstijl.                              */

const EMAIL = 'tristan@ainova.be'

export default function HeroLandschap() {
  const ref = useRef(null)
  const { t } = useTaal()

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-op',
        { y: 22, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out', stagger: 0.1, delay: 0.1 }
      )
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="relative flex min-h-[88svh] flex-col overflow-hidden bg-[#13345f]">
      {/* achtergrondfoto (proef, 17 okt): blauw verloop van Tristan, met een
          donkere laag zodat de lichte tekst leesbaar blijft */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/hero-blauw.webp)' }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ background: 'linear-gradient(180deg, rgba(8,22,44,0.55) 0%, rgba(8,22,44,0.35) 45%, rgba(8,22,44,0.6) 100%)' }}
      />

      {/* navigatie */}
      <div className="relative border-b border-white/10">
        <nav className="hero-op mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-5 md:px-10">
          <a href="/" className="flex items-center text-[#F4F7FA]">
            <span className="woordmerk text-[1.7rem] leading-none">Ainova</span>
          </a>

          <div className="flex items-center gap-2">
            <TaalSchakelaar variant="glas" />
            <a
              href={`mailto:${EMAIL}`}
              className="group hidden items-center gap-2 rounded-full bg-[#F4F7FA] px-4 py-2.5 font-hero-sans text-sm font-medium text-[#0B1B2E] transition-transform hover:-translate-y-0.5 sm:inline-flex"
            >
              {t('nav.cta')}
              <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          </div>
        </nav>
      </div>

      {/* inhoud */}
      <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center px-6 pb-24 pt-20 text-center md:px-10">
        <h1
          className="hero-op font-hero-serif font-normal leading-[1.02] tracking-[-0.025em] text-[#F4F7FA]"
          style={{ fontSize: 'clamp(2.6rem, 5.8vw, 5.25rem)' }}
        >
          <span className="sm:whitespace-nowrap">{t('hero.titelA')}</span>
          <br className="hidden sm:block" /> <span className="sm:whitespace-nowrap">{t('hero.titelB')}</span>
        </h1>

        <p className="hero-op mt-7 max-w-2xl font-hero-serif text-[1.15rem] font-medium leading-[1.5] tracking-[-0.005em] text-[#EEF3F8] [text-shadow:0_1px_12px_rgba(8,22,44,0.35)] md:text-[1.35rem]">
          {t('hero.sub')}
        </p>

        <a
          href="#contact"
          className="hero-op group mt-10 inline-flex items-center gap-2 rounded-full bg-[#F4F7FA] px-6 py-3.5 font-hero-sans text-[0.95rem] font-medium text-[#0B1B2E] shadow-[0_10px_30px_-12px_rgba(0,0,0,0.6)] transition-transform hover:-translate-y-0.5"
        >
          {t('hero.start')}
          <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5" />
        </a>
      </div>

      <HeroLogostrip />
    </section>
  )
}
