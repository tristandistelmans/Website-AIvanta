import { TAKKEN } from '@/lib/merk-vorm'

/* Beeldmerk — de boom
   ------------------------------------------------------------------
   Stam met vier paar takken die naar de punt versmallen. De vorm staat
   in src/lib/merk-vorm.js en wordt gegenereerd door scripts/merk.py,
   zodat de site, de favicon en de losse logobestanden exact dezelfde
   meetkunde gebruiken.

   Het merk is smaller dan hoog. In een vierkant vak (h-6 w-6) laat de
   viewBox de boom vanzelf vrij staan.                                */

export function BoomMerk({ className = '' }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      {TAKKEN.map((tak) => (
        <path key={tak} d={tak} fill="currentColor" />
      ))}
    </svg>
  )
}

export default BoomMerk
