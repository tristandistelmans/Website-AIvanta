/* Alle zichtbare teksten, per taal.
   ------------------------------------------------------------------
   Nederlands is de standaard: de build prerendert het Nederlands, dus
   dat is wat zoekmachines en bezoekers zonder JavaScript te zien
   krijgen. Engels is een keuze die de bezoeker zelf maakt.

   Nederlandse teksten staan in de u-vorm, zoals de rest van het merk. */

export const TALEN = ['nl', 'en']
export const STANDAARDTAAL = 'nl'

export const TEKSTEN = {
  nl: {
    nav: { cta: 'Neem contact op', taal: 'Taal' },
    hero: {
      label: 'AI-groeisystemen voor B2B',
      titelA: 'Uw AI-groeipartner',
      titelB: 'voor B2B-bedrijven',
      sub: 'AI-systemen die leads genereren, deals sluiten en de dagelijkse werking opschalen.',
      start: 'Begin nu',
      contact: 'Contact',
    },
    komt: {
      label: 'Binnenkort',
      titel: 'De volledige site is onderweg',
      mail: 'Mail mij',
      linkedin: 'LinkedIn',
    },
    contact: {
      label: 'Contact',
      titel: 'Vertel me wat er beter moet lopen',
    },
    formulier: {
      naam: 'Naam',
      email: 'E-mail',
      telefoon: 'Telefoon',
      bedrijf: 'Bedrijf',
      optioneel: 'optioneel',
      bericht: 'Waar kan ik u mee helpen?',
      verstuur: 'Verstuur',
    },
    footer: { contact: 'Contact', cookies: 'Cookies' },
    bedankt: {
      label: 'Bericht ontvangen',
      titel: 'Bedankt voor uw bericht',
      tekst: 'Ik lees elk bericht zelf en neem binnen 24 uur contact met u op.',
      terug: 'Terug naar de homepage',
    },
    cookies: {
      label: 'Cookies',
      tekst:
        'Ik gebruik cookies van Google Ads om te zien welke advertenties tot een aanvraag leiden. Er wordt niets bewaard tot u akkoord gaat, en de site werkt hoe dan ook.',
      accepteer: 'Accepteren',
      weiger: 'Weigeren',
    },
  },

  en: {
    nav: { cta: 'Get in touch', taal: 'Language' },
    hero: {
      label: 'AI growth systems for B2B',
      titelA: 'Your AI growth partner',
      titelB: 'for B2B companies',
      sub: 'AI systems that generate leads, close deals and scale operations.',
      start: 'Start now',
      contact: 'Contact',
    },
    komt: {
      label: 'Coming soon',
      titel: 'The full site is on its way',
      mail: 'Email me',
      linkedin: 'LinkedIn',
    },
    contact: {
      label: 'Contact',
      titel: 'Tell me what you are trying to fix',
    },
    formulier: {
      naam: 'Name',
      email: 'Email',
      telefoon: 'Phone',
      bedrijf: 'Company',
      optioneel: 'optional',
      bericht: 'How can I help you?',
      verstuur: 'Send',
    },
    footer: { contact: 'Contact', cookies: 'Cookies' },
    bedankt: {
      label: 'Message received',
      titel: 'Thanks for reaching out',
      tekst: 'I read every message myself and will get back to you within 24 hours.',
      terug: 'Back to homepage',
    },
    cookies: {
      label: 'Cookies',
      tekst:
        'I use Google Ads cookies to see which ads lead to a contact request. Nothing is stored until you agree, and the site works either way.',
      accepteer: 'Accept',
      weiger: 'Decline',
    },
  },
}
