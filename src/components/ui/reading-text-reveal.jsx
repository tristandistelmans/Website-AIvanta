import { useEffect, useRef, useState } from 'react'

import { useTaal } from '@/lib/taal'

/* ReadingTextReveal
   ------------------------------------------------------------------
   Aangepast t.o.v. de aangeleverde broncode, omdat dit project geen
   TypeScript, geen shadcn en geen Next.js gebruikt:

   - .tsx -> .jsx, "use client" weg
   - De tekst komt uit teksten.js (NL/EN): `sleutel` wijst naar een blok
     met een lijst zinnen
   - Zelfde serif als de hero (Newsreader) i.p.v. Inter semibold
   - Geen 400vh minimumhoogte, lege schermhoogte en "The End"
   - Zonder JavaScript (en bij prefers-reduced-motion) staat alle tekst
     meteen volledig in beeld

   Twee vormen:
   - standaard: de woorden kleuren in terwijl elke regel het leesniveau
     (62% van de schermhoogte) passeert; de sectie is zo hoog als de tekst
   - `vast`: de tekst blijft midden in beeld staan terwijl u scrolt, en
     kleurt in over de extra hoogte van de sectie (`scrollHoogte`)  */

function ontleed(zinnen) {
  let index = 0
  return zinnen.map((zin) => zin.split(' ').map((woord) => ({ woord, index: index++ })))
}

export default function ReadingTextReveal({ sleutel = 'visie', vast = false, scrollHoogte = '220vh' }) {
  const sectieRef = useRef(null)
  const tekstRef = useRef(null)
  const { t } = useTaal()
  const [onthuld, setOnthuld] = useState(0)

  const regels = ontleed(t(`${sleutel}.zinnen`))
  const totaal = regels.reduce((som, regel) => som + regel.length, 0)

  useEffect(() => {
    const rustig = window.matchMedia('(prefers-reduced-motion: reduce)')
    let rafId = null
    let doel = 0
    let huidig = 0

    const stap = () => {
      huidig += (doel - huidig) * 0.12
      if (Math.abs(doel - huidig) > 0.001) {
        setOnthuld(Math.round(huidig * totaal))
        rafId = requestAnimationFrame(stap)
      } else {
        huidig = doel
        setOnthuld(Math.round(doel * totaal))
        rafId = null
      }
    }

    const opScroll = () => {
      const vh = window.innerHeight

      if (rustig.matches) {
        doel = 1
        huidig = 1
      } else if (vast) {
        // Van het moment dat de sectie bovenaan het scherm raakt tot de
        // tekst weer loskomt; de laatste 15% staat alles volledig.
        const rect = sectieRef.current.getBoundingClientRect()
        const afstand = rect.height - vh
        doel = Math.max(0, Math.min(1, -rect.top / (afstand * 0.85)))
      } else {
        const rect = tekstRef.current.getBoundingClientRect()
        const ooghoogte = vh * 0.62
        doel = Math.max(0, Math.min(1, (ooghoogte - rect.top) / rect.height))
      }

      if (rafId) cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(stap)
    }

    window.addEventListener('scroll', opScroll, { passive: true })
    window.addEventListener('resize', opScroll)
    opScroll()

    return () => {
      window.removeEventListener('scroll', opScroll)
      window.removeEventListener('resize', opScroll)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [totaal, vast])

  const tekst = (
    <div ref={tekstRef} className={vast ? '' : 'space-y-10 md:space-y-14'}>
      {regels.map((regel, regelIndex) => (
        <p
          key={regelIndex}
          className={`font-hero-serif tracking-[-0.02em] ${vast ? 'leading-[1.04]' : 'leading-[1.12]'}`}
          style={{ fontSize: vast ? 'clamp(2.4rem, 6.4vw, 5.5rem)' : 'clamp(1.9rem, 4.4vw, 3.6rem)' }}
        >
          {regel.map(({ woord, index }) => (
            <span
              key={index}
              className={`transition-colors duration-300 ease-out ${
                index < onthuld ? 'text-[#0A0A0A]' : 'text-[#0A0A0A] [.js_&]:text-[#0A0A0A]/[0.16]'
              }`}
            >
              {woord}{' '}
            </span>
          ))}
        </p>
      ))}
    </div>
  )

  if (vast) {
    return (
      <section ref={sectieRef} id={sleutel} className="relative bg-white px-6 md:px-10" style={{ height: scrollHoogte }}>
        <div className="sticky top-0 flex h-[100svh] items-center">
          <div className="mx-auto w-full max-w-6xl">
            {tekst}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section ref={sectieRef} id={sleutel} className="bg-white px-6 md:px-10">
      <div className="mx-auto max-w-5xl pb-28 pt-24 md:pb-40 md:pt-32">
        {tekst}
      </div>
    </section>
  )
}
