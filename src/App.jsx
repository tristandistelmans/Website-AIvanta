import { useEffect, useRef, useState } from 'react'
import { Routes, Route, Link, useParams, useLocation } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, Menu, X, ChevronRight, Sparkles, Workflow, MessageCircle, MessageSquare, Mail, FileText, Share2, Users, Receipt, BookOpen, CalendarCheck, BarChart2, UserPlus, Globe, Monitor } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { IconCloud } from '@/components/ui/icon-cloud'
import tristanPhoto from './assets/0267e3e3-c7ba-4952-a327-10ed2614011d.jpg'
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
    { label: 'Over mij', href: `${base}#over-mij` },
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
   DATA — Themes & Use Cases
───────────────────────────────────────────────────────────────────────── */
const THEMES = [
  {
    slug: 'chatbot',
    Icon: MessageSquare,
    title: 'Chatbot',
    tagline: 'Altijd bereikbaar, nooit een vraag onbeantwoord',
    description: 'Een AI-chatbot beantwoordt klantvragen dag en nacht — getraind op uw producten, diensten en veelgestelde vragen. Zodat u en uw team zich kunnen focussen op werk dat er echt toe doet.',
    useCaseIds: ['chatbot', 'reviews'],
  },
  {
    slug: 'lead-generatie',
    Icon: UserPlus,
    title: 'Lead generatie',
    tagline: 'Meer kwalitatieve klanten, minder moeite',
    description: 'Identificeer wie uw website bezoekt, kwalificeer leads automatisch en volg ze op op het perfecte moment — zodat u enkel praat met mensen die écht geïnteresseerd zijn.',
    useCaseIds: ['leads', 'website-leads'],
  },
  {
    slug: 'verkoop',
    Icon: FileText,
    title: 'Verkoop & Offertes',
    tagline: 'Van interesse tot getekend contract',
    description: 'Automatiseer e-mailcampagnes, offertes en CRM-opvolging. Reageer sneller, sluit meer deals en houd elke klantrelatie altijd up-to-date — zonder extra handmatig werk.',
    useCaseIds: ['email', 'offers', 'crm'],
  },
  {
    slug: 'content',
    Icon: Sparkles,
    title: 'Content & Social media',
    tagline: 'Consistent aanwezig online, elke dag',
    description: 'Van blogs en nieuwsbrieven tot social media posts — AI genereert content in uw eigen stijl en plant die automatisch in op de beste tijdstippen.',
    useCaseIds: ['social', 'content'],
  },
  {
    slug: 'administratie',
    Icon: Receipt,
    title: 'Administratie',
    tagline: 'Minder papierwerk, meer tijd voor uw werk',
    description: 'Facturen opmaken, versturen en opvolgen. Rapporten automatisch samenstellen. Nooit meer manueel kopiëren of controleren — het systeem doet het voor u.',
    useCaseIds: ['reports', 'invoice'],
  },
  {
    slug: 'intern',
    Icon: Workflow,
    title: 'Interne processen',
    tagline: 'Uw team efficiënter, zonder extra druk',
    description: 'Vergaderingen automatisch samenvatten, een slimme kennisbank bouwen en nieuwe klanten naadloos onboarden — zodat uw team sneller werkt en minder vragen heeft.',
    useCaseIds: ['meetings', 'knowledge', 'onboarding'],
  },
  {
    slug: 'webdesign',
    Icon: Monitor,
    title: 'Webdesign',
    tagline: 'Een website die klanten aantrekt en converteert',
    description: 'Wij bouwen snelle, moderne websites voor KMO\'s en zelfstandigen — volledig op maat, zonder sjablonen. Met optionele AI-functies die uw website laten werken als een 24/7 verkoper.',
    useCaseIds: [],
  },
]

