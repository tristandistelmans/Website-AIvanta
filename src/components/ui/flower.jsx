import { BLAD, HOEKEN } from '@/lib/flower-shape'

/* Bloem — het merkteken
   ------------------------------------------------------------------
   Achtpuntige bloem in dezelfde vormtaal als de referentie, opnieuw
   getekend in plaats van overgenomen: een logo is merkeigendom van wie
   het voert. De vorm zelf staat in src/lib/flower-shape.js, zodat het
   grote object in de hero dezelfde bloem gebruikt.                    */

export function FlowerMark({ className = '' }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      {HOEKEN.map((hoek) => (
        <path key={hoek} d={BLAD} fill="currentColor" transform={`rotate(${hoek} 50 50)`} />
      ))}
    </svg>
  )
}

export default FlowerMark
