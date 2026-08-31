import { BLAD, HOEKEN } from '@/lib/flower-shape'

/* IridescentObject
   ------------------------------------------------------------------
   Dezelfde bloem als het merkteken, maar groot en in glanzend glas:
   een vervaagde kopie voor de gloed, het lichaam met een iriserend
   verloop, een glansvlek en randlichting.

   Opgebouwd uit SVG-verlopen in plaats van een afbeelding, dus scherp
   op elk scherm en zonder laadtijd.                                   */

export default function IridescentObject({ className = '' }) {
  const bladeren = (props) =>
    HOEKEN.map((hoek) => (
      <path key={hoek} d={BLAD} transform={`rotate(${hoek} 50 50)`} {...props} />
    ))

  return (
    <svg viewBox="0 0 100 100" className={`h-full w-full ${className}`} aria-hidden="true">
      <defs>
        <linearGradient id="iri-lichaam" x1="8%" y1="4%" x2="92%" y2="96%">
          <stop offset="0%" stopColor="#A8F0DC" />
          <stop offset="24%" stopColor="#5FD8EE" />
          <stop offset="48%" stopColor="#8FB6F7" />
          <stop offset="72%" stopColor="#C4A6F0" />
          <stop offset="100%" stopColor="#F0A9D4" />
        </linearGradient>

        <linearGradient id="iri-gloed" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8FE9D6" />
          <stop offset="50%" stopColor="#8FC7F5" />
          <stop offset="100%" stopColor="#E7A9E0" />
        </linearGradient>

        <radialGradient id="iri-glans" cx="34%" cy="26%" r="46%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.92" />
          <stop offset="48%" stopColor="#FFFFFF" stopOpacity="0.34" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </radialGradient>

        <radialGradient id="iri-diepte" cx="72%" cy="80%" r="55%">
          <stop offset="0%" stopColor="#3B7FA8" stopOpacity="0.34" />
          <stop offset="100%" stopColor="#3B7FA8" stopOpacity="0" />
        </radialGradient>

        <filter id="iri-blur" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="6" />
        </filter>

        <filter id="iri-zachterand" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="0.3" />
        </filter>

        <filter id="iri-glansblur" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="2.2" />
        </filter>

        {/* Houdt de glansvlek binnen de bloem. */}
        <clipPath id="iri-binnen">
          {HOEKEN.map((hoek) => (
            <path key={hoek} d={BLAD} transform={`rotate(${hoek} 50 50)`} />
          ))}
        </clipPath>
      </defs>

      {/* gloed erachter */}
      <g opacity="0.5" filter="url(#iri-blur)">{bladeren({ fill: 'url(#iri-gloed)' })}</g>

      {/* lichaam met diepte en glans */}
      <g filter="url(#iri-zachterand)">
        {bladeren({ fill: 'url(#iri-lichaam)' })}
        {bladeren({ fill: 'url(#iri-diepte)' })}
        {bladeren({ fill: 'url(#iri-glans)' })}
      </g>

      {/* felle glansvlek, geklemd binnen de vorm */}
      <g clipPath="url(#iri-binnen)">
        <ellipse
          cx="36"
          cy="30"
          rx="15"
          ry="7"
          fill="#FFFFFF"
          opacity="0.8"
          transform="rotate(-42 36 30)"
          filter="url(#iri-glansblur)"
        />
      </g>

      {/* randlichting */}
      {bladeren({ fill: 'none', stroke: '#FFFFFF', strokeOpacity: 0.5, strokeWidth: 0.35 })}
    </svg>
  )
}
