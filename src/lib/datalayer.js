/* Meldt aan Google Tag Manager dat het formulier verstuurd is.
   ------------------------------------------------------------------
   Bewust een gewone dataLayer-push en geen gtag-conversie meer. De
   Google Ads-tag zit sinds de overstap naar GTM in de container, niet
   meer in de site. Zou hier nog een gtag('event','conversion', ...)
   met send_to-label staan, dan telt de conversie twee keer: één keer
   vanuit de site en één keer vanuit GTM.

   In GTM koppel je hier een trigger aan van het type Custom Event met
   de naam formulier_verstuurd, en daaraan de Google Ads-conversietag.

   De controle op window is er omdat de pagina bij de build geprerenderd
   wordt; daar bestaat geen browser.                                    */

export function meldFormulierVerstuurd() {
  if (typeof window === 'undefined') return

  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ event: 'formulier_verstuurd', value: 1, currency: 'EUR' })
}
