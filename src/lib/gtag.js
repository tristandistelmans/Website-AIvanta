/* Google Ads — conversie melden
   ------------------------------------------------------------------
   Het fragment uit Google Ads heet 'Leadformulier indienen', maar deze
   site heeft geen formulier: bezoekers nemen contact op via het
   e-mailadres of het telefoonnummer. Die klik is dus het moment waarop
   een lead ontstaat, en daar wordt deze functie aangeroepen.

   Belangrijk: dit hoort NIET bij het laden van de pagina te draaien.
   Gebeurt dat wel, dan telt iedere bezoeker als lead en stuurt Google
   Ads bij op cijfers die niets betekenen.

   De controle op window en gtag is er omdat de pagina bij de build
   geprerenderd wordt; daar bestaat geen browser.                      */

const CONVERSIE_ID = 'AW-18418462659/s7OgCMnDzuocEMPfzc5E'

export function meldConversie(bron) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return

  window.gtag('event', 'conversion', {
    send_to: CONVERSIE_ID,
    value: 1.0,
    currency: 'EUR',
    // Niet vereist door Google, maar handig om in de rapportage te zien
    // waar de conversie vandaan komt.
    event_source: bron,
  })
}