const USE_CASES = [
  {
    id: 'email',
    category: 'Verkoop',
    title: 'E-mailcampagnes automatiseren',
    summary: 'Stuur de juiste e-mail op het juiste moment — automatisch en persoonlijk.',
    benefits: [
      'Automatische opvolging op het perfecte moment',
      'Gepersonaliseerde berichten per contactsegment',
      'Meer omzet uit bestaande contacten',
    ],
    impact: '~4–6u/week bespaard',
    image: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&h=500&fit=crop&q=80',
    icon: <Mail size={16} />,
    problem: 'U besteedt uren aan het handmatig opvolgen van leads en klanten. Opvolgmails worden vergeten, reacties blijven uit, en kansen gaan verloren door een gebrek aan consistentie.',
    how: 'Het systeem analyseert het gedrag van uw contacten: opent hij de mail? Klikt hij door? Op basis daarvan stuurt het automatisch gepersonaliseerde opvolgberichten. U bepaalt de regels, de rest loopt vanzelf.',
    value: 'Meer omzet uit uw bestaande contacten, minder handmatig werk en geen enkele kans meer verloren door een gemiste opvolging.',
  },
  {
    id: 'leads',
    category: 'Verkoop',
    title: 'Leadkwalificatie op autopilot',
    summary: 'Ontdek automatisch welke leads écht kansrijk zijn — zonder zelf te moeten sorteren.',
    benefits: [
      'AI scoort elke lead op kans en prioriteit',
      'Enkel waardevolle contacten bereiken u',
      'Hogere conversieratio per gesprek',
    ],
    impact: '~3–5u/week bespaard',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop&q=80',
    icon: <UserPlus size={16} />,
    problem: 'U ontvangt contactformulieren, berichten en aanvragen, maar niet elke lead is de moeite waard. Het handmatig beoordelen en sorteren kost waardevolle tijd die u liever anders besteedt.',
    how: 'AI beoordeelt elk nieuw contact op basis van criteria die u bepaalt: budget, sector, nood, urgentie. Elk contact krijgt een score en wordt automatisch doorgestuurd naar de juiste opvolgstap.',
    value: 'U verspilt geen tijd meer aan koude leads en focust al uw energie op contacten met de hoogste kans op conversie.',
  },
  {
    id: 'offers',
    category: 'Verkoop',
    title: 'Offerte- en contractbeheer',
    summary: 'Professionele offertes en contracten in minuten — niet in uren.',
    benefits: [
      'Offertes gegenereerd op basis van bestaande klantdata',
      'Versturen met één klik na uw goedkeuring',
      'Snellere reactietijd leidt tot meer gewonnen deals',
    ],
    impact: '~1–2u per offerte bespaard',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=500&fit=crop&q=80',
    icon: <FileText size={16} />,
    problem: 'Een offerte opstellen kost elke keer opnieuw veel tijd: klantgegevens opzoeken, prijzen berekenen, de juiste template invullen en daarna nog eens nalezen op fouten.',
    how: 'AI combineert klantdata uit uw CRM, uw prijsstructuur en uw templates tot een klaar-voor-verzending document. U keurt het enkel goed en verstuurt met één klik.',
    value: 'U reageert sneller op aanvragen, maakt een professionelere indruk en sluit meer deals — met aanzienlijk minder moeite.',
  },
  {
    id: 'crm',
    category: 'Verkoop',
    title: 'CRM-synchronisatie & opvolging',
    summary: 'Uw klantdata altijd actueel — in elk systeem, zonder manueel werk.',
    benefits: [
      'Contacten gesynchroniseerd over al uw tools',
      'Automatische opvolgingen op het juiste moment',
      'Volledige klanthistoriek altijd up-to-date',
    ],
    impact: '~3–4u/week bespaard',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop&q=80',
    icon: <Users size={16} />,
    problem: 'Klantinformatie staat verspreid over uw mailbox, spreadsheets en CRM. Contacten worden dubbel opgeslagen, opvolgingen gemist en kansen onnodig verloren.',
    how: 'Aivanta synchroniseert contacten, gesprekken en acties tussen al uw tools, zodat alles op één plek staat en up-to-date blijft. Nieuwe interacties triggeren automatisch de juiste opvolgstap.',
    value: 'Betere klantrelaties, geen gemiste opvolgingen en een volledig overzicht van elke klant op elk moment.',
  },
  {
    id: 'website-leads',
    category: 'Verkoop',
    title: 'Websitebezoekers automatisch opvolgen',
    summary: 'Ontdek wie uw website bezoekt — en volg ze op vóór uw concurrentie dat doet.',
    benefits: [
      'Identificeer welke bedrijven uw website bezoeken',
      'Automatische gepersonaliseerde opvolgberichten',
      'Meer kwalitatieve leads zonder extra advertentiebudget',
    ],
    impact: 'Extra leads uit bestaand websiteverkeer',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=500&fit=crop&q=80',
    icon: <Globe size={16} />,
    problem: 'Dagelijks bezoeken potentiële klanten uw website, bekijken uw diensten en verdwijnen weer zonder contact op te nemen. U heeft geen idee wie het zijn en kunt ze niet opvolgen.',
    how: 'De tool herkent bedrijven die uw website bezoeken op basis van IP-data, analyseert welke pagina\'s ze bekeken en stuurt automatisch een gerichte opvolgmail of LinkedIn-connectie namens u.',
    value: 'Meer kwalitatieve leads uit uw bestaande websiteverkeer, zonder extra advertentiebudget.',
  },
  {
    id: 'chatbot',
    category: 'Klantenservice',
    title: '24/7 klantenservice chatbot',
    summary: 'Beantwoord klantvragen automatisch — dag en nacht, ook als u slaapt.',
    benefits: [
      'Direct antwoord dag en nacht, ook buiten kantooruren',
      'Getraind op uw producten, diensten en FAQ',
      'Complexe vragen automatisch doorgestuurd naar u',
    ],
    impact: '24/7 bereikbaar, ~5u/week minder vragen',
    image: 'https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=800&h=500&fit=crop&q=80',
    icon: <MessageSquare size={16} />,
    problem: 'Klanten stellen elke dag opnieuw dezelfde vragen. Buiten de kantooruren blijven berichten onbeantwoord, wat frustratie veroorzaakt en klanten doet afhaken.',
    how: 'We bouwen een AI-chatbot volledig op maat, getraind op uw producten, diensten en veelgestelde vragen. Complexe of gevoelige vragen worden automatisch doorgestuurd naar u of uw team.',
    value: 'Tevreden klanten die snel antwoord krijgen, minder herhaalde vragen voor u, en een professionele bereikbaarheid 24 uur op 24.',
  },
  {
    id: 'reviews',
    category: 'Klantenservice',
    title: 'Klantreviews automatisch beantwoorden',
    summary: 'Beantwoord elke review professioneel — zonder er zelf naar om te kijken.',
    benefits: [
      'Elke review beantwoord in uw eigen stijl',
      'Negatieve reviews constructief en professioneel afgehandeld',
      'Betere online reputatie, meer vertrouwen bij nieuwe klanten',
    ],
    impact: '~1–2u/week bespaard',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop&q=80',
    icon: <MessageCircle size={16} />,
    problem: 'Reviews op Google, Trustpilot of andere platformen blijven onbeantwoord of krijgen een generieke reactie. Dat kost u vertrouwen bij potentiële klanten die uw reacties lezen.',
    how: 'AI leest elke nieuwe review en stelt een antwoord op in uw stem en stijl. Positieve reviews krijgen een warme bedanking, negatieve een constructieve en kalme respons. U keurt goed of laat het volledig automatisch lopen.',
    value: 'Een professionele online reputatie, meer vertrouwen bij nieuwe klanten en minder tijd verloren aan het beantwoorden van reviews.',
  },
  {
    id: 'reports',
    category: 'Administratie',
    title: 'Automatische rapportage',
    summary: 'Uw cijfers altijd up-to-date — zonder spreadsheets of handmatig kopiëren.',
    benefits: [
      'Data uit al uw tools automatisch samengevoegd',
      'Rapport klaar op vaste dag en tijdstip',
      'Altijd actuele, correcte bedrijfscijfers',
    ],
    impact: '~2–4u/week bespaard',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=500&fit=crop&q=80',
    icon: <BarChart2 size={16} />,
    problem: 'Elke week of maand kopieert u cijfers uit verschillende tools om een rapport samen te stellen. Tijdrovend, foutgevoelig en weinig inspirerend werk.',
    how: 'Aivanta koppelt uw bestaande tools (CRM, boekhouding, website, advertenties) en trekt de relevante data samen tot een leesbaar rapport dat automatisch en op vaste tijdstippen wordt verzonden.',
    value: 'Altijd een actueel beeld van uw bedrijf, minder tijdverspilling en betere beslissingen op basis van correcte, betrouwbare data.',
  },
  {
    id: 'invoice',
    category: 'Administratie',
    title: 'Slimme facturatie & administratie',
    summary: 'Facturen opmaken, versturen en opvolgen — volledig automatisch.',
    benefits: [
      'Facturen automatisch aangemaakt en verstuurd',
      'Betalingsherinneringen zonder manuele opvolging',
      'Volledige facturatiecyclus op autopilot',
    ],
    impact: '~2–3u/week bespaard',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=500&fit=crop&q=80',
    icon: <Receipt size={16} />,
    problem: 'Facturen maken, versturen en opvolgen op betalingen is noodzakelijk maar tijdrovend administratief werk dat u liever zou delegeren aan iemand anders.',
    how: 'Zodra een deal is afgesloten of een dienst geleverd, maakt het systeem automatisch de factuur aan met de juiste gegevens en verstuurt die naar de klant. Betaalt de klant niet op tijd? Dan volgt er automatisch een herinnering.',
    value: 'Snellere betalingen, minder achterstallige facturen en geen administratieve achterstanden meer — zodat u zich kunt focussen op uw echte werk.',
  },
  {
    id: 'social',
    category: 'Marketing',
    title: 'Social media op autopilot',
    summary: 'Consistent aanwezig op social media — zonder er dagelijks aan te denken.',
    benefits: [
      'AI schrijft posts in uw eigen tone of voice',
      'Automatisch ingepland op optimale tijdstippen',
      'Consistente aanwezigheid zonder dagelijkse moeite',
    ],
    impact: '~3–5u/week bespaard',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&h=500&fit=crop&q=80',
    icon: <Share2 size={16} />,
    problem: 'U weet dat regelmatige aanwezigheid op social media belangrijk is, maar u heeft nauwelijks tijd om consistent te posten — laat staan originele content te schrijven.',
    how: 'AI genereert posts op basis van uw expertise, uw aanbod en actuele thema\'s in uw sector. De content wordt ingepland op de beste tijdstippen en gepubliceerd zonder dat u er naar hoeft om te kijken.',
    value: 'Meer zichtbaarheid, meer bereik en een sterkere online aanwezigheid — met een fractie van de tijdsinvestering.',
  },
  {
    id: 'content',
    category: 'Marketing',
    title: 'Content & teksten op maat genereren',
    summary: 'Blogs, nieuwsbrieven en productbeschrijvingen — in uw stijl, op de helft van de tijd.',
    benefits: [
      'Blogs, mails en productbeschrijvingen in uw stijl',
      'Klaar om te publiceren of licht te bewerken',
      'Meer content in minder tijd',
    ],
    impact: '~4–8u/week bespaard',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&h=500&fit=crop&q=80',
    icon: <Sparkles size={16} />,
    problem: 'Goede content schrijven kost uren die u niet heeft. U stelt het steeds uit, wat ten koste gaat van uw zichtbaarheid en geloofwaardigheid online.',
    how: 'AI leert uw schrijfstijl, uw aanbod en uw doelgroep kennen. Op basis van een onderwerp of trefwoord genereert het volledige teksten: blogs, productpagina\'s, e-mailcontent, beschrijvingen — alles in uw stem.',
    value: 'Meer content in minder tijd, een sterkere online aanwezigheid en een consistente merkboodschap zonder externe copywriter.',
  },
  {
    id: 'meetings',
    category: 'Intern',
    title: 'Vergaderingen automatisch samenvatten',
    summary: 'Notulen, actiepunten en afspraken — klaar zodra de meeting voorbij is.',
    benefits: [
      'Automatische transcriptie en gestructureerde samenvatting',
      'Actiepunten direct toebedeeld met verantwoordelijke',
      'Nooit meer een afspraak of beslissing gemist',
    ],
    impact: '~30–60 min per vergadering bespaard',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=500&fit=crop&q=80',
    icon: <CalendarCheck size={16} />,
    problem: 'Na elke vergadering schrijft u handmatig notities uit, stuurt u een samenvatting en probeert u actiepunten bij te houden. Een tijdrovende en foutgevoelige klus.',
    how: 'AI transcribeert de meeting in realtime, filtert de belangrijkste punten eruit en stelt een heldere samenvatting op met actiepunten, verantwoordelijken en deadlines — binnen de minuut na afloop.',
    value: 'Minder administratie na vergaderingen, duidelijkere opvolgingen en nooit meer iets vergeten dat besproken werd.',
  },
  {
    id: 'knowledge',
    category: 'Intern',
    title: 'Interne kennisbank op autopilot',
    summary: 'Uw medewerkers vinden altijd het juiste antwoord — meteen en zonder te zoeken.',
    benefits: [
      'AI-assistent getraind op uw eigen documenten',
      'Medewerkers vinden antwoorden in seconden',
      'Consistente informatie in heel uw organisatie',
    ],
    impact: 'Snellere onboarding, minder herhaalde vragen',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=500&fit=crop&q=80',
    icon: <BookOpen size={16} />,
    problem: 'Medewerkers stellen steeds opnieuw dezelfde vragen over procedures, prijzen, producten of beleid. Dit kost tijd van u én van hen, en leidt tot inconsistente antwoorden.',
    how: 'We bouwen een AI-assistent getraind op uw eigen documenten, handleidingen en FAQ\'s. Medewerkers kunnen vragen stellen in gewone taal en krijgen meteen een correct, bronverwezen antwoord.',
    value: 'Minder herhaalde vragen, snellere onboarding van nieuwe medewerkers en consistente informatie binnen uw hele team.',
  },
  {
    id: 'onboarding',
    category: 'Intern',
    title: 'Automatische klantintake & onboarding',
    summary: 'Nieuwe klanten naadloos verwelkomen — van eerste contact tot actieve klant, automatisch.',
    benefits: [
      'Volledige onboardingflow automatisch getriggerd',
      'Welkomstmail, contract en toegang automatisch verstuurd',
      'Professionele eerste indruk zonder handmatig werk',
    ],
    impact: '~2–3u per nieuwe klant bespaard',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=500&fit=crop&q=80',
    icon: <Workflow size={16} />,
    problem: 'Het onboarden van een nieuwe klant vraagt telkens dezelfde stappen: formulieren, welkomstmails, contracten, uitleg. Tijdrovend en inconsistent als het handmatig gebeurt.',
    how: 'Zodra een nieuwe klant tekent of betaalt, triggert het systeem automatisch de volledige onboardingflow: welkomstmail, contract, toegang tot tools, eerste afspraak en introductiedocumenten — alles op het juiste moment.',
    value: 'Een professionele eerste indruk, tevreden nieuwe klanten en minder administratief werk bij elke nieuwe samenwerking.',
  },
]

