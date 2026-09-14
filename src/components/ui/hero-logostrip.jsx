import { siClaude, siElevenlabs, siGooglecloud, siGooglegemini, siHubspot, siN8n, siPerplexity } from 'simple-icons'

import { useTaal } from '@/lib/taal'

/* HeroLogostrip
   ------------------------------------------------------------------
   Doorlopende band onderaan de hero-foto, zoals bij Wonka AI: groepjes
   van een label met logo's, gescheiden door een streeplijn. Alles wit,
   zodat de logo's in de foto opgaan in plaats van erbovenop te plakken.

   - Klantlogo's zijn PNG's; een filter maakt ze wit
   - Toollogo's komen uit simple-icons (CC0). OpenAI en Microsoft zijn
     daar sinds v16 uit verwijderd: OpenAI komt uit v15, Microsoft is
     vier vierkantjes en staat hieronder zelf getekend
   - De reeks staat er twee keer in; translateX(-50%) sluit dan naadloos
   - Bij prefers-reduced-motion staat de band stil                     */

const siOpenai = {
  title: 'OpenAI',
  path: 'M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z',
}

const siMicrosoft = {
  title: 'Microsoft',
  path: 'M0 0h11.4v11.4H0zM12.6 0H24v11.4H12.6zM0 12.6h11.4V24H0zM12.6 12.6H24V24H12.6z',
}

const KLANTEN = [
  { naam: 'MediaTales', src: '/logos/klanten/mediatales.png', className: 'h-9' },
  { naam: 'Vinkmans', src: '/logos/klanten/vinkmans.png', className: 'h-[1.05rem]' },
  { naam: 'paddle.be', src: '/logos/klanten/paddle.png', className: 'h-[1.35rem]' },
]

const TOOLS = [siClaude, siOpenai, siGooglegemini, siHubspot, siGooglecloud, siMicrosoft, siElevenlabs, siPerplexity, siN8n]

function Label({ children }) {
  return (
    <span className="whitespace-nowrap font-hero-sans text-[0.7rem] font-medium uppercase tracking-[0.16em] text-white/85">
      {children}
    </span>
  )
}

function Groep({ children }) {
  return (
    <div className="flex shrink-0 items-center gap-10 border-r border-dashed border-white/25 px-10">
      {children}
    </div>
  )
}

function Reeks({ t, verborgen }) {
  return (
    <div className="flex shrink-0 items-center" aria-hidden={verborgen || undefined}>
      <Groep>
        <Label>{t('logos.klanten')}</Label>
        {KLANTEN.map((logo) => (
          <img
            key={logo.naam}
            src={logo.src}
            alt={verborgen ? '' : logo.naam}
            className={`w-auto max-w-none brightness-0 invert ${logo.className}`}
          />
        ))}
      </Groep>

      <Groep>
        <Label>{t('logos.tools')}</Label>
        {TOOLS.map((icoon) => (
          <span key={icoon.title} className="flex items-center gap-2 whitespace-nowrap text-white">
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" role="img" aria-hidden="true">
              <path d={icoon.path} />
            </svg>
            <span className="font-hero-sans text-[0.95rem] font-medium tracking-tight">{icoon.title}</span>
          </span>
        ))}
      </Groep>
    </div>
  )
}

export default function HeroLogostrip() {
  const { t } = useTaal()

  return (
    <div className="hero-op relative border-t border-dashed border-white/25 bg-black/15 backdrop-blur-[2px]">
      <div className="logostrip-masker overflow-hidden">
        <div className="logostrip-band flex w-max py-5 hover:[animation-play-state:paused]">
          <Reeks t={t} />
          <Reeks t={t} verborgen />
        </div>
      </div>
    </div>
  )
}
