import { useSyncExternalStore } from 'react'

/* CookieBanner
   ------------------------------------------------------------------
   Werkt samen met Consent Mode v2, dat in index.html alles standaard op
   'denied' zet voordat gtag.js laadt. Deze banner laadt of blokkeert dus
   zelf geen tags; hij geeft alleen de keuze van de bezoeker door.

   Drie dingen die bewust zo zijn:

   - Weigeren staat naast accepteren, even zichtbaar en even makkelijk.
     Een banner waarin weigeren moeilijker is dan accepteren geldt onder
     de GDPR niet als geldige toestemming.
   - De zichtbaarheid komt uit useSyncExternalStore. De keuze leeft in
     localStorage, dus buiten React, en die bestaat niet tijdens het
     prerenderen. Met een servermomentopname van 'verborgen' komt de HTML
     van de build overeen met wat de browser bij hydratie verwacht.
   - De keuze is te herzien via de knop in de voettekst, want toestemming
     moet even makkelijk in te trekken zijn als te geven.               */

const SLEUTEL = 'ainova-cookies'
export const OPEN_EVENEMENT = 'ainova-cookies-openen'

const TOESTEMMING = ['ad_storage', 'ad_user_data', 'ad_personalization', 'analytics_storage']

const luisteraars = new Set()
let geforceerdOpen = false

function meld() {
  luisteraars.forEach((fn) => fn())
}

function abonneer(fn) {
  luisteraars.add(fn)
  const openen = () => {
    geforceerdOpen = true
    meld()
  }
  window.addEventListener(OPEN_EVENEMENT, openen)
  return () => {
    luisteraars.delete(fn)
    window.removeEventListener(OPEN_EVENEMENT, openen)
  }
}

function momentopname() {
  if (geforceerdOpen) return true
  try {
    const keuze = localStorage.getItem(SLEUTEL)
    return keuze !== 'granted' && keuze !== 'denied'
  } catch {
    // Opslag geblokkeerd: dan vragen we het gewoon opnieuw.
    return true
  }
}

// Tijdens het prerenderen bestaat er geen browser; dan tonen we niets.
const serverMomentopname = () => false

function kies(keuze) {
  try {
    localStorage.setItem(SLEUTEL, keuze)
  } catch {
    // Privémodus: de keuze geldt dan alleen dit bezoek.
  }
  if (typeof window.gtag === 'function') {
    window.gtag('consent', 'update', Object.fromEntries(TOESTEMMING.map((k) => [k, keuze])))
  }
  geforceerdOpen = false
  meld()
}

export default function CookieBanner() {
  const zichtbaar = useSyncExternalStore(abonneer, momentopname, serverMomentopname)

  if (!zichtbaar) return null

  return (
    <div
      role="dialog"
      aria-label="Cookies"
      className="fixed inset-x-3 bottom-3 z-50 md:inset-x-auto md:bottom-6 md:left-6 md:max-w-md"
    >
      <div className="rounded-[1.5rem] border border-black/10 bg-white/95 p-6 shadow-[0_8px_30px_rgba(16,24,40,0.12)] backdrop-blur-md">
        <p className="font-mono-brand text-xs uppercase tracking-[0.14em] text-[#0A0A0A]/55">
          Cookies
        </p>

        <p className="mt-3 font-body text-sm leading-[1.65] text-[#0A0A0A]/70">
          I use Google Ads cookies to see which ads lead to a contact request.
          Nothing is stored until you agree, and the site works either way.
        </p>

        <div className="mt-5 flex flex-wrap gap-2.5">
          <button
            type="button"
            onClick={() => kies('granted')}
            className="rounded-full bg-[#0A0A0A] px-5 py-2.5 font-mono-brand text-xs uppercase tracking-[0.14em] text-white transition-transform hover:-translate-y-0.5"
          >
            Accept
          </button>
          <button
            type="button"
            onClick={() => kies('denied')}
            className="rounded-full border border-[#0A0A0A]/20 px-5 py-2.5 font-mono-brand text-xs uppercase tracking-[0.14em] text-[#0A0A0A] transition-colors hover:border-[#0A0A0A]/45"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  )
}
