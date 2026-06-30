/* Integraties — scrollende logo-rijen van HR/recruitment-tools.
   Aangepast van de aangeleverde integration-hero: JSX i.p.v. TSX,
   merk-styling, lokale logo's in /public/logos, en de scroll-keyframes
   staan in index.css (geen Next.js styled-jsx). */

const LOGOS_ROW1 = [
  { src: '/logos/linkedin.svg', name: 'LinkedIn' },
  { src: '/logos/bullhorn.svg', name: 'Bullhorn' },
  { src: '/logos/indeed.svg', name: 'Indeed' },
  { src: '/logos/salesforce.svg', name: 'Salesforce' },
  { src: '/logos/workday.svg', name: 'Workday' },
  { src: '/logos/gmail.svg', name: 'Gmail' },
]

const LOGOS_ROW2 = [
  { src: '/logos/whatsapp.svg', name: 'WhatsApp' },
  { src: '/logos/slack.svg', name: 'Slack' },
  { src: '/logos/googlecalendar.svg', name: 'Google Calendar' },
  { src: '/logos/zoom.svg', name: 'Zoom' },
  { src: '/logos/calendly.svg', name: 'Calendly' },
]

// Even aantal kopieën => twee identieke helften => translateX(-50%) loopt naadloos
const repeat = (arr, n = 6) => Array.from({ length: n }).flatMap(() => arr)

function LogoRow({ items, direction = 'left' }) {
  const track = repeat(items, 6)
  return (
    <div
      className="flex w-max gap-6 md:gap-10"
      style={{ animation: `${direction === 'left' ? 'scroll-left' : 'scroll-right'} 45s linear infinite` }}
    >
      {track.map((logo, i) => (
        <div
          key={i}
          title={logo.name}
          className="flex h-16 w-16 md:h-20 md:w-20 flex-shrink-0 items-center justify-center rounded-full bg-white shadow-md ring-1 ring-moss/10"
        >
          <img
            src={logo.src}
            alt={logo.name}
            loading="lazy"
            className="h-9 w-9 md:h-11 md:w-11 object-contain"
          />
        </div>
      ))}
    </div>
  )
}

export default function IntegrationLogos() {
  return (
    <section id="integraties" className="relative overflow-hidden bg-cream py-24 md:py-28">
      {/* subtiel puntenraster */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(46,64,54,0.05)_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-12">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-moss/20 bg-cream/60 px-3 py-1.5 font-mono-brand text-xs uppercase tracking-widest text-moss/70">
            <span className="h-1.5 w-1.5 rounded-full bg-clay pulse-dot" />
            Integraties
          </span>
          <h2 className="font-heading text-3xl font-bold leading-tight tracking-tight text-charcoal md:text-5xl">
            Werkt met de tools die u{' '}
            <span className="font-drama italic text-clay">al gebruikt</span>.
          </h2>
          <p className="mt-5 font-body text-base leading-relaxed text-charcoal/50 md:text-lg">
            Van Bullhorn en LinkedIn tot WhatsApp en e-mail — de AI sluit naadloos aan op
            de tools die uw recruiters elke dag gebruiken.
          </p>
        </div>

        <div className="relative space-y-6">
          <LogoRow items={LOGOS_ROW1} direction="left" />
          <LogoRow items={LOGOS_ROW2} direction="right" />

          {/* cream-fade aan de randen */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-cream to-transparent md:w-32" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-cream to-transparent md:w-32" />
        </div>
      </div>
    </section>
  )
}
