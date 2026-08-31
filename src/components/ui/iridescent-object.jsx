/* IridescentObject
   ------------------------------------------------------------------
   Het glanzende viertandige object rechts in de hero, opgebouwd uit
   SVG-verlopen in plaats van een afbeelding: schaalt scherp op elk
   scherm, weegt niets, en is eigen werk in plaats van het bestand van
   de referentiesite.

   Opbouw van achter naar voor: een zwaar vervaagde kopie voor de gloed,
   het lichaam met een iriserend verloop, een witte glans linksboven en
   een zachte randlichting.                                            */

const STER =
  'M300 12 C 316 168 432 284 588 300 C 432 316 316 432 300 588 C 284 432 168 316 12 300 C 168 284 284 168 300 12 Z'

export default function IridescentObject({ className = '' }) {
  return (
    <svg
      viewBox="0 0 600 600"
      className={`h-full w-full ${className}`}
      aria-hidden="true"
      role="presentation"
    >
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
          <stop offset="48%" stopColor="#FFFFFF" stopOpacity="0.38" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </radialGradient>

        <radialGradient id="iri-diepte" cx="72%" cy="80%" r="55%">
          <stop offset="0%" stopColor="#3B7FA8" stopOpacity="0.38" />
          <stop offset="100%" stopColor="#3B7FA8" stopOpacity="0" />
        </radialGradient>

        <filter id="iri-blur" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="34" />
        </filter>

        <filter id="iri-zachterand" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.6" />
        </filter>

        <filter id="iri-glansblur" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="9" />
        </filter>

        {/* Houdt de glansvlek binnen het lichaam; anders zweeft hij ernaast. */}
        <clipPath id="iri-binnen">
          <path d={STER} />
        </clipPath>
      </defs>

      {/* gloed achter het object */}
      <path d={STER} fill="url(#iri-gloed)" opacity="0.55" filter="url(#iri-blur)" />

      {/* lichaam */}
      <g filter="url(#iri-zachterand)">
        <path d={STER} fill="url(#iri-lichaam)" />
        <path d={STER} fill="url(#iri-diepte)" />
        <path d={STER} fill="url(#iri-glans)" />
      </g>

      {/* felle glansvlek — geeft het glasgevoel, geklemd binnen de vorm */}
      <g clipPath="url(#iri-binnen)">
        <ellipse
          cx="252"
          cy="236"
          rx="60"
          ry="26"
          fill="#FFFFFF"
          opacity="0.75"
          transform="rotate(-42 252 236)"
          filter="url(#iri-glansblur)"
        />
      </g>

      {/* randlichting */}
      <path
        d={STER}
        fill="none"
        stroke="#FFFFFF"
        strokeOpacity="0.55"
        strokeWidth="1.5"
      />
    </svg>
  )
}