/* ─────────────────────────────────────────────────────────────────────────
   SERVICE THEMES — Scanbare tegels
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-12">
          {THEMES.map((theme) => {
            const { Icon } = theme
            return (
              <Link
                key={theme.slug}
                to={`/diensten/${theme.slug}`}
                className="theme-tile opacity-0 group flex flex-col gap-5 p-6 bg-white rounded-2xl border border-charcoal/8 hover:border-clay/25 hover:shadow-md transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-charcoal/6 flex items-center justify-center text-charcoal/40 group-hover:bg-clay/10 group-hover:text-clay transition-colors flex-shrink-0">
                  <Icon size={18} />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading font-bold text-charcoal text-base leading-snug mb-1.5 group-hover:text-clay transition-colors duration-150">
                    {theme.title}
                  </h3>
                  <p className="font-body text-charcoal/45 text-sm leading-snug">
                    {theme.tagline}
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
   USE CASE DETAIL — Card op detailpagina
───────────────────────────────────────────────────────────────────────── */
function UseCaseDetail({ useCase, index }) {
  const isEven = index % 2 === 0
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
      {/* Afbeelding */}
      <div className={isEven ? '' : 'md:order-2'}>
        <img
          src={useCase.image}
          alt={useCase.title}
          className="w-full rounded-2xl object-cover aspect-[4/3]"
        />
      </div>

      {/* Inhoud */}
      <div className={isEven ? '' : 'md:order-1'}>
        <div className="flex items-center gap-2 mb-4">
          <span className="w-7 h-7 rounded-full bg-clay/10 flex items-center justify-center text-clay flex-shrink-0">
            {useCase.icon}
          </span>
          <span className="font-mono-brand text-clay text-[10px] tracking-widest uppercase">{useCase.category}</span>
        </div>

        <h3 className="font-heading font-bold text-charcoal text-2xl md:text-3xl mb-7 leading-tight">
          {useCase.title}
        </h3>

        <div className="flex flex-col gap-6">
          {[
            { label: 'Het probleem', content: useCase.problem },
            { label: 'Hoe werkt het?', content: useCase.how },
            { label: 'Wat levert het u op', content: useCase.value },
          ].map(({ label, content }) => (
            <div key={label}>
              <span className="font-mono-brand text-moss text-[10px] tracking-widest uppercase">{label}</span>
              <p className="font-body text-charcoal/65 text-base leading-relaxed mt-1.5">{content}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-6 border-t border-charcoal/8">
          <span className="font-mono-brand text-moss text-xs tracking-wide">{useCase.impact}</span>
        </div>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────────────────────
   WEBDESIGN CONTENT — Aangepaste inhoud voor webdesign detailpagina
───────────────────────────────────────────────────────────────────────── */
function WebdesignContent() {
  const items = [
    {
      Icon: Monitor,
      title: 'Op maat ontworpen, geen sjablonen',
      description: 'Uw website wordt volledig op maat gebouwd — afgestemd op uw merk, uw doelgroep en uw doelen. Geen WordPress-sjabloon, geen compromissen.',
    },
    {
      Icon: Sparkles,
      title: 'Snel, mobielvriendelijk en SEO-klaar',
      description: 'Een moderne website die razendsnel laadt op elk toestel en geoptimaliseerd is voor zoekmachines, zodat potentiële klanten u gemakkelijk vinden.',
    },
    {
      Icon: MessageSquare,
      title: 'Ingebouwde AI-chatbot',
      description: 'Optioneel voegen we een AI-chatbot toe die vragen van bezoekers dag en nacht beantwoordt — en leads automatisch opvolgt.',
    },
    {
      Icon: UserPlus,
      title: 'Slimme leadcapture',
      description: 'Geïntegreerde formulieren en leadcapture flows die bezoekers omzetten in contacten, automatisch gekoppeld aan uw CRM of mailsysteem.',
    },
    {
      Icon: Globe,
      title: 'Naadloze integraties',
      description: 'Gekoppeld aan uw bestaande tools: CRM, boekhouding, agenda of mailsysteem. Alles werkt samen zonder handmatige tussenkomst.',
    },
    {
      Icon: Workflow,
      title: 'Doorlopende begeleiding',
      description: 'Na de lancering staan we klaar voor aanpassingen, updates en uitbreidingen. U staat er nooit alleen voor.',
    },
  ]

  return (
    <div>
      <div className="mb-14">
        <span className="font-mono-brand text-xs text-clay tracking-widest uppercase">Wat u krijgt</span>
        <h2 className="font-heading font-bold text-charcoal text-3xl md:text-4xl mt-3 mb-4 leading-tight">
          Een website die voor u werkt.
        </h2>
        <p className="font-body text-charcoal/60 text-lg leading-relaxed max-w-2xl">
          Niet enkel een mooie website — maar een digitale vertegenwoordiger die dag en nacht bezoekers omzet in klanten.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map(({ Icon, title, description }) => (
          <div key={title} className="flex flex-col gap-4 p-7 bg-white rounded-2xl border border-charcoal/8">
            <div className="w-10 h-10 rounded-xl bg-clay/8 flex items-center justify-center text-clay flex-shrink-0">
              <Icon size={18} />
            </div>
            <h3 className="font-heading font-bold text-charcoal text-base leading-snug">{title}</h3>
            <p className="font-body text-charcoal/55 text-sm leading-relaxed">{description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────────────────────
   DIENST DETAIL PAGE
───────────────────────────────────────────────────────────────────────── */
function DienstDetailPage() {
  const { slug } = useParams()
  const theme = THEMES.find(t => t.slug === slug)

  if (!theme) {
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

  const useCases = USE_CASES.filter(uc => theme.useCaseIds.includes(uc.id))
  const { Icon } = theme

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
              <span className="font-mono-brand text-xs text-clay tracking-widest uppercase">AI Toepassingen</span>
              <h1
                className="font-heading font-bold text-cream mt-2 leading-tight"
                style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)' }}
              >
                {theme.title}
              </h1>
            </div>
          </div>

          <p className="font-body text-cream/55 text-lg md:text-xl leading-relaxed max-w-2xl">
            {theme.description}
          </p>
        </div>
      </section>

      {/* Use cases */}
      <section className="py-24 md:py-32 bg-cream px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          {useCases.length > 0 ? (
            <div className="flex flex-col gap-24">
              {useCases.map((uc, i) => (
                <UseCaseDetail key={uc.id} useCase={uc} index={i} />
              ))}
            </div>
          ) : (
            <WebdesignContent />
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 px-6 md:px-12 border-t border-charcoal/8 bg-cream">
        <div className="max-w-2xl mx-auto text-center">
          <span className="font-mono-brand text-xs text-clay tracking-widest uppercase">Interesse?</span>
          <h2 className="font-heading font-bold text-charcoal text-2xl md:text-4xl mt-4 mb-8 leading-tight">
            Ontdek wat {theme.title} voor uw bedrijf kan betekenen.
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
   ABOUT ME
───────────────────────────────────────────────────────────────────────── */
function AboutMe() {
  const sectionRef = useRef(null)
  const photoWrapRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.about-elem',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out', stagger: 0.12,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 72%' } }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="over-mij" className="py-24 md:py-32 bg-cream px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Photo + naam */}
          <div ref={photoWrapRef} className="flex flex-col max-w-sm mx-auto lg:mx-0">
            <img
              src={tristanPhoto}
              alt="Tristan Distelmans — Aivanta"
              className="w-full rounded-sm"
              style={{
                filter: 'contrast(1.08) brightness(0.96) saturate(0.68)',
              }}
            />
            <div className="mt-4 pl-1">
              <p className="font-drama text-5xl md:text-6xl text-charcoal leading-none italic">
                Tristan Distelmans
              </p>
            </div>
          </div>

          {/* Text */}
          <div className="flex flex-col gap-8">
            <div className="about-elem opacity-0">
              <span className="font-mono-brand text-xs text-clay tracking-widest uppercase">Over mij</span>
              <h2 className="font-heading font-bold text-charcoal text-3xl md:text-4xl mt-3 leading-tight">
                Aangenaam: ik ben Tristan.
              </h2>
            </div>

            <div className="about-elem opacity-0 flex flex-col gap-4">
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

            <div className="about-elem opacity-0">
              <a
                href="#contact"
                className="btn-magnetic inline-flex items-center gap-3 bg-moss text-cream px-7 py-3.5 rounded-full font-heading font-semibold text-sm"
              >
                <span className="btn-bg bg-moss-dark rounded-full" />
                <span className="btn-label flex items-center gap-3">Maak kennis <ArrowRight size={15} /></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
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
            { label: 'Over mij',  href: `${base}#over-mij` },
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
      <AboutMe />
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
        <Route path="/diensten/:slug" element={<DienstDetailPage />} />
      </Routes>
    </>
  )
}
