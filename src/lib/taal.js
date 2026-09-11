import { useCallback, useSyncExternalStore } from 'react'

import { STANDAARDTAAL, TALEN, TEKSTEN } from './teksten'

/* Taalkeuze
   ------------------------------------------------------------------
   De keuze leeft in localStorage, dus buiten React, en die bestaat niet
   tijdens het prerenderen. useSyncExternalStore is daar precies voor
   gemaakt: de servermomentopname geeft de standaardtaal, zodat de HTML
   uit de build overeenkomt met wat de browser bij hydratie verwacht, en
   React schakelt daarna vanzelf om naar de bewaarde keuze.

   Dat is bewust geen useState met een effect: dan zou de tweede weergave
   uit een setState in een effect komen, wat een extra renderronde kost
   en door de lintregels terecht wordt afgekeurd.                       */

const SLEUTEL = 'ainova-taal'

const luisteraars = new Set()
let huidige = null

function abonneer(fn) {
  luisteraars.add(fn)
  return () => luisteraars.delete(fn)
}

function momentopname() {
  if (huidige) return huidige
  let bewaard = null
  try {
    bewaard = localStorage.getItem(SLEUTEL)
  } catch {
    // Opslag geblokkeerd: dan blijft het bij de standaardtaal.
  }
  huidige = TALEN.includes(bewaard) ? bewaard : STANDAARDTAAL
  return huidige
}

const serverMomentopname = () => STANDAARDTAAL

function zoek(woordenboek, pad) {
  return pad
    .split('.')
    .reduce((niveau, sleutel) => (niveau == null ? undefined : niveau[sleutel]), woordenboek)
}

export function useTaal() {
  const taal = useSyncExternalStore(abonneer, momentopname, serverMomentopname)

  const wissel = useCallback((nieuw) => {
    if (!TALEN.includes(nieuw) || nieuw === huidige) return
    huidige = nieuw
    try {
      localStorage.setItem(SLEUTEL, nieuw)
    } catch {
      // Privemodus: de keuze geldt dan alleen dit bezoek.
    }
    luisteraars.forEach((fn) => fn())
  }, [])

  const t = useCallback(
    (pad) => zoek(TEKSTEN[taal], pad) ?? zoek(TEKSTEN[STANDAARDTAAL], pad) ?? pad,
    [taal]
  )

  return { taal, wissel, t }
}
