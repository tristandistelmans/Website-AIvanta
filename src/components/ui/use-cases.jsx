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
  Package,
  Sparkles,
  Target,
  TrendingUp,
  TriangleAlert,
} from 'lucide-react'

import { FlowerMark } from '@/components/ui/flower'
import { useTaal } from '@/lib/taal'

/* UseCases
   ------------------------------------------------------------------
   Use cases, gegroepeerd in tabbladen per categorie. Elk tabblad toont
   twee kaarten: bovenaan een paneel met een wazige sfeerachtergrond en
   daarop een klein, nagebouwd voorbeeldscherm, daaronder de uitleg.

   - De categorieën en welke use cases erin zitten staan in teksten.js
     (`usecases.categorieen`); een use case verplaatsen is dus alleen
     een sleutel verschuiven. De voorbeeldschermen hangen aan dezelfde
     sleutel (zie DEMOS)
   - Tabs volgen het ARIA-patroon: pijltjestoetsen links/rechts, Home
     en End verplaatsen de keuze en de focus
   - Alle tabbladen staan in de HTML (verborgen met `hidden`), zodat
     zoekmachines elke use case meekrijgen
   - prefers-reduced-motion zet de inschuifanimaties uit
   - De bedrijfsnamen in de voorbeelden zijn verzonnen                 */

const STAAFHOOGTES = [38, 52, 45, 61, 57, 70, 64, 86]
const CATEGORIE_ICONEN = [Target, TrendingUp, Package, Bot]

// Achtergronden in public/sfeer: dezelfde kleuren en mist als de hero-
// foto, maar abstract, zodat niet elke kaart dezelfde boom toont.
const SFEREN = ['dageraad', 'mist', 'schemer', 'mos']

/* ─── voorbeeldschermen ──────────────────────────────────────────── */

function Kaart({ children, className = '' }) {
  return (
    <div
      className={`usecase-in w-[min(95%,26rem)] rounded-2xl bg-white/[0.88] p-4 font-hero-sans text-[#0A0A0A] shadow-[0_40px_90px_-30px_rgba(0,0,0,0.55)] ring-1 ring-white/70 backdrop-blur-xl sm:p-5 md:p-6 ${className}`}
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
        <FlowerMark className="h-5 w-5 text-[#0A0A0A]" />
      </div>

      <div className="mt-5 space-y-2.5 border-t border-black/[0.06] pt-4">
        {d.lijnen.map(([lijn, prijs], i) => (
          <Rij key={lijn} i={i} className="flex items-center justify-between gap-4 text-sm">
            <span className="text-[#0A0A0A]/65">{lijn}</span>
            <span className="tabular-nums">{prijs}</span>
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
  offertes: DemoOfferte,
  inbox: DemoInbox,
}

function Voorbeeld({ sleutel, item, label, sfeer = 'dageraad' }) {
  const Demo = DEMOS[sleutel]

  return (
    <div className="relative h-[25rem] overflow-hidden rounded-[1.35rem] bg-[#3b4a3a] md:h-[28rem]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(/sfeer/${sfeer}.webp)` }}
      />
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg, rgba(10,14,10,0) 60%, rgba(10,14,10,0.35) 100%)' }}
      />

      <div className="relative flex h-full items-center justify-center px-3 py-12">
        {Demo && <Demo d={item.demo} />}
      </div>

      <span className="absolute bottom-4 left-5 font-mono-brand text-[0.66rem] uppercase tracking-[0.14em] text-white/80">
        {label}
      </span>
    </div>
  )
}

function UseCaseKaart({ sleutel, item, label, sfeer }) {
  return (
    <article className="flex w-full flex-col rounded-[1.75rem] bg-[#F5F5F2] p-2 ring-1 ring-black/[0.04]">
      <Voorbeeld sleutel={sleutel} item={item} label={label} sfeer={sfeer} />

      <div className="flex flex-1 flex-col px-4 pb-6 pt-6 md:px-6 md:pb-7">
        <h3
          className="font-hero-serif font-normal leading-tight tracking-[-0.02em] text-[#0A0A0A]"
          style={{ fontSize: 'clamp(1.6rem, 2.4vw, 2.1rem)' }}
        >
          {item.titel}
        </h3>
        <p className="mt-2 font-hero-sans text-base font-medium text-[#0A0A0A]">{item.kort}</p>
        <p className="mt-3 font-hero-sans text-[0.95rem] leading-[1.65] text-[#0A0A0A]/60">{item.tekst}</p>

        <ul className="mt-6 flex flex-wrap gap-2">
          {item.punten.map((punt) => (
            <li
              key={punt}
              className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 font-hero-sans text-[0.8rem] text-[#0A0A0A]/80 ring-1 ring-black/[0.06]"
            >
              <Check size={12} strokeWidth={2.5} className="shrink-0 text-[#0A0A0A]" />
              {punt}
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}

/* ─── sectie ──────────────────────────────────────────────────────── */

export default function UseCases() {
  const ref = useRef(null)
  const tabRefs = useRef([])
  const { t } = useTaal()
  const categorieen = t('usecases.categorieen')
  const items = t('usecases.items')
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
    <section ref={ref} id="use-cases" className="bg-white px-6 pb-28 pt-8 md:px-10 md:pb-40">
      <div className="mx-auto max-w-7xl">
        {/* kop */}
        <div className="border-t border-black/10 pt-16 md:pt-24">
          <h2
            className="uc-op max-w-3xl font-hero-serif font-normal leading-[1.02] tracking-[-0.025em] text-[#0A0A0A]"
            style={{ fontSize: 'clamp(2.5rem, 5.4vw, 4.75rem)' }}
          >
            {t('usecases.titel')}
          </h2>
        </div>

        {/* tabbladen */}
        <div className="uc-op -mx-6 mt-10 overflow-x-auto px-6 [scrollbar-width:none] md:mx-0 md:mt-14 md:px-0 [&::-webkit-scrollbar]:hidden">
          <div
            role="tablist"
            aria-label={t('usecases.label')}
            className="inline-flex gap-1 rounded-full bg-black/[0.04] p-1.5"
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
                      ? 'bg-[#0A0A0A] text-white shadow-[0_8px_20px_-8px_rgba(0,0,0,0.5)]'
                      : 'text-[#0A0A0A]/60 hover:bg-black/[0.04] hover:text-[#0A0A0A]'
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
            {/* mobiel: kaarten naast elkaar om horizontaal door te swipen; vanaf md een raster */}
            <div className="usecase-in -mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-6 px-6 pb-2 [scrollbar-width:none] md:mx-0 md:grid md:snap-none md:grid-cols-2 md:gap-6 md:overflow-visible md:px-0 md:pb-0 [&::-webkit-scrollbar]:hidden">
              {categorie.items.map((sleutel, i) => (
                <div key={sleutel} className="flex w-[86%] shrink-0 snap-start md:w-auto">
                  <UseCaseKaart
                    sleutel={sleutel}
                    item={items[sleutel]}
                    label={t('usecases.voorbeeld')}
                    sfeer={SFEREN[(index * 2 + i) % SFEREN.length]}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* afsluiter */}
        <div className="uc-op mt-14 flex justify-center md:mt-20">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-md bg-[#0A0A0A] px-6 py-3.5 font-hero-sans text-[0.95rem] font-medium text-white transition-transform hover:-translate-y-0.5"
          >
            {t('usecases.cta')}
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  )
}
