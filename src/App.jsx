import { useEffect, useRef, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, Menu, X, ChevronRight } from 'lucide-react'

import tristanPhoto from './assets/0267e3e3-c7ba-4952-a327-10ed2614011d.jpg'
import DemoHubPage from './pages/DemoHubPage'
import { SplineScene } from '@/components/ui/splite'
import IntegrationLogos from '@/components/ui/integration-logos'
gsap.registerPlugin(ScrollTrigger)

/* ─────────────────────────────────────────────────────────────────────────
   SCROLL TO TOP — reset scroll bij route change
───────────────────────────────────────────────────────────────────────── */
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

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

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.essay-reveal',
        { y: 28, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out', stagger: 0.12, delay: 0.25 }
      )
    }, heroRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={heroRef} className="relative w-full overflow-hidden bg-cream">
      {/* 3D robot — op de achtergrond, rechtsboven */}
      <div className="pointer-events-none absolute top-0 right-0 z-0 h-[78vh] w-full md:w-[66%] lg:w-[56%]">
        <div className="pointer-events-auto h-full w-full">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="h-full w-full"
          />
        </div>
        {/* cream sluiers zodat de tekst leesbaar blijft */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-cream via-cream/80 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-cream" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-12 pt-36 md:pt-44 pb-28 md:pb-36">
        <article className="max-w-2xl flex flex-col gap-7">
          <p
            className="essay-reveal opacity-0 font-drama italic text-charcoal leading-[1.2]"
            style={{ fontSize: 'clamp(1.55rem, 3.4vw, 2.6rem)' }}
          >
            De hedendaagse recruitmentsector in Vlaanderen en Nederland bevindt zich in een paradoxale positie. Terwijl de markt vraagt om ongekende snelheid en diepgaande menselijke relaties, gaat een substantieel deel van de wekelijkse capaciteit van consultants verloren aan administratieve handelingen.
          </p>

          <p className="essay-reveal opacity-0 font-body text-charcoal/70 text-base md:text-lg leading-relaxed">
            Uit marktdata blijkt dat een gemiddelde recruiter tot wel veertig procent van zijn werkweek besteedt aan taken die geen directe omzet genereren: het handmatig overtypen van kandidaatgegevens, het synchroniseren van informatie tussen LinkedIn en e-mail, en het bijhouden van statuswijzigingen. Hierdoor verschuift de focus ongewild van talent- en relatiemanagement naar data-entry, met operationele frictie, vermoeide consultants en misgelopen plaatsingen tot gevolg.
          </p>

          <p className="essay-reveal opacity-0 font-body text-charcoal/70 text-base md:text-lg leading-relaxed">
            Het probleem ligt zelden aan de kwaliteit van de bestaande software. Gevestigde systemen zoals Bullhorn, Carerix, Recruitee of AFAS vormen een solide en noodzakelijke fundering voor de dagelijkse werking. Ze zijn echter vaak ontworpen als statische archieven in plaats van dynamische procesversnellers. Tussen deze systemen en de dagelijkse communicatiekanalen ontstaan onvermijdelijk operationele gaten waar data fragmenteert. Het antwoord op deze uitdaging is niet de introductie van wéér een nieuw softwareplatform, of een risicovolle, kostbare ATS-migratie. De sleutel tot schaalbaarheid en margebehoud ligt in het intelligent verbinden en verrijken van de systemen die er al zijn.
          </p>

          <p className="essay-reveal opacity-0 font-body text-charcoal/70 text-base md:text-lg leading-relaxed">
            Mijn benadering richt zich specifiek op het ontwerpen en implementeren van gerichte AI-automatiseringen die fungeren als een onzichtbare, versnellende laag bovenop uw huidige infrastructuur. Door repetitieve processen achter de schermen te stroomlijnen — denk aan het doorzoeken en heractiveren van uw eigen 'slapende' database, het automatisch opstellen van gepersonaliseerde candidate profiles, of het synchroniseren van klantinformatie — wordt de administratieve druk drastisch verlaagd. Dit herstelt de balans binnen het bureau: consultants krijgen wekelijks tussen de twaalf en vijftien uur aan effectieve, commerciële tijd terug, terwijl de datakwaliteit binnen het ATS continu gewaarborgd blijft.
          </p>

          <p className="essay-reveal opacity-0 font-body text-charcoal/70 text-base md:text-lg leading-relaxed">
            Dit gaat niet over het vervangen van de recruiter door technologie, maar over het maximaliseren van hun intellectuele en commerciële kapitaal. Wanneer de administratieve ruis verdwijnt, ontstaat er ruimte voor wat er werkelijk toe doet: kwalitatieve intakegesprekken, diepgaand relatiebeheer met opdrachtgevers en een kortere time-to-hire. Het resultaat is een organisatie die efficiënter opereert, schaalbaar is en per consultant meer plaatsingen realiseert zonder dat de werkdruk stijgt. Om objectief inzichtelijk te maken waar binnen uw specifieke organisatie de grootste efficiëntiewinst te behalen valt, breng ik uw huidige workflows in kaart via een gerichte procesanalyse, zodat exact helder wordt waar capaciteit lekt en hoe dit structureel kan worden opgelost.
          </p>

          <div className="essay-reveal opacity-0 pt-4">
            <a
              href="#contact"
              className="btn-magnetic inline-flex items-center gap-3 bg-clay text-cream px-8 py-4 rounded-full font-heading font-semibold text-base"
            >
              <span className="btn-bg bg-clay-dark rounded-full" />
              <span className="btn-label flex items-center gap-3">Neem contact op <ArrowRight size={16} /></span>
            </a>
          </div>
        </article>
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
      <div className="max-w-7xl mx-auto flex flex-col gap-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <a href="/" className="font-heading font-bold text-cream text-sm">Ainova</a>

          <nav className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2">
            {[
              { label: 'Over mij', href: '#over-mij' },
              { label: 'Contact', href: '#contact' },
              { label: 'tristan@ainova.be', href: 'mailto:tristan@ainova.be' },
              { label: '0474 50 74 78', href: 'tel:+32474507478' },
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

        <p className="border-t border-cream/10 pt-4 font-body text-cream/40 text-xs text-center md:text-left leading-relaxed">
          Ainova — Prinsenstraat 47, 3500 Hasselt
          <span className="mx-2 text-cream/20">·</span>
          Ondernemingsnummer BE 1009.167.610
          <span className="mx-2 text-cream/20">·</span>
          <a href="mailto:tristan@ainova.be" className="hover:text-cream/80 transition-colors">tristan@ainova.be</a>
          <span className="mx-2 text-cream/20">·</span>
          <a href="tel:+32474507478" className="hover:text-cream/80 transition-colors">0474 50 74 78</a>
        </p>
      </div>
    </footer>
  )
}

/* ─────────────────────────────────────────────────────────────────────────
   HOMEPAGE — samenstelling van alle hoofdpagina-secties
───────────────────────────────────────────────────────────────────────── */
function HomePage() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <Hero />
      <IntegrationLogos />
      <OverMij />
      <ContactCTA />
      <Footer />
    </div>
  )
}

/* ─────────────────────────────────────────────────────────────────────────
   APP — router shell
───────────────────────────────────────────────────────────────────────── */
export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/demo-hub" element={<DemoHubPage />} />
      </Routes>
    </>
  )
}
