import { useEffect, useRef, useState, useCallback } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, Menu, X, ChevronRight } from 'lucide-react'
import useEmblaCarousel from 'embla-carousel-react'

import tristanPhoto from './assets/0267e3e3-c7ba-4952-a327-10ed2614011d.jpg'
gsap.registerPlugin(ScrollTrigger)

/* ─────────────────────────────────────────────────────────────────────────
   NAVBAR
───────────────────────────────────────────────────────────────────────── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Diensten', href: '#diensten' },
    { label: 'Aanpak', href: '#werkwijze' },
    { label: 'Over mij', href: '#over-mij' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between gap-8 px-6 py-3 rounded-full transition-all duration-500 bg-cream/80 backdrop-blur-xl border border-moss/15 text-charcoal ${
        scrolled ? 'shadow-lg border-moss/25' : 'shadow-sm'
      }`}
      style={{ width: 'min(680px, calc(100vw - 2rem))' }}
    >
      <a href="/" className="font-heading font-bold text-lg tracking-tight select-none">
        <span className="text-clay">Ai</span><span className="text-moss">nova</span>
      </a>

      <div className="hidden md:flex items-center gap-6">
        {links.map(l => (
          <a key={l.label} href={l.href} className="link-lift font-body text-sm font-medium opacity-80 hover:opacity-100 transition-opacity">
            {l.label}
          </a>
        ))}
      </div>

      <a
        href="#contact"
        className="btn-magnetic hidden md:flex items-center gap-2 bg-clay text-cream px-5 py-2.5 rounded-full text-sm font-heading font-semibold"
      >
        <span className="btn-bg bg-clay-dark rounded-full" />
        <span className="btn-label flex items-center gap-2">Neem contact op <ChevronRight size={14} /></span>
      </a>

      <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
        {menuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {menuOpen && (
        <div className="absolute top-full mt-2 left-0 right-0 bg-cream border border-moss/20 rounded-[2rem] p-4 flex flex-col gap-3 shadow-xl">
          {links.map(l => (
            <a key={l.label} href={l.href} className="font-body text-charcoal font-medium py-1 border-b border-moss/10 last:border-0">
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn-magnetic flex items-center justify-center gap-2 bg-clay text-cream px-5 py-3 rounded-full text-sm font-heading font-semibold mt-2">
            <span className="btn-bg bg-clay-dark rounded-full" />
            <span className="btn-label">Neem contact op</span>
          </a>
        </div>
      )}
    </nav>
  )
}

/* ─────────────────────────────────────────────────────────────────────────
   HERO
───────────────────────────────────────────────────────────────────────── */
function Hero() {
  const heroRef = useRef(null)
  const quoteRef = useRef(null)
  const subRef = useRef(null)
  const ctaRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        [quoteRef.current, subRef.current, ctaRef.current],
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.1, ease: 'power3.out', stagger: 0.12, delay: 0.3 }
      )
    }, heroRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={heroRef} className="relative w-full overflow-hidden bg-cream">
      <div className="absolute inset-0 overflow-hidden bg-cream">
        <div className="aurora-layer-light" />
      </div>

      <div className="relative z-10 pt-32 md:pt-40 pb-20 md:pb-28">
        <div className="w-full max-w-6xl mx-auto px-6 md:px-12">

          <div ref={quoteRef} className="opacity-0 mb-10 md:mb-14">
            <h1
              className="font-heading font-bold text-charcoal leading-[1.1]"
              style={{ fontSize: 'clamp(2.2rem, 5.5vw, 4.5rem)' }}
            >
              Ik analyseer uw marketing, sales en andere bedrijfsprocessen, identificeer knelpunten en los die op met AI en automatiseringen.
            </h1>
          </div>

          <div ref={subRef} className="opacity-0 max-w-3xl mb-10">
            <p
              className="font-drama italic text-charcoal/50 leading-[1.15]"
              style={{ fontSize: 'clamp(1.3rem, 3vw, 2rem)' }}
            >
              "AI will not replace people.{' '}
              <span className="text-clay/70">But people who use AI will replace those who don't."</span>
            </p>
            <footer className="flex items-center gap-3 mt-4">
              <div className="w-8 h-px bg-charcoal/15" />
              <cite className="not-italic font-heading font-semibold text-charcoal/35 text-xs">Sundar Pichai</cite>
              <span className="font-body text-charcoal/20 text-xs">— CEO Google</span>
            </footer>
          </div>

          <div ref={ctaRef} className="opacity-0 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              href="#contact"
              className="btn-magnetic inline-flex items-center gap-3 bg-clay text-cream px-8 py-4 rounded-full font-heading font-semibold text-base"
            >
              <span className="btn-bg bg-clay-dark rounded-full" />
              <span className="btn-label flex items-center gap-3">Neem contact op <ArrowRight size={16} /></span>
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────────────────────────────────
   USE CASES — Wat ik concreet doe
