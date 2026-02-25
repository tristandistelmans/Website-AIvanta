import { useEffect, useRef, useState } from 'react'
import { Routes, Route, Link, useParams, useLocation } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, Menu, X, ChevronRight, Check } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { IconCloud } from '@/components/ui/icon-cloud'
import tristanPhoto from './assets/0267e3e3-c7ba-4952-a327-10ed2614011d.jpg'
import { DIENSTEN } from './data/diensten'
gsap.registerPlugin(ScrollTrigger)

/* ─────────────────────────────────────────────────────────────────────────
   SCROLL TO TOP on route change
───────────────────────────────────────────────────────────────────────── */
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

/* ─────────────────────────────────────────────────────────────────────────
   AURORA BACKGROUND
───────────────────────────────────────────────────────────────────────── */
function AuroraBackground({ showRadialGradient = true }) {
  return (
    <div className="absolute inset-0 overflow-hidden bg-charcoal">
      <div className={`aurora-layer${showRadialGradient ? ' aurora-mask' : ''}`} />
    </div>
  )
}

/* ─────────────────────────────────────────────────────────────────────────
   NAVBAR — The Floating Island
───────────────────────────────────────────────────────────────────────── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const base = location.pathname === '/' ? '' : '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Werkwijze', href: `${base}#werkwijze` },
    { label: 'Over ons', href: '/over-ons' },
    { label: 'Contact', href: `${base}#contact` },
  ]

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between gap-8 px-6 py-3 rounded-full transition-all duration-500 bg-cream/80 backdrop-blur-xl border border-moss/15 text-charcoal ${
        scrolled ? 'shadow-lg border-moss/25' : 'shadow-sm'
      }`}
      style={{ width: 'min(680px, calc(100vw - 2rem))' }}
    >
      <a href={`${base || '/'}`} className="font-heading font-bold text-lg tracking-tight">Aivanta</a>

      <div className="hidden md:flex items-center gap-6">
        {links.map(l => (
          <a key={l.label} href={l.href} className="link-lift font-body text-sm font-medium opacity-80 hover:opacity-100 transition-opacity">
            {l.label}
          </a>
        ))}
      </div>

      <a
        href={`${base}#contact`}
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
          <a href={`${base}#contact`} className="btn-magnetic flex items-center justify-center gap-2 bg-clay text-cream px-5 py-3 rounded-full text-sm font-heading font-semibold mt-2">
            <span className="btn-bg bg-clay-dark rounded-full" />
            <span className="btn-label">Neem contact op</span>
          </a>
        </div>
      )}
    </nav>
  )
}

/* ─────────────────────────────────────────────────────────────────────────
   HERO — The Opening Shot (Aurora version)
───────────────────────────────────────────────────────────────────────── */
function Hero() {
  const heroRef = useRef(null)
  const tagRef = useRef(null)
  const line1Ref = useRef(null)
  const ctaRef = useRef(null)
  const quoteRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        [tagRef.current, line1Ref.current, ctaRef.current],
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.1, ease: 'power3.out', stagger: 0.08, delay: 0.3 }
      )
      gsap.fromTo('.quote-line', { y: 40, opacity: 0 }, {
        y: 0, opacity: 1, duration: 1.0, ease: 'power3.out', stagger: 0.15,
        scrollTrigger: { trigger: quoteRef.current, start: 'top 78%' }
      })
    }, heroRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={heroRef} className="relative w-full overflow-hidden">
      <AuroraBackground showRadialGradient={true} />

      {/* Gradient overlay for hero text legibility */}
      <div className="absolute left-0 right-0 bottom-0 bg-gradient-to-t from-charcoal/70 via-charcoal/10 to-transparent" style={{ height: '100dvh' }} />

      {/* Hero content — full viewport height, pinned to bottom */}
      <div className="relative z-10 min-h-[100dvh] flex items-end w-full">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 pb-28 md:pb-36">
          <div className="max-w-3xl">
            <div ref={tagRef} className="opacity-0 inline-flex items-center gap-2 mb-5">
              <span className="font-mono-brand text-xs text-cream/55 tracking-widest uppercase border border-cream/20 px-3 py-1 rounded-full">
                AI Automation Agency
              </span>
            </div>

            <h1
              ref={line1Ref}
              className="opacity-0 font-heading font-bold text-cream mb-10"
              style={{ fontSize: 'clamp(2.2rem, 5.5vw, 4.2rem)', lineHeight: '1.15' }}
            >
              We helpen u een productievere,{' '}
              <span className="font-drama italic text-clay" style={{ fontSize: '1.05em' }}>winstgevendere</span>
              {' '}onderneming te bouwen — met AI &amp; Automatisering.
            </h1>

            <div ref={ctaRef} className="opacity-0 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a
                href="#werkwijze"
                className="btn-magnetic inline-flex items-center gap-3 bg-clay text-cream px-8 py-4 rounded-full font-heading font-semibold text-base"
              >
                <span className="btn-bg bg-clay-dark rounded-full" />
                <span className="btn-label flex items-center gap-3">Ontdek wat mogelijk is <ArrowRight size={16} /></span>
              </a>
              <a href="#werkwijze" className="link-lift font-body text-cream/60 hover:text-cream text-sm flex items-center gap-2 transition-colors">
                Bekijk de werkwijze <ChevronRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Quote — flows directly below hero, same dark background */}
      <div ref={quoteRef} className="relative z-10 overflow-hidden pt-20 md:pt-28">
        <span
          aria-hidden="true"
          className="pointer-events-none select-none absolute -top-6 left-8 md:left-16 font-drama text-cream/5 leading-none"
          style={{ fontSize: 'clamp(10rem, 28vw, 22rem)' }}
        >
          "
        </span>
        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12">
          <blockquote>
            <p
              className="quote-line opacity-0 font-drama italic text-cream leading-[1.05] mb-2"
              style={{ fontSize: 'clamp(2rem, 5.5vw, 4.2rem)' }}
            >
              "AI will not replace people.
            </p>
            <p
              className="quote-line opacity-0 font-drama italic leading-[1.05] mb-10"
              style={{ fontSize: 'clamp(2rem, 5.5vw, 4.2rem)', color: '#CC5833' }}
            >
              But people who use AI will replace those who don't."
            </p>
            <footer className="quote-line opacity-0 flex items-center gap-4">
              <div className="w-8 h-px bg-cream/20" />
              <div>
                <cite className="not-italic font-heading font-semibold text-cream text-sm tracking-wide">
                  Sundar Pichai
                </cite>
                <span className="font-mono-brand text-cream/40 text-xs tracking-wider ml-2">
                  — CEO Google
                </span>
              </div>
            </footer>
          </blockquote>
        </div>
        <div className="pb-24 md:pb-32" />
      </div>
    </section>
  )
}


