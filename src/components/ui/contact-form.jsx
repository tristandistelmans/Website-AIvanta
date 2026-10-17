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

   Vormgeving: een witte glazen kaart op het blauwe contactvlak, velden
   en knop in de kleuren van de site. De labels zweven: ze staan in het veld zolang dat leeg is en
   schuiven omhoog bij focus of invoer. Dat is pure CSS (peer +
   placeholder-shown), dus ook dat werkt zonder JavaScript.            */

const ACCESS_KEY = '919ad771-f8a4-4eca-9e98-93cd9bbf438c'
const BEDANKT_URL = 'https://ainova.be/bedankt'

// De veldnamen blijven Engels: die komen in de mail terecht en moeten
// niet meewisselen met de taal van de bezoeker.
const VELDEN = [
  { naam: 'name', sleutel: 'formulier.naam', type: 'text', autoComplete: 'name', verplicht: true },
  { naam: 'email', sleutel: 'formulier.email', type: 'email', autoComplete: 'email', verplicht: true },
  { naam: 'company', sleutel: 'formulier.bedrijf', type: 'text', autoComplete: 'organization', verplicht: false },
  { naam: 'phone', sleutel: 'formulier.telefoon', type: 'tel', autoComplete: 'tel', verplicht: false },
]

const veldStijl =
  'peer block w-full rounded-xl bg-[#F7F9FB] px-4 pb-2.5 pt-6 font-hero-sans text-base text-[#0B1B2E] ' +
  'placeholder-transparent outline-none ring-1 ring-[#E2E8EF] transition-shadow duration-200 ' +
  'hover:ring-[#C9D4E0] focus:bg-white focus:ring-2 focus:ring-[#1F5A94]'

const zweefLabel =
  'pointer-events-none absolute left-4 top-2 font-hero-sans text-[0.72rem] font-medium text-[#2F3D50]/70 transition-all duration-200 ' +
  'peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:font-normal ' +
  'peer-focus:top-2 peer-focus:text-[0.72rem] peer-focus:font-medium peer-focus:text-[#1F5A94]'

export default function ContactForm() {
  const { t } = useTaal()

  return (
    <form
      action="https://api.web3forms.com/submit"
      method="POST"
      className="rounded-[1.5rem] bg-white/[0.94] p-5 text-left shadow-[0_40px_90px_-30px_rgba(8,22,44,0.7)] ring-1 ring-white/60 backdrop-blur-xl sm:p-7 md:p-8"
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

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
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
              {!v.verplicht && <span className="ml-1 font-normal text-[#2F3D50]/45">· {t('formulier.optioneel')}</span>}
            </label>
          </div>
        ))}
      </div>

      <div className="relative mt-3">
        <textarea id="message" name="message" rows={4} required placeholder=" " className={`${veldStijl} resize-none`} />
        <label htmlFor="message" className={zweefLabel}>
          {t('formulier.bericht')}
        </label>
      </div>

      <button
        type="submit"
        className="group mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-[#0B1B2E] px-6 py-4 font-hero-sans text-[0.95rem] font-medium text-[#F4F7FA] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#13345f]"
      >
        {t('formulier.verstuur')}
        <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
      </button>
    </form>
  )
}
