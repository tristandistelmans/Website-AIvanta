/* Alle zichtbare teksten, per taal.
   ------------------------------------------------------------------
   Nederlands is de standaard: de build prerendert het Nederlands, dus
   dat is wat zoekmachines en bezoekers zonder JavaScript te zien
   krijgen. Engels is een keuze die de bezoeker zelf maakt.

   Toon: Ainova spreekt als "wij" en de bezoeker als "je". Kort en
   neutraal, één kop en één zin per blok. Geen prijzen of garanties op
   de site: die komen in het gesprek.

   Use cases: per afdeling een voorbeeldscherm (`demo.type` wijst naar
   een component in use-cases.jsx) en drie concrete toepassingen.      */

export const TALEN = ['nl', 'en']
export const STANDAARDTAAL = 'nl'

export const TEKSTEN = {
  nl: {
    nav: { cta: 'Contact', taal: 'Taal' },
    hero: {
      titelA: 'Jouw AI-partner die effectief',
      titelB: 'oplevert voor je bedrijf.',
      sub: 'Bij Ainova ondersteunen we Vlaamse kmo’s met hun AI-transformatie door het identificeren, implementeren en optimaliseren van AI-systemen die meetbare groei opleveren.',
      start: 'Neem vrijblijvend contact op',
    },
    logos: { klanten: 'Gewerkt voor', tools: 'Wij bouwen met' },
    probleem: {
      label: 'Het probleem',
      titel: 'Waarom het vaak misloopt.',
      vorige: 'Vorige',
      volgende: 'Volgende',
      punten: [
        { titel: 'Geen diagnose vooraf' },
        { titel: 'Beginnen bij de technologie' },
        { titel: 'Niet weten waar te beginnen' },
        { titel: 'Medewerkers gebruiken het niet' },
        { titel: 'Slechte data' },
        { titel: 'Geen AI-beleid' },
      ],
    },
    aanpak: {
      label: 'Onze aanpak',
      titel: 'Hoe wij het aanpakken.',
      intro: 'We zoeken de taken waar AI het meest oplevert, bouwen de oplossing en zorgen dat je team ermee werkt.',
      stappen: [
        {
          titel: 'Strategie: AI-audit',
          tekst: 'We brengen in kaart waar AI tijd en geld oplevert, en wat je beter laat zoals het is.',
        },
        {
          titel: 'Adoptie',
          tekst: 'We betrekken je team van bij het begin en leren het ermee werken.',
        },
        {
          titel: 'Implementatie',
          tekst: 'We bouwen en koppelen de oplossing in de tools die je team al gebruikt.',
        },
        {
          titel: 'Optimalisatie',
          tekst: 'We volgen op hoe je team het gebruikt en breiden uit wat werkt.',
        },
      ],
    },
    usecases: {
      label: 'Use cases',
      titel: 'AI in elke afdeling.',
      cta: 'Bespreek je use case',
      voorbeeld: 'Voorbeeld',
      categorieen: [
        {
          naam: 'Sales',
          titel: 'Sneller van aanvraag naar offerte.',
          punten: [
            'Offertes opgesteld op basis van je eigen prijzen',
            'Elke aanvraag binnen enkele minuten beantwoord',
            'Automatische opvolging van openstaande offertes',
          ],
          demo: {
            type: 'offerte',
            kop: 'Offerte OF-2026-118',
            klant: 'Bouwbedrijf Vermeulen',
            lijnen: [['Circulatiepomp CP-40 · 3 stuks', '€ 2.940'], ['Leidingwerk en montage', '€ 1.280'], ['Transport', '€ 95']],
            totaal: ['Totaal excl. btw', '€ 4.315'],
            status: 'Klaar om na te kijken',
          },
        },
        {
          naam: 'Marketing',
          titel: 'Meer bereik met hetzelfde team.',
          punten: [
            'Doelgroepen en prospectlijsten opbouwen',
            'Nieuwsbrieven en posts in jullie eigen toon',
            'Campagnes opvolgen en rapporteren',
          ],
          demo: {
            type: 'leads',
            kop: 'Doelgroep · deze week',
            filter: 'Vlaanderen · 15–50 medewerkers',
            rijen: [
              ['Mercator Groothandel', 'Groothandel · Hasselt', 94],
              ['Bouwbedrijf Vermeulen', 'Bouw · Genk', 89],
              ['Garage Peeters', 'Automotive · Lommel', 85],
              ['Bakkerij Claes', 'Voeding · Beringen', 81],
            ],
          },
        },
        {
          naam: 'Human resources',
          titel: 'Minder administratie rond je mensen.',
          punten: [
            'Snelle antwoorden op vragen over verlof en loon',
            'Vacatureteksten en onboarding voorbereid',
            'Documenten en attesten sneller verwerkt',
          ],
          demo: {
            type: 'agent',
            naam: 'HR-assistent',
            vraag: 'Hoeveel verlofdagen heb ik nog dit jaar?',
            antwoord: 'Je hebt nog 7 verlofdagen voor 2026. Zal ik een aanvraag voor 24 december klaarzetten?',
            bronnen: ['Sociaal secretariaat', 'Planning'],
            bron: 'Bronnen',
          },
        },
        {
          naam: 'Operations',
          titel: 'Bestellingen zonder overtypen.',
          punten: [
            'Bestelbonnen uit mail en pdf automatisch ingelezen',
            'Orders gecontroleerd tegen je ERP',
            'Planning en levertijden altijd actueel',
          ],
          demo: {
            type: 'orders',
            bestand: 'Bestelbon_20931.pdf',
            ontvangen: 'Ontvangen via e-mail',
            velden: [
              ['Klant', 'Mercator Groothandel'],
              ['Artikel', 'Verzenddozen 40×30 cm'],
              ['Aantal', '1.200 stuks'],
              ['Levering', '18 september'],
            ],
            status: 'Klaar voor je ERP',
            controle: '4 van 4 velden gecontroleerd',
          },
        },
        {
          naam: 'Customer support',
          titel: 'Elke klantvraag bij de juiste persoon.',
          punten: [
            'Mails gesorteerd en doorgestuurd',
            'Antwoordvoorstellen voor terugkerende vragen',
            'Order- en leverinfo meteen opgezocht',
          ],
          demo: {
            type: 'inbox',
            kop: 'Inbox · vandaag',
            mails: [
              ['Offerteaanvraag voor 12 pompen', 'Sales'],
              ['Vraag over factuur 2026-311', 'Finance'],
              ['Vandaag nog leveren?', 'Logistiek'],
            ],
            klaar: 'Antwoord voorbereid',
          },
        },
        {
          naam: 'Finance',
          titel: 'Grip op facturen en cashflow.',
          punten: [
            'Aankoopfacturen ingelezen en klaargezet voor de boekhouding',
            'Herinneringen voor openstaande facturen',
            'Een wekelijks overzicht in gewone taal',
          ],
          demo: {
            type: 'dashboard',
            kop: 'Ontvangen betalingen · 8 weken',
            kpis: [['Openstaand', '€ 48,2k'], ['Vervallen', '€ 6,1k'], ['Betaaltermijn', '38 d']],
            inzicht: '4 facturen staan langer dan 30 dagen open. Herinneringen klaar om te versturen.',
          },
        },
      ],
    },
    overmij: {
      label: 'Over Ainova',
      titel: 'Persoonlijk aanspreekpunt, technisch sterk team.',
      alineas: [
        'Ainova is opgericht door Tristan Distelmans, met een achtergrond in arbeids- en organisatiepsychologie. Samen met technische specialisten bouwen we AI-oplossingen voor Vlaamse kmo’s.',
        'Ons kantoor is gevestigd in de Corda Incubator in Hasselt.',
      ],
      bijschrift: 'Tristan Distelmans, oprichter',
    },
    contact: {
      titel: 'Benieuwd wat AI voor jullie kan doen?',
      sub: 'Neem vrijblijvend contact op. Stuur ons een mail of een bericht op LinkedIn, we antwoorden binnen een werkdag.',
      mail: 'Mail ons',
      linkedin: 'Via LinkedIn',
    },
    formulier: {
      naam: 'Naam',
      email: 'E-mail',
      telefoon: 'Telefoon',
      bedrijf: 'Bedrijf',
      optioneel: 'optioneel',
      bericht: 'Waar kunnen we je mee helpen?',
      verstuur: 'Verstuur',
    },
    footer: { contact: 'Contact', rol: 'Oprichter van Ainova', volgen: 'Volg ons op LinkedIn' },
    bedankt: {
      label: 'Bericht ontvangen',
      titel: 'Bedankt voor je bericht',
      tekst: 'We lezen elk bericht en nemen binnen een werkdag contact met je op.',
      terug: 'Terug naar de homepage',
    },
  },

  en: {
    nav: { cta: 'Contact', taal: 'Language' },
    hero: {
      titelA: 'Your AI partner that actually',
      titelB: 'pays off for your business.',
      sub: 'At Ainova, we support Flemish SMEs in their AI transformation by identifying, implementing and optimising AI systems that deliver measurable growth.',
      start: 'Get in touch, no strings attached',
    },
    logos: { klanten: 'Worked for', tools: 'We build with' },
    probleem: {
      label: 'The problem',
      titel: 'Why it often goes wrong.',
      vorige: 'Previous',
      volgende: 'Next',
      punten: [
        { titel: 'No diagnosis up front' },
        { titel: 'Starting with the technology' },
        { titel: 'Not knowing where to start' },
        { titel: 'Employees don’t use it' },
        { titel: 'Poor data' },
        { titel: 'No AI policy' },
      ],
    },
    aanpak: {
      label: 'Our approach',
      titel: 'How we approach it.',
      intro: 'We find the tasks where AI delivers most, build the solution and make sure your team uses it.',
      stappen: [
        {
          titel: 'Strategy: AI audit',
          tekst: 'We map where AI saves time and money, and what you are better off leaving as it is.',
        },
        {
          titel: 'Adoption',
          tekst: 'We involve your team from the start and teach them to work with it.',
        },
        {
          titel: 'Implementation',
          tekst: 'We build and connect the solution inside the tools your team already uses.',
        },
        {
          titel: 'Optimisation',
          tekst: 'We track how your team uses it and expand what works.',
        },
      ],
    },
    usecases: {
      label: 'Use cases',
      titel: 'AI in every department.',
      cta: 'Discuss your use case',
      voorbeeld: 'Example',
      categorieen: [
        {
          naam: 'Sales',
          titel: 'From enquiry to quote, faster.',
          punten: [
            'Quotes drafted from your own prices',
            'Every enquiry answered within minutes',
            'Automatic follow-up on open quotes',
          ],
          demo: {
            type: 'offerte',
            kop: 'Quote OF-2026-118',
            klant: 'Bouwbedrijf Vermeulen',
            lijnen: [['Circulation pump CP-40 · 3 pcs', '€2,940'], ['Pipework and installation', '€1,280'], ['Transport', '€95']],
            totaal: ['Total excl. VAT', '€4,315'],
            status: 'Ready to review',
          },
        },
        {
          naam: 'Marketing',
          titel: 'More reach with the same team.',
          punten: [
            'Build target groups and prospect lists',
            'Newsletters and posts in your own voice',
            'Track and report on campaigns',
          ],
          demo: {
            type: 'leads',
            kop: 'Target group · this week',
            filter: 'Flanders · 15–50 employees',
            rijen: [
              ['Mercator Groothandel', 'Wholesale · Hasselt', 94],
              ['Bouwbedrijf Vermeulen', 'Construction · Genk', 89],
              ['Garage Peeters', 'Automotive · Lommel', 85],
              ['Bakkerij Claes', 'Food · Beringen', 81],
            ],
          },
        },
        {
          naam: 'Human resources',
          titel: 'Less admin around your people.',
          punten: [
            'Quick answers to questions about leave and pay',
            'Job ads and onboarding prepared',
            'Documents and certificates processed faster',
          ],
          demo: {
            type: 'agent',
            naam: 'HR assistant',
            vraag: 'How many days off do I have left this year?',
            antwoord: 'You have 7 days left for 2026. Shall I prepare a request for 24 December?',
            bronnen: ['Payroll', 'Planning'],
            bron: 'Sources',
          },
        },
        {
          naam: 'Operations',
          titel: 'Orders without retyping.',
          punten: [
            'Purchase orders from email and PDF read automatically',
            'Orders checked against your ERP',
            'Planning and delivery times always current',
          ],
          demo: {
            type: 'orders',
            bestand: 'Purchase_order_20931.pdf',
            ontvangen: 'Received by email',
            velden: [
              ['Customer', 'Mercator Groothandel'],
              ['Item', 'Shipping boxes 40×30 cm'],
              ['Quantity', '1,200 pcs'],
              ['Delivery', '18 September'],
            ],
            status: 'Ready for your ERP',
            controle: '4 of 4 fields verified',
          },
        },
        {
          naam: 'Customer support',
          titel: 'Every customer question to the right person.',
          punten: [
            'Emails sorted and routed',
            'Suggested replies for recurring questions',
            'Order and delivery info looked up instantly',
          ],
          demo: {
            type: 'inbox',
            kop: 'Inbox · today',
            mails: [
              ['Quote request for 12 pumps', 'Sales'],
              ['Question about invoice 2026-311', 'Finance'],
              ['Delivery still possible today?', 'Logistics'],
            ],
            klaar: 'Reply drafted',
          },
        },
        {
          naam: 'Finance',
          titel: 'A grip on invoices and cash flow.',
          punten: [
            'Purchase invoices read and prepared for accounting',
            'Reminders for outstanding invoices',
            'A weekly overview in plain language',
          ],
          demo: {
            type: 'dashboard',
            kop: 'Payments received · 8 weeks',
            kpis: [['Outstanding', '€48.2k'], ['Overdue', '€6.1k'], ['Payment term', '38 d']],
            inzicht: '4 invoices have been open for more than 30 days. Reminders ready to send.',
          },
        },
      ],
    },
    overmij: {
      label: 'About Ainova',
      titel: 'A personal point of contact, a strong technical team.',
      alineas: [
        'Ainova was founded by Tristan Distelmans, with a background in work and organisational psychology. Together with technical specialists we build AI solutions for Flemish SMEs.',
        'Our office is at the Corda Incubator in Hasselt.',
      ],
      bijschrift: 'Tristan Distelmans, founder',
    },
    contact: {
      titel: 'Curious what AI can do for you?',
      sub: 'Get in touch, no strings attached. Send us an email or a message on LinkedIn, we reply within one working day.',
      mail: 'Email us',
      linkedin: 'Via LinkedIn',
    },
    formulier: {
      naam: 'Name',
      email: 'Email',
      telefoon: 'Phone',
      bedrijf: 'Company',
      optioneel: 'optional',
      bericht: 'How can we help?',
      verstuur: 'Send',
    },
    footer: { contact: 'Contact', rol: 'Founder of Ainova', volgen: 'Follow us on LinkedIn' },
    bedankt: {
      label: 'Message received',
      titel: 'Thanks for your message',
      tekst: 'We read every message and will get back to you within one working day.',
      terug: 'Back to homepage',
    },
  },
}
