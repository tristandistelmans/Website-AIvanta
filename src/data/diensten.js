import { TrendingUp, Handshake, Database } from 'lucide-react'

/**
 * DIENSTEN — Centrale datastructuur (3 domeinen)
 *
 * Elke categorie heeft:
 *   slug, Icon, title, tagline, beschrijving
 *   hero: { probleem, resultaten[] }
 *   werkwijze: { stap, beschrijving }[]
 *   scope: { wel[], niet[] }
 *   subdiensten: Subdienst[]
 *
 * Elke subdienst heeft:
 *   id, titel, omschrijving, voorWie, wanneer,
 *   waarde[], hoeAI, inbegrepen[], nietInbegrepen[], integraties[]
 */

export const DIENSTEN = [
  /* ────────────────────────────────────────────────
     1. MARKETING
  ──────────────────────────────────────────────── */
  {
    slug: 'marketing',
    Icon: TrendingUp,
    title: 'Marketing',
    tagline: 'Meer kwalitatieve leads, minder versnipperde inspanningen',
    beschrijving:
      'We analyseren uw volledige marketingproces — van leadgeneratie tot nurturing — en zorgen dat elke stap gestroomlijnd, meetbaar en schaalbaar is.',
    hero: {
      probleem:
        'Marketing voelt vaak ad hoc: content wordt willekeurig gepost, leads komen binnen maar worden niet opgevolgd, en er is geen duidelijk zicht op wat werkt en wat niet. Het resultaat? Veel inspanning, weinig rendement.',
      resultaten: [
        'Een gestructureerd marketingproces van eerste contact tot gekwalificeerde lead',
        'Geautomatiseerde content- en e-mailflows die consistent presteren',
        'Duidelijk inzicht in welke kanalen en boodschappen omzet opleveren',
        'Minder handmatig werk bij leadkwalificatie en opvolging',
        'Schaalbare campagnes zonder extra personeel',
      ],
    },
    werkwijze: [
      { stap: 'Analyse', beschrijving: 'We brengen uw huidige marketingkanalen, flows en resultaten in kaart.' },
      { stap: 'Systematiseren', beschrijving: 'We structureren het proces: welke stappen, triggers en verantwoordelijkheden.' },
      { stap: 'Standaardiseren', beschrijving: 'Templates, workflows en scripts die herhaalbaar zijn.' },
      { stap: 'Automatiseren', beschrijving: 'AI en tooling inzetten om het proces op schaal te laten draaien.' },
    ],
    scope: {
      wel: [
        'Analyse en optimalisatie van bestaande marketingflows',
        'Automatisering van leadgeneratie en nurturing',
        'Content- en e-mailcampagne automatisering',
        'Integratie met uw bestaande marketing tools',
        'Rapportage en inzicht in marketingprestaties',
      ],
      niet: [
        'Aankoop van leadlijsten of databases',
        'Garantie op specifieke conversiecijfers',
        'Advertentiebeheer (Google/Meta Ads)',
        'Volledig copywriting of grafisch ontwerp',
        'Juridisch advies over GDPR-compliance',
      ],
    },
    subdiensten: [
      {
        id: 'leadgeneratie-outreach',
        titel: 'Leadgeneratie & Outreach',
        omschrijving:
          'Gestructureerde aanpak voor het vinden, kwalificeren en aanspreken van potentiële klanten — met AI-ondersteunde personalisatie en opvolging.',
        voorWie:
          'KMO\'s en zelfstandigen die leads handmatig opvolgen of te weinig nieuwe klanten binnenhalen via hun huidige kanalen.',
        wanneer:
          'Wanneer leads niet tijdig worden opgevolgd, outreach te generiek is, of uw team te weinig capaciteit heeft voor consistente prospectie.',
        waarde: [
          'Leads automatisch kwalificeren op basis van gedrag en criteria',
          'Gepersonaliseerde outreach zonder elk bericht handmatig te schrijven',
          'Consistente opvolging, ook buiten kantooruren',
          'Beter zicht op welke kanalen en boodschappen werken',
        ],
        hoeAI:
          'AI analyseert leadgedrag en profieldata om de meest kansrijke prospects te identificeren. Berichten worden automatisch gepersonaliseerd op basis van branche, rol en interactiegeschiedenis. Follow-ups verlopen op het juiste moment, via het juiste kanaal.',
        inbegrepen: [
          'Leadkwalificatie en scoring flows',
          'Gepersonaliseerde outreach templates',
          'Automatische follow-up sequenties',
          'CRM-integratie en rapportage',
        ],
        nietInbegrepen: [
          'Aankoop van contactlijsten',
          'Advertentiebeheer',
          'Volledige contentstrategie',
        ],
        integraties: ['HubSpot', 'Gmail', 'LinkedIn', 'Mailchimp', 'Zapier', 'Google Sheets'],
      },
      {
        id: 'content-email-automatisatie',
        titel: 'Content & E-mailautomatisatie',
        omschrijving:
          'Gestroomlijnde workflows voor contentcreatie, publicatie en e-mail nurturing — zodat uw marketing consistent draait zonder dagelijkse inspanning.',
        voorWie:
          'Ondernemers die weten dat ze meer moeten posten en mailen, maar er simpelweg de tijd niet voor hebben.',
        wanneer:
          'Wanneer uw contentkalender leeg is, e-mails ad hoc worden verstuurd, of leads koud worden door gebrek aan opvolging.',
        waarde: [
          'Contentkalenders die automatisch gevuld worden met ideeën en concepten',
          'E-mail nurture flows die leads warm houden tot ze klaar zijn om te kopen',
          'Consistente aanwezigheid op social media zonder dagelijks handwerk',
          'Meer conversie uit bestaand publiek',
        ],
        hoeAI:
          'AI genereert contentideeën op basis van uw doelgroep en branche, stelt concept-posts en e-mails voor, en plant publicatie automatisch in. Nurture sequenties reageren op gedrag: wie klikt, krijgt relevantere opvolging.',
        inbegrepen: [
          'Contentkalender opzet en automatisering',
          'E-mail nurture flow ontwerp en implementatie',
          'Social media scheduling integratie',
          'Template bibliotheek voor terugkerende content',
        ],
        nietInbegrepen: [
          'Grafisch ontwerp van visuele content',
          'Volledige copywriting op maat',
          'Advertentiecampagnes',
        ],
        integraties: ['Mailchimp', 'Gmail', 'Notion', 'Canva', 'Instagram', 'LinkedIn', 'Zapier'],
      },
      {
        id: 'website-chatbot-leadcapture',
        titel: 'Website chatbot voor leadcapture',
        omschrijving:
          'Een AI-chatbot op uw website die bezoekers aanspreekt, kwalificeert en automatisch doorstuurt als lead — zonder dat uw team erbij hoeft.',
        voorWie:
          'Bedrijven met websiteverkeer dat onvoldoende converteert naar contactaanvragen of offertes.',
        wanneer:
          'Wanneer bezoekers vertrekken zonder contact op te nemen, of wanneer er buiten kantooruren geen opvang is.',
        waarde: [
          'Meer leads uit bestaand websiteverkeer',
          '24/7 eerste contact en kwalificatie',
          'Automatische samenvatting en CRM-doorvoer',
        ],
        hoeAI:
          'De chatbot herkent bezoekersintentie op basis van de bezochte pagina en gestelde vragen, past de toon aan op de context, en stuurt enkel relevante leads door — met een samenvatting erbij.',
        inbegrepen: [
          'Chatbot configuratie en training',
          'CRM-integratie',
          'Kwalificatievragen op maat',
          'Doorlopende optimalisatie',
        ],
        nietInbegrepen: [
          'Website-ontwerp of -ontwikkeling',
          'Hosting van de chatbot-software',
        ],
        integraties: ['HubSpot', 'Gmail', 'Zapier', 'WhatsApp', 'Slack'],
      },
    ],
  },

  /* ────────────────────────────────────────────────
     2. SALES
  ──────────────────────────────────────────────── */
  {
    slug: 'sales',
    Icon: Handshake,
    title: 'Sales',
    tagline: 'Meer deals sluiten, minder administratie',
    beschrijving:
      'We stroomlijnen uw volledige salesproces — van eerste contact tot getekende offerte — zodat uw team minder tijd verliest aan admin en meer aan verkopen.',
    hero: {
      probleem:
        'Salesteams besteden vaak meer tijd aan CRM-invoer, follow-up mailtjes en interne afstemming dan aan daadwerkelijk verkopen. Leads raken koud, offertes worden vergeten, en er is geen overzicht van de pipeline.',
      resultaten: [
        'Een gestructureerd salesproces van lead tot deal',
        'Automatische opvolging zodat geen enkele lead vergeten wordt',
        'CRM dat automatisch bijgewerkt wordt na elk contactmoment',
        'Meeting prep en post-call samenvattingen zonder handwerk',
        'Duidelijk pipeline-overzicht en forecasting',
      ],
    },
    werkwijze: [
      { stap: 'Analyse', beschrijving: 'We brengen uw salesproces in kaart: pipeline, touchpoints en knelpunten.' },
      { stap: 'Systematiseren', beschrijving: 'We definiëren de stappen, criteria en escalatiepunten in uw salesfunnel.' },
      { stap: 'Standaardiseren', beschrijving: 'Playbooks, templates en follow-up schema\'s die elk teamlid kan volgen.' },
      { stap: 'Automatiseren', beschrijving: 'AI-gestuurde follow-ups, CRM-updates en rapportage op autopilot.' },
    ],
    scope: {
      wel: [
        'Analyse en optimalisatie van uw salesfunnel',
        'Automatisering van follow-ups en CRM-invoer',
        'Post-call samenvattingen en meeting prep',
        'Pipeline rapportage en forecasting',
        'Integratie met uw bestaande sales tools',
      ],
      niet: [
        'Het voeren van verkoopgesprekken namens u',
        'Garantie op specifieke omzetcijfers',
        'Koud bellen of direct telefonische prospectie',
        'Volledige CRM-migratie of -selectie',
        'Juridisch advies over contracten',
      ],
    },
    subdiensten: [
      {
        id: 'sales-follow-up',
        titel: 'Sales follow-up automatisatie',
        omschrijving:
          'Geautomatiseerde opvolgflows na elk contactmoment — zodat leads warm blijven en geen enkele opportunity door de mazen glipt.',
        voorWie:
          'Salesteams of ondernemers die leads verliezen door te trage of inconsistente opvolging.',
        wanneer:
          'Wanneer leads weken blijven liggen zonder reactie, of wanneer follow-up afhankelijk is van het geheugen van één persoon.',
        waarde: [
          'Geen enkele lead wordt meer vergeten of te laat opgevolgd',
          'Gepersonaliseerde follow-ups op het juiste moment',
          'Meer deals uit bestaande pipeline',
          'Minder druk op het salesteam voor administratieve taken',
        ],
        hoeAI:
          'AI bepaalt op basis van leadgedrag en interactiegeschiedenis het optimale moment en kanaal voor opvolging. Berichten worden automatisch opgesteld, en het CRM wordt bijgewerkt met elke interactie.',
        inbegrepen: [
          'Follow-up flow ontwerp en implementatie',
          'Personalisatie-engine voor berichten',
          'CRM-integratie en status-updates',
          'Rapportage op conversie per fase',
        ],
        nietInbegrepen: [
          'Verkoopgesprekken voeren',
          'Leadlijsten samenstellen',
        ],
        integraties: ['HubSpot', 'Gmail', 'Google Calendar', 'Zapier', 'Slack'],
      },
      {
        id: 'crm-automatisering',
        titel: 'CRM-automatisering',
        omschrijving:
          'Automatisch invullen van CRM-notities, deal-updates en contacthistoriek na calls, meetings en e-mails — zonder handmatige invoer.',
        voorWie:
          'Teams die hun CRM als een last ervaren in plaats van als een hulpmiddel, en waar data vaak onvolledig of verouderd is.',
        wanneer:
          'Wanneer CRM-invoer wordt overgeslagen, data niet betrouwbaar is, of rapportage onmogelijk is door ontbrekende informatie.',
        waarde: [
          'CRM dat altijd up-to-date is zonder extra werk',
          'Betrouwbare data voor pipeline rapportage en forecasting',
          'Minder frustratie bij het salesteam over admin',
          'Volledige contacthistoriek automatisch bijgehouden',
        ],
        hoeAI:
          'AI luistert mee met calls (met toestemming), analyseert e-mailverkeer en vult automatisch CRM-velden in: notities, next steps, dealwaarde en contactmomenten. Alles wordt gekoppeld aan het juiste contact en de juiste deal.',
        inbegrepen: [
          'CRM-integratie en veldmapping',
          'Post-call samenvattingen',
          'Automatische notitie- en statusupdates',
          'E-mail parsing en logging',
        ],
        nietInbegrepen: [
          'CRM-licenties of -abonnementen',
          'Volledige CRM-migratie',
        ],
        integraties: ['HubSpot', 'Google Sheets', 'Gmail', 'Zoom', 'Microsoft Teams', 'Zapier'],
      },
      {
        id: 'meeting-prep-postcall',
        titel: 'Meeting prep & post-call briefs',
        omschrijving:
          'Automatische voorbereiding vóór elke meeting en gestructureerde samenvatting erna — zodat uw team altijd beslagen ten ijs komt.',
        voorWie:
          'Salesmedewerkers die te veel tijd besteden aan het opzoeken van klantinfo vóór meetings en het uitschrijven van notities erna.',
        wanneer:
          'Wanneer meetings zonder context starten, of wanneer actiepunten verloren gaan omdat niemand ze vastlegt.',
        waarde: [
          'Elke meeting start met een complete klantbrief',
          'Actiepunten en next steps automatisch vastgelegd',
          'Consistente kwaliteit ongeacht wie de meeting voert',
          'Tijdsbesparing van 20-30 minuten per meeting',
        ],
        hoeAI:
          'Vóór de meeting compileert AI alle relevante data: eerdere gesprekken, open deals, recente interacties en bedrijfsinformatie. Na de meeting worden opname of notities verwerkt tot een gestructureerde samenvatting met actiepunten.',
        inbegrepen: [
          'Pre-meeting briefing automatisering',
          'Post-call samenvatting en actiepunten',
          'CRM-koppeling voor context',
          'Kalender-integratie',
        ],
        nietInbegrepen: [
          'Call recording software licenties',
          'Transcriptie-abonnementen',
        ],
        integraties: ['Google Calendar', 'Zoom', 'HubSpot', 'Notion', 'Slack', 'Microsoft Teams'],
      },
    ],
  },

  /* ────────────────────────────────────────────────
     3. CRM & OPERATIONS
  ──────────────────────────────────────────────── */
  {
    slug: 'crm-operations',
    Icon: Database,
    title: 'CRM & Operations',
    tagline: 'Efficiëntere processen, minder handmatig werk',
    beschrijving:
      'We optimaliseren uw interne workflows — van klant-onboarding tot backoffice — zodat uw operaties soepel draaien en meeschalen met uw groei.',
    hero: {
      probleem:
        'Veel KMO\'s groeien sneller dan hun processen aankunnen. Onboarding verloopt chaotisch, taken worden vergeten, en de backoffice loopt constant achter. Het gevolg: fouten, frustratie en een rem op groei.',
      resultaten: [
        'Professionele en consistente klant-onboarding',
        'Automatische taakcreatie en handoff tussen teamleden',
        'Minder fouten door gestandaardiseerde workflows',
        'Documentatie en e-mails die zichzelf genereren',
        'Operaties die meeschalen zonder extra handen',
      ],
    },
    werkwijze: [
      { stap: 'Analyse', beschrijving: 'We brengen uw interne workflows en knelpunten in kaart.' },
      { stap: 'Systematiseren', beschrijving: 'We definiëren wie wat doet, wanneer, en met welke tools.' },
      { stap: 'Standaardiseren', beschrijving: 'Checklists, templates en standaard procedures voor elk proces.' },
      { stap: 'Automatiseren', beschrijving: 'Triggers, automatische taken en AI-gestuurde documentgeneratie.' },
    ],
    scope: {
      wel: [
        'Analyse en optimalisatie van interne workflows',
        'Client onboarding automatisering',
        'Taakcreatie en handoff flows',
        'Document- en e-mailautomatisatie',
        'Integratie tussen uw interne tools',
      ],
      niet: [
        'Boekhouding of financieel advies',
        'HR-beleid of personeelsbeheer',
        'IT-infrastructuur of serverbeheer',
        'Juridisch advies over compliance',
        'Volledige ERP-implementatie',
      ],
    },
    subdiensten: [
      {
        id: 'client-onboarding',
        titel: 'Automatische client onboarding',
        omschrijving:
          'Een gestroomlijnd onboardingproces dat nieuwe klanten professioneel verwelkomt, de juiste informatie verzamelt en interne taken automatisch aanmaakt.',
        voorWie:
          'Dienstverlenende bedrijven die regelmatig nieuwe klanten aan boord nemen en waar onboarding nu handmatig of inconsistent verloopt.',
        wanneer:
          'Wanneer elke nieuwe klant een andere ervaring krijgt, informatie vergeten wordt, of het team steeds dezelfde taken handmatig moet aanmaken.',
        waarde: [
          'Professionele eerste indruk bij elke nieuwe klant',
          'Alle benodigde informatie automatisch verzameld',
          'Interne taken en handoffs automatisch aangemaakt',
          'Consistent proces ongeacht wie de klant begeleidt',
        ],
        hoeAI:
          'Na het tekenen van de overeenkomst start een automatische flow: welkomstmail, intakeformulier, documentverzameling en interne taakcreatie. AI personaliseert communicatie op basis van klantprofiel en dienst.',
        inbegrepen: [
          'Onboarding flow ontwerp en implementatie',
          'Intakeformulieren en documentverzameling',
          'Automatische welkomstcommunicatie',
          'Interne taak- en handoff triggers',
        ],
        nietInbegrepen: [
          'Contractopstelling of juridisch advies',
          'Klanttevredenheidsonderzoeken',
        ],
        integraties: ['HubSpot', 'Gmail', 'Google Sheets', 'Notion', 'Zapier', 'Airtable'],
      },
      {
        id: 'interne-workflows',
        titel: 'Interne workflow automatisering',
        omschrijving:
          'Gestructureerde workflows voor terugkerende interne processen — van taaktoewijzing tot statusupdates — zodat niets meer tussen de plooien valt.',
        voorWie:
          'Teams die groeien en merken dat hun huidige manier van werken (spreadsheets, mondeling afspreken, losse e-mails) niet meer schaalbaar is.',
        wanneer:
          'Wanneer taken vergeten worden, deadlines gemist, of er geen overzicht is van wie wat doet.',
        waarde: [
          'Automatische taakcreatie bij nieuwe klanten, projecten of triggers',
          'Duidelijke verantwoordelijkheden en deadlines',
          'Statusupdates zonder dat iemand er handmatig aan moet denken',
          'Schaalbare processen die meegroeien met het team',
        ],
        hoeAI:
          'Op basis van triggers (nieuwe klant, fase-overgang, deadline) worden automatisch taken aangemaakt, toegewezen en voorzien van context. AI stuurt herinneringen en escaleert wanneer deadlines naderen.',
        inbegrepen: [
          'Workflow design en implementatie',
          'Trigger- en escalatielogica',
          'Integratie met projectmanagement tools',
          'Dashboards en statusoverzichten',
        ],
        nietInbegrepen: [
          'Software-licenties voor projecttools',
          'Personeelsbeheer of planning',
        ],
        integraties: ['Notion', 'Trello', 'Airtable', 'Slack', 'Google Sheets', 'Zapier'],
      },
      {
        id: 'document-email-automatisatie',
        titel: 'Document- & e-mailautomatisatie',
        omschrijving:
          'Automatisch genereren van offertes, facturen, welkomstmails en andere documenten op basis van klantdata — foutloos en in seconden.',
        voorWie:
          'Ondernemers en teams die veel tijd besteden aan het handmatig opstellen van terugkerende documenten en e-mails.',
        wanneer:
          'Wanneer dezelfde soort documenten steeds opnieuw handmatig worden gemaakt, of wanneer fouten in communicatie uw professionaliteit ondermijnen.',
        waarde: [
          'Documenten in seconden gegenereerd in plaats van uren',
          'Foutloze, consistente communicatie naar klanten',
          'Meer tijd voor waardevol werk in plaats van admin',
          'Professionele uitstraling bij elk contactmoment',
        ],
        hoeAI:
          'AI vult templates aan met klantdata uit uw CRM of spreadsheet. Offertes, facturen, contracten en e-mails worden automatisch opgesteld en klaargezet voor verzending of goedkeuring.',
        inbegrepen: [
          'Template design en configuratie',
          'Data-koppeling met CRM of spreadsheets',
          'Automatische generatie en verzending',
          'Goedkeuringsflows waar nodig',
        ],
        nietInbegrepen: [
          'Grafisch ontwerp van documenten',
          'Boekhoudkundige validatie',
        ],
        integraties: ['Google Docs', 'Gmail', 'HubSpot', 'Google Sheets', 'Zapier', 'Airtable'],
      },
    ],
  },
]
