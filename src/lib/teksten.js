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
      titelB: 'voor meer omzet en efficiëntie.',
      sub: 'AI-systemen die leads genereren, deals sluiten en de dagelijkse werking opschalen.',
      start: 'Begin nu',
      contact: 'Contact',
    },
    logos: { klanten: 'Enkele klanten', tools: 'Wij bouwen met' },
    visie: {
      zinnen: [
        'De hype rond AI en automatisatie is alomtegenwoordig, maar we staan nog maar aan het begin.',
        'Het verandert hoe bedrijven werken, beslissen en creëren. Niet als doel op zich, maar als hefboom voor efficiëntie, snelheid en groei.',
        'We bekijken samen uw processen, identificeren knelpunten en ontdekken waar AI het verschil kan maken.',
      ],
    },
    usecases: {
      label: 'Use cases',
      titel: 'Waar AI vandaag al het verschil maakt',
      cta: 'Bespreek uw use case',
      voorbeeld: 'Voorbeeld',
      categorieen: [
        { naam: 'Leads & sales', items: ['leads', 'opvolging'] },
        { naam: 'CRM & inzicht', items: ['crm', 'dashboard'] },
        { naam: 'Operations', items: ['orders', 'offertes'] },
        { naam: 'Agents & klantcontact', items: ['agent', 'inbox'] },
      ],
      items: {
        leads: {
          titel: 'Leadgeneratie',
          kort: 'Een gevulde pipeline met bedrijven die echt bij u passen.',
          tekst: 'AI zoekt dagelijks bedrijven binnen uw ideale klantprofiel, verrijkt ze met beslissers en bedrijfsgegevens en zet de beste matches klaar voor uw salesteam.',
          punten: ['Doelgroep op sector, regio en grootte', 'Beslissers met geverifieerde e-mailadressen', 'Elke lead gescoord op hoe goed hij past'],
          demo: {
            kop: 'Nieuwe leads vandaag',
            filter: 'B2B · Vlaanderen · 20–200 medewerkers',
            rijen: [
              ['Novalis Logistics', 'Logistiek · Antwerpen', 96],
              ['Orbis Software', 'SaaS · Gent', 91],
              ['Helder Accountancy', 'Financiële diensten · Leuven', 88],
              ['Mercator Groothandel', 'Groothandel · Hasselt', 84],
            ],
          },
        },
        opvolging: {
          titel: 'Lead-opvolging',
          kort: 'Elke aanvraag binnen de minuut beantwoord.',
          tekst: 'Een nieuwe aanvraag krijgt meteen een persoonlijk antwoord. Het systeem volgt op tot er een reactie is, beantwoordt vragen en plant de afspraak rechtstreeks in uw agenda.',
          punten: ['Persoonlijke reactie op elke aanvraag', 'Herinneringen via e-mail en sms', 'Afspraken rechtstreeks in uw agenda'],
          demo: {
            kop: 'Opvolging · Orbis Software',
            badge: 'Reactietijd 1 min',
            stappen: [
              ['09:12', 'Demo-aanvraag via de website'],
              ['09:13', 'Persoonlijke e-mail verstuurd'],
              ['Dag 3', 'Herinnering met klantcase'],
              ['Dag 4', 'Afspraak ingepland · do 14:00'],
            ],
          },
        },
        crm: {
          titel: 'CRM- & salesautomatisering',
          kort: 'Een CRM dat zichzelf bijhoudt.',
          tekst: 'Gesprekken, mails en afspraken komen automatisch in uw CRM terecht. Deals schuiven door, taken worden aangemaakt en niemand typt nog gegevens over.',
          punten: ['Gespreksverslagen en mails automatisch gelogd', 'Deals en taken bewegen mee met de realiteit', 'Werkt met de CRM die u al gebruikt'],
          demo: {
            kolommen: [
              ['Nieuw', [['Helder Accountancy', '€ 12k']]],
              ['Offerte', [['Orbis Software', '€ 24k'], ['Lumen Health', '€ 9k']]],
              ['Gewonnen', [['Novalis Logistics', '€ 31k']]],
            ],
            melding: 'Deal verplaatst naar Offerte · opvolgtaak aangemaakt',
          },
        },
        dashboard: {
          titel: 'Sales intelligence dashboard',
          kort: 'Uw cijfers, met uitleg over wat ertoe doet.',
          tekst: 'Alle salesdata uit CRM, boekhouding en mailbox samen in één overzicht. AI legt verbanden, signaleert deals die stilvallen en vertelt u waar de kansen liggen.',
          punten: ['Pipeline, omzet en conversie altijd actueel', 'Signalen bij vastgelopen deals', 'Wekelijkse samenvatting in gewone taal'],
          demo: {
            kop: 'Pipeline · laatste 8 weken',
            kpis: [['Pipeline', '€ 482k'], ['Winratio', '31%'], ['Gem. deal', '€ 18,4k']],
            inzicht: '3 deals staan al 14 dagen stil, samen goed voor € 61k.',
          },
        },
        orders: {
          titel: 'Verwerking van verkooporders',
          kort: 'Bestellingen uit mail en pdf, foutloos in uw ERP.',
          tekst: 'Orders komen binnen in allerlei vormen. AI leest ze uit, controleert artikels en prijzen tegen uw systemen en zet de order klaar in uw ERP. Uw team kijkt alleen nog na wat afwijkt.',
          punten: ['Leest pdf’s, e-mails en scans', 'Controle op artikelcodes, prijzen en voorraad', 'Afwijkingen gemarkeerd, niet doorgeschoven'],
          demo: {
            bestand: 'Bestelbon_20931.pdf',
            ontvangen: 'Ontvangen via e-mail',
            velden: [
              ['Klant', 'Mercator Groothandel'],
              ['Artikel', 'Verzenddozen 40×30 cm'],
              ['Aantal', '1.200 stuks'],
              ['Levering', '18 september'],
            ],
            status: 'Klaar voor ERP',
            controle: '4 van 4 velden gecontroleerd',
          },
        },
        offertes: {
          titel: 'Offertes op maat',
          kort: 'Van aanvraag naar offerte in enkele minuten.',
          tekst: 'AI stelt een offerte op met uw prijzen, voorwaarden en huisstijl, op basis van een aanvraag, gesprek of briefing. U controleert, past aan waar nodig en verstuurt.',
          punten: ['Gebaseerd op uw prijslijsten en eerdere offertes', 'In uw eigen huisstijl', 'Altijd eerst ter controle bij u'],
          demo: {
            kop: 'Offerte OF-2026-118',
            klant: 'Lumen Health',
            lijnen: [['Implementatie en koppelingen', '€ 4.800'], ['Opleiding team · 2 dagen', '€ 1.600'], ['Support · 12 maanden', '€ 1.200']],
            totaal: ['Totaal excl. btw', '€ 7.600'],
            status: 'Concept klaar ter controle',
          },
        },
        agent: {
          titel: 'Custom AI-agents',
          kort: 'Een digitale collega, getraind op uw bedrijf.',
          tekst: 'Agents die uw producten, prijzen en processen kennen. Ze beantwoorden vragen van klanten en collega’s, zoeken informatie op in uw systemen en voeren taken zelfstandig uit.',
          punten: ['Getraind op uw documenten en data', 'Gekoppeld aan ERP, CRM en mailbox', 'U bepaalt wat een agent zelf mag doen'],
          demo: {
            naam: 'Uw agent',
            vraag: 'Wanneer wordt order 4471 geleverd?',
            antwoord: 'Order 4471 vertrekt donderdag uit het magazijn en wordt vrijdag voor de middag geleverd. Zal ik de klant een bevestiging sturen?',
            bronnen: ['ERP', 'Planning'],
            bron: 'Bronnen',
          },
        },
        inbox: {
          titel: 'Slimme inbox',
          kort: 'Elke mail meteen bij de juiste persoon.',
          tekst: 'Binnenkomende mails worden gelezen, gelabeld en doorgestuurd naar wie ze moet behandelen. Voor veelgestelde vragen staat er meteen een antwoord klaar.',
          punten: ['Sorteert op onderwerp en urgentie', 'Stuurt door naar de juiste collega', 'Stelt antwoorden voor in uw eigen toon'],
          demo: {
            kop: 'Inbox · vandaag',
            mails: [
              ['Offerteaanvraag voor 40 licenties', 'Sales'],
              ['Vraag over factuur 2026-311', 'Boekhouding'],
              ['Levering vandaag nog mogelijk?', 'Klantendienst'],
            ],
            klaar: 'Antwoord voorbereid',
          },
        },
      },
    },
    contact: {
      titel: 'Ontdek wat AI voor u kan doen',
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
    footer: { contact: 'Contact', cookies: 'Cookies', rol: 'Oprichter van Ainova', volgen: 'Volg mij op LinkedIn' },
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
      titelB: 'for more revenue and efficiency.',
      sub: 'AI systems that generate leads, close deals and scale operations.',
      start: 'Start now',
      contact: 'Contact',
    },
    logos: { klanten: 'Some of our clients', tools: 'We build with' },
    visie: {
      zinnen: [
        'The hype around AI and automation is everywhere, yet we are only at the very beginning.',
        'It is changing how companies work, decide and create. Not as a goal in itself, but as a lever for efficiency, speed and growth.',
        'Together we review your processes, pinpoint the bottlenecks and find where AI can make the difference.',
      ],
    },
    usecases: {
      label: 'Use cases',
      titel: 'Where AI already makes the difference',
      cta: 'Discuss your use case',
      voorbeeld: 'Example',
      categorieen: [
        { naam: 'Leads & sales', items: ['leads', 'opvolging'] },
        { naam: 'CRM & insights', items: ['crm', 'dashboard'] },
        { naam: 'Operations', items: ['orders', 'offertes'] },
        { naam: 'Agents & support', items: ['agent', 'inbox'] },
      ],
      items: {
        leads: {
          titel: 'Lead generation',
          kort: 'A full pipeline of companies that truly fit.',
          tekst: 'Every day, AI finds companies within your ideal customer profile, enriches them with decision makers and company data, and lines up the best matches for your sales team.',
          punten: ['Targeting by sector, region and size', 'Decision makers with verified emails', 'Every lead scored on how well it fits'],
          demo: {
            kop: 'New leads today',
            filter: 'B2B · Flanders · 20–200 staff',
            rijen: [
              ['Novalis Logistics', 'Logistics · Antwerp', 96],
              ['Orbis Software', 'SaaS · Ghent', 91],
              ['Helder Accountancy', 'Financial services · Leuven', 88],
              ['Mercator Groothandel', 'Wholesale · Hasselt', 84],
            ],
          },
        },
        opvolging: {
          titel: 'Lead follow-up',
          kort: 'Every enquiry answered within a minute.',
          tekst: 'A new enquiry gets a personal reply straight away. The system follows up until there is a response, answers questions and books the meeting directly into your calendar.',
          punten: ['Personal reply to every enquiry', 'Reminders by email and text', 'Meetings booked straight into your calendar'],
          demo: {
            kop: 'Follow-up · Orbis Software',
            badge: 'Response time 1 min',
            stappen: [
              ['09:12', 'Demo request via the website'],
              ['09:13', 'Personal email sent'],
              ['Day 3', 'Reminder with customer case'],
              ['Day 4', 'Meeting booked · Thu 2 pm'],
            ],
          },
        },
        crm: {
          titel: 'CRM & sales automation',
          kort: 'A CRM that keeps itself up to date.',
          tekst: 'Calls, emails and meetings land in your CRM automatically. Deals move forward, tasks are created and nobody retypes data again.',
          punten: ['Call notes and emails logged automatically', 'Deals and tasks move with reality', 'Works with the CRM you already use'],
          demo: {
            kolommen: [
              ['New', [['Helder Accountancy', '€12k']]],
              ['Quote', [['Orbis Software', '€24k'], ['Lumen Health', '€9k']]],
              ['Won', [['Novalis Logistics', '€31k']]],
            ],
            melding: 'Deal moved to Quote · follow-up task created',
          },
        },
        dashboard: {
          titel: 'Sales intelligence dashboard',
          kort: 'Your numbers, explained where it matters.',
          tekst: 'All sales data from CRM, accounting and inbox in one view. AI connects the dots, flags deals that stall and tells you where the opportunities are.',
          punten: ['Pipeline, revenue and conversion always current', 'Alerts on stalled deals', 'Weekly summary in plain language'],
          demo: {
            kop: 'Pipeline · last 8 weeks',
            kpis: [['Pipeline', '€482k'], ['Win rate', '31%'], ['Avg. deal', '€18.4k']],
            inzicht: '3 deals have been idle for 14 days, worth €61k combined.',
          },
        },
        orders: {
          titel: 'Sales order processing',
          kort: 'Orders from email and PDF, flawless in your ERP.',
          tekst: 'Orders arrive in every shape. AI reads them, checks items and prices against your systems and prepares the order in your ERP. Your team only reviews what deviates.',
          punten: ['Reads PDFs, emails and scans', 'Checks item codes, prices and stock', 'Deviations flagged, never passed on'],
          demo: {
            bestand: 'Purchase_order_20931.pdf',
            ontvangen: 'Received by email',
            velden: [
              ['Customer', 'Mercator Groothandel'],
              ['Item', 'Shipping boxes 40×30 cm'],
              ['Quantity', '1,200 pcs'],
              ['Delivery', '18 September'],
            ],
            status: 'Ready for ERP',
            controle: '4 of 4 fields verified',
          },
        },
        offertes: {
          titel: 'Tailored quotes',
          kort: 'From enquiry to quote in minutes.',
          tekst: 'AI drafts a quote with your prices, terms and branding, based on an enquiry, a call or a briefing. You review, adjust where needed and send.',
          punten: ['Based on your price lists and past quotes', 'In your own branding', 'Always reviewed by you first'],
          demo: {
            kop: 'Quote OF-2026-118',
            klant: 'Lumen Health',
            lijnen: [['Implementation and integrations', '€4,800'], ['Team training · 2 days', '€1,600'], ['Support · 12 months', '€1,200']],
            totaal: ['Total excl. VAT', '€7,600'],
            status: 'Draft ready for review',
          },
        },
        agent: {
          titel: 'Custom AI agents',
          kort: 'A digital colleague, trained on your business.',
          tekst: 'Agents that know your products, prices and processes. They answer questions from customers and colleagues, look things up in your systems and carry out tasks on their own.',
          punten: ['Trained on your documents and data', 'Connected to ERP, CRM and inbox', 'You decide what an agent may do on its own'],
          demo: {
            naam: 'Your agent',
            vraag: 'When will order 4471 be delivered?',
            antwoord: 'Order 4471 leaves the warehouse on Thursday and will be delivered Friday before noon. Shall I send the customer a confirmation?',
            bronnen: ['ERP', 'Planning'],
            bron: 'Sources',
          },
        },
        inbox: {
          titel: 'Smart inbox',
          kort: 'Every email straight to the right person.',
          tekst: 'Incoming emails are read, labelled and routed to whoever should handle them. For frequent questions, a reply is ready right away.',
          punten: ['Sorts by topic and urgency', 'Routes to the right colleague', 'Suggests replies in your own tone'],
          demo: {
            kop: 'Inbox · today',
            mails: [
              ['Quote request for 40 licences', 'Sales'],
              ['Question about invoice 2026-311', 'Accounting'],
              ['Delivery still possible today?', 'Customer service'],
            ],
            klaar: 'Reply drafted',
          },
        },
      },
    },
    contact: {
      titel: 'Discover what AI can do for you',
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
    footer: { contact: 'Contact', cookies: 'Cookies', rol: 'Founder of Ainova', volgen: 'Follow me on LinkedIn' },
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
