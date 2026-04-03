import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, Menu, X, ChevronRight } from 'lucide-react'

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
              <span className="btn-label flex items-center gap-3">Plan een gratis gesprek <ArrowRight size={16} /></span>
            </a>
            <a href="#werkwijze" className="link-lift font-body text-charcoal/50 hover:text-charcoal text-sm flex items-center gap-2 transition-colors">
              Bekijk mijn aanpak <ChevronRight size={14} />
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

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.uc-header',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' } }
      )
      gsap.fromTo('.uc-tag',
        { y: 14, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.45, ease: 'power3.out', stagger: 0.04,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 65%' } }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const tags = [
    'Leadopvolging', 'AI-Chatbots', 'CRM-automatisering', 'E-mailmarketing',
    'Contentcreatie', 'Documentgeneratie', 'Onboarding', 'Rapportage',
    'Offertegeneratie', 'Website bouwen', 'Custom GPT', 'Dashboards',
    'Social media', 'Workflow automatisering', 'Data-analyse',
  ]

  return (
    <section ref={sectionRef} id="diensten" className="py-24 md:py-32 px-6 md:px-12 bg-cream">
      <div className="max-w-5xl mx-auto">
        <div className="uc-header opacity-0 mb-12">
          <h2 className="font-heading font-bold text-charcoal text-3xl md:text-5xl leading-tight">
            Enkele{' '}
            <span className="font-drama text-moss" style={{ fontSize: '1.1em' }}>mogelijkheden.</span>
          </h2>
        </div>

        <div className="flex flex-wrap gap-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className="uc-tag opacity-0 font-heading font-medium text-charcoal/60 text-sm md:text-base border border-charcoal/12 rounded-full px-5 py-2.5 hover:border-clay/30 hover:text-clay transition-colors duration-200"
            >
              {tag}
            </span>
          ))}
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

          <div className="about-elem opacity-0 max-w-xs mx-auto lg:mx-0">
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
