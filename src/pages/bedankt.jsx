import { useEffect, useRef } from 'react'

import { BoomMerk } from '@/components/ui/merk'
import { meldFormulierVerstuurd } from '@/lib/datalayer'
import { useTaal } from '@/lib/taal'

/* Bedankpagina — waar Web3Forms de bezoeker na het versturen heen stuurt.
   Wordt apart geprerenderd naar dist/bedankt.html, met een eigen titel en
   een noindex-meta. Zie scripts/prerender.mjs.                          */

export default function Bedankt() {
  const gemeld = useRef(false)
  const { t } = useTaal()

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
    <main
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#13345f] bg-cover bg-center px-6"
      style={{ backgroundImage: 'linear-gradient(180deg, rgba(8,22,44,0.5) 0%, rgba(8,22,44,0.35) 50%, rgba(8,22,44,0.6) 100%), url(/hero-blauw.webp)' }}
    >
      <div className="relative w-full max-w-xl text-center">
        <p className="flex items-center justify-center gap-2.5 font-hero-sans text-sm text-[#C9D6E4]">
          <BoomMerk className="h-4 w-4 text-[#F4F7FA]" />
          {t('bedankt.label')}
        </p>

        <h1
          className="mt-7 font-hero-serif font-normal leading-[1.06] tracking-[-0.025em] text-[#F4F7FA]"
          style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)' }}
        >
          {t('bedankt.titel')}
        </h1>

        <p className="mx-auto mt-6 max-w-md font-hero-sans text-base leading-[1.65] text-[#C9D6E4] md:text-lg">
          {t('bedankt.tekst')}
        </p>

        <a
          href="/"
          className="mt-10 inline-flex items-center rounded-full bg-[#F4F7FA] px-6 py-3.5 font-hero-sans text-[0.95rem] font-medium text-[#0B1B2E] transition-transform hover:-translate-y-0.5"
        >
          {t('bedankt.terug')}
        </a>
      </div>
    </main>
  )
}
