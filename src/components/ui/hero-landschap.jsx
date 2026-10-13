import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ArrowRight } from 'lucide-react'

import { BoomMerk } from '@/components/ui/merk'
import HeroLogostrip from '@/components/ui/hero-logostrip'
import TaalSchakelaar from '@/components/ui/taal-schakelaar'
import { useTaal } from '@/lib/taal'

/* HeroLandschap
   ------------------------------------------------------------------
   Effen boomschaduw (#1A1A12) met een zachte veldgroene gloed en een
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
    <section ref={ref} className="relative flex min-h-[88svh] flex-col overflow-hidden bg-[#1A1A12]">
      {/* twee traag drijvende gloeivlekken: veldgroen en een vleugje ochtendgoud */}
      <div
        className="hero-glow-a pointer-events-none absolute -inset-[20%]"
        style={{ background: 'radial-gradient(ellipse 45% 40% at 45% 40%, rgba(74,81,48,0.6) 0%, rgba(74,81,48,0) 70%)' }}
      />
      <div
        className="hero-glow-b pointer-events-none absolute -inset-[20%]"
        style={{ background: 'radial-gradient(ellipse 35% 30% at 60% 70%, rgba(201,160,99,0.13) 0%, rgba(201,160,99,0) 70%)' }}
      />

      {/* fijn raster, uitgedoofd naar de randen */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #F7F3EC 1px, transparent 1px), linear-gradient(to bottom, #F7F3EC 1px, transparent 1px)',
          backgroundSize: '72px 72px',
          maskImage: 'radial-gradient(ellipse 60% 55% at 50% 45%, #000 0%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse 60% 55% at 50% 45%, #000 0%, transparent 75%)',
        }}
      />

      {/* navigatie */}
      <div className="relative border-b border-white/10">
        <nav className="hero-op mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-5 md:px-10">
          <a href="/" className="flex items-center gap-2.5 text-[#F7F3EC]">
            <BoomMerk className="h-7 w-7" />
            <span className="font-hero-serif text-2xl tracking-tight">Ainova</span>
          </a>

          <div className="flex items-center gap-2">
            <TaalSchakelaar variant="glas" />
            <a
              href={`mailto:${EMAIL}`}
              className="group hidden items-center gap-2 rounded-full bg-[#F7F3EC] px-4 py-2.5 font-hero-sans text-sm font-medium text-[#1A1A12] transition-transform hover:-translate-y-0.5 sm:inline-flex"
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
          className="hero-op font-hero-serif font-normal leading-[1.02] tracking-[-0.025em] text-[#F7F3EC]"
          style={{ fontSize: 'clamp(2.6rem, 5.8vw, 5.25rem)' }}
        >
          <span className="sm:whitespace-nowrap">{t('hero.titelA')}</span>
          <br className="hidden sm:block" /> <span className="sm:whitespace-nowrap">{t('hero.titelB')}</span>
        </h1>

        <p className="hero-op mt-7 max-w-xl font-hero-sans text-base leading-[1.6] text-[#D2C9B8] md:text-lg">
          {t('hero.sub')}
        </p>

        <a
          href="#contact"
          className="hero-op group mt-10 inline-flex items-center gap-2 rounded-full bg-[#F7F3EC] px-6 py-3.5 font-hero-sans text-[0.95rem] font-medium text-[#1A1A12] shadow-[0_10px_30px_-12px_rgba(0,0,0,0.6)] transition-transform hover:-translate-y-0.5"
        >
          {t('hero.start')}
          <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5" />
        </a>
      </div>

      <HeroLogostrip />
    </section>
  )
}
