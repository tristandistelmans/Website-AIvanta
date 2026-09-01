import { BLAD_DIK, HOEKEN } from '@/lib/flower-shape'

/* IridescentObject — de bloem als opgeblazen glas
   ------------------------------------------------------------------
   In de referentie is dit geen plat silhouet maar zes losse, opgeblazen
   armen die elkaar zichtbaar overlappen. Elke arm heeft een eigen wand,
   eigen lichtaccent en een eigen kleurzweem, en de arm die vooraan ligt
   dekt de arm erachter af.

   Dat wordt hier zo nagebouwd:
   - Elke arm wordt afzonderlijk getekend, in volgorde van achter naar
     voor. Doordat het lichaam dekkend is, dekt elke arm de vorige af en
     ontstaat de overlap vanzelf. (Eerst alle vullingen en dan alle
     randen tekenen levert een spirograaf op: dan zie je ook de randen
     van de delen die eigenlijk verborgen zijn.)
   - De randen komen uit feMorphology: de vorm krimpen en van zichzelf
     aftrekken geeft een band langs de omtrek. Die filters leveren enkel
     een zwart-wit masker, want feMorphology bewerkt ook de kleur-
     kanalen en zou een gekleurde rand egaal maken.
   - Elke arm heeft een eigen kleur uit het spectrum, zoals in de
     referentie waar de ene arm mintgroen is en de andere lila.        */

// Kleur per arm, rondgaand: mint -> cyaan -> blauw -> lila -> roze -> aqua
const ARM_KLEUREN = ['#3FD3AE', '#5ACBE4', '#8FB6F0', '#B79FE8', '#E79ACF', '#6FDBD2']

const BANDEN = [
  { id: 'arm-schaduw', van: 0.8, tot: 7, vervaging: 1.9 },
  { id: 'arm-wand', van: 0, tot: 3.0, vervaging: 0.9 },
  { id: 'arm-licht', van: 2.2, tot: 4.6, vervaging: 0.7 },
  { id: 'arm-lijn', van: 0, tot: 0.7, vervaging: 0.2 },
]

function BandFilter({ id, van, tot, vervaging }) {
  return (
    <filter id={`${id}-f`} x="-30%" y="-30%" width="160%" height="160%">
      {van > 0 ? (
        <feMorphology operator="erode" radius={van} in="SourceGraphic" result="binnen" />
      ) : (
        <feOffset in="SourceGraphic" result="binnen" />
      )}
      <feMorphology operator="erode" radius={tot} in="SourceGraphic" result="dieper" />
      <feComposite in="binnen" in2="dieper" operator="out" />
      <feGaussianBlur stdDeviation={vervaging} />
    </filter>
  )
}

function BandMasker({ id }) {
  return (
    <mask id={id} maskUnits="userSpaceOnUse" x="-10" y="-10" width="120" height="120">
      <g filter={`url(#${id}-f)`}>
        <path d={BLAD_DIK} fill="#FFFFFF" />
      </g>
    </mask>
  )
}

function Arm({ kleur }) {
  return (
    <g>
      {/* dekkend lichaam: dekt de armen erachter af */}
      <path d={BLAD_DIK} fill="url(#arm-kern)" />

      {/* schaduw binnenin geeft de bolling volume */}
      <rect x="-10" y="-10" width="120" height="120" fill="url(#arm-schaduw-verloop)" mask="url(#arm-schaduw)" opacity="0.5" />

      {/* gekleurde wand langs de omtrek van deze arm */}
      <rect x="-10" y="-10" width="120" height="120" fill={kleur} mask="url(#arm-wand)" opacity="0.85" />

      {/* lichtaccent net binnen de wand */}
      <rect x="-10" y="-10" width="120" height="120" fill="#FFFFFF" mask="url(#arm-licht)" opacity="0.9" />

      {/* haarlijn op de omtrek */}
      <rect x="-10" y="-10" width="120" height="120" fill="#FFFFFF" mask="url(#arm-lijn)" opacity="0.95" />
    </g>
  )
}

export default function IridescentObject({ className = '' }) {
  // Van achter naar voor: de laatste arm ligt bovenop.
  const volgorde = [3, 2, 4, 1, 5, 0]

  return (
    <svg viewBox="0 0 100 100" className={`h-full w-full ${className}`} aria-hidden="true">
      <defs>
        <linearGradient id="arm-kern" gradientUnits="userSpaceOnUse" x1="35" y1="0" x2="65" y2="55">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="55%" stopColor="#FAFDFF" />
          <stop offset="100%" stopColor="#EFF5FB" />
        </linearGradient>

        <linearGradient id="arm-schaduw-verloop" gradientUnits="userSpaceOnUse" x1="38" y1="6" x2="66" y2="52">
          <stop offset="0%" stopColor="#5F8AAE" stopOpacity="0" />
          <stop offset="100%" stopColor="#5F8AAE" stopOpacity="0.55" />
        </linearGradient>

        <linearGradient id="hof" gradientUnits="userSpaceOnUse" x1="6" y1="2" x2="94" y2="98">
          <stop offset="0%" stopColor="#4FD8B4" />
          <stop offset="35%" stopColor="#7CC6EC" />
          <stop offset="70%" stopColor="#B8A6EE" />
          <stop offset="100%" stopColor="#F2A9C8" />
        </linearGradient>

        {BANDEN.map((b) => (
          <BandFilter key={b.id} {...b} />
        ))}
        {BANDEN.map((b) => (
          <BandMasker key={b.id} id={b.id} />
        ))}

        <filter id="hof-blur" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="4.5" />
        </filter>
      </defs>

      {/* zachte gloed rondom het geheel */}
      <g filter="url(#hof-blur)" opacity="0.28">
        {HOEKEN.map((hoek) => (
          <path key={hoek} d={BLAD_DIK} transform={`rotate(${hoek} 50 50)`} fill="url(#hof)" />
        ))}
      </g>

      {/* de armen, van achter naar voor */}
      {volgorde.map((i) => (
        <g key={i} transform={`rotate(${HOEKEN[i]} 50 50)`}>
          <Arm kleur={ARM_KLEUREN[i]} />
        </g>
      ))}
    </svg>
  )
}
