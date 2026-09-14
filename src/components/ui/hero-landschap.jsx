import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ArrowRight } from 'lucide-react'

import { FlowerMark } from '@/components/ui/flower'
import HeroLogostrip from '@/components/ui/hero-logostrip'
import TaalSchakelaar from '@/components/ui/taal-schakelaar'
import { useTaal } from '@/lib/taal'

/* HeroLandschap
   ------------------------------------------------------------------
   Schermvullende foto als achtergrond, gecentreerde witte tekst met een
   grote serif-kop. De foto staat als WebP in public/ (1200 px voor
   mobiel, 2400 px vanaf tablet, zie .hero-foto-bron in index.css);
   zolang die niet geladen is, toont de sectie een gradiënt in dezelfde
   tinten.

   Foto: Simon Wilkes, Unsplash-licentie
   https://unsplash.com/photos/S297j2CsdlM                            */

const EMAIL = 'tristan@ainova.be'

export default function HeroLandschap() {
  const ref = useRef(null)
  const { t } = useTaal()

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-foto',
        { scale: 1.08 },
        { scale: 1, duration: 2.4, ease: 'power2.out' }
      )
      gsap.fromTo('.hero-op',
        { y: 22, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out', stagger: 0.1, delay: 0.2 }
      )
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="relative flex min-h-[100svh] flex-col overflow-hidden bg-[#3b4a3a]">
      {/* foto — met fallback-gradiënt eronder */}
      <div
        className="hero-foto hero-foto-bron pointer-events-none absolute inset-0 bg-cover bg-center"
        style={{
          filter: 'brightness(1.12) contrast(0.82) saturate(0.88)',
        }}
      />

      {/* zachte waas: blauwe lucht bovenaan, warm licht in de mist */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(120,138,178,0.55) 0%, rgba(170,180,196,0.25) 35%, rgba(240,214,170,0.18) 62%, rgba(0,0,0,0) 80%)',
          mixBlendMode: 'screen',
        }}
      />

      {/* donkere lagen zodat de witte tekst leesbaar blijft */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 45% at 50% 50%, rgba(10,14,10,0.46) 0%, rgba(10,14,10,0) 100%),' +
            'linear-gradient(180deg, rgba(10,14,10,0.45) 0%, rgba(10,14,10,0.10) 22%, rgba(10,14,10,0.10) 70%, rgba(10,14,10,0.40) 100%)',
        }}
      />

      {/* navigatie */}
      <div className="relative border-b border-dashed border-white/15">
        <nav className="hero-op mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-5 md:px-10">
          <a href="/" className="flex items-center gap-2.5 text-white">
            <FlowerMark className="h-6 w-6" />
            <span className="font-hero-serif text-2xl tracking-tight">Ainova</span>
          </a>

          <div className="flex items-center gap-2">
            <TaalSchakelaar variant="glas" />
            <a
              href={`mailto:${EMAIL}`}
              className="group hidden items-center gap-2 rounded-md bg-white px-4 py-2.5 font-hero-sans text-sm font-medium text-[#0A0A0A] shadow-[0_8px_24px_-8px_rgba(0,0,0,0.35)] transition-transform hover:-translate-y-0.5 sm:inline-flex"
            >
              {t('nav.cta')}
              <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          </div>
        </nav>
      </div>

      {/* inhoud */}
      <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center px-6 pb-16 pt-16 text-center md:px-10">

        <h1
          className="hero-op font-hero-serif font-normal leading-[0.98] tracking-[-0.025em] text-white"
          style={{ fontSize: 'clamp(2.6rem, 5.8vw, 5.25rem)', textShadow: '0 1px 2px rgba(0,0,0,0.30), 0 4px 18px rgba(0,0,0,0.28), 0 0 60px rgba(0,0,0,0.22)' }}
        >
          <span className="sm:whitespace-nowrap">{t('hero.titelA')}</span>
          <br className="hidden sm:block" /> <span className="sm:whitespace-nowrap">{t('hero.titelB')}</span>
        </h1>

        <p
          className="hero-op mt-7 max-w-xl font-hero-sans text-base font-medium leading-[1.6] text-white md:text-lg"
          style={{ textShadow: '0 1px 2px rgba(0,0,0,0.35), 0 2px 18px rgba(0,0,0,0.45)' }}
        >
          {t('hero.sub')}
        </p>

        <a
          href={`mailto:${EMAIL}`}
          className="hero-op group mt-10 inline-flex items-center gap-2 rounded-md bg-white px-6 py-3.5 font-hero-sans text-[0.95rem] font-medium text-[#0A0A0A] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.45)] transition-transform hover:-translate-y-0.5"
        >
          {t('hero.start')}
          <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5" />
        </a>
      </div>

      <HeroLogostrip />
    </section>
  )
}
