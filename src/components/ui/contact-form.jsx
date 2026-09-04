import { ArrowUpRight } from 'lucide-react'

/* ContactForm — Web3Forms
   ------------------------------------------------------------------
   Bewust een gewone HTML-POST zonder JavaScript: het formulier werkt
   dan ook als de bundel niet laadt, en er is geen server nodig.
   Web3Forms stuurt de inzending door naar de mailbox en stuurt de
   bezoeker daarna naar de bedankpagina.

   Het veld botcheck is een honeypot. Mensen zien het niet en laten het
   leeg; bots vullen alles in en worden daarop geweigerd.              */

const ACCESS_KEY = '919ad771-f8a4-4eca-9e98-93cd9bbf438c'
const BEDANKT_URL = 'https://ainova.be/bedankt'

const VELDEN = [
  { naam: 'name', label: 'Name', type: 'text', autoComplete: 'name', verplicht: true },
  { naam: 'email', label: 'Email', type: 'email', autoComplete: 'email', verplicht: true },
  { naam: 'phone', label: 'Phone', type: 'tel', autoComplete: 'tel', verplicht: true },
  { naam: 'company', label: 'Company', type: 'text', autoComplete: 'organization', verplicht: false },
]

const invoerStijl =
  'w-full rounded-xl border border-black/10 bg-white px-4 py-3 font-body text-[#0A0A0A] ' +
  'placeholder-[#0A0A0A]/30 outline-none transition-colors focus:border-[#0A0A0A]/40'

export default function ContactForm() {
  return (
    <form
      action="https://api.web3forms.com/submit"
      method="POST"
      className="flex flex-col gap-5"
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

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {VELDEN.map((v) => (
          <div key={v.naam} className={v.naam === 'company' ? 'sm:col-span-1' : ''}>
            <label
              htmlFor={v.naam}
              className="mb-2 block font-mono-brand text-xs uppercase tracking-[0.14em] text-[#0A0A0A]/55"
            >
              {v.label}
              {!v.verplicht && <span className="ml-1.5 normal-case tracking-normal text-[#0A0A0A]/35">optional</span>}
            </label>
            <input
              id={v.naam}
              name={v.naam}
              type={v.type}
              autoComplete={v.autoComplete}
              required={v.verplicht}
              className={invoerStijl}
            />
          </div>
        ))}
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block font-mono-brand text-xs uppercase tracking-[0.14em] text-[#0A0A0A]/55"
        >
          How can I help you?
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className={`${invoerStijl} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="group mt-1 inline-flex w-fit items-center gap-2 rounded-full bg-[#0A0A0A] px-6 py-3.5 font-mono-brand text-xs uppercase tracking-[0.14em] text-white transition-transform hover:-translate-y-0.5"
      >
        Send
        <span className="relative flex h-4 w-4 items-center justify-center overflow-hidden">
          <ArrowUpRight
            size={16}
            className="absolute transition-transform duration-500 group-hover:-translate-y-5 group-hover:translate-x-4"
          />
          <ArrowUpRight
            size={16}
            className="absolute -translate-x-4 translate-y-5 transition-transform duration-500 group-hover:translate-x-0 group-hover:translate-y-0"
          />
        </span>
      </button>
    </form>
  )
}
