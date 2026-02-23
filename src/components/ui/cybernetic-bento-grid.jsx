import { useEffect, useRef } from 'react'
import {
  Mail, Search, UserCheck, Link2, BarChart2, MessageSquare,
  ArrowRight, Zap
} from 'lucide-react'

// Reusable BentoItem component with mouse-spotlight effect
const BentoItem = ({ className = '', children }) => {
  const itemRef = useRef(null)

  useEffect(() => {
    const item = itemRef.current
    if (!item) return
    const handleMouseMove = (e) => {
      const rect = item.getBoundingClientRect()
      item.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`)
      item.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`)
    }
    item.addEventListener('mousemove', handleMouseMove)
    return () => item.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div ref={itemRef} className={`bento-item ${className}`}>
      {children}
    </div>
  )
}

// Small icon badge helper
const IconBadge = ({ icon: Icon, color = 'clay' }) => (
  <div className={`w-9 h-9 flex items-center justify-center rounded-full mb-4 flex-shrink-0
    ${color === 'clay' ? 'bg-clay/20 text-clay' : 'bg-moss/20 text-moss-light'}`}>
    <Icon size={17} />
  </div>
)

// Tool-flow node for the main card
const FlowNode = ({ icon: Icon, label, active }) => (
  <div className={`flex items-center gap-2 px-3 py-2 rounded-xl border text-xs font-mono-brand transition-all duration-300
    ${active
      ? 'bg-clay/20 border-clay/40 text-clay'
      : 'bg-white/5 border-white/10 text-cream/50'}`}>
    <Icon size={13} />
    {label}
  </div>
)

// Animated flow arrow
const FlowArrow = () => (
  <div className="flex items-center px-1">
    <ArrowRight size={14} className="text-clay/50" />
  </div>
)