/* ─────────────────────────────────────────────────────────────────────────
   PROCESS FLOW — Zo simpel werkt het
───────────────────────────────────────────────────────────────────────── */
function Features() {
  const sectionRef = useRef(null)
  const [activeId, setActiveId] = useState('gesprek')
  const [hoveredId, setHoveredId] = useState(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.features-header',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out', stagger: 0.1,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 72%' } }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const steps = [
    {
      id: 'gesprek',
      number: '01',
      title: 'Gesprek',
      content: 'U vertelt over uw bedrijf, uw processen en wat de meeste tijd kost. Geen voorbereiding, geen technische kennis nodig — gewoon een eerlijk gesprek.',
    },
    {
      id: 'analyse',
      number: '02',
      title: 'Analyse',
      content: 'Wij brengen in kaart waar AI het meeste impact heeft in uw specifieke situatie. U ontvangt een helder voorstel — op maat, geen standaardpakket.',
    },
    {
      id: 'bouwen',
      number: '03',
      title: 'Bouwen',
      content: 'Na uw akkoord bouwen en lanceren wij de automatisering volledig op maat. Wij implementeren alles in uw bedrijf en u krijgt duidelijke documentatie — nooit ingewikkeld.',
    },
    {
      id: 'onderhouden',
      number: '04',
      title: 'Onderhouden',
      content: 'Indien gewenst beheren wij alles doorlopend. Gaat er iets mis? Wij nemen proactief contact op. De AI leert mee via machine learning — uw automatisering wordt elke dag beter.',
    },
  ]

  return (
    <section ref={sectionRef} id="werkwijze" className="py-24 md:py-32 bg-cream px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 features-header opacity-0">
          <span className="font-mono-brand text-xs text-clay tracking-widest uppercase">Geen technische kennis nodig</span>
          <h2 className="font-heading font-bold text-charcoal text-3xl md:text-5xl mt-3 leading-tight">
            Zo simpel{' '}
            <span className="font-drama text-moss" style={{ fontSize: '1.1em' }}>werkt het.</span>
          </h2>
          <p className="font-body text-charcoal/60 text-lg mt-5 max-w-2xl">
            U vertelt hoe uw bedrijf werkt. Aivanta doet de rest — van analyse tot bouw,
            lancering en doorlopend onderhoud. U heeft er geen omkijken naar.
          </p>
        </div>

        <div className="max-w-2xl features-header opacity-0">
          <div>
            {steps.map((step) => {
              const isActive = activeId === step.id
              const isHovered = hoveredId === step.id
              return (
                <div key={step.id}>
                  <motion.button
                    onClick={() => setActiveId(isActive ? null : step.id)}
                    onMouseEnter={() => setHoveredId(step.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    className="w-full relative"
                    initial={false}
                  >
                    <div className="flex items-center gap-6 py-6 px-1">
                      {/* Genummerd bolletje */}
                      <div className="relative flex items-center justify-center w-10 h-10 flex-shrink-0">
                        <motion.div
                          className="absolute inset-0 rounded-full bg-charcoal"
                          initial={false}
                          animate={{ scale: isActive ? 1 : isHovered ? 0.85 : 0, opacity: isActive ? 1 : isHovered ? 0.1 : 0 }}
                          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                        />
                        <motion.span
                          className="relative z-10 font-mono-brand text-xs tracking-widest"
                          animate={{ color: isActive ? '#F2F0E9' : 'rgba(26,26,26,0.4)' }}
                          transition={{ duration: 0.2 }}
                        >
                          {step.number}
                        </motion.span>
                      </div>

                      {/* Titel */}
                      <motion.h3
                        className="font-heading font-bold text-2xl md:text-3xl"
                        animate={{
                          x: isActive || isHovered ? 4 : 0,
                          color: isActive || isHovered ? '#1A1A1A' : 'rgba(26,26,26,0.38)',
                        }}
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      >
                        {step.title}
                      </motion.h3>

                      {/* Plus/X */}
                      <div className="ml-auto">
                        <motion.div
                          className="flex items-center justify-center w-8 h-8"
                          animate={{ rotate: isActive ? 45 : 0 }}
                          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                        >
                          <motion.svg
                            width="16" height="16" viewBox="0 0 16 16" fill="none"
                            animate={{ opacity: isActive || isHovered ? 1 : 0.3, color: isActive ? '#CC5833' : '#1A1A1A' }}
                            transition={{ duration: 0.2 }}
                          >
                            <path d="M8 1V15M1 8H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                          </motion.svg>
                        </motion.div>
                      </div>
                    </div>

                    {/* Onderlijn basis */}
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-charcoal/12" />
                    {/* Onderlijn geanimeerd (clay) */}
                    <motion.div
                      className="absolute bottom-0 left-0 h-px bg-clay origin-left"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: isActive ? 1 : isHovered ? 0.3 : 0 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  </motion.button>

                  {/* Uitgeklapte inhoud */}
                  <AnimatePresence mode="wait">
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1, transition: { height: { type: 'spring', stiffness: 300, damping: 30 }, opacity: { duration: 0.2, delay: 0.1 } } }}
                        exit={{ height: 0, opacity: 0, transition: { height: { type: 'spring', stiffness: 300, damping: 30 }, opacity: { duration: 0.1 } } }}
                        className="overflow-hidden"
                      >
                        <motion.p
                          className="pl-16 pr-4 py-5 font-body text-charcoal/60 text-base md:text-lg leading-relaxed"
                          initial={{ y: -8 }}
                          animate={{ y: 0 }}
                          exit={{ y: -8 }}
                          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                        >
                          {step.content}
                        </motion.p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </div>

        <p className="font-mono-brand text-charcoal/30 text-xs tracking-wide text-center mt-12">
          Van eerste gesprek tot werkende automatisering — Aivanta regelt alles.
        </p>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────────────────────────────────
   SERVICE THEMES — Scanbare categorietegels (homepage)
───────────────────────────────────────────────────────────────────────── */
function ServiceThemes() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.themes-header',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out', stagger: 0.1,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' } }
      )
      gsap.fromTo('.theme-tile',
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.65, ease: 'power3.out', stagger: 0.07,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 65%' } }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="themes-header opacity-0 mb-4">
          <span className="font-mono-brand text-xs text-clay tracking-widest uppercase">Concrete AI-toepassingen</span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mt-3">
            <h2 className="font-heading font-bold text-charcoal text-3xl md:text-5xl leading-tight">
              Wat kan Aivanta{' '}
              <span className="font-drama text-moss" style={{ fontSize: '1.1em' }}>voor u automatiseren?</span>
            </h2>
            <p className="font-body text-charcoal/55 text-base max-w-sm leading-relaxed flex-shrink-0">
              Kies een domein en ontdek wat er in uw bedrijf mogelijk is.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 mt-12">
          {DIENSTEN.map((dienst) => {
            const { Icon } = dienst
            return (
              <Link
                key={dienst.slug}
                to={`/diensten/${dienst.slug}`}
                className="theme-tile opacity-0 group flex flex-col gap-5 p-6 bg-white rounded-2xl border border-charcoal/8 hover:border-clay/25 hover:shadow-md transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-charcoal/6 flex items-center justify-center text-charcoal/40 group-hover:bg-clay/10 group-hover:text-clay transition-colors flex-shrink-0">
                  <Icon size={18} />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading font-bold text-charcoal text-base leading-snug mb-1.5 group-hover:text-clay transition-colors duration-150">
                    {dienst.title}
                  </h3>
                  <p className="font-body text-charcoal/45 text-sm leading-snug">
                    {dienst.tagline}
                  </p>
                </div>
                <div className="flex items-center gap-1.5 font-mono-brand text-[10px] tracking-widest uppercase text-clay group-hover:gap-2.5 transition-all duration-200">
                  Ontdek meer <ArrowRight size={10} />
                </div>
              </Link>
            )
          })}
        </div>

        <p className="font-mono-brand text-charcoal/25 text-xs tracking-wide text-center mt-12">
          Geen van deze toepassingen vereist technische kennis van uw kant.
        </p>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────────────────────────────────
   SUBDIENST CARD — Accordion op detailpagina
───────────────────────────────────────────────────────────────────────── */
function SubdienstCard({ subdienst, index }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-charcoal/10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-start justify-between gap-6 py-7 text-left group"
      >
        <div className="flex-1">
          <span className="font-mono-brand text-[10px] text-clay/70 tracking-widest uppercase">
            {String(index + 1).padStart(2, '0')}
          </span>
          <h3 className="font-heading font-bold text-charcoal text-xl md:text-2xl mt-1 leading-snug group-hover:text-clay transition-colors duration-150">
            {subdienst.titel}
          </h3>
          <p className="font-body text-charcoal/45 text-sm mt-2 leading-relaxed max-w-2xl">
            {subdienst.omschrijving}
          </p>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 22 }}
          className="flex-shrink-0 mt-2 w-8 h-8 rounded-full border border-charcoal/15 flex items-center justify-center"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 4L6 8L10 4" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      </button>

      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1, transition: { height: { type: 'spring', stiffness: 280, damping: 30 }, opacity: { duration: 0.2, delay: 0.08 } } }}
            exit={{ height: 0, opacity: 0, transition: { height: { type: 'spring', stiffness: 280, damping: 30 }, opacity: { duration: 0.1 } } }}
            className="overflow-hidden"
          >
            <div className="pb-8 space-y-5">

              {/* Voor wie / Wanneer */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 bg-charcoal/[0.03] rounded-xl">
                  <span className="font-mono-brand text-[10px] text-moss tracking-widest uppercase">Voor wie</span>
                  <p className="font-body text-charcoal/65 text-sm mt-2 leading-relaxed">{subdienst.voorWie}</p>
                </div>
                <div className="p-5 bg-charcoal/[0.03] rounded-xl">
                  <span className="font-mono-brand text-[10px] text-moss tracking-widest uppercase">Wanneer inzetten</span>
                  <p className="font-body text-charcoal/65 text-sm mt-2 leading-relaxed">{subdienst.wanneer}</p>
                </div>
              </div>

              {/* Wat levert het op */}
              <div>
                <span className="font-mono-brand text-[10px] text-moss tracking-widest uppercase">Wat levert het op</span>
                <ul className="mt-3 flex flex-col gap-2">
                  {subdienst.waarde.map(w => (
                    <li key={w} className="flex items-start gap-2.5">
                      <Check size={13} className="text-clay flex-shrink-0 mt-0.5" />
                      <span className="font-body text-charcoal/70 text-sm">{w}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hoe werkt AI hier */}
              <div className="p-5 rounded-xl" style={{ background: 'linear-gradient(135deg, rgba(46,64,54,0.06) 0%, rgba(26,26,26,0.04) 100%)' }}>
                <span className="font-mono-brand text-[10px] text-moss tracking-widest uppercase">Hoe werkt AI hier?</span>
                <p className="font-body text-charcoal/65 text-sm mt-2 leading-relaxed">{subdienst.hoeAI}</p>
              </div>

              {/* Inbegrepen / Niet inbegrepen */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 bg-moss/[0.06] rounded-xl">
                  <span className="font-mono-brand text-[10px] text-moss tracking-widest uppercase">Inbegrepen</span>
                  <ul className="mt-3 flex flex-col gap-2">
                    {subdienst.inbegrepen.map(item => (
                      <li key={item} className="flex items-start gap-2">
                        <Check size={12} className="text-moss flex-shrink-0 mt-0.5" />
                        <span className="font-body text-charcoal/65 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-5 bg-charcoal/[0.03] rounded-xl">
                  <span className="font-mono-brand text-[10px] text-charcoal/35 tracking-widest uppercase">Niet inbegrepen</span>
                  <ul className="mt-3 flex flex-col gap-2">
                    {subdienst.nietInbegrepen.map(item => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-charcoal/25 flex-shrink-0 mt-0.5 text-xs font-mono-brand">—</span>
                        <span className="font-body text-charcoal/40 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Integraties */}
              <div>
                <span className="font-mono-brand text-[10px] text-charcoal/35 tracking-widest uppercase">Werkt samen met</span>
                <div className="mt-2.5 flex flex-wrap gap-2">
                  {subdienst.integraties.map(tool => (
                    <span key={tool} className="font-mono-brand text-[10px] text-charcoal/45 tracking-wide px-3 py-1.5 bg-charcoal/[0.05] rounded-full border border-charcoal/8">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────────────────────
   WERKWIJZE BLOK — Aanpak in 5 stappen
───────────────────────────────────────────────────────────────────────── */
function WerkwijzeBlok({ werkwijze }) {
  return (
    <section
      className="py-20 md:py-24 px-6 md:px-12"
      style={{ background: 'linear-gradient(135deg, #1e2b24 0%, #1A1A1A 100%)' }}
    >
      <div className="max-w-5xl mx-auto">
        <span className="font-mono-brand text-xs text-clay tracking-widest uppercase">Aanpak</span>
        <h2 className="font-heading font-bold text-cream text-2xl md:text-3xl mt-3 mb-12 leading-tight">
          Zo werken we samen.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 md:gap-4">
          {werkwijze.map((stap, i) => (
            <div key={stap.stap} className="flex flex-col gap-3">
              <div className="flex items-center gap-3 mb-1">
                <span className="font-mono-brand text-xs text-clay/60 tracking-widest">{String(i + 1).padStart(2, '0')}</span>
                {i < werkwijze.length - 1 && (
                  <div className="hidden md:block flex-1 h-px bg-cream/10" />
                )}
              </div>
              <h3 className="font-heading font-bold text-cream text-base">{stap.stap}</h3>
              <p className="font-body text-cream/45 text-sm leading-relaxed">{stap.beschrijving}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────────────────────────────────
   SCOPE BLOK — Wat wel en niet inbegrepen is
───────────────────────────────────────────────────────────────────────── */
function ScopeBlok({ scope }) {
  return (
    <section className="py-20 md:py-24 px-6 md:px-12 bg-cream border-t border-charcoal/8">
      <div className="max-w-5xl mx-auto">
        <span className="font-mono-brand text-xs text-clay tracking-widest uppercase">Scope</span>
        <h2 className="font-heading font-bold text-charcoal text-2xl md:text-3xl mt-3 mb-10 leading-tight">
          Wat is inbegrepen?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <span className="font-mono-brand text-xs text-moss tracking-widest uppercase">Wel inbegrepen</span>
            <ul className="mt-4 flex flex-col gap-3">
              {scope.wel.map(item => (
                <li key={item} className="flex items-start gap-3">
                  <Check size={14} className="text-moss flex-shrink-0 mt-0.5" />
                  <span className="font-body text-charcoal/70 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <span className="font-mono-brand text-xs text-charcoal/40 tracking-widest uppercase">Niet inbegrepen</span>
            <ul className="mt-4 flex flex-col gap-3">
              {scope.niet.map(item => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-charcoal/25 flex-shrink-0 mt-0.5 font-mono-brand text-xs">—</span>
                  <span className="font-body text-charcoal/45 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────────────────────────────────
   CATEGORIE DETAIL PAGE
───────────────────────────────────────────────────────────────────────── */
function CategorieDetailPage() {
  const { slug } = useParams()
  const categorie = DIENSTEN.find(d => d.slug === slug)

  if (!categorie) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <div className="text-center px-6">
          <p className="font-heading font-bold text-charcoal text-2xl mb-4">Pagina niet gevonden</p>
          <a href="/" className="inline-flex items-center gap-2 text-clay font-heading font-semibold hover:gap-3 transition-all">
            <ArrowRight size={14} className="rotate-180" /> Terug naar de homepage
          </a>
        </div>
      </div>
    )
  }

  const { Icon } = categorie

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />

      {/* Hero */}
      <section
        className="pt-36 pb-20 md:pt-44 md:pb-28 px-6 md:px-12"
        style={{ background: 'linear-gradient(135deg, #1e2b24 0%, #1A1A1A 100%)' }}
      >
        <div className="max-w-5xl mx-auto">
          <a
            href="/"
            className="inline-flex items-center gap-2 font-mono-brand text-cream/35 text-[10px] tracking-widest uppercase hover:text-cream/65 transition-colors mb-10"
          >
            <ArrowRight size={10} className="rotate-180" /> Terug naar overzicht
          </a>

          <div className="flex items-start gap-5 mb-8">
            <div className="w-14 h-14 rounded-2xl bg-clay/15 flex items-center justify-center text-clay flex-shrink-0 mt-1">
              <Icon size={22} />
            </div>
            <div>
              <span className="font-mono-brand text-xs text-clay tracking-widest uppercase">AI Automatisering</span>
              <h1
                className="font-heading font-bold text-cream mt-2 leading-tight"
                style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)' }}
              >
                {categorie.title}
              </h1>
            </div>
          </div>

          <p className="font-body text-cream/55 text-lg md:text-xl leading-relaxed max-w-2xl mb-12">
            {categorie.beschrijving}
          </p>

          {/* Hero probleem + resultaten */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-cream/10">
            <div>
              <span className="font-mono-brand text-xs text-cream/30 tracking-widest uppercase">Herkent u dit?</span>
              <p className="font-body text-cream/55 text-base leading-relaxed mt-3">
                {categorie.hero.probleem}
              </p>
            </div>
            <div>
              <span className="font-mono-brand text-xs text-clay tracking-widest uppercase">Mogelijke resultaten</span>
              <ul className="mt-3 flex flex-col gap-2">
                {categorie.hero.resultaten.map(r => (
                  <li key={r} className="flex items-start gap-2.5">
                    <Check size={13} className="text-clay flex-shrink-0 mt-0.5" />
                    <span className="font-body text-cream/60 text-sm">{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Subdiensten */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-cream">
        <div className="max-w-5xl mx-auto">
          <span className="font-mono-brand text-xs text-clay tracking-widest uppercase">Specifieke toepassingen</span>
          <h2 className="font-heading font-bold text-charcoal text-2xl md:text-4xl mt-3 mb-2 leading-tight">
            Wat zit er precies in?
          </h2>
          <p className="font-body text-charcoal/50 text-base mb-10">
            Klik op een toepassing voor alle details — inclusief scope, aanpak en integraties.
          </p>
          <div className="border-t border-charcoal/10">
            {categorie.subdiensten.map((subdienst, i) => (
              <SubdienstCard key={subdienst.id} subdienst={subdienst} index={i} />
            ))}
          </div>
        </div>
      </section>

      <WerkwijzeBlok werkwijze={categorie.werkwijze} />
      <ScopeBlok scope={categorie.scope} />

      {/* CTA */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-cream border-t border-charcoal/8">
        <div className="max-w-2xl mx-auto text-center">
          <span className="font-mono-brand text-xs text-clay tracking-widest uppercase">Interesse?</span>
          <h2 className="font-heading font-bold text-charcoal text-2xl md:text-4xl mt-4 mb-8 leading-tight">
            Ontdek wat {categorie.title} voor uw bedrijf kan betekenen.
          </h2>
          <a
            href="/#contact"
            className="btn-magnetic inline-flex items-center gap-3 bg-clay text-cream px-8 py-4 rounded-full font-heading font-semibold text-base"
          >
            <span className="btn-bg bg-moss rounded-full" />
            <span className="btn-label flex items-center gap-3">Neem contact op <ArrowRight size={16} /></span>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}

/* ─────────────────────────────────────────────────────────────────────────
   TOOLS CLOUD — Integraties
───────────────────────────────────────────────────────────────────────── */
const TOOL_SLUGS = [
  'gmail', 'googlesheets', 'googledrive', 'googlecalendar',
  'linkedin', 'openai', 'slack', 'whatsapp', 'notion',
  'zapier', 'hubspot', 'mailchimp', 'shopify', 'wordpress',
  'facebook', 'instagram', 'x', 'youtube', 'stripe',
  'zoom', 'dropbox', 'microsoftexcel', 'microsoftoutlook',
  'trello', 'airtable', 'canva', 'telegram', 'microsoftteams',
  'woocommerce', 'squarespace',
]

function ToolsCloud() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.tools-header',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out', stagger: 0.1,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 72%' } }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 px-6 md:px-12"
      style={{ background: 'linear-gradient(135deg, #1e2b24 0%, #1A1A1A 100%)' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="tools-header opacity-0 mb-4 text-center">
          <span className="font-mono-brand text-xs text-clay tracking-widest uppercase">Naadloze integraties</span>
          <h2 className="font-heading font-bold text-cream text-3xl md:text-5xl mt-3 leading-tight max-w-3xl mx-auto">
            Koppel elke tool die u gebruikt{' '}
            <span className="font-drama text-clay" style={{ fontSize: '1.1em' }}>aan elkaar.</span>
          </h2>
          <p className="font-body text-cream/50 text-lg mt-5 max-w-2xl mx-auto leading-relaxed">
            Van Gmail tot LinkedIn, van Shopify tot Notion — Aivanta verbindt uw bestaande tools
            en laat ze samenwerken. U hoeft niets te vervangen, enkel te versterken.
          </p>
        </div>
        <div className="w-full max-w-2xl mx-auto">
          <IconCloud iconSlugs={TOOL_SLUGS} />
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────────────────────────────────
   OVER MIJ PAGE — Volledige pagina
───────────────────────────────────────────────────────────────────────── */
function OverMijPage() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />

      {/* Hero */}
      <section
        className="pt-36 pb-20 md:pt-44 md:pb-28 px-6 md:px-12"
        style={{ background: 'linear-gradient(135deg, #1e2b24 0%, #1A1A1A 100%)' }}
      >
        <div className="max-w-5xl mx-auto">
          <a
            href="/"
            className="inline-flex items-center gap-2 font-mono-brand text-cream/35 text-[10px] tracking-widest uppercase hover:text-cream/65 transition-colors mb-10"
          >
            <ArrowRight size={10} className="rotate-180" /> Terug naar overzicht
          </a>
          <span className="font-mono-brand text-xs text-clay tracking-widest uppercase">Over ons</span>
          <h1
            className="font-drama italic text-cream mt-2 leading-none"
            style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)' }}
          >
            Tristan Distelmans
          </h1>
        </div>
      </section>

      {/* Inhoud */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-cream">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Foto */}
            <div className="max-w-xs mx-auto lg:mx-0">
              <img
                src={tristanPhoto}
                alt="Tristan Distelmans — Aivanta"
                className="w-full rounded-sm"
                style={{ filter: 'contrast(1.08) brightness(0.96) saturate(0.68)' }}
              />
            </div>

            {/* Tekst */}
            <div className="flex flex-col gap-6">
              <h2 className="font-heading font-bold text-charcoal text-2xl md:text-3xl leading-tight">
                Aangenaam: ik ben Tristan.
              </h2>
              <div className="flex flex-col gap-4">
                <p className="font-body text-charcoal/70 text-base md:text-lg leading-relaxed">
                  Ik doe dit omdat ik er oprecht in geloof dat AI een enorme impact kan hebben voor de gewone ondernemer — niet alleen voor grote bedrijven met grote IT-afdelingen. Mijn uitgangspunt is altijd hetzelfde: hoe kunt u AI inzetten om uw werk makkelijker te maken, uw bedrijf efficiënter te laten draaien en uw tijd te besteden aan{' '}
                  <em className="text-charcoal not-italic font-semibold">wat er echt toe doet</em>?
                </p>
                <p className="font-body text-charcoal/70 text-base md:text-lg leading-relaxed">
                  Ik heb geen grote technische achtergrond — en dat is precies mijn sterkste troef. Ik denk niet in systemen, ik denk in problemen en oplossingen. Ik stel de vragen die er echt toe doen: waar verliest u tijd, wat blokkeert u dagelijks, en wat verandert er als dat wegvalt?
                </p>
                <p className="font-body text-charcoal/70 text-base md:text-lg leading-relaxed">
                  Vandaaruit bouw ik iets dat werkt. Geen leuk idee op papier, maar een{' '}
                  <em className="text-charcoal not-italic font-semibold">concrete oplossing die morgen al impact maakt</em>{' '}
                  op uw dagelijkse werk.
                </p>
              </div>
              <div className="pt-2">
                <a
                  href="/#contact"
                  className="btn-magnetic inline-flex items-center gap-3 bg-clay text-cream px-7 py-3.5 rounded-full font-heading font-semibold text-sm"
                >
                  <span className="btn-bg bg-moss rounded-full" />
                  <span className="btn-label flex items-center gap-3">Neem contact op <ArrowRight size={15} /></span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}


/* ─────────────────────────────────────────────────────────────────────────
   FAQ — Neemt twijfel weg
───────────────────────────────────────────────────────────────────────── */
const FAQ_ITEMS = [
  {
    q: 'Wat kost een AI-automatisering?',
    a: 'Dat hangt af van de complexiteit en de scope van het project. Na een gratis intakegesprek ontvangt u een concreet voorstel op maat — transparant, zonder verborgen kosten. Er is geen vaste abonnementsformule: u betaalt voor wat u nodig heeft.',
  },
  {
    q: 'Hoe lang duurt het voordat alles werkt?',
    a: 'Eenvoudige automatiseringen zijn operationeel binnen één tot twee weken. Complexere projecten met meerdere integraties kunnen vier tot zes weken in beslag nemen. We werken altijd met een duidelijke planning die we vooraf afspreken.',
  },
  {
    q: 'Heb ik technische kennis nodig?',
    a: 'Nee, helemaal niet. U hoeft enkel te weten hoe uw bedrijf werkt — de technische kant is volledig onze verantwoordelijkheid. We leveren ook duidelijke documentatie en een korte uitleg, zodat u altijd begrijpt wat er automatisch verloopt.',
  },
  {
    q: 'Wat als er iets misgaat na de lancering?',
    a: 'We bieden doorlopend onderhoud aan voor wie dat wenst. Gaat er iets mis? We nemen proactief contact op en lossen het op. U bent nooit aan uw lot overgelaten na de oplevering.',
  },
  {
    q: 'Moet ik bestaande tools vervangen?',
    a: 'Nee. Aivanta werkt met de tools die u al gebruikt — van Gmail tot Shopify, van Notion tot uw boekhoudprogramma. We koppelen alles aan elkaar, u hoeft niets te vervangen.',
  },
  {
    q: 'Is AI niet enkel iets voor grote bedrijven?',
    a: 'Integendeel. KMO\'s en zelfstandigen hebben vaak het meeste baat bij AI-automatisering, omdat ze minder personeel hebben om routinetaken op te vangen. Aivanta richt zich specifiek op de gewone ondernemer — niet op grote corporates.',
  },
]

function FAQ() {
  const sectionRef = useRef(null)
  const [openIndex, setOpenIndex] = useState(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.faq-elem', { y: 30, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.9, ease: 'power3.out', stagger: 0.1,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 72%' }
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-cream px-6 md:px-12">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="faq-elem opacity-0 mb-14">
          <span className="font-mono-brand text-xs text-clay tracking-widest uppercase">Veelgestelde vragen</span>
          <h2 className="font-heading font-bold text-charcoal text-3xl md:text-5xl mt-3 leading-tight">
            Uw vragen,{' '}
            <span className="font-drama text-moss" style={{ fontSize: '1.1em' }}>beantwoord.</span>
          </h2>
        </div>

        {/* Items */}
        <div className="faq-elem opacity-0 flex flex-col">
          {FAQ_ITEMS.map((item, i) => (
            <div key={i} className="border-t border-charcoal/10 last:border-b">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between gap-6 py-6 text-left group"
              >
                <span className="font-heading font-semibold text-charcoal text-base md:text-lg leading-snug group-hover:text-clay transition-colors">
                  {item.q}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === i ? 45 : 0 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                  className="flex-shrink-0 w-7 h-7 rounded-full border border-moss/20 flex items-center justify-center"
                >
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                    <path d="M8 1V15M1 8H15" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </motion.div>
              </button>
              <AnimatePresence mode="wait">
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1, transition: { height: { type: 'spring', stiffness: 300, damping: 30 }, opacity: { duration: 0.2, delay: 0.08 } } }}
                    exit={{ height: 0, opacity: 0, transition: { height: { type: 'spring', stiffness: 300, damping: 30 }, opacity: { duration: 0.1 } } }}
                    className="overflow-hidden"
                  >
                    <p className="font-body text-charcoal/60 text-base leading-relaxed pb-6 pr-12">
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Bottom nudge */}
        <div className="faq-elem opacity-0 mt-12 flex items-center gap-4">
          <span className="font-body text-charcoal/50 text-sm">Staat uw vraag er niet bij?</span>
          <a href="#contact" className="font-heading font-semibold text-clay text-sm flex items-center gap-1 hover:gap-2 transition-all">
            Stel ze rechtstreeks <ArrowRight size={13} />
          </a>
        </div>

      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────────────────────────────────
   CONTACT — Intake formulier
───────────────────────────────────────────────────────────────────────── */
function ContactCTA() {
  const sectionRef = useRef(null)
  const [form, setForm] = useState({ naam: '', email: '', bedrijf: '', bericht: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

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
      const res = await fetch('https://formsubmit.co/ajax/tristan.distelmans@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          ...form,
          _subject: `Nieuwe intake via Aivanta — ${form.naam}`,
          _captcha: 'false',
        }),
      })
      setStatus(res.ok ? 'sent' : 'error')
    } catch {
      setStatus('error')
    }
  }

  const inputClass =
    'bg-white/[0.04] border border-white/10 rounded-sm px-5 py-4 font-body text-cream placeholder-cream/25 text-sm focus:outline-none focus:border-clay/60 transition-colors duration-200'

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-32 md:py-40 px-6 md:px-12"
      style={{ background: 'linear-gradient(135deg, #1e2b24 0%, #1A1A1A 100%)' }}
    >
      <div className="max-w-2xl mx-auto flex flex-col gap-14">

        {/* Header */}
        <div className="cta-elem opacity-0">
          <span className="font-mono-brand text-xs text-clay tracking-widest uppercase">Intake</span>
          <h2 className="font-heading font-bold text-cream text-4xl md:text-6xl leading-[1.05] tracking-tight mt-4">
            Begin er gewoon{' '}
            <span className="font-drama text-clay" style={{ fontSize: '1.05em' }}>aan.</span>
          </h2>
          <p className="font-body text-cream/40 text-lg mt-4 leading-relaxed">
            Vul het intakeformulier in en vertel ons waar u tegenaan loopt of wat u wilt automatiseren.
            Ook als u nog geen concreet plan heeft, kunnen we samen de mogelijkheden verkennen.
          </p>
        </div>

        {/* Form / Succes */}
        {status === 'sent' ? (
          <div className="flex flex-col items-start gap-6 py-14 px-8 border border-white/10 rounded-sm" style={{ background: 'rgba(255,255,255,0.03)' }}>
            {/* Vinkje */}
            <div className="flex items-center justify-center w-12 h-12 rounded-full border border-clay/40 text-clay">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
            {/* Tekst */}
            <div>
              <p className="font-drama italic text-cream text-4xl md:text-5xl leading-tight">
                Uw bericht is verzonden.
              </p>
              <p className="font-body text-cream/40 text-base mt-4 leading-relaxed">
                Ik neem zo snel mogelijk contact met u op — doorgaans binnen één werkdag.
              </p>
            </div>
            {/* Scheidingslijn + label */}
            <div className="w-full border-t border-white/10 pt-5">
              <p className="font-mono-brand text-[10px] text-cream/20 tracking-widest uppercase">
                Aivanta · tristan.distelmans@gmail.com
              </p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="cta-elem opacity-0 flex flex-col gap-5">

            {/* Naam + Bedrijf */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label className="font-mono-brand text-[10px] text-cream/35 tracking-widest uppercase">Naam *</label>
                <input
                  type="text"
                  required
                  placeholder="Jan Janssen"
                  value={form.naam}
                  onChange={e => setForm(f => ({ ...f, naam: e.target.value }))}
                  className={inputClass}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-mono-brand text-[10px] text-cream/35 tracking-widest uppercase">Bedrijf</label>
                <input
                  type="text"
                  placeholder="Naam van uw bedrijf"
                  value={form.bedrijf}
                  onChange={e => setForm(f => ({ ...f, bedrijf: e.target.value }))}
                  className={inputClass}
                />
              </div>
            </div>

            {/* E-mail */}
            <div className="flex flex-col gap-2">
              <label className="font-mono-brand text-[10px] text-cream/35 tracking-widest uppercase">E-mail *</label>
              <input
                type="email"
                required
                placeholder="jan@bedrijf.be"
                value={form.email}
                onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                className={inputClass}
              />
            </div>

            {/* Bericht */}
            <div className="flex flex-col gap-2">
              <label className="font-mono-brand text-[10px] text-cream/35 tracking-widest uppercase">Bericht *</label>
              <textarea
                required
                rows={5}
                placeholder="Vertel kort wat u bezighoudt — of wat u wilt automatiseren."
                value={form.bericht}
                onChange={e => setForm(f => ({ ...f, bericht: e.target.value }))}
                className={`${inputClass} resize-none`}
              />
            </div>

            {/* Submit */}
            <div className="flex items-center gap-6 mt-2">
              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn-magnetic inline-flex items-center gap-3 bg-clay text-cream px-8 py-4 rounded-full font-heading font-semibold text-sm disabled:opacity-50"
              >
                <span className="btn-bg bg-moss rounded-full" />
                <span className="btn-label flex items-center gap-3">
                  {status === 'sending' ? 'Verzenden…' : 'Verstuur bericht'} <ArrowRight size={15} />
                </span>
              </button>
              <p className="font-mono-brand text-cream/20 text-[10px] tracking-wide">Uw gegevens worden enkel gebruikt om u te contacteren — nooit voor reclame of mailinglijsten.</p>
            </div>

            {status === 'error' && (
              <p className="font-body text-red-400/80 text-sm mt-1">
                Er ging iets mis. Mail ons direct op{' '}
                <a href="mailto:tristan.distelmans@gmail.com" className="underline">tristan.distelmans@gmail.com</a>
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
  const location = useLocation()
  const base = location.pathname === '/' ? '' : '/'

  return (
    <footer className="bg-charcoal px-6 md:px-12 py-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <a href={base || '/'} className="font-heading font-bold text-cream text-sm">Aivanta</a>

        <nav className="flex items-center gap-6">
          {[
            { label: 'Werkwijze', href: `${base}#werkwijze` },
            { label: 'Over ons',  href: '/over-ons' },
            { label: 'Contact',   href: `${base}#contact` },
            { label: 'tristan.distelmans@gmail.com', href: 'mailto:tristan.distelmans@gmail.com' },
          ].map(({ label, href }) => (
            <a key={href} href={href} className="font-body text-cream/40 hover:text-cream/80 text-xs transition-colors">
              {label}
            </a>
          ))}
        </nav>

        <span className="font-mono-brand text-cream/20 text-xs">
          © {new Date().getFullYear()} Aivanta
        </span>
      </div>
    </footer>
  )
}

/* ─────────────────────────────────────────────────────────────────────────
   HOMEPAGE
───────────────────────────────────────────────────────────────────────── */
function HomePage() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <Hero />
      <ServiceThemes />
      <Features />
      <ToolsCloud />
      <FAQ />
      <ContactCTA />
      <Footer />
    </div>
  )
}

/* ─────────────────────────────────────────────────────────────────────────
   APP ROOT
───────────────────────────────────────────────────────────────────────── */
export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/over-ons" element={<OverMijPage />} />
        <Route path="/diensten/:slug" element={<CategorieDetailPage />} />
      </Routes>
    </>
  )
}
