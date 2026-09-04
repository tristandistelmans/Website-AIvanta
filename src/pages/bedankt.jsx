import { useEffect, useRef } from 'react'

import { FlowerMark } from '@/components/ui/flower'
import { meldFormulierVerstuurd } from '@/lib/datalayer'

/* Bedankpagina — waar Web3Forms de bezoeker na het versturen heen stuurt.
   Wordt apart geprerenderd naar dist/bedankt.html, met een eigen titel en
   een noindex-meta. Zie scripts/prerender.mjs.                          */

export default function Bedankt() {
  const gemeld = useRef(false)

  /* De melding hoort hier en nergens anders: wie deze pagina ziet, heeft
     het formulier daadwerkelijk verstuurd. Een klik op een e-mailadres
     telt niet mee — die zegt niet dat er iets verzonden is.

     De ref voorkomt dubbel melden wanneer React het component in
     ontwikkelmodus twee keer koppelt. */
  useEffect(() => {
    if (gemeld.current) return
    gemeld.current = true
    meldFormulierVerstuurd()
  }, [])

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white px-6">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 12% 88%, rgba(206,190,247,0.38) 0%, rgba(206,190,247,0) 100%),' +
            'radial-gradient(ellipse 80% 75% at 92% 20%, rgba(178,238,238,0.45) 0%, rgba(178,238,238,0) 100%)',
        }}
      />

      <div className="relative w-full max-w-xl text-center">
        <p className="flex items-center justify-center gap-2.5 font-mono-brand text-xs uppercase tracking-[0.18em] text-[#0A0A0A]/70">
          <FlowerMark className="h-3.5 w-3.5 text-[#0A0A0A]" />
          Message received
        </p>

        <h1
          className="mt-7 font-body font-normal leading-[1.08] tracking-[-0.02em] text-[#0A0A0A]"
          style={{ fontSize: 'clamp(2rem, 4.6vw, 3rem)' }}
        >
          Thanks for reaching out
        </h1>

        <p className="mx-auto mt-6 max-w-md font-body text-base leading-[1.7] text-[#0A0A0A]/55 md:text-lg">
          I read every message myself and will get back to you within 24 hours.
        </p>

        <a
          href="/"
          className="mt-10 inline-flex items-center rounded-full border border-[#0A0A0A]/20 bg-white/60 px-6 py-3.5 font-mono-brand text-xs uppercase tracking-[0.14em] text-[#0A0A0A] backdrop-blur-sm transition-colors hover:border-[#0A0A0A]/45"
        >
          Back to homepage
        </a>
      </div>
    </main>
  )
}