// Main Component
export const CyberneticBentoGrid = () => {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12"
      style={{ background: 'linear-gradient(135deg, #1e2b24 0%, #1A1A1A 100%)' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-14">
          <span className="font-mono-brand text-xs text-clay tracking-widest uppercase">
            Wat Aivanta voor u bouwt
          </span>
          <h2 className="font-heading font-bold text-cream text-3xl md:text-5xl mt-3 leading-tight">
            Concrete automatiseringen{' '}
            <span className="font-drama text-clay" style={{ fontSize: '1.1em' }}>die werken.</span>
          </h2>
          <p className="font-body text-cream/50 text-lg mt-5 max-w-2xl leading-relaxed">
            Geen vage beloftes. Hieronder ziet u wat Aivanta daadwerkelijk bouwt —
            van e-mailcampagnes tot tool-koppelingen die uw stack aan elkaar plakken.
          </p>
        </div>

        {/* Bento grid */}
        <div className="bento-grid">

          {/* ── Large card: Email automation ── */}
          <BentoItem className="col-span-2 row-span-2 flex flex-col justify-between gap-6">
            <div>
              <IconBadge icon={Mail} />
              <h2 className="text-xl font-heading font-bold text-cream">
                E-mailcampagnes op Autopilot
              </h2>
              <p className="mt-2 text-cream/50 font-body text-sm leading-relaxed">
                AI leest uw CRM, segmenteert contacten en stuurt automatisch
                gepersonaliseerde mails op het juiste moment — zonder dat u
                ook maar één keer copy-paste uitvoert.
              </p>
            </div>

            {/* Animated tool-flow visual */}
            <div className="bg-black/30 rounded-[1.25rem] p-5 border border-white/5">
              <p className="font-mono-brand text-[10px] text-cream/30 uppercase tracking-widest mb-3">
                Automatische flow
              </p>
              <div className="flex flex-wrap items-center gap-1">
                <FlowNode icon={Link2} label="CRM" active />
                <FlowArrow />
                <FlowNode icon={Zap} label="AI Agent" active />
                <FlowArrow />
                <FlowNode icon={Mail} label="E-mail" active />
                <FlowArrow />
                <FlowNode icon={UserCheck} label="Lead warm" active />
              </div>
              <div className="mt-4 flex flex-col gap-1.5">
                {[
                  '✓ 3 segmenten aangemaakt op basis van gedrag',
                  '✓ 127 gepersonaliseerde mails verstuurd',
                  '✓ Open-rate: +38% t.o.v. handmatig',
                ].map((line, i) => (
                  <span key={i} className="font-mono-brand text-[11px] text-moss-light/80">{line}</span>
                ))}
              </div>
            </div>
          </BentoItem>

          {/* ── SEO automatisering ── */}
          <BentoItem>
            <IconBadge icon={Search} />
            <h2 className="text-base font-heading font-bold text-cream">
              SEO op Autopilot
            </h2>
            <p className="mt-2 text-cream/50 font-body text-sm leading-relaxed">
              AI schrijft meta-tags, monitort rankings en optimaliseert
              pagina's automatisch — u hoeft niets handmatig aan te passen.
            </p>
          </BentoItem>

          {/* ── Lead kwalificatie ── */}
          <BentoItem>
            <IconBadge icon={UserCheck} />
            <h2 className="text-base font-heading font-bold text-cream">
              Lead Kwalificatie
            </h2>
            <p className="mt-2 text-cream/50 font-body text-sm leading-relaxed">
              Formulierinzendingen worden automatisch beoordeeld, gescoord
              en enkel warme leads komen bij u terecht.
            </p>
          </BentoItem>

          {/* ── Tool koppelingen (tall) ── */}
          <BentoItem className="row-span-2 flex flex-col justify-between gap-5">
            <div>
              <IconBadge icon={Link2} color="moss" />
              <h2 className="text-base font-heading font-bold text-cream">
                Tool Koppelingen
              </h2>
              <p className="mt-2 text-cream/50 font-body text-sm leading-relaxed">
                Sheets, e-mail, CRM en agenda praten automatisch
                met elkaar. Geen handmatig copy-pasten meer tussen systemen.
              </p>
            </div>
            {/* Stacked tools visual */}
            <div className="flex flex-col gap-2">
              {[
                { label: 'Google Sheets', icon: BarChart2 },
                { label: 'Gmail / Outlook', icon: Mail },
                { label: 'CRM / HubSpot', icon: UserCheck },
                { label: 'Google Calendar', icon: Link2 },
              ].map(({ label, icon: Icon }, i) => (
                <div key={i} className="flex items-center gap-2.5 bg-white/5 border border-white/8 rounded-xl px-3 py-2">
                  <Icon size={13} className="text-clay flex-shrink-0" />
                  <span className="font-mono-brand text-[11px] text-cream/60">{label}</span>
                  <span className="ml-auto w-1.5 h-1.5 rounded-full bg-green-400/70 flex-shrink-0" />
                </div>
              ))}
            </div>
          </BentoItem>

          {/* ── Rapportage (wide) ── */}
          <BentoItem className="col-span-2">
            <IconBadge icon={BarChart2} />
            <h2 className="text-base font-heading font-bold text-cream">
              Automatische Rapportage
            </h2>
            <p className="mt-2 text-cream/50 font-body text-sm leading-relaxed">
              Elke maandag staat er een helder overzicht in uw inbox — bezoekers,
              conversies, omzet — automatisch samengesteld vanuit Google Analytics,
              uw CRM en Sheets. Nooit meer zelf dashboards raadplegen.
            </p>
          </BentoItem>

          {/* ── Klantenservice bot ── */}
          <BentoItem>
            <IconBadge icon={MessageSquare} />
            <h2 className="text-base font-heading font-bold text-cream">
              Klantenservice Bot
            </h2>
            <p className="mt-2 text-cream/50 font-body text-sm leading-relaxed">
              24/7 antwoord op veelgestelde vragen, gekoppeld aan uw
              eigen kennisbank en website-inhoud.
            </p>
          </BentoItem>

        </div>
      </div>
    </section>
  )
}