───────────────────────────────────────────────────────────────────────── */
function UseCases() {
  const sectionRef = useRef(null)
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start', slidesToScroll: 1, dragFree: true })
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(true)

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => {
      setCanPrev(emblaApi.canScrollPrev())
      setCanNext(emblaApi.canScrollNext())
    }
    emblaApi.on('select', onSelect)
    onSelect()
    return () => emblaApi.off('select', onSelect)
  }, [emblaApi])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.uc-header',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' } }
      )
      gsap.fromTo('.uc-carousel',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 65%' } }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const services = [
    {
      title: 'Leadopvolging',
      desc: 'Automatisch leads opvolgen zodat geen enkele prospect verloren gaat.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      title: 'AI-Chatbots',
      desc: 'Slimme chatbots die klanten 24/7 te woord staan en kwalificeren.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      ),
    },
    {
      title: 'CRM-automatisering',
      desc: 'Uw CRM draait op automatische piloot — van invoer tot opvolging.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
    },
    {
      title: 'E-mailmarketing',
      desc: 'Geautomatiseerde campagnes die op het juiste moment de juiste boodschap sturen.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
        </svg>
      ),
    },
    {
      title: 'Contentcreatie',
      desc: 'AI-gestuurde content die past bij uw merk en doelgroep.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
        </svg>
      ),
    },
    {
      title: 'Documentgeneratie',
      desc: 'Offertes, contracten en rapporten automatisch laten genereren.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" />
        </svg>
      ),
    },
    {
      title: 'Onboarding',
      desc: 'Nieuwe klanten of medewerkers soepel en gestructureerd aan boord.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy="7" r="4" /><line x1="20" y1="8" x2="20" y2="14" /><line x1="23" y1="11" x2="17" y2="11" />
        </svg>
      ),
    },
    {
      title: 'Rapportage',
      desc: 'Automatische rapportages zodat u altijd de juiste cijfers bij de hand hebt.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      ),
    },
    {
      title: 'Workflow automatisering',
      desc: 'Repetitieve taken elimineren en processen stroomlijnen.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <polyline points="16 3 21 3 21 8" /><line x1="4" y1="20" x2="21" y2="3" /><polyline points="21 16 21 21 16 21" /><line x1="15" y1="15" x2="21" y2="21" /><line x1="4" y1="4" x2="9" y2="9" />
        </svg>
      ),
    },
    {
      title: 'Custom GPT',
      desc: 'Een AI-assistent op maat, getraind op uw bedrijfsdata.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <path d="M12 2a4 4 0 0 1 4 4v2a4 4 0 0 1-8 0V6a4 4 0 0 1 4-4z" /><path d="M6 10v1a6 6 0 0 0 12 0v-1" /><line x1="12" y1="17" x2="12" y2="22" /><line x1="8" y1="22" x2="16" y2="22" />
        </svg>
      ),
    },
    {
      title: 'Dashboards',
      desc: 'Realtime overzicht van uw KPI\'s in één helder dashboard.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
        </svg>
      ),
    },
    {
      title: 'Data-analyse',
      desc: 'Inzichten uit uw data halen die u direct kunt toepassen.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <path d="M21.21 15.89A10 10 0 1 1 8 2.83" /><path d="M22 12A10 10 0 0 0 12 2v10z" />
        </svg>
      ),
    },
  ]

  return (
    <section ref={sectionRef} id="diensten" className="py-24 md:py-32 bg-cream overflow-hidden">
      <div className="px-6 md:px-12">
        <div className="uc-header opacity-0 flex items-end justify-between mb-10 max-w-7xl mx-auto">
          <h2 className="font-heading font-bold text-charcoal text-3xl md:text-5xl leading-tight">
            Enkele{' '}
            <span className="font-drama text-moss" style={{ fontSize: '1.1em' }}>mogelijkheden.</span>
          </h2>
          <div className="hidden md:flex gap-2">
            <button onClick={scrollPrev} className={`w-10 h-10 rounded-full border border-charcoal/15 flex items-center justify-center transition-colors ${canPrev ? 'hover:border-clay hover:text-clay' : 'opacity-30 cursor-default'}`} aria-label="Vorige">
              <ChevronRight className="w-4 h-4 rotate-180" />
            </button>
            <button onClick={scrollNext} className={`w-10 h-10 rounded-full border border-charcoal/15 flex items-center justify-center transition-colors ${canNext ? 'hover:border-clay hover:text-clay' : 'opacity-30 cursor-default'}`} aria-label="Volgende">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="uc-carousel opacity-0 pl-6 md:pl-12">
        <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="flex gap-5 md:gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="flex-none w-[210px] md:w-[520px] flex flex-col gap-3 md:gap-5 p-5 md:p-12 rounded-xl md:rounded-2xl border border-charcoal/8 hover:border-clay/25 transition-colors duration-200 select-none"
              >
                <span className="w-14 h-14 rounded-xl bg-clay/10 flex items-center justify-center text-clay [&>svg]:w-7 [&>svg]:h-7">{s.icon}</span>
                <span className="font-heading font-semibold text-charcoal text-xl md:text-2xl leading-tight">{s.title}</span>
                <span className="font-body text-charcoal/55 text-base md:text-lg leading-relaxed">{s.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────────────────────────────────
   WERKWIJZE — 4 stappen
───────────────────────────────────────────────────────────────────────── */
function Features() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.features-header',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 72%' } }
      )
      gsap.fromTo('.process-step',
        { y: 28, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out', stagger: 0.13,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 65%' } }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const steps = [
    {
      id: 'kennismaking',
      number: '01',
      title: 'Kennismakingsgesprek',
      content: 'We starten met een kort gesprek zodat ik uw bedrijf leer kennen en samen bekijken waar AI de meeste waarde kan leveren.',
    },
    {
      id: 'analyse',
      number: '02',
      title: 'Analyse & Ontwerp',
      content: 'Ik analyseer uw processen in detail en lever een concreet plan: wat kan beter, en welke rol spelen AI en automatiseringen daarin.',
    },
    {
      id: 'bouwen',
      number: '03',
      title: 'Bouwen & Implementeren',
      content: 'Na goedkeuring voer ik het plan uit — ik bouw de AI en automatiseringen en implementeer ze samen met u in uw bedrijf.',
    },
    {
      id: 'onderhouden',
      number: '04',
      title: 'Onderhouden & Optimaliseren',
      content: 'Na oplevering blijf ik beschikbaar om te onderhouden en optimaliseren — zodat alles blijft werken en meeschaalt met uw bedrijf.',
    },
  ]

  return (
    <section ref={sectionRef} id="werkwijze" className="py-24 md:py-32 px-6 md:px-12 bg-moss">
      <div className="max-w-7xl mx-auto">
        <div className="features-header opacity-0 mb-20 md:mb-28">
          <h2 className="font-heading font-bold text-cream text-3xl md:text-5xl leading-tight">
            Het{' '}
            <span className="font-drama text-clay" style={{ fontSize: '1.1em' }}>proces.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0">
          {steps.map((step, i) => (
            <div
              key={step.id}
              className={`process-step opacity-0 ${i > 0 ? 'lg:border-l border-cream/15 lg:pl-10' : 'lg:pr-10'}`}
            >
              <div className="w-6 h-px bg-clay mb-8" />
              <span className="font-heading font-semibold text-xs tracking-widest text-cream/30 block mb-5">{step.number}</span>
              <h3 className="font-heading font-bold text-xl md:text-2xl text-cream mb-4">{step.title}</h3>
              <p className="font-body text-cream/55 text-sm md:text-base leading-relaxed">{step.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────────────────────────────────
   OVER MIJ — Sectie op homepage
───────────────────────────────────────────────────────────────────────── */
function OverMij() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.about-elem',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out', stagger: 0.12,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 72%' } }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="over-mij" className="py-24 md:py-32 px-6 md:px-12" style={{ background: 'linear-gradient(135deg, #1e2b24 0%, #1A1A1A 100%)' }}>
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          <div className="about-elem opacity-0 max-w-[200px] md:max-w-xs mx-auto lg:mx-0">
            <h3 className="font-drama text-clay text-2xl md:text-4xl whitespace-nowrap mb-4 ml-2 md:ml-0">Tristan Distelmans</h3>
            <img
              src={tristanPhoto}
              alt="Tristan Distelmans — Ainova"
              className="w-full rounded-sm"
              style={{ filter: 'contrast(1.08) brightness(0.96) saturate(0.68)' }}
            />
          </div>

          <div className="about-elem opacity-0 flex flex-col gap-6">
            <h2 className="font-heading font-bold text-cream text-2xl md:text-3xl leading-tight">
              Over mij.
            </h2>
            <div className="flex flex-col gap-4">
              <p className="font-body text-cream/70 text-base md:text-lg leading-relaxed">
                Mijn uitgangspunt: hoe kunt u AI en automatisering inzetten om uw werk makkelijker te maken, uw bedrijf efficiënter te laten draaien en uw tijd te besteden aan{' '}
wat er echt toe doet?
              </p>
              <p className="font-body text-cream/70 text-base md:text-lg leading-relaxed">
                Ik begin altijd bij het begrijpen van uw bedrijf. Ik luister naar uw behoeften en ambities, en stel een concreet plan van aanpak op. Pas als de basis goed zit, zet ik AI en automatisering in.
              </p>
            </div>

            <a
              href="#contact"
              className="btn-magnetic inline-flex items-center gap-3 bg-clay text-cream px-7 py-3.5 rounded-full font-heading font-semibold text-sm self-start"
            >
              <span className="btn-bg bg-clay-dark rounded-full" />
              <span className="btn-label flex items-center gap-3">Neem contact op <ArrowRight size={15} /></span>
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────────────────────────────────
   CONTACT — Formulier
───────────────────────────────────────────────────────────────────────── */
function ContactCTA() {
  const sectionRef = useRef(null)
  const [form, setForm] = useState({ naam: '', email: '', bericht: '' })
  const [status, setStatus] = useState('idle')

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.cta-elem',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out', stagger: 0.12,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' } }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://formsubmit.co/ajax/tristan@ainova.be', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          ...form,
          _subject: `Nieuw bericht via Ainova — ${form.naam}`,
          _captcha: 'false',
        }),
      })
      setStatus(res.ok ? 'sent' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-32 md:py-40 px-6 md:px-12 bg-cream"
    >
      <div className="max-w-2xl mx-auto flex flex-col gap-14">

        <div className="cta-elem opacity-0">
          <h2 className="font-heading font-bold text-charcoal text-4xl md:text-6xl leading-[1.05] tracking-tight">
            Neem contact{' '}
            <span className="font-drama text-clay" style={{ fontSize: '1.05em' }}>op.</span>
          </h2>
          <p className="font-body text-charcoal/50 text-lg mt-4 leading-relaxed">
            Neem vrijblijvend contact met mij op, of u nu nieuwsgierig bent naar de mogelijkheden of al concreet weet wat u wilt bereiken.
          </p>
        </div>

        {status === 'sent' ? (
          <div className="cta-elem opacity-0 py-14 px-8 border border-charcoal/10 rounded-2xl bg-charcoal/[0.03] text-center">
            <p className="font-heading font-bold text-charcoal text-2xl md:text-3xl">Bericht verzonden.</p>
            <p className="font-body text-charcoal/50 text-base mt-3">Ik neem zo snel mogelijk contact met u op.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="cta-elem opacity-0 flex flex-col gap-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label className="font-heading font-semibold text-charcoal/40 text-xs uppercase tracking-wide">Naam *</label>
                <input
                  type="text"
                  required
                  placeholder="Uw naam"
                  value={form.naam}
                  onChange={e => setForm(f => ({ ...f, naam: e.target.value }))}
                  className="bg-charcoal/[0.04] border border-charcoal/10 rounded-xl px-5 py-4 font-body text-charcoal placeholder-charcoal/25 text-sm focus:outline-none focus:border-clay/60 transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-heading font-semibold text-charcoal/40 text-xs uppercase tracking-wide">E-mail *</label>
                <input
                  type="email"
                  required
                  placeholder="uw@email.be"
                  value={form.email}
                  onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  className="bg-charcoal/[0.04] border border-charcoal/10 rounded-xl px-5 py-4 font-body text-charcoal placeholder-charcoal/25 text-sm focus:outline-none focus:border-clay/60 transition-colors"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-heading font-semibold text-charcoal/40 text-xs uppercase tracking-wide">Bericht *</label>
              <textarea
                required
                rows={4}
                placeholder="Vertel kort wat u bezighoudt."
                value={form.bericht}
                onChange={e => setForm(f => ({ ...f, bericht: e.target.value }))}
                className="bg-charcoal/[0.04] border border-charcoal/10 rounded-xl px-5 py-4 font-body text-charcoal placeholder-charcoal/25 text-sm focus:outline-none focus:border-clay/60 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="btn-magnetic inline-flex items-center gap-3 bg-clay text-cream px-8 py-4 rounded-full font-heading font-semibold text-sm self-start disabled:opacity-50"
            >
              <span className="btn-bg bg-clay-dark rounded-full" />
              <span className="btn-label flex items-center gap-3">
                {status === 'sending' ? 'Verzenden...' : 'Verstuur bericht'} <ArrowRight size={15} />
              </span>
            </button>

            {status === 'error' && (
              <p className="font-body text-red-400/80 text-sm">
                Er ging iets mis. Mail me direct op{' '}
                <a href="mailto:tristan@ainova.be" className="underline">tristan@ainova.be</a>
              </p>
            )}
          </form>
        )}

      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────────────────────────────────
   FOOTER
───────────────────────────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="bg-charcoal px-6 md:px-12 py-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <a href="/" className="font-heading font-bold text-cream text-sm">Ainova</a>

        <nav className="flex items-center gap-6">
          {[
            { label: 'Diensten', href: '#diensten' },
            { label: 'Aanpak', href: '#werkwijze' },
            { label: 'Over mij', href: '#over-mij' },
            { label: 'Contact', href: '#contact' },
            { label: 'tristan@ainova.be', href: 'mailto:tristan@ainova.be' },
          ].map(({ label, href }) => (
            <a key={href} href={href} className="font-body text-cream/40 hover:text-cream/80 text-xs transition-colors">
              {label}
            </a>
          ))}
        </nav>

        <span className="font-body text-cream/20 text-xs">
          © {new Date().getFullYear()} Ainova
        </span>
      </div>
    </footer>
  )
}

/* ─────────────────────────────────────────────────────────────────────────
   APP
───────────────────────────────────────────────────────────────────────── */
export default function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <Hero />
      <Features />
      <UseCases />
      <OverMij />
      <ContactCTA />
      <Footer />
    </div>
  )
}
