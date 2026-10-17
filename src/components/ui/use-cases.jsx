import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import {
  ArrowRight,
  Bot,
  CalendarCheck,
  Check,
  FileText,
  Inbox,
  Mail,
  Headset,
  Megaphone,
  Package,
  Receipt,
  Sparkles,
  TrendingUp,
  TriangleAlert,
  Users,
} from 'lucide-react'

import { BoomMerk } from '@/components/ui/merk'
import { useTaal } from '@/lib/taal'

/* UseCases
   ------------------------------------------------------------------
   Use cases per afdeling, in tabbladen. Elk tabblad toont links een
   klein, nagebouwd voorbeeldscherm op een neutraal vlak en rechts een
   korte kop met drie concrete toepassingen.

   - Afdelingen, teksten en voorbeelddata staan in teksten.js
     (`usecases.categorieen`); `demo.type` kiest het voorbeeldscherm
     (zie DEMOS)
   - Tabs volgen het ARIA-patroon: pijltjestoetsen links/rechts, Home
     en End verplaatsen de keuze en de focus
   - Alle tabbladen staan in de HTML (verborgen met `hidden`), zodat
     zoekmachines elke use case meekrijgen
   - prefers-reduced-motion zet de inschuifanimaties uit
   - De bedrijfsnamen in de voorbeelden zijn verzonnen                 */

const STAAFHOOGTES = [38, 52, 45, 61, 57, 70, 64, 86]
const CATEGORIE_ICONEN = [TrendingUp, Megaphone, Users, Package, Headset, Receipt]


/* ─── voorbeeldschermen ──────────────────────────────────────────── */

function Kaart({ children, className = '' }) {
  return (
    <div
      className={`usecase-in w-[min(95%,26rem)] rounded-2xl bg-white/[0.88] p-4 font-ui text-[#0A0A0A] shadow-[0_40px_90px_-30px_rgba(0,0,0,0.55)] ring-1 ring-white/70 backdrop-blur-xl sm:p-5 md:p-6 ${className}`}
    >
      {children}
    </div>
  )
}

function Rij({ i, children, className = '' }) {
  return (
    <div className={`usecase-rij ${className}`} style={{ '--i': i }}>
      {children}
    </div>
  )
}

function KaartKop({ icoon, titel, rechts }) {
  return (
    <div className="flex items-center justify-between gap-3 border-b border-black/[0.06] pb-4">
      <div className="flex items-center gap-2.5">
        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#0A0A0A] text-white">
          {icoon}
        </span>
        <span className="text-sm font-medium tracking-tight">{titel}</span>
      </div>
      {rechts}
    </div>
  )
}

