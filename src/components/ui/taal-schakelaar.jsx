import { TALEN } from '@/lib/teksten'
import { useTaal } from '@/lib/taal'

/* Twee knoppen in een pil, in dezelfde stijl als de rest van de
   navigatie. aria-pressed vertelt een schermlezer welke taal actief is;
   de groep krijgt een label zodat duidelijk is waar de knoppen over
   gaan.                                                                */

export default function TaalSchakelaar({ variant = 'licht' }) {
  const glas = variant === 'glas'
  const { taal, wissel, t } = useTaal()

  return (
    <div
      role="group"
      aria-label={t('nav.taal')}
      className={`flex items-center gap-0.5 rounded-full border p-1 backdrop-blur-md ${
        glas ? 'border-white/20 bg-white/10' : 'border-black/10 bg-white/70'
      }`}
    >
      {TALEN.map((code) => {
        const actief = code === taal
        return (
          <button
            key={code}
            type="button"
            onClick={() => wissel(code)}
            aria-pressed={actief}
            className={`rounded-full px-2.5 py-1.5 font-mono-brand text-xs uppercase tracking-[0.12em] transition-colors ${
              glas
                ? actief
                  ? 'bg-white text-[#0A0A0A]'
                  : 'text-white/70 hover:text-white'
                : actief
                  ? 'bg-[#0A0A0A] text-white'
                  : 'text-[#0A0A0A]/50 hover:text-[#0A0A0A]'
            }`}
          >
            {code}
          </button>
        )
      })}
    </div>
  )
}
