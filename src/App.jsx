import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Shield, ArrowRight, ArrowLeft, Menu, X, ChevronRight, Sparkles, Workflow, MessageCircle, MessageSquare, Mail, FileText, Share2, Users, Receipt, BookOpen, CalendarCheck, BarChart2, UserPlus, Globe } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import useEmblaCarousel from 'embla-carousel-react'
import { IconCloud } from '@/components/ui/icon-cloud'
import tristanPhoto from './assets/0267e3e3-c7ba-4952-a327-10ed2614011d.jpg'
gsap.registerPlugin(ScrollTrigger)

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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Werkwijze', href: '#werkwijze' },
    { label: 'Over mij', href: '#over-mij' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between gap-8 px-6 py-3 rounded-full transition-all duration-500 ${
        scrolled
          ? 'bg-cream/70 backdrop-blur-xl border border-moss/20 shadow-lg text-charcoal'
          : 'bg-transparent text-cream'
      }`}
      style={{ width: 'min(680px, calc(100vw - 2rem))' }}
    >
      <span className="font-heading font-bold text-lg tracking-tight">Aivanta</span>

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
   HERO — The Opening Shot (Aurora version)
───────────────────────────────────────────────────────────────────────── */
function Hero() {
  const heroRef = useRef(null)
  const tagRef = useRef(null)
  const line1Ref = useRef(null)
  const line2Ref = useRef(null)
  const subRef = useRef(null)
  const ctaRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        [tagRef.current, line1Ref.current, line2Ref.current, subRef.current, ctaRef.current],
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.1, ease: 'power3.out', stagger: 0.08, delay: 0.3 }
      )
    }, heroRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={heroRef} className="relative w-full h-[100dvh] flex items-end overflow-hidden">
      <AuroraBackground showRadialGradient={true} />

      {/* Extra gradient overlay for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/95 via-charcoal/30 to-transparent" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pb-16 md:pb-24">
        <div className="max-w-3xl">
          <div ref={tagRef} className="opacity-0 inline-flex items-center gap-2 mb-6">
            <span className="font-mono-brand text-xs text-clay tracking-widest uppercase border border-clay/40 px-3 py-1 rounded-full">
              AI Automatisering
            </span>
          </div>

          <h1 ref={line1Ref} className="opacity-0 font-heading font-bold text-cream text-3xl md:text-5xl leading-tight mb-1">
            AI Automatisering
          </h1>
          <h1
            ref={line2Ref}
            className="opacity-0 font-drama text-cream leading-none mb-8"
            style={{ fontSize: 'clamp(4rem, 12vw, 9rem)', lineHeight: '0.9' }}
          >
            voor Ondernemers.
          </h1>

          <p ref={subRef} className="opacity-0 font-body text-cream/70 text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
            AI verandert de economie — of u het nu wil of niet. KMO's en zelfstandigen die wachten,
            staan straks zwaar achter op hun concurrenten. Wie nu stapt, bouwt een echt voordeel op.
            Zelfs als u niet weet waar AI past in uw bedrijf — precies daarvoor bestaat Aivanta.
          </p>

          <div ref={ctaRef} className="opacity-0 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              href="#contact"
              className="btn-magnetic inline-flex items-center gap-3 bg-clay text-cream px-8 py-4 rounded-full font-heading font-semibold text-base"
            >
              <span className="btn-bg bg-clay-dark rounded-full" />
              <span className="btn-label flex items-center gap-3">Neem contact op <ArrowRight size={16} /></span>
            </a>
            <a href="#werkwijze" className="link-lift font-body text-cream/60 hover:text-cream text-sm flex items-center gap-2 transition-colors">
              Bekijk de werkwijze <ChevronRight size={14} />
            </a>
          </div>
        </div>
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
   USE CASE MODAL
───────────────────────────────────────────────────────────────────────── */
function UseCaseModal({ useCase, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  const sections = [
    { label: 'Het probleem', content: useCase.problem },
    { label: 'Het doel', content: useCase.goal },
    { label: 'Hoe werkt het?', content: useCase.how },
    { label: 'Wat levert het u op?', content: useCase.value },
  ]

  return (
    <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-0 md:p-6">
      <div className="absolute inset-0 bg-charcoal/70 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-cream w-full md:max-w-2xl rounded-t-[2rem] md:rounded-[2rem] max-h-[92vh] overflow-y-auto shadow-2xl">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-10 w-9 h-9 rounded-full bg-charcoal/8 hover:bg-charcoal/12 flex items-center justify-center transition-colors"
        >
          <X size={16} className="text-charcoal" />
        </button>

        {/* Hero image */}
        <div className="aspect-[16/7] overflow-hidden rounded-t-[2rem] md:rounded-t-[2rem]">
          <img
            src={useCase.image}
            alt={useCase.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-8 md:p-10">
          {/* Icon + label */}
          <div className="flex items-center gap-2 mb-3">
            <span className="w-7 h-7 rounded-full bg-clay/10 flex items-center justify-center text-clay flex-shrink-0">
              {useCase.icon}
            </span>
            <span className="font-mono-brand text-clay text-[10px] tracking-widest uppercase">Use case</span>
          </div>

          <h3 className="font-heading font-bold text-charcoal text-2xl md:text-3xl mb-8 leading-tight">
            {useCase.title}
          </h3>

          <div className="flex flex-col gap-7">
            {sections.map(({ label, content }) => (
              <div key={label} className="flex flex-col gap-2">
                <span className="font-mono-brand text-moss text-[10px] tracking-widest uppercase">{label}</span>
                <p className="font-body text-charcoal/70 text-base leading-relaxed">{content}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10 pt-8 border-t border-moss/15">
            <a
              href="#contact"
              onClick={onClose}
              className="btn-magnetic relative overflow-hidden inline-flex items-center gap-2 px-7 py-3.5 bg-clay text-cream font-heading font-semibold text-sm rounded-full"
            >
              <span className="btn-bg absolute inset-0 bg-moss rounded-full" />
              <span className="btn-label relative flex items-center gap-2">Dit wil ik ook <ArrowRight size={15} /></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────────────────────
   SERVICES — Use Case Carousel
───────────────────────────────────────────────────────────────────────── */
const USE_CASES = [
  {
    id: 'email',
    title: 'E-mailcampagnes automatiseren',
    summary: 'Stuur de juiste e-mail op het juiste moment — automatisch en persoonlijk.',
    image: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=600&h=400&fit=crop&q=80',
    icon: <Mail size={14} />,
    problem: 'U besteedt uren aan het handmatig opvolgen van leads en klanten. Opvolgmails worden vergeten, reacties blijven uit, en kansen gaan verloren door een gebrek aan consistentie.',
    goal: 'Elke lead en klant automatisch opvolgen met de juiste boodschap op het perfecte moment — volledig op de achtergrond, zonder dat u er iets voor hoeft te doen.',
    how: 'Het systeem analyseert het gedrag van uw contacten: opent hij de mail? Klikt hij door? Op basis daarvan stuurt het automatisch gepersonaliseerde opvolgberichten. U bepaalt de regels, de rest loopt vanzelf.',
    value: 'Meer omzet uit uw bestaande contacten, minder handmatig werk en geen enkele kans meer verloren door een gemiste opvolging.',
  },
  {
    id: 'leads',
    title: 'Leadkwalificatie op autopilot',
    summary: 'Ontdek automatisch welke leads écht kansrijk zijn — zonder zelf te moeten sorteren.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&q=80',
    icon: <UserPlus size={14} />,
    problem: 'U ontvangt contactformulieren, berichten en aanvragen, maar niet elke lead is de moeite waard. Het handmatig beoordelen en sorteren kost waardevolle tijd die u liever anders besteedt.',
    goal: 'Automatisch de waardevolle leads filteren en prioriteren, zodat u enkel spreekt met mensen die écht geïnteresseerd zijn en passen bij uw aanbod.',
    how: 'AI beoordeelt elk nieuw contact op basis van criteria die u bepaalt: budget, sector, nood, urgentie. Elk contact krijgt een score en wordt automatisch doorgestuurd naar de juiste opvolgstap.',
    value: 'U verspilt geen tijd meer aan koude leads en focust al uw energie op contacten met de hoogste kans op conversie.',
  },
  {
    id: 'chatbot',
    title: '24/7 klantenservice chatbot',
    summary: 'Beantwoord klantvragen automatisch — dag en nacht, ook als u slaapt.',
    image: 'https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=600&h=400&fit=crop&q=80',
    icon: <MessageSquare size={14} />,
    problem: 'Klanten stellen elke dag opnieuw dezelfde vragen. Buiten de kantooruren blijven berichten onbeantwoord, wat frustratie veroorzaakt en klanten doet afhaken.',
    goal: 'Een slimme assistent die uw klanten onmiddellijk te woord staat — ook \'s avonds, in het weekend en op feestdagen — zonder extra personeel.',
    how: 'We bouwen een AI-chatbot volledig op maat, getraind op uw producten, diensten en veelgestelde vragen. Complexe of gevoelige vragen worden automatisch doorgestuurd naar u of uw team.',
    value: 'Tevreden klanten die snel antwoord krijgen, minder herhaalde vragen voor u, en een professionele bereikbaarheid 24 uur op 24.',
  },
  {
    id: 'reports',
    title: 'Automatische rapportage',
    summary: 'Uw cijfers altijd up-to-date — zonder spreadsheets of handmatig kopiëren.',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=400&fit=crop&q=80',
    icon: <BarChart2 size={14} />,
    problem: 'Elke week of maand kopieert u cijfers uit verschillende tools om een rapport samen te stellen. Tijdrovend, foutgevoelig en weinig inspirerend werk.',
    goal: 'Uw rapportages automatisch samenstellen en versturen, zodat u altijd een helder overzicht heeft van hoe uw bedrijf presteert — zonder er zelf tijd in te steken.',
    how: 'Aivanta koppelt uw bestaande tools (CRM, boekhouding, website, advertenties) en trekt de relevante data samen tot een leesbaar rapport dat automatisch en op vaste tijdstippen wordt verzonden.',
    value: 'Altijd een actueel beeld van uw bedrijf, minder tijdverspilling en betere beslissingen op basis van correcte, betrouwbare data.',
  },
  {
    id: 'social',
    title: 'Social media op autopilot',
    summary: 'Consistent aanwezig op social media — zonder er dagelijks aan te denken.',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&h=400&fit=crop&q=80',
    icon: <Share2 size={14} />,
    problem: 'U weet dat regelmatige aanwezigheid op social media belangrijk is, maar u heeft nauwelijks tijd om consistent te posten — laat staan originele content te schrijven.',
    goal: 'Een constante, professionele aanwezigheid op social media, zonder dat het uw werkdag opslokt of u wekelijks uren aan content besteedt.',
    how: 'AI genereert posts op basis van uw expertise, uw aanbod en actuele thema\'s in uw sector. De content wordt ingepland op de beste tijdstippen en gepubliceerd zonder dat u er naar hoeft om te kijken.',
    value: 'Meer zichtbaarheid, meer bereik en een sterkere online aanwezigheid — met een fractie van de tijdsinvestering.',
  },
  {
    id: 'invoice',
    title: 'Slimme facturatie & administratie',
    summary: 'Facturen opmaken, versturen en opvolgen — volledig automatisch.',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=400&fit=crop&q=80',
    icon: <Receipt size={14} />,
    problem: 'Facturen maken, versturen en opvolgen op betalingen is noodzakelijk maar tijdrovend administratief werk dat u liever zou delegeren aan iemand anders.',
    goal: 'De volledige facturatiecyclus automatiseren: van opmaken tot versturen, inclusief vriendelijke herinneringen bij te late betaling.',
    how: 'Zodra een deal is afgesloten of een dienst geleverd, maakt het systeem automatisch de factuur aan met de juiste gegevens en verstuurt die naar de klant. Betaalt de klant niet op tijd? Dan volgt er automatisch een herinnering.',
    value: 'Snellere betalingen, minder achterstallige facturen en geen administratieve achterstanden meer — zodat u zich kunt focussen op uw echte werk.',
  },
  {
    id: 'offers',
    title: 'Offerte- en contractbeheer',
    summary: 'Professionele offertes en contracten in minuten — niet in uren.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop&q=80',
    icon: <FileText size={14} />,
    problem: 'Een offerte opstellen kost elke keer opnieuw veel tijd: klantgegevens opzoeken, prijzen berekenen, de juiste template invullen en daarna nog eens nalezen op fouten.',
    goal: 'Automatisch gepersonaliseerde offertes en contracten genereren op basis van klantinformatie die al in uw systemen beschikbaar is — klaar om te verzenden.',
    how: 'AI combineert klantdata uit uw CRM, uw prijsstructuur en uw templates tot een klaar-voor-verzending document. U keurt het enkel goed en verstuurt met één klik.',
    value: 'U reageert sneller op aanvragen, maakt een professionelere indruk en sluit meer deals — met aanzienlijk minder moeite.',
  },
  {
    id: 'crm',
    title: 'CRM-synchronisatie & opvolging',
    summary: 'Uw klantdata altijd actueel — in elk systeem, zonder manueel werk.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&q=80',
    icon: <Users size={14} />,
    problem: 'Klantinformatie staat verspreid over uw mailbox, spreadsheets en CRM. Contacten worden dubbel opgeslagen, opvolgingen gemist en kansen onnodig verloren.',
    goal: 'Één centrale, altijd actuele klantendatabase die automatisch wordt bijgehouden vanuit al uw kanalen en tools — zonder handmatig kopiëren.',
    how: 'Aivanta synchroniseert contacten, gesprekken en acties tussen al uw tools, zodat alles op één plek staat en up-to-date blijft. Nieuwe interacties triggeren automatisch de juiste opvolgstap.',
    value: 'Betere klantrelaties, geen gemiste opvolgingen en een volledig overzicht van elke klant op elk moment — wat leidt tot meer herhalingsaankopen en sterkere loyaliteit.',
  },
  {
    id: 'reviews',
    title: 'Klantreviews automatisch beantwoorden',
    summary: 'Beantwoord elke review professioneel — zonder er zelf naar om te kijken.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&q=80',
    icon: <MessageCircle size={14} />,
    problem: 'Reviews op Google, Trustpilot of andere platformen blijven onbeantwoord of krijgen een generieke reactie. Dat kost u vertrouwen bij potentiële klanten die uw reacties lezen.',
    goal: 'Elke review automatisch beantwoorden met een persoonlijke, merkwaardige reactie — snel, consistent en professioneel.',
    how: 'AI leest elke nieuwe review en stelt een antwoord op in uw stem en stijl. Positieve reviews krijgen een warme bedanking, negatieve een constructieve en kalme respons. U keurt goed of laat het volledig automatisch lopen.',
    value: 'Een professionele online reputatie, meer vertrouwen bij nieuwe klanten en minder tijd verloren aan het beantwoorden van reviews.',
  },
  {
    id: 'meetings',
    title: 'Vergaderingen automatisch samenvatten',
    summary: 'Notulen, actiepunten en afspraken — klaar zodra de meeting voorbij is.',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop&q=80',
    icon: <CalendarCheck size={14} />,
    problem: 'Na elke vergadering schrijft u handmatig notities uit, stuurt u een samenvatting en probeert u actiepunten bij te houden. Een tijdrovende en foutgevoelige klus.',
    goal: 'Automatisch een gestructureerde samenvatting en takenlijst genereren na elke vergadering, klaar om te versturen aan alle deelnemers.',
    how: 'AI transcribeert de meeting in realtime, filtert de belangrijkste punten eruit en stelt een heldere samenvatting op met actiepunten, verantwoordelijken en deadlines — binnen de minuut na afloop.',
    value: 'Minder administratie na vergaderingen, duidelijkere opvolgingen en nooit meer iets vergeten dat besproken werd.',
  },
  {
    id: 'knowledge',
    title: 'Interne kennisbank op autopilot',
    summary: 'Uw medewerkers vinden altijd het juiste antwoord — meteen en zonder te zoeken.',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop&q=80',
    icon: <BookOpen size={14} />,
    problem: 'Medewerkers stellen steeds opnieuw dezelfde vragen over procedures, prijzen, producten of beleid. Dit kost tijd van u én van hen, en leidt tot inconsistente antwoorden.',
    goal: 'Een slimme interne assistent die uw documenten, procedures en kennisbank kent — en medewerkers direct het juiste antwoord geeft.',
    how: 'We bouwen een AI-assistent getraind op uw eigen documenten, handleidingen en FAQ\'s. Medewerkers kunnen vragen stellen in gewone taal en krijgen meteen een correct, bronverwezen antwoord.',
    value: 'Minder herhaalde vragen, snellere onboarding van nieuwe medewerkers en consistente informatie binnen uw hele team.',
  },
  {
    id: 'content',
    title: 'Content & teksten op maat genereren',
    summary: 'Blogs, nieuwsbrieven en productbeschrijvingen — in uw stijl, op de helft van de tijd.',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&h=400&fit=crop&q=80',
    icon: <Sparkles size={14} />,
    problem: 'Goede content schrijven kost uren die u niet heeft. U stelt het steeds uit, wat ten koste gaat van uw zichtbaarheid en geloofwaardigheid online.',
    goal: 'Automatisch relevante, kwalitatieve content genereren in uw eigen tone of voice — klaar om te publiceren of licht te bewerken.',
    how: 'AI leert uw schrijfstijl, uw aanbod en uw doelgroep kennen. Op basis van een onderwerp of trefwoord genereert het volledige teksten: blogs, productpagina\'s, e-mailcontent, beschrijvingen — alles in uw stem.',
    value: 'Meer content in minder tijd, een sterkere online aanwezigheid en een consistente merkboodschap zonder externe copywriter.',
  },
  {
    id: 'onboarding',
    title: 'Automatische klantintake & onboarding',
    summary: 'Nieuwe klanten naadloos verwelkomen — van eerste contact tot actieve klant, automatisch.',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=400&fit=crop&q=80',
    icon: <Workflow size={14} />,
    problem: 'Het onboarden van een nieuwe klant vraagt telkens dezelfde stappen: formulieren, welkomstmails, contracten, uitleg. Tijdrovend en inconsistent als het handmatig gebeurt.',
    goal: 'Een vlekkeloze, geautomatiseerde onboarding die elke nieuwe klant professioneel verwelkomt — zonder dat u er handmatig iets voor hoeft te doen.',
    how: 'Zodra een nieuwe klant tekent of betaalt, triggert het systeem automatisch de volledige onboardingflow: welkomstmail, contract, toegang tot tools, eerste afspraak en introductiedocumenten — alles op het juiste moment.',
    value: 'Een professionele eerste indruk, tevreden nieuwe klanten en minder administratief werk bij elke nieuwe samenwerking.',
  },
  {
    id: 'website-leads',
    title: 'Websitebezoekers automatisch opvolgen',
    summary: 'Ontdek wie uw website bezoekt — en volg ze op vóór uw concurrentie dat doet.',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop&q=80',
    icon: <Globe size={14} />,
    problem: 'Dagelijks bezoeken potentiële klanten uw website, bekijken uw diensten en verdwijnen weer zonder contact op te nemen. U heeft geen idee wie het zijn en kunt ze niet opvolgen.',
    goal: 'Automatisch identificeren welke bedrijven uw website bezoeken en ze proactief opvolgen met een gerichte, persoonlijke boodschap.',
    how: 'De tool herkent bedrijven die uw website bezoeken op basis van IP-data, analyseert welke pagina\'s ze bekeken en stuurt automatisch een gerichte opvolgmail of LinkedIn-connectie namens u.',
    value: 'Meer kwalitatieve leads uit uw bestaande websiteverkeer, zonder extra advertentiebudget.',
  },
]

function ServicesSection() {
  const sectionRef = useRef(null)
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start', dragFree: false })
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)
  const [selectedCase, setSelectedCase] = useState(null)

  useEffect(() => {
    if (!emblaApi) return
    const update = () => {
      setCanScrollPrev(emblaApi.canScrollPrev())
      setCanScrollNext(emblaApi.canScrollNext())
    }
    update()
    emblaApi.on('select', update)
    emblaApi.on('reInit', update)
    return () => {
      emblaApi.off('select', update)
      emblaApi.off('reInit', update)
    }
  }, [emblaApi])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.services-header',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' } }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-cream overflow-hidden">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
        <div className="services-header opacity-0 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="font-mono-brand text-xs text-clay tracking-widest uppercase">Concrete AI-toepassingen</span>
            <h2 className="font-heading font-bold text-charcoal text-3xl md:text-5xl mt-3 leading-tight">
              Wat kan Aivanta{' '}
              <span className="font-drama text-moss" style={{ fontSize: '1.1em' }}>voor u automatiseren?</span>
            </h2>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={() => emblaApi?.scrollPrev()}
              disabled={!canScrollPrev}
              className="w-10 h-10 rounded-full border border-moss/20 flex items-center justify-center text-charcoal disabled:opacity-25 hover:bg-charcoal/5 transition-colors"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              onClick={() => emblaApi?.scrollNext()}
              disabled={!canScrollNext}
              className="w-10 h-10 rounded-full border border-moss/20 flex items-center justify-center text-charcoal disabled:opacity-25 hover:bg-charcoal/5 transition-colors"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex pl-6 md:pl-12 lg:pl-[max(3rem,calc(50vw-560px))]">
          {USE_CASES.map((uc) => (
            <div key={uc.id} className="flex-none pr-5 w-[300px] md:w-[340px]">
              <button
                onClick={() => setSelectedCase(uc)}
                className="group w-full text-left"
              >
                {/* Image */}
                <div className="aspect-[3/2] overflow-hidden rounded-2xl mb-4 bg-charcoal/5">
                  <img
                    src={uc.image}
                    alt={uc.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 saturate-[0.8] brightness-[0.93] contrast-[1.05]"
                  />
                </div>
                {/* Title */}
                <h3 className="font-heading font-bold text-charcoal text-lg md:text-xl mb-2 group-hover:text-clay transition-colors leading-snug line-clamp-2">
                  {uc.title}
                </h3>
                {/* Summary */}
                <p className="font-body text-charcoal/55 text-sm leading-relaxed mb-4 line-clamp-2">
                  {uc.summary}
                </p>
                {/* Read more */}
                <span className="inline-flex items-center gap-1.5 font-mono-brand text-[10px] tracking-widest uppercase text-clay">
                  Lees meer <ArrowRight size={11} className="transition-transform group-hover:translate-x-1" />
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>

      <p className="font-mono-brand text-charcoal/25 text-xs tracking-wide text-center mt-12 px-6">
        Geen van deze toepassingen vereist technische kennis van uw kant.
      </p>

      {/* Modal */}
      {selectedCase && (
        <UseCaseModal useCase={selectedCase} onClose={() => setSelectedCase(null)} />
      )}
    </section>
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
   PHILOSOPHY — The Manifesto
───────────────────────────────────────────────────────────────────────── */
function Philosophy() {
  const sectionRef = useRef(null)
  const line1Ref = useRef(null)
  const line2Ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(line1Ref.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' } }
      )
      gsap.fromTo(line2Ref.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.1, ease: 'power3.out', delay: 0.2,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' } }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-32 md:py-48 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #1e2b24 0%, #1A1A1A 100%)' }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1519694007571-14f6e94c7c7f?w=1400&q=60')` }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <p ref={line1Ref} className="font-body text-cream/40 text-lg md:text-xl mb-6 opacity-0">
          De meeste bureaus brengen technologie — en meer vragen dan antwoorden.
        </p>
        <p ref={line2Ref} className="font-heading font-bold text-cream text-3xl md:text-5xl lg:text-6xl leading-tight opacity-0 max-w-4xl">
          Wij brengen{' '}
          <span className="font-drama text-clay" style={{ fontSize: '1.15em' }}>helderheid</span>
          {' '}— en systemen die gewoon werken.
        </p>
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
      // Tekst fade-in
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
  return (
    <footer className="bg-charcoal px-6 md:px-12 py-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-heading font-bold text-cream text-sm">Aivanta</span>

        <nav className="flex items-center gap-6">
          {[
            { label: 'Werkwijze', href: '#werkwijze' },
            { label: 'Over mij',  href: '#over-mij' },
            { label: 'Contact',   href: '#contact' },
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
   APP ROOT
───────────────────────────────────────────────────────────────────────── */
export default function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <Hero />
      <Features />
      <ServicesSection />
      <ToolsCloud />
      <Philosophy />
      <AboutMe />
      <ContactCTA />
      <Footer />
    </div>
  )
}