function Pil({ children, donker = false }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-2.5 py-1 text-[0.68rem] font-medium ${
        donker ? 'bg-[#0A0A0A] text-white' : 'bg-black/[0.05] text-[#0A0A0A]/70'
      }`}
    >
      {children}
    </span>
  )
}

function DemoLeads({ d }) {
  return (
    <Kaart>
      <KaartKop icoon={<Sparkles size={14} />} titel={d.kop} rechts={<Pil>{d.rijen.length}</Pil>} />
      <p className="mt-4 text-[0.72rem] text-[#0A0A0A]/50">{d.filter}</p>
      <div className="mt-3 space-y-2">
        {d.rijen.map(([naam, info, score], i) => (
          <Rij key={naam} i={i} className="flex items-center gap-2.5 rounded-xl bg-white px-2.5 py-2.5 ring-1 ring-black/[0.05] sm:gap-3 sm:px-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0A0A0A]/[0.06] text-xs font-medium">
              {naam.charAt(0)}
            </span>
            <span className="min-w-0 flex-1">
              <span className="block truncate text-sm font-medium">{naam}</span>
              <span className="block truncate text-[0.7rem] text-[#0A0A0A]/45">{info}</span>
            </span>
            {/* op smalle kaarten alleen het percentage, zodat de namen leesbaar blijven */}
            <span className="shrink-0 sm:w-14">
              <span className="block text-right text-xs font-medium tabular-nums">{score}%</span>
              <span className="mt-1 hidden h-1 overflow-hidden rounded-full bg-black/[0.06] sm:block">
                <span className="usecase-balk block h-full rounded-full bg-[#0A0A0A]" style={{ width: `${score}%`, '--i': i }} />
              </span>
            </span>
          </Rij>
        ))}
      </div>
    </Kaart>
  )
}

function DemoOpvolging({ d }) {
  return (
    <Kaart>
      <KaartKop icoon={<Mail size={14} />} titel={d.kop} rechts={<Pil donker>{d.badge}</Pil>} />
      <ol className="relative mt-5 space-y-4 pl-6">
        <span className="absolute bottom-2 left-[0.53rem] top-2 w-px bg-black/10" aria-hidden="true" />
        {d.stappen.map(([tijd, stap], i) => {
          const laatste = i === d.stappen.length - 1
          return (
            <Rij key={stap} i={i} className="relative">
              <span
                className={`absolute -left-6 top-0.5 flex h-[1.1rem] w-[1.1rem] items-center justify-center rounded-full ring-4 ring-white/90 ${
                  laatste ? 'bg-[#0A0A0A] text-white' : 'bg-white text-[#0A0A0A] ring-1'
                }`}
              >
                {laatste ? <CalendarCheck size={10} /> : <span className="h-1.5 w-1.5 rounded-full bg-[#0A0A0A]/40" />}
              </span>
              <span className="block font-mono-brand text-[0.66rem] uppercase tracking-[0.12em] text-[#0A0A0A]/45">{tijd}</span>
              <span className={`block text-sm ${laatste ? 'font-medium' : 'text-[#0A0A0A]/75'}`}>{stap}</span>
            </Rij>
          )
        })}
      </ol>
    </Kaart>
  )
}

function DemoOrders({ d }) {
  return (
    <Kaart>
      <div className="flex items-center gap-3 rounded-xl bg-white px-3 py-3 ring-1 ring-black/[0.05]">
        <span className="flex h-10 w-9 items-center justify-center rounded-md bg-[#0A0A0A]/[0.06]">
          <FileText size={16} />
        </span>
        <span className="min-w-0">
          <span className="block truncate text-sm font-medium">{d.bestand}</span>
          <span className="block text-[0.7rem] text-[#0A0A0A]/45">{d.ontvangen}</span>
        </span>
      </div>

      <div className="mt-4 divide-y divide-black/[0.06] rounded-xl ring-1 ring-black/[0.06]">
        {d.velden.map(([veld, waarde], i) => (
          <Rij key={veld} i={i} className="flex items-center justify-between gap-4 px-3 py-2.5 text-sm">
            <span className="text-[#0A0A0A]/50">{veld}</span>
            <span className="flex items-center gap-2 text-right font-medium">
              {waarde}
              <Check size={13} className="text-[#0A0A0A]/40" />
            </span>
          </Rij>
        ))}
      </div>

      <Rij i={d.velden.length} className="mt-4 flex items-center justify-between gap-3">
        <span className="text-[0.72rem] text-[#0A0A0A]/50">{d.controle}</span>
        <Pil donker>
          <Check size={11} /> {d.status}
        </Pil>
      </Rij>
    </Kaart>
  )
}

function DemoDashboard({ d }) {
  return (
    <Kaart>
      <div className="grid grid-cols-3 gap-2">
        {d.kpis.map(([label, waarde], i) => (
          <Rij key={label} i={i} className="rounded-xl bg-white px-3 py-2.5 ring-1 ring-black/[0.05]">
            <span className="block text-[0.66rem] text-[#0A0A0A]/45">{label}</span>
            <span className="mt-0.5 block font-hero-serif text-xl tabular-nums tracking-tight">{waarde}</span>
          </Rij>
        ))}
      </div>

      <p className="mt-5 text-[0.72rem] text-[#0A0A0A]/50">{d.kop}</p>
      <div className="mt-3 flex h-28 items-end gap-2">
        {STAAFHOOGTES.map((hoogte, i) => (
          <span
            key={i}
            className={`usecase-staaf flex-1 rounded-t-md ${i === STAAFHOOGTES.length - 1 ? 'bg-[#0A0A0A]' : 'bg-[#0A0A0A]/[0.12]'}`}
            style={{ height: `${hoogte}%`, '--i': i }}
          />
        ))}
      </div>

      <Rij i={4} className="mt-4 flex items-start gap-2.5 rounded-xl bg-[#0A0A0A] px-3 py-3 text-white">
        <TriangleAlert size={14} className="mt-0.5 shrink-0 text-[#E8C77A]" />
        <span className="text-[0.8rem] leading-snug">{d.inzicht}</span>
      </Rij>
    </Kaart>
  )
}

function DemoAgent({ d }) {
  return (
    <Kaart>
      <Rij i={0} className="flex justify-end">
        <span className="max-w-[80%] rounded-2xl rounded-br-md bg-[#0A0A0A] px-4 py-2.5 text-sm text-white">{d.vraag}</span>
      </Rij>

      <Rij i={2} className="mt-4 flex gap-2.5">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white ring-1 ring-black/10">
          <Bot size={14} />
        </span>
        <span className="min-w-0">
          <span className="block text-[0.7rem] font-medium text-[#0A0A0A]/50">{d.naam}</span>
          <span className="mt-1 block rounded-2xl rounded-tl-md bg-white px-4 py-3 text-sm leading-relaxed ring-1 ring-black/[0.05]">
            {d.antwoord}
          </span>
          <span className="mt-2.5 flex flex-wrap items-center gap-1.5">
            <span className="text-[0.68rem] text-[#0A0A0A]/45">{d.bron}</span>
            {d.bronnen.map((bron) => (
              <Pil key={bron}>{bron}</Pil>
            ))}
          </span>
        </span>
      </Rij>
    </Kaart>
  )
}

function DemoCrm({ d }) {
  return (
    <Kaart className="w-[min(94%,30rem)]">
      {/* op smalle schermen alleen de eerste twee kolommen, anders worden de namen afgekapt */}
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        {d.kolommen.map(([kolom, kaarten], k) => (
          <div key={kolom} className={`rounded-xl bg-black/[0.035] p-2 ${k > 1 ? 'hidden sm:block' : ''}`}>
            <span className="flex items-center justify-between px-1 text-[0.68rem] font-medium text-[#0A0A0A]/55">
              {kolom}
              <span className="tabular-nums">{kaarten.length}</span>
            </span>
            <div className="mt-2 space-y-1.5">
              {kaarten.map(([naam, bedrag], i) => {
                const verplaatst = k === 1 && i === 0
                return (
                  <Rij
                    key={naam}
                    i={k + i}
                    className={`rounded-lg bg-white px-2 py-2 ring-1 ${verplaatst ? 'usecase-verplaatst ring-[#0A0A0A]' : 'ring-black/[0.05]'}`}
                  >
                    <span className="block truncate text-[0.72rem] font-medium">{naam}</span>
                    <span className="block text-[0.68rem] tabular-nums text-[#0A0A0A]/45">{bedrag}</span>
                  </Rij>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      <Rij i={5} className="mt-4 flex items-center gap-2 rounded-xl bg-[#0A0A0A] px-3 py-2.5 text-[0.75rem] text-white">
        <Check size={13} className="shrink-0" />
        {d.melding}
      </Rij>
    </Kaart>
  )
}

function DemoOfferte({ d }) {
  return (
    <Kaart>
      <div className="flex items-start justify-between gap-3">
        <span>
          <span className="block font-mono-brand text-[0.66rem] uppercase tracking-[0.12em] text-[#0A0A0A]/45">{d.kop}</span>
          <span className="mt-1 block font-hero-serif text-2xl tracking-tight">{d.klant}</span>
        </span>
        <BoomMerk className="h-5 w-5 text-[#0A0A0A]" />
      </div>

      <div className="mt-5 space-y-2.5 border-t border-black/[0.06] pt-4">
        {d.lijnen.map(([lijn, prijs], i) => (
          <Rij key={lijn} i={i} className="flex items-center justify-between gap-4 text-sm">
            <span className="text-[#0A0A0A]/65">{lijn}</span>
            <span className="shrink-0 whitespace-nowrap tabular-nums">{prijs}</span>
          </Rij>
        ))}
      </div>

      <Rij i={3} className="mt-4 flex items-center justify-between gap-4 border-t border-black/[0.06] pt-4">
        <span className="text-sm font-medium">{d.totaal[0]}</span>
        <span className="font-hero-serif text-2xl tabular-nums tracking-tight">{d.totaal[1]}</span>
      </Rij>

      <Rij i={4} className="mt-4">
        <Pil donker>
          <Sparkles size={11} /> {d.status}
        </Pil>
      </Rij>
    </Kaart>
  )
}

function DemoInbox({ d }) {
  return (
    <Kaart>
      <KaartKop icoon={<Inbox size={14} />} titel={d.kop} rechts={<Pil>{d.mails.length}</Pil>} />
      <div className="mt-3 divide-y divide-black/[0.06]">
        {d.mails.map(([onderwerp, team], i) => (
          <Rij key={onderwerp} i={i} className="py-3">
            <span className="flex items-center justify-between gap-3">
              <span className="truncate text-sm font-medium">{onderwerp}</span>
              <Pil>{team}</Pil>
            </span>
            {i === 0 && (
              <span className="mt-2 flex items-center gap-1.5 text-[0.72rem] text-[#0A0A0A]/55">
                <Sparkles size={11} /> {d.klaar}
              </span>
            )}
          </Rij>
        ))}
      </div>
    </Kaart>
  )
}

const DEMOS = {
  leads: DemoLeads,
  opvolging: DemoOpvolging,
  orders: DemoOrders,
  dashboard: DemoDashboard,
  agent: DemoAgent,
  crm: DemoCrm,
  offerte: DemoOfferte,
  inbox: DemoInbox,
}

/* Het blauwe verloop uit de hero, met een lichte donkere laag. */
function Voorbeeld({ demo, label }) {
  const Demo = DEMOS[demo.type]

  return (
    <div
      className="relative h-[24rem] overflow-hidden rounded-[2rem] md:h-[30rem]"
      style={{
        backgroundColor: '#13345f',
        backgroundImage: 'linear-gradient(180deg, rgba(8,22,44,0.15) 0%, rgba(8,22,44,0.35) 100%), url(/hero-blauw.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="relative flex h-full items-center justify-center px-3 py-12">
        {Demo && <Demo d={demo} />}
      </div>

      <span className="absolute bottom-4 left-5 font-hero-sans text-xs text-white/70">
        {label}
      </span>
    </div>
  )
}

/* ─── sectie ──────────────────────────────────────────────────────── */

export default function UseCases() {
  const ref = useRef(null)
  const tabRefs = useRef([])
  const { t } = useTaal()
  const categorieen = t('usecases.categorieen')
  const [actief, setActief] = useState(0)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.uc-op',
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out', stagger: 0.08,
          scrollTrigger: { trigger: ref.current, start: 'top 75%' } }
      )
    }, ref)
    return () => ctx.revert()
  }, [])

  const opToets = (e, index) => {
    const stappen = { ArrowRight: 1, ArrowLeft: -1 }
    let volgende = null
    if (e.key in stappen) volgende = (index + stappen[e.key] + categorieen.length) % categorieen.length
    if (e.key === 'Home') volgende = 0
    if (e.key === 'End') volgende = categorieen.length - 1
    if (volgende === null) return
    e.preventDefault()
    setActief(volgende)
    tabRefs.current[volgende]?.focus()
  }

  return (
    <section ref={ref} id="use-cases" className="bg-[#FBFCFD] px-6 pb-24 md:px-10 md:pb-32">
      <div className="mx-auto max-w-7xl">
        {/* kop */}
        <div className="border-t border-[#E2E8EF] pt-16 md:pt-24">
          <h2
            className="uc-op max-w-3xl font-hero-serif font-normal leading-[1.04] tracking-[-0.025em] text-[#0B1B2E]"
            style={{ fontSize: 'clamp(2.25rem, 4.4vw, 3.75rem)' }}
          >
            {t('usecases.titel')}
          </h2>
        </div>

        {/* tabbladen */}
        <div className="uc-op -mx-6 mt-10 overflow-x-auto px-6 [scrollbar-width:none] md:mx-0 md:mt-12 md:px-0 [&::-webkit-scrollbar]:hidden">
          <div
            role="tablist"
            aria-label={t('usecases.label')}
            className="inline-flex gap-1 rounded-full bg-[#F1F4F8] p-1.5 ring-1 ring-[#E2E8EF]"
          >
            {categorieen.map((categorie, index) => {
              const Icoon = CATEGORIE_ICONEN[index] ?? Sparkles
              const open = index === actief
              return (
                <button
                  key={categorie.naam}
                  ref={(el) => (tabRefs.current[index] = el)}
                  type="button"
                  role="tab"
                  id={`uc-tab-${index}`}
                  aria-selected={open}
                  aria-controls={`uc-paneel-${index}`}
                  tabIndex={open ? 0 : -1}
                  onClick={() => setActief(index)}
                  onKeyDown={(e) => opToets(e, index)}
                  className={`inline-flex items-center gap-2 whitespace-nowrap rounded-full px-4 py-2.5 font-hero-sans text-sm font-medium transition-all duration-300 md:px-5 ${
                    open
                      ? 'bg-[#0B1B2E] text-[#F4F7FA] shadow-[0_8px_20px_-10px_rgba(11,27,46,0.6)]'
                      : 'text-[#2F3D50] hover:bg-white hover:text-[#0B1B2E]'
                  }`}
                >
                  <Icoon size={15} strokeWidth={2} />
                  {categorie.naam}
                </button>
              )
            })}
          </div>
        </div>

        {/* inhoud per tabblad */}
        {categorieen.map((categorie, index) => (
          <div
            key={categorie.naam}
            id={`uc-paneel-${index}`}
            role="tabpanel"
            aria-labelledby={`uc-tab-${index}`}
            hidden={index !== actief}
            className="uc-op mt-6 md:mt-8"
          >
            {/* altijd in de HTML; een animatie start opnieuw zodra `hidden` wegvalt */}
            <div className="usecase-in grid gap-8 md:grid-cols-[1.15fr_1fr] md:items-center md:gap-14">
              <Voorbeeld demo={categorie.demo} label={t('usecases.voorbeeld')} />

              <div>
                <h3
                  className="font-hero-serif font-normal leading-tight tracking-[-0.02em] text-[#0B1B2E]"
                  style={{ fontSize: 'clamp(1.75rem, 2.8vw, 2.4rem)' }}
                >
                  {categorie.titel}
                </h3>
                <ul className="mt-7 divide-y divide-[#E2E8EF] border-y border-[#E2E8EF]">
                  {categorie.punten.map((punt) => (
                    <li key={punt} className="flex items-start gap-3 py-4 font-hero-sans text-base text-[#0B1B2E]">
                      <Check size={16} strokeWidth={2.25} className="mt-1 shrink-0 text-[#1F5A94]" />
                      {punt}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="group mt-8 inline-flex items-center gap-2 font-hero-sans text-[0.95rem] font-medium text-[#0B1B2E]"
                >
                  {t('usecases.cta')}
                  <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
