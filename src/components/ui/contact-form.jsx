import { ArrowRight } from 'lucide-react'

import { useTaal } from '@/lib/taal'

/* ContactForm — Web3Forms
   ------------------------------------------------------------------
   Bewust een gewone HTML-POST zonder JavaScript: het formulier werkt
   dan ook als de bundel niet laadt, en er is geen server nodig.
   Web3Forms stuurt de inzending door naar de mailbox en stuurt de
   bezoeker daarna naar de bedankpagina.

   Het veld botcheck is een honeypot. Mensen zien het niet en laten het
   leeg; bots vullen alles in en worden daarop geweigerd.

   Vormgeving: een glazen kaart zoals de voorbeeldschermen bij de use
   cases. De labels zweven: ze staan in het veld zolang dat leeg is en
   schuiven omhoog bij focus of invoer. Dat is pure CSS (peer +
   placeholder-shown), dus ook dat werkt zonder JavaScript.            */

const ACCESS_KEY = '919ad771-f8a4-4eca-9e98-93cd9bbf438c'
const BEDANKT_URL = 'https://ainova.be/bedankt'

// De veldnamen blijven Engels: die komen in de mail terecht en moeten
// niet meewisselen met de taal van de bezoeker.
const VELDEN = [
  { naam: 'name', sleutel: 'formulier.naam', type: 'text', autoComplete: 'name', verplicht: true },
  { naam: 'email', sleutel: 'formulier.email', type: 'email', autoComplete: 'email', verplicht: true },
  { naam: 'phone', sleutel: 'formulier.telefoon', type: 'tel', autoComplete: 'tel', verplicht: true },
  { naam: 'company', sleutel: 'formulier.bedrijf', type: 'text', autoComplete: 'organization', verplicht: false },
]

const veldStijl =
  'peer block w-full rounded-xl bg-white px-4 pb-2 pt-5 font-hero-sans text-[0.95rem] text-[#0A0A0A] ' +
  'placeholder-transparent outline-none ring-1 ring-black/[0.08] transition-shadow duration-200 ' +
  'hover:ring-black/20 focus:ring-2 focus:ring-[#0A0A0A]'

const zweefLabel =
  'pointer-events-none absolute left-4 top-1.5 font-hero-sans text-[0.7rem] font-medium text-[#0A0A0A]/50 transition-all duration-200 ' +
  'peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-[0.95rem] peer-placeholder-shown:font-normal ' +
  'peer-focus:top-1.5 peer-focus:text-[0.7rem] peer-focus:font-medium peer-focus:text-[#0A0A0A]'

export default function ContactForm() {
  const { t } = useTaal()

  return (
    <form
      action="https://api.web3forms.com/submit"
      method="POST"
      className="rounded-[1.5rem] bg-white/[0.9] p-5 shadow-[0_40px_90px_-30px_rgba(0,0,0,0.6)] ring-1 ring-white/70 backdrop-blur-xl sm:p-6"
    >
      <input type="hidden" name="access_key" value={ACCESS_KEY} />
      <input type="hidden" name="redirect" value={BEDANKT_URL} />
      <input type="hidden" name="subject" value="Nieuwe aanvraag via ainova.be" />
      <input type="hidden" name="from_name" value="ainova.be" />

      {/* honeypot: onzichtbaar voor mensen, ingevuld door bots */}
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      {/* breed scherm: alle vier de velden op één rij, zodat het formulier kort blijft */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {VELDEN.map((v) => (
          <div key={v.naam} className="relative">
            <input
              id={v.naam}
              name={v.naam}
              type={v.type}
              autoComplete={v.autoComplete}
              required={v.verplicht}
              placeholder=" "
              className={veldStijl}
            />
            <label htmlFor={v.naam} className={zweefLabel}>
              {t(v.sleutel)}
              {!v.verplicht && <span className="ml-1 font-normal text-[#0A0A0A]/35">· {t('formulier.optioneel')}</span>}
            </label>
          </div>
        ))}
      </div>

      <div className="relative mt-3">
        <textarea id="message" name="message" rows={2} required placeholder=" " className={`${veldStijl} resize-none`} />
        <label htmlFor="message" className={zweefLabel}>
          {t('formulier.bericht')}
        </label>
      </div>

      <button
        type="submit"
        className="group mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-[#0A0A0A] px-6 py-3.5 font-hero-sans text-[0.95rem] font-medium text-white shadow-[0_12px_30px_-12px_rgba(0,0,0,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-14px_rgba(0,0,0,0.7)]"
      >
        {t('formulier.verstuur')}
        <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
      </button>
    </form>
  )
}
