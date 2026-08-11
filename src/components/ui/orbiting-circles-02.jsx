import ParticleSphereAnimation from '@/components/ui/orbiting-circles-02-utils/particalsphear'

/* OrbitingCirclesGlobe
   ------------------------------------------------------------------
   Aangepast t.o.v. de aangeleverde broncode, omdat dit project geen
   TypeScript, geen shadcn en Tailwind v3 (niet v4) gebruikt:

   - .jsx i.p.v. .tsx; `as React.CSSProperties` weggelaten
   - "use client" weg (Next.js-directive, betekenisloos in Vite)
   - v4-spacing omgezet naar arbitrary values: w-110 -> w-[27.5rem],
     w-180 -> w-[45rem], w-220 -> w-[55rem], w-265 -> w-[66.25rem],
     w-75 -> w-[18.75rem], w-145 -> w-[36.25rem], h-160 -> h-[40rem].
     In v3 bestaan die klassen niet en werd alles 0 pixels breed.
   - `border-border` / `bg-background` bestaan hier niet -> charcoal/cream
   - De remote logo's van images.shadcnspace.com vervangen door de
     lokale svg's in /public/logos (zie ICONS hieronder).
   - Randafstand van de iconen meeschakelend met de breakpoint
     (-ml-6 md:-ml-8), zodat ze ook op mobiel gecentreerd staan.      */

const DEFAULT_ORBITS = [
  {
    // Mobiele maten bewust kleiner dan de originele omrekening (27.5/37.5/45rem),
    // anders is de buitenste ring 720px breed op een scherm van 375px en staan
    // de iconen vrijwel altijd half buiten beeld.
    size: 'w-[20rem] h-[20rem] md:w-[45rem] md:h-[45rem]',
    duration: 18,
    icons: [
      { src: '/logos/gmail.svg', alt: 'Gmail', angle: -60 },
      { src: '/logos/salesforce.svg', alt: 'Salesforce', angle: 0 },
      { src: '/logos/whatsapp.svg', alt: 'WhatsApp', angle: 60 },
    ],
  },
  {
    size: 'w-[26rem] h-[26rem] md:w-[55rem] md:h-[55rem]',
    duration: 24,
    icons: [
      { src: '/logos/slack.svg', alt: 'Slack', angle: 0 },
      { src: '/logos/calendly.svg', alt: 'Calendly', angle: -90 },
    ],
  },
  {
    size: 'w-[32rem] h-[32rem] md:w-[66.25rem] md:h-[66.25rem]',
    duration: 30,
    icons: [
      { src: '/logos/linkedin.svg', alt: 'LinkedIn', angle: -60 },
      { src: '/logos/googlecalendar.svg', alt: 'Google Calendar', angle: 0 },
      { src: '/logos/zoom.svg', alt: 'Zoom', angle: 60 },
    ],
  },
]

export default function OrbitingCirclesGlobe({ orbits = DEFAULT_ORBITS }) {
  return (
    <div className="relative flex h-[22rem] w-full justify-center overflow-hidden md:h-[40rem]">
      <style>{`
        @keyframes orbit-cw {
          from { transform: rotate(var(--start-angle)) }
          to   { transform: rotate(calc(var(--start-angle) + 360deg)) }
        }
        @keyframes orbit-ccw {
          from { transform: rotate(var(--start-angle)) }
          to   { transform: rotate(calc(var(--start-angle) - 360deg)) }
        }
        @keyframes counter-cw {
          from { transform: rotate(var(--counter-offset, 0deg)) }
          to   { transform: rotate(calc(var(--counter-offset, 0deg) - 360deg)) }
        }
        @keyframes counter-ccw {
          from { transform: rotate(var(--counter-offset, 0deg)) }
          to   { transform: rotate(calc(var(--counter-offset, 0deg) + 360deg)) }
        }
        @media (prefers-reduced-motion: reduce) {
          .orbit-ring *, .orbit-ring { animation: none !important }
        }
      `}</style>

      {/* Bol met deeltjes in het midden */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 z-10 aspect-square w-[14rem] -translate-x-1/2 translate-y-1/2 md:w-[36.25rem]">
        <ParticleSphereAnimation />
      </div>

      {/* Draaiende ringen */}
      {orbits.map((orbit, index) => {
        const isCW = index % 2 === 0
        const orbitAnim = isCW ? 'orbit-cw' : 'orbit-ccw'
        const counterAnim = isCW ? 'counter-cw' : 'counter-ccw'

        // Elk icoon krijgt een tegenhanger aan de overkant van de ring.
        const allIcons = [
          ...orbit.icons,
          ...orbit.icons.map((ic) => ({
            ...ic,
            angle: ic.angle + 180,
            alt: `${ic.alt}-mirror`,
          })),
        ]

        return (
          <div
            key={index}
            className={`orbit-ring absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rounded-full border border-charcoal/15 ${orbit.size}`}
          >
            {allIcons.map((iconData, iconIndex) => (
              <div
                key={iconIndex}
                className="absolute left-1/2 top-0 -ml-6 flex h-1/2 origin-bottom flex-col items-center justify-start md:-ml-8"
                style={{
                  '--start-angle': `${iconData.angle}deg`,
                  animation: `${orbitAnim} ${orbit.duration}s linear infinite`,
                }}
              >
                {/* Tegenrotatie houdt het icoon rechtop terwijl de ring draait */}
                <div
                  className="relative z-10 -mt-6 rounded-full border border-charcoal/15 bg-cream p-3 md:-mt-8 md:p-4"
                  style={{
                    '--counter-offset': `${-iconData.angle}deg`,
                    animation: `${counterAnim} ${orbit.duration}s linear infinite`,
                  }}
                >
                  <img
                    src={iconData.src}
                    alt={iconData.alt.endsWith('-mirror') ? '' : iconData.alt}
                    aria-hidden={iconData.alt.endsWith('-mirror') || undefined}
                    width={32}
                    height={32}
                    loading="lazy"
                    className="h-6 w-6 md:h-8 md:w-8"
                  />
                </div>
              </div>
            ))}
          </div>
        )
      })}
    </div>
  )
}
