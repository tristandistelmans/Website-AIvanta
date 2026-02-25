import { UserPlus, Sparkles, MessageSquare, FileText, Workflow } from 'lucide-react'

/**
 * DIENSTEN — Centrale datastructuur
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
     1. LEADGENERATIE & OUTREACH
  ──────────────────────────────────────────────── */
  {
    slug: 'leadgeneratie',
    Icon: UserPlus,
    title: 'Leadgeneratie & Outreach',
    tagline: 'Meer kwalitatieve leads, minder handmatig werk',
    beschrijving:
      'Automatiseer hoe u nieuwe klanten vindt, kwalificeert en aanspreekt — zodat uw team focust op gesprekken die er écht toe doen.',
    hero: {
      probleem:
        'Veel KMO\'s en zelfstandigen verliezen dagelijks potentiële klanten doordat leads niet tijdig worden opgevolgd, kwalificatie handmatig verloopt en outreach te generiek is. AI maakt gerichte, schaalbare leadgeneratie ook voor kleine teams mogelijk — zonder extra personeel.',
      resultaten: [
        'Leads automatisch kwalificeren op basis van gedrag en profielcriteria',
        'Gepersonaliseerde outreach zonder elk bericht handmatig te schrijven',
        'Consistente opvolging, ook buiten kantooruren',
        'Minder tijdverlies op koude of ongekwalificeerde contacten',
        'Beter zicht op welke kanalen en boodschappen het beste werken',
      ],
    },
    werkwijze: [
      { stap: 'Analyse', beschrijving: 'We brengen uw huidige leadproces in kaart: bronnen, kwalificatiecriteria en knelpunten.' },
      { stap: 'Ontwerp', beschrijving: 'We ontwerpen de flows, triggers en contentstrategie op maat van uw doelgroep.' },
      { stap: 'Bouw', beschrijving: 'We bouwen de automatisering en koppelen ze aan uw bestaande tools.' },
      { stap: 'Test', beschrijving: 'We testen met echte leads en stellen bij op basis van eerste resultaten.' },
      { stap: 'Optimalisatie', beschrijving: 'Doorlopende analyse en verfijning van de flows op basis van data.' },
    ],
    scope: {
      wel: [
        'Automatisering van bestaande leadflows',
        'Integratie met uw CRM of e-mailtool',
        'Gepersonaliseerde follow-up berichten',
        'Kwalificatie- en scoringlogica op maat',
        'Rapportage van resultaten',
      ],
      niet: [
        'Aankoop of aanmaak van leadlijsten of databases',
        'Garantie op specifieke conversiecijfers',
        'Volledige contentstrategie of copywriting',
        'Advertentiebeheer (Google/Meta Ads)',
        'Juridisch advies over GDPR-compliance',
      ],
    },
    subdiensten: [
      {
        id: 'website-chatbot-leadcapture',
        titel: 'Website chatbot voor lead capture',
        omschrijving:
          'Een AI-chatbot op uw website die bezoekers proactief aanspreekt, basisinformatie verzamelt en leads automatisch doorstuurt naar uw CRM of inbox.',
        voorWie:
          'Bedrijven met een informatieve website die relatief veel bezoekers trekken maar weinig contactformulieren of aanvragen ontvangen.',
        wanneer:
          'Wanneer bezoekers vertrekken zonder contact op te nemen, of wanneer uw team te weinig capaciteit heeft om elke bezoeker handmatig te begeleiden.',
        waarde: [
          'Meer leads uit bestaand websiteverkeer, zonder extra advertentiebudget',
          '24/7 beschikbaar voor een eerste contact of kwalificatiegesprek',
          'Automatische kwalificatie vóór uw team ermee aan de slag gaat',
        ],
        hoeAI:
          'De chatbot herkent de intentie van de bezoeker op basis van de bezochte pagina en gestelde vragen, past zijn toon aan op de context en stelt gerichte kwalificatievragen. Enkel relevante leads worden doorgestuurd — met een samenvatting van het gesprek erbij.',
        inbegrepen: [
          'Opzet en configuratie van de chatbot',
          'Koppeling met uw CRM of e-mailtool',
          'Aanpassing aan uw merk, toon en diensten',
          'Basisdocumentatie voor intern gebruik',
        ],
        nietInbegrepen: [
          'Volledige heropbouw of redesign van uw website',
          'Meertalige configuratie (beschikbaar als meerwerk)',
          'Integratie met systemen zonder openbare API',
        ],
        integraties: ['HubSpot', 'Pipedrive', 'Mailchimp', 'Gmail', 'Notion', 'Slack'],
      },
      {
        id: 'ai-leadkwalificatie-scoring',
        titel: 'AI leadkwalificatie & scoring',
        omschrijving:
          'Een automatisch systeem dat inkomende leads beoordeelt op basis van criteria die u bepaalt — en prioriteit toekent zodat uw team focust op de sterkste kansen.',
        voorWie:
          'Salesteams en zelfstandigen die regelmatig inbound leads ontvangen en moeite hebben om de beste kansen snel te onderscheiden van zwakkere contacten.',
        wanneer:
          'Wanneer u tijd verliest aan het opvolgen van contacten die uiteindelijk niet passen, of wanneer waardevolle leads te laat of te generiek worden beantwoord.',
        waarde: [
          'Hogere conversieratio per verkoopgesprek',
          'Minder tijdverlies op ongekwalificeerde contacten',
          'Prioriteitslijst klaar voor uw team elke ochtend',
        ],
        hoeAI:
          'AI analyseert elk contact op basis van gedrag (geopende e-mails, bekeken pagina\'s), profieldata en ingevulde formulieren. Het kent een score toe en past de aanbevolen opvolgstap aan op de situatie.',
        inbegrepen: [
          'Opzet van scoringmodel op basis van uw criteria',
          'Koppeling met uw CRM',
          'Automatische toewijzing aan salesverantwoordelijke',
          'Wekelijkse rapportage',
        ],
        nietInbegrepen: [
          'Aanleg of aankoop van nieuwe leadbronnen',
          'Volledige CRM-migratie of -herinrichting',
          'Advertentiebeheer of campagnestrategie',
        ],
        integraties: ['HubSpot', 'Pipedrive', 'Salesforce', 'Gmail', 'Typeform'],
      },
      {
        id: 'koude-email-personalisatie',
        titel: 'Koude e-mail personalisatie met AI',
        omschrijving:
          'Gepersonaliseerde koude e-mails op schaal, waarbij AI relevante informatie over de ontvanger verwerkt in elke boodschap — zodat het niet aanvoelt als een massamailing.',
        voorWie:
          'Bedrijven en zelfstandigen die proactief nieuwe klanten benaderen maar niet de tijd hebben om elk bericht handmatig op maat te schrijven.',
        wanneer:
          'Wanneer generieke koude mails weinig respons opleveren, of wanneer u een grotere lijst prospecten wilt aanschrijven zonder aan relevantie in te boeten.',
        waarde: [
          'Hogere openings- en antwoordratio in vergelijking met generieke mails',
          'Schaalbare outreach zonder extra personeel',
          'Consistente, professionele toon bij elk contact',
        ],
        hoeAI:
          'AI verzamelt publiek beschikbare informatie over de ontvanger (sector, rol, recente activiteit op LinkedIn of website) en verwerkt dit in een persoonlijke openingszin en een relevante waardepropositie — automatisch voor elke ontvanger.',
        inbegrepen: [
          'Opzet van e-mailflow met personalisatielogica',
          'Templates op maat van uw aanbod en doelgroep',
          'Basisopzet voor A/B-testen van onderwerpregels',
          'Koppeling met uw e-mailtool',
        ],
        nietInbegrepen: [
          'Aankoop of opbouw van contactenlijsten',
          'Juridisch advies over GDPR (raadpleeg uw adviseur)',
          'Volledig contentplan of outreachstrategie',
        ],
        integraties: ['Instantly', 'Lemlist', 'Apollo', 'Gmail', 'HubSpot'],
      },
      {
        id: 'automatische-follow-up-flows',
        titel: 'Automatische follow-up flows',
        omschrijving:
          'Geautomatiseerde opvolgsequenties die getriggerd worden op basis van het gedrag van uw leads — zodat geen enkele kans verloren gaat door een vergeten of te late opvolging.',
        voorWie:
          'Iedereen die leads opvolgt via e-mail of CRM en merkt dat kansen verloren gaan door inconsistente opvolging of te weinig capaciteit.',
        wanneer:
          'Wanneer leads te lang onbeantwoord blijven, of wanneer uw team niet de capaciteit heeft voor een gestructureerde opvolging in meerdere stappen.',
        waarde: [
          'Consistente opvolging zonder handmatige herinneringen',
          'Juiste boodschap op het juiste moment, afgestemd op gedrag',
          'Meer gesloten deals uit uw bestaande pipeline',
        ],
        hoeAI:
          'De flow past zich aan op basis van acties van de lead: heeft hij de mail geopend? Geklikt op een link? Geen reactie gegeven? AI bepaalt de volgende stap en past de boodschap aan op de context van het contact.',
        inbegrepen: [
          'Opzet van minimaal 3 follow-up stappen',
          'Koppeling met uw CRM en e-mailtool',
          'Triggerlogica op basis van gedrag',
          'Rapportage en optimalisatie na 30 dagen',
        ],
        nietInbegrepen: [
          'Volledige contentstrategie of campagneplanning',
          'Beheer van advertentiebudgetten',
          'Meertalige flows (beschikbaar als meerwerk)',
        ],
        integraties: ['HubSpot', 'ActiveCampaign', 'Mailchimp', 'Pipedrive', 'Gmail'],
      },
    ],
  },

  /* ────────────────────────────────────────────────
     2. MARKETING & CONTENTAUTOMATISATIE
  ──────────────────────────────────────────────── */
  {
    slug: 'marketing-content',
    Icon: Sparkles,
    title: 'Marketing & Contentautomatisatie',
    tagline: 'Consistent aanwezig online, zonder dagelijkse moeite',
    beschrijving:
      'Genereer, plan en publiceer content in uw eigen stijl — AI doet het zware werk, u behoudt de controle.',
    hero: {
      probleem:
        'Consistente content produceren kost tijd die de meeste KMO\'s en zelfstandigen niet hebben. Het gevolg: onregelmatige publicaties, verouderde kanalen en gemiste kansen om zichtbaar te blijven bij potentiële klanten. AI kan helpen om kwalitatieve content sneller te produceren — zonder uw merkidentiteit te verliezen.',
      resultaten: [
        'Regelmatige publicaties zonder dagelijkse tijdsinvestering',
        'Content in uw eigen toon, stijl en merkwaarden',
        'Meer kanalen bedienen met dezelfde tijdsinvestering',
        'Betere consistentie in boodschap en branding',
        'Meer tijd voor strategie in plaats van uitvoering',
      ],
    },
    werkwijze: [
      { stap: 'Analyse', beschrijving: 'We analyseren uw huidige contentoutput, toon en doelgroep.' },
      { stap: 'Ontwerp', beschrijving: 'We stellen een contentstructuur op: welke formats, kanalen en frequentie.' },
      { stap: 'Bouw', beschrijving: 'We configureren de tools en flows voor automatische generatie en planning.' },
      { stap: 'Test', beschrijving: 'We testen met echte content en verfijnen op basis van uw feedback.' },
      { stap: 'Optimalisatie', beschrijving: 'Periodieke review van prestaties en bijsturing van de strategie.' },
    ],
    scope: {
      wel: [
        'Contentgeneratie op basis van uw merkstijl',
        'Automatische planning en publicatie',
        'Integratie met uw social media en e-mailtools',
        'Templates en formats op maat',
      ],
      niet: [
        'Volledige marketingstrategie of merkpositionering',
        'Betaalde advertentiecampagnes (Google/Meta)',
        'Professionele fotografie of videoproductie',
        'SEO-audit of technische website-optimalisatie',
      ],
    },
    subdiensten: [
      {
        id: 'contentkalender-ideegeneratie',
        titel: 'Contentkalenders & ideegeneratie',
        omschrijving:
          'AI genereert op basis van uw sector, doelgroep en actuele trends een kalender met concrete contentideeën — klaar om goed te keuren en uit te voeren.',
        voorWie:
          'Bedrijven en zelfstandigen die weten dat ze meer content moeten produceren, maar steeds vastlopen op "Waarover schrijf ik eigenlijk?"',
        wanneer:
          'Wanneer contentproductie stagneert door gebrek aan ideeën of structuur, of wanneer u consistenter aanwezig wil zijn op meerdere kanalen.',
        waarde: [
          'Nooit meer een leeg scherm voor een onbepaald publiek',
          'Thematische structuur over weken en maanden heen',
          'Ideeën afgestemd op uw sector en seizoensgebonden momenten',
        ],
        hoeAI:
          'AI analyseert trending onderwerpen in uw sector, koppelt ze aan uw aanbod en doelgroep, en genereert concrete voorstellen met titel, format en kanaal. U kiest wat u uitvoert.',
        inbegrepen: [
          'Maandelijkse contentkalender met 15–20 ideeën',
          'Indeling per kanaal en format',
          'Koppeling met uw plannings- of projecttool',
          'Eerste review en bijsturing na één maand',
        ],
        nietInbegrepen: [
          'Uitvoering en publicatie van de content',
          'Grafisch ontwerp of beeldwerk',
          'SEO-onderzoek of keyword-strategie',
        ],
        integraties: ['Notion', 'Trello', 'Asana', 'Google Sheets', 'Airtable'],
      },
      {
        id: 'social-posts-generator',
        titel: 'Social posts generator',
        omschrijving:
          'Automatische generatie van social media posts in uw eigen toon — klaar om goed te keuren en te publiceren, of automatisch ingepland op de beste tijdstippen.',
        voorWie:
          'KMO\'s en zelfstandigen die weten dat sociale aanwezigheid belangrijk is, maar te weinig tijd hebben om er dagelijks mee bezig te zijn.',
        wanneer:
          'Wanneer uw sociale kanalen wekenlang stil staan, of wanneer u elke post van nul af aan schrijft en te weinig publiceert.',
        waarde: [
          'Consistente aanwezigheid op sociale media zonder dagelijkse inspanning',
          'Posts in uw eigen stijl en toon, niet generiek',
          'Meer bereik en zichtbaarheid met minder tijdsinvestering',
        ],
        hoeAI:
          'AI leert uw schrijfstijl, merkwaarden en doelgroep kennen. Op basis van een onderwerp of aanleiding genereert het kant-en-klare posts voor LinkedIn, Instagram of Facebook — inclusief hashtags en optimale publicatietijden.',
        inbegrepen: [
          'Configuratie van de generator op uw stijl en tone of voice',
          'Koppeling met uw publicatietool',
          'Automatische inplanning (optioneel)',
          'Review na eerste maand',
        ],
        nietInbegrepen: [
          'Professionele beeldinhold (foto\'s, video\'s)',
          'Community management of reactiebeheer',
          'Betaalde advertenties op sociale media',
        ],
        integraties: ['Buffer', 'Hootsuite', 'Later', 'LinkedIn', 'Instagram', 'Facebook'],
      },
      {
        id: 'email-campagnes-nurture',
        titel: 'E-mailcampagnes & nurture flows',
        omschrijving:
          'Geautomatiseerde e-mailflows die prospects en klanten begeleiden van eerste interesse tot aankoop — met relevante boodschappen op het juiste moment.',
        voorWie:
          'Bedrijven met een e-maillijst die niet of te weinig gebruikt wordt, of die handmatig nieuwsbrieven versturen zonder structurele opvolgingsstrategie.',
        wanneer:
          'Wanneer contacten na een eerste interactie niet meer gecontacteerd worden, of wanneer uw e-mailcommunicatie niet aansluit bij de fase van de klantrelatie.',
        waarde: [
          'Hogere betrokkenheid bij uw e-maillijst',
          'Meer omzet uit bestaande contacten',
          'Automatische opwarming van koude contacten',
        ],
        hoeAI:
          'AI personaliseert e-mails op basis van het gedrag en profiel van de ontvanger: welke pagina\'s bezocht, welke mails geopend, in welke fase van het aankooptraject. Zo ontvangt iedereen een relevante boodschap.',
        inbegrepen: [
          'Opzet van minimaal 2 geautomatiseerde flows',
          'Copywriting van de e-mailtemplates',
          'Koppeling met uw e-mailplatform',
          'Resultatenrapportage na 30 dagen',
        ],
        nietInbegrepen: [
          'Volledige rebrand of visueel ontwerp van templates',
          'Beheer van betaalde e-mailcampagnes',
          'Opbouw van e-maillijst of leadgeneratiestrategie',
        ],
        integraties: ['Mailchimp', 'ActiveCampaign', 'Klaviyo', 'HubSpot', 'Brevo'],
      },
      {
        id: 'landingpage-copy-varianten',
        titel: 'Landingpage copy varianten',
        omschrijving:
          'AI genereert meerdere varianten van uw landingpage-teksten — afgestemd op verschillende doelgroepen of campagnedoelstellingen — zodat u sneller kunt testen wat het beste converteert.',
        voorWie:
          'Bedrijven die meerdere campagnes of doelgroepen bedienen en steeds nieuwe landingpage-teksten nodig hebben, maar geen full-time copywriter in huis hebben.',
        wanneer:
          'Bij het lanceren van nieuwe campagnes, bij seizoensgebonden promoties, of wanneer bestaande landingpages onvoldoende converteren.',
        waarde: [
          'Snellere time-to-market voor nieuwe campagnes',
          'Meerdere varianten beschikbaar voor A/B-testen',
          'Consistente toon doorheen al uw campagnes',
        ],
        hoeAI:
          'AI analyseert uw bestaande merkbelofte, doelgroep en concurrentie, en genereert op basis hiervan meerdere kopcombinaties — van headline tot CTA. U kiest en past aan.',
        inbegrepen: [
          'Minimaal 3 copy-varianten per landingpage',
          'Aanpassing aan uw merkstijl en tone of voice',
          'Korte briefing-sessie vooraf',
        ],
        nietInbegrepen: [
          'Technische implementatie op uw website',
          'Grafisch ontwerp of beeldwerk',
          'A/B-testbeheer en -analyse',
        ],
        integraties: ['Webflow', 'WordPress', 'Unbounce', 'Google Optimize', 'Notion'],
      },
    ],
  },

  /* ────────────────────────────────────────────────
     3. AI-CHATBOTS & KLANTCONTACT
  ──────────────────────────────────────────────── */
  {
    slug: 'chatbots-klantcontact',
    Icon: MessageSquare,
    title: 'AI-chatbots & Klantcontact',
    tagline: 'Altijd bereikbaar, nooit een vraag onbeantwoord',
    beschrijving:
      'Behandel klantvragen sneller en consistenter met AI-chatbots die uw tone of voice respecteren en uw team ontlasten.',
    hero: {
      probleem:
        'Klanten verwachten snelle antwoorden — ook buiten kantooruren. Voor KMO\'s en zelfstandigen is dat vrijwel onmogelijk zonder extra personeel. AI-chatbots maken schaalbare, kwalitatieve klantenservice mogelijk, 24 uur op 24, zonder dat elk bericht handmatig beantwoord hoeft te worden.',
      resultaten: [
        'Directe antwoorden op veelgestelde vragen, dag en nacht',
        'Consistent merkwaardige communicatie bij elk klantcontact',
        'Minder herhaalde vragen die uw team bereiken',
        'Snellere verwerking van klantvragen en -verzoeken',
        'Schaalbare klantenservice zonder extra aanwervingen',
      ],
    },
    werkwijze: [
      { stap: 'Analyse', beschrijving: 'We inventariseren uw meest voorkomende klantvragen en bestaande antwoorddocumenten.' },
      { stap: 'Ontwerp', beschrijving: 'We ontwerpen de gespreksflows, escalatiepunten en tone of voice.' },
      { stap: 'Bouw', beschrijving: 'We trainen de chatbot op uw content en configureren de integraties.' },
      { stap: 'Test', beschrijving: 'We testen met echte vragen en verfijnen de antwoorden.' },
      { stap: 'Optimalisatie', beschrijving: 'Op basis van gesprekslogs verfijnen we de chatbot doorlopend.' },
    ],
    scope: {
      wel: [
        'Chatbot getraind op uw eigen content en FAQ',
        'Integratie op uw website of in uw communicatietools',
        'Escalatieflows naar menselijke medewerkers',
        'Maandelijkse review van gesprekskwaliteit',
      ],
      niet: [
        'Volledige klantenservicestrategie of -training',
        'Telefonie of spraakassistenten',
        'Integratie met systemen zonder openbare API',
        'Juridisch bindende communicatie via de chatbot',
      ],
    },
    subdiensten: [
      {
        id: 'website-faq-chatbot',
        titel: 'Website FAQ chatbot',
        omschrijving:
          'Een chatbot die de meest gestelde vragen over uw bedrijf, diensten of producten automatisch en correct beantwoordt — getraind op uw eigen documentatie.',
        voorWie:
          'Bedrijven waarvan het supportteam steeds dezelfde vragen krijgt, of zelfstandigen die na kantooruren niet bereikbaar zijn maar toch vlot willen reageren.',
        wanneer:
          'Wanneer dezelfde vragen keer op keer terugkomen en uw team daar te veel tijd aan verliest, of wanneer bezoekers uw site verlaten zonder hun vraag beantwoord te krijgen.',
        waarde: [
          'Tot 60–70% van veelgestelde vragen automatisch beantwoord',
          'Minder belasting op uw team voor routinevragen',
          '24/7 bereikbaarheid voor bezoekers en klanten',
        ],
        hoeAI:
          'De chatbot wordt getraind op uw FAQ-documenten, websitecontent en interne kennisbank. Hij herkent de intentie achter een vraag — ook als die anders geformuleerd is dan in uw documentatie — en geeft een relevant, begrijpelijk antwoord.',
        inbegrepen: [
          'Opzet en training op basis van uw bestaande FAQ',
          'Integratie op uw website',
          'Escalatieflow naar e-mail of contactformulier',
          'Eerste review na 30 dagen op basis van gesprekslogs',
        ],
        nietInbegrepen: [
          'Opmaak of redactie van uw FAQ-documenten',
          'Meertalige configuratie (beschikbaar als meerwerk)',
          'Integratie met telefonie of callcentersystemen',
        ],
        integraties: ['Intercom', 'Crisp', 'Tidio', 'WordPress', 'Webflow', 'Notion'],
      },
      {
        id: 'support-intake-chatbot',
        titel: 'Support intake chatbot',
        omschrijving:
          'Een chatbot die binnenkomende supportverzoeken structureert: hij verzamelt de nodige informatie, categoriseert de vraag en stuurt het ticket door naar de juiste medewerker of flow.',
        voorWie:
          'Bedrijven met een klantenserviceteam dat veel tijd verliest aan het uitvragen van basisinformatie bij elk nieuw verzoek.',
        wanneer:
          'Wanneer supporttickets onvolledig binnenkomen, wanneer triage handmatig verloopt, of wanneer klanten lang moeten wachten op een eerste reactie.',
        waarde: [
          'Volledigere tickets van bij het begin — minder heen-en-weerverkeer',
          'Snellere eerste responstijd',
          'Automatische prioritering en routering van verzoeken',
        ],
        hoeAI:
          'De chatbot stelt gerichte vragen op basis van het type verzoek, herkent urgentie op basis van taalgebruik en context, en stuurt tickets automatisch door met alle nodige informatie — klaar voor uw team om op te handelen.',
        inbegrepen: [
          'Opzet van intakeflow per type verzoek',
          'Koppeling met uw helpdeskplatform of e-mailtool',
          'Categorisatie- en routeringslogica',
          'Documentatie voor intern gebruik',
        ],
        nietInbegrepen: [
          'Volledige helpdesk-inrichting of SLA-beheer',
          'Integratie met legacy-systemen zonder API',
          'Klantenservicetraining voor uw team',
        ],
        integraties: ['Zendesk', 'Freshdesk', 'Intercom', 'Notion', 'Slack', 'Gmail'],
      },
      {
        id: 'klantvraag-triage',
        titel: 'Klantvraag triage',
        omschrijving:
          'Een automatisch triagesysteem dat binnenkomende vragen en klachten classificeert op urgentie, type en verantwoordelijke — en ze doorstuurt naar de juiste persoon of flow.',
        voorWie:
          'Teams die dagelijks veel inbound communicatie verwerken (e-mail, chat, formulieren) en te veel tijd kwijt zijn aan het sorteren en doorsturen.',
        wanneer:
          'Wanneer niet-dringende vragen vertraging oplopen omdat ze in dezelfde wachtrij zitten als urgente verzoeken, of wanneer de verkeerde medewerker te vaak een vraag ontvangt die niet bij hen hoort.',
        waarde: [
          'Snellere afhandeling van urgente vragen',
          'Minder interne doorsturingen en misverstanden',
          'Overzichtelijkere workload voor uw team',
        ],
        hoeAI:
          'AI analyseert de inhoud van elk inkomend bericht, bepaalt het type vraag (klacht, informatieverzoek, technisch probleem, ...) en kent een urgentieniveau toe op basis van taalpatronen en context. Vervolgens stuurt het door naar de juiste persoon.',
        inbegrepen: [
          'Opzet van classificatielogica op maat',
          'Koppeling met uw e-mail of communicatietool',
          'Doorstuurregels per categorie',
          'Rapportage van volumes en types',
        ],
        nietInbegrepen: [
          'Volledig ticketingsysteem of helpdesk-inrichting',
          'Klantenserviceprocessen buiten digitale communicatie',
          'Integratie met telefonieplatformen',
        ],
        integraties: ['Gmail', 'Outlook', 'Zendesk', 'Freshdesk', 'Slack', 'HubSpot'],
      },
      {
        id: 'kennisbank-faq-assistent',
        titel: 'Kennisbank / FAQ assistent',
        omschrijving:
          'Een interne AI-assistent die getraind is op uw documentatie, procedures en productinfo — zodat medewerkers snel het juiste antwoord vinden zonder intern te hoeven zoeken.',
        voorWie:
          'Bedrijven met een groeiend team waar medewerkers steeds dezelfde procedurevragen stellen, of waar interne kennis verspreid staat over meerdere documenten en mappen.',
        wanneer:
          'Bij onboarding van nieuwe medewerkers, bij veranderende procedures, of wanneer teamleden te veel tijd verliezen aan het zoeken naar de juiste informatie.',
        waarde: [
          'Snellere onboarding van nieuwe medewerkers',
          'Minder herhaalde interne vragen aan senior medewerkers',
          'Consistente informatie doorheen het hele team',
        ],
        hoeAI:
          'De assistent wordt getraind op uw bestaande documenten (handleidingen, procedures, FAQ\'s, productsheets). Medewerkers stellen vragen in gewone taal en krijgen direct een bronverwezen antwoord — ook als de vraag anders geformuleerd is dan in de documentatie.',
        inbegrepen: [
          'Opzet en training op basis van uw bestaande documenten',
          'Integratie in Slack, Teams of uw intranet',
          'Bronverwijzingen bij elk antwoord',
          'Update-procedure voor nieuwe documenten',
        ],
        nietInbegrepen: [
          'Redactie of herstructurering van uw bestaande documentatie',
          'Meertalige configuratie (beschikbaar als meerwerk)',
          'Integratie met fysieke archieven of papieren documenten',
        ],
        integraties: ['Notion', 'Confluence', 'SharePoint', 'Slack', 'Microsoft Teams', 'Google Drive'],
      },
    ],
  },

  /* ────────────────────────────────────────────────
     4. SALESOPVOLGING & CALLASSISTENTEN
  ──────────────────────────────────────────────── */
  {
    slug: 'salesopvolging',
    Icon: FileText,
    title: 'Salesopvolging & Callassistenten',
    tagline: 'Meer deals sluiten, minder administratie',
    beschrijving:
      'Automatiseer de opvolging na gesprekken en vergaderingen — zodat uw salesteam focust op contact maken, niet op noteren.',
    hero: {
      probleem:
        'Na elk verkoopgesprek of klantmeeting verdwijnt kostbare tijd in het uitschrijven van notities, het bijwerken van het CRM en het opstellen van opvolg-e-mails. AI kan dat werk overnemen — zodat uw team meer gesprekken kan voeren en minder tijd kwijt is aan administratie.',
      resultaten: [
        'CRM automatisch bijgehouden na elk gesprek',
        'Snellere en consistentere opvolging van prospects',
        'Minder administratief werk per medewerker',
        'Betere voorbereiding op vergaderingen en calls',
        'Inzicht in welke stappen in het salesproces werken',
      ],
    },
    werkwijze: [
      { stap: 'Analyse', beschrijving: 'We brengen uw huidig salesproces in kaart: tools, stappen en knelpunten.' },
      { stap: 'Ontwerp', beschrijving: 'We ontwerpen de automatiseringsflows op maat van uw salesmethode.' },
      { stap: 'Bouw', beschrijving: 'We bouwen de integraties en configureren de AI-modellen.' },
      { stap: 'Test', beschrijving: 'We testen met echte gesprekken en verfijnen de output.' },
      { stap: 'Optimalisatie', beschrijving: 'Maandelijkse review van de kwaliteit van samenvattingen en opvolgingen.' },
    ],
    scope: {
      wel: [
        'Automatisering van post-call administratie',
        'Integratie met uw CRM en agendatool',
        'Gepersonaliseerde opvolgcommunicatie',
        'Samenvattingen en actiepunten',
      ],
      niet: [
        'Salestraining of -coaching',
        'Strategische herziening van uw salesproces',
        'Telefonieplatform of callcentersoftware',
        'Garanties op hogere omzet of conversiecijfers',
      ],
    },
    subdiensten: [
      {
        id: 'sales-follow-up-automatisatie',
        titel: 'Sales follow-up automatisatie',
        omschrijving:
          'Automatische opvolgmails en taken na verkoopgesprekken — gepersonaliseerd op basis van wat besproken werd, zonder dat uw team dit manueel hoeft op te stellen.',
        voorWie:
          'Salesteams en zelfstandigen die na gesprekken te laat of te generiek opvolgen, of waarbij opvolging simpelweg vergeten wordt door drukte.',
        wanneer:
          'Wanneer deals verloren gaan omdat de opvolging te traag verloopt, of wanneer de kwaliteit van opvolgberichten te sterk varieert tussen medewerkers.',
        waarde: [
          'Snellere en consistentere opvolging na elk gesprek',
          'Gepersonaliseerde berichten gebaseerd op het gesprek',
          'Minder deals die verloren gaan door te late reactie',
        ],
        hoeAI:
          'AI analyseert de gespreksnotities of -transcriptie en stelt automatisch een gepersonaliseerde opvolgmail op — met de juiste toon, de besproken punten en de afgesproken volgende stap. U keurt goed en verstuurt met één klik.',
        inbegrepen: [
          'Opzet van opvolgflow na gesprekken',
          'Koppeling met uw CRM en e-mailtool',
          'Templates per fase van het salestraject',
          'Goedkeuringsflow voor uw team',
        ],
        nietInbegrepen: [
          'Volledige salesstrategie of scriptontwikkeling',
          'Beheer van betaalde advertentiecampagnes',
          'Meertalige configuratie (beschikbaar als meerwerk)',
        ],
        integraties: ['HubSpot', 'Pipedrive', 'Salesforce', 'Gmail', 'Outlook', 'Calendly'],
      },
      {
        id: 'post-call-samenvattingen',
        titel: 'Post-call samenvattingen',
        omschrijving:
          'Automatische samenvattingen van verkoopgesprekken en vergaderingen — met actiepunten, beslissingen en volgende stappen — klaar in uw CRM of gedeelde werkruimte.',
        voorWie:
          'Iedereen die regelmatig klantgesprekken voert en te veel tijd verliest aan het handmatig uitschrijven van notities achteraf.',
        wanneer:
          'Wanneer notities onvolledig zijn of te lang op zich laten wachten, of wanneer afspraken uit gesprekken niet consequent worden opgevolgd.',
        waarde: [
          'Tijdsbesparing van 15–30 minuten per gesprek',
          'Volledigere en consistentere gespreksverslagen',
          'Actiepunten direct beschikbaar voor opvolging',
        ],
        hoeAI:
          'AI transcribeert het gesprek en filtert de relevante informatie eruit: besproken onderwerpen, genomen beslissingen, toegewezen actiepunten en de afgesproken volgende stap. De samenvatting verschijnt automatisch in uw CRM of werkruimte.',
        inbegrepen: [
          'Opzet van transcriptie- en samenvattingsflow',
          'Koppeling met uw vergader- en CRM-tool',
          'Structurering van output in uw gewenst format',
          'Review na eerste 10 gesprekken',
        ],
        nietInbegrepen: [
          'Opname van fysieke vergaderingen of telefoongesprekken (enkel online)',
          'Volledige CRM-herinrichting',
          'Meertalige transcriptie (beschikbaar als meerwerk)',
        ],
        integraties: ['Zoom', 'Microsoft Teams', 'Google Meet', 'HubSpot', 'Notion', 'Pipedrive'],
      },
      {
        id: 'crm-notities-automatisch',
        titel: 'CRM-notities automatisch invullen',
        omschrijving:
          'Na elk gesprek of contactmoment worden de relevante CRM-velden automatisch bijgewerkt — zonder dat uw team dit handmatig hoeft in te geven.',
        voorWie:
          'Salesteams waarvan het CRM structureel onvolledig of verouderd is omdat medewerkers te weinig tijd hebben om het bij te houden.',
        wanneer:
          'Wanneer het CRM niet weerspiegelt wat er in de pipeline speelt, of wanneer medewerkers te veel tijd kwijt zijn aan datainvoer na gesprekken.',
        waarde: [
          'CRM altijd up-to-date zonder manuele invoer',
          'Betere rapportage en pipelineoverzicht',
          'Minder administratielast voor uw salesteam',
        ],
        hoeAI:
          'AI extraheert relevante gegevens uit gesprekstranscripties, e-mails en formulieren en vult automatisch de juiste CRM-velden in: contactgegevens, dealfase, besproken producten, volgende actie en datum.',
        inbegrepen: [
          'Opzet van extractie- en invullogica',
          'Koppeling met uw CRM',
          'Mapping van gegevens naar uw veldstructuur',
          'Validatiecheck en foutrapportage',
        ],
        nietInbegrepen: [
          'Volledige CRM-migratie of -herinrichting',
          'Datakwaliteitsaudit van historische records',
          'Integratie met systemen zonder API',
        ],
        integraties: ['HubSpot', 'Pipedrive', 'Salesforce', 'Notion', 'Airtable'],
      },
      {
        id: 'meeting-prep-briefs',
        titel: 'Meeting prep briefs',
        omschrijving:
          'Automatisch gegenereerde gespreksvoorbereiding vóór elk klantcontact: relevante informatie uit het CRM, vorige interacties, openstaande punten en gesprekshandleiding.',
        voorWie:
          'Salesmedewerkers en consultants die meerdere klantgesprekken per dag voeren en te weinig tijd hebben om elke afspraak grondig voor te bereiden.',
        wanneer:
          'Wanneer medewerkers onvoldoende voorbereid in gesprekken stappen, of wanneer relevante klantinformatie te verspreid staat om snel te raadplegen.',
        waarde: [
          'Betere voorbereiding in minder tijd',
          'Professionelere gespreksvoering',
          'Meer relevant en persoonlijk contact met klanten',
        ],
        hoeAI:
          'AI verzamelt automatisch alle relevante klantinformatie voor de afspraak: vorige gesprekken, openstaande offertes, contacthistoriek en relevante context. Het genereert een beknopte brief die klaar staat in uw agenda of CRM vóór het gesprek.',
        inbegrepen: [
          'Opzet van automatische briefflow',
          'Koppeling met uw agenda en CRM',
          'Format op maat van uw gespreksstructuur',
          'Review na eerste 20 briefs',
        ],
        nietInbegrepen: [
          'Externe data buiten uw eigen CRM en tools',
          'Volledige salesscripts of gesprekscoaching',
          'Integratie met telefonieplatformen',
        ],
        integraties: ['Google Calendar', 'Outlook', 'HubSpot', 'Pipedrive', 'Salesforce', 'Notion'],
      },
    ],
  },

  /* ────────────────────────────────────────────────
     5. CLIENT ONBOARDING & BACKOFFICE AUTOMATISATIE
  ──────────────────────────────────────────────── */
  {
    slug: 'onboarding-backoffice',
    Icon: Workflow,
    title: 'Client onboarding & Backoffice',
    tagline: 'Nieuwe klanten vlekkeloos verwelkomen, backoffice op autopilot',
    beschrijving:
      'Automatiseer de administratieve kant van uw bedrijf — van eerste intakeformulier tot interne taakcreatie — zodat u uw tijd besteedt aan werk dat er écht toe doet.',
    hero: {
      probleem:
        'Elke nieuwe klant meenemen kost tijd: formulieren, welkomstmails, contracten, checklists, interne taken aanmaken. Als dat handmatig verloopt, is het tijdrovend, foutgevoelig en inconsistent. AI en automatisering maken het mogelijk om dit proces schaalbaar, professioneel en grotendeels handsfree te organiseren.',
      resultaten: [
        'Elke nieuwe klant een consistente, professionele onboarding-ervaring',
        'Minder manuele administratie bij elke nieuwe samenwerking',
        'Interne taken automatisch aangemaakt en toegewezen',
        'Minder fouten door manueel kopiëren van gegevens',
        'Meer schaalbaarheid zonder bijkomende administratieve last',
      ],
    },
    werkwijze: [
      { stap: 'Analyse', beschrijving: 'We brengen uw huidig onboarding- en backofficeproces stap voor stap in kaart.' },
      { stap: 'Ontwerp', beschrijving: 'We ontwerpen de geautomatiseerde flows en trigger-logica.' },
      { stap: 'Bouw', beschrijving: 'We bouwen de automatiseringen en koppelen ze aan uw tools.' },
      { stap: 'Test', beschrijving: 'We testen het proces met een echte onboarding en stellen bij.' },
      { stap: 'Optimalisatie', beschrijving: 'Periodieke review op basis van feedback van uw team en klanten.' },
    ],
    scope: {
      wel: [
        'Automatisering van uw bestaande onboardingproces',
        'Integratie met uw projectmanagement- en communicatietools',
        'Documentgeneratie op basis van klantdata',
        'Interne taakcreatie en toewijzing',
      ],
      niet: [
        'Juridisch bindende contracten opstellen (raadpleeg uw adviseur)',
        'Volledige bedrijfsprocesinrichting of BPM-consulting',
        'Integratie met systemen zonder openbare API',
        'Facturatie of boekhoudsoftware (tenzij specifiek overeengekomen)',
      ],
    },
    subdiensten: [
      {
        id: 'automatische-client-onboarding',
        titel: 'Automatische client onboarding flow',
        omschrijving:
          'Een geautomatiseerde onboardingflow die wordt getriggerd zodra een nieuwe klant tekent of betaalt — met welkomstmails, checklists, taakaanmaak en toegangslinks die automatisch worden verzonden.',
        voorWie:
          'Dienstverleners en consultants die bij elke nieuwe klant dezelfde onboardingstappen doorlopen en dit handmatig, tijdrovend en inconsistent verloopt.',
        wanneer:
          'Wanneer nieuwe klanten te lang wachten op welkomstcommunicatie of toegang tot documenten, of wanneer uw team regelmatig stappen vergeet bij de opstart van een nieuwe samenwerking.',
        waarde: [
          'Professionele eerste indruk bij elke nieuwe klant',
          'Besparing van 2–4 uur administratie per nieuwe klant',
          'Consistentie ongeacht drukte of personeelswissels',
        ],
        hoeAI:
          'Zodra de trigger-actie plaatsvindt (ondertekend contract, betaling, ingevuld formulier), start de flow automatisch: AI personaliseert de welkomstcommunicatie op basis van klantgegevens en stuurt alle documenten en toegangslinks op het juiste moment.',
        inbegrepen: [
          'Opzet van onboardingflow met minimaal 5 stappen',
          'Koppeling met uw CRM, e-mailtool en projectmanagementtool',
          'Personalisatie van communicatie op basis van klantdata',
          'Documentatie van de flow voor intern gebruik',
        ],
        nietInbegrepen: [
          'Juridisch advies over contractinhoud',
          'Grafisch ontwerp van onboardingdocumenten',
          'Integratie met boekhoud- of facturatiesoftware (op aanvraag)',
        ],
        integraties: ['HubSpot', 'Notion', 'Asana', 'Gmail', 'Docusign', 'Stripe', 'Slack'],
      },
      {
        id: 'intakeformulieren-dataverzameling',
        titel: 'Intakeformulieren & dataverzameling',
        omschrijving:
          'Slimme intakeformulieren die klantgegevens verzamelen en automatisch doorsturen naar uw CRM, projecttool of boekhouding — zonder handmatig kopiëren.',
        voorWie:
          'Bedrijven die bij elke nieuwe klant of aanvraag dezelfde basisgegevens opvragen en die vervolgens handmatig in meerdere systemen invoeren.',
        wanneer:
          'Wanneer er te veel tijd verloren gaat aan datainvoer, of wanneer gegevens niet consistent overeenkomen in uw verschillende systemen.',
        waarde: [
          'Geen dubbele datainvoer meer in meerdere systemen',
          'Foutloze overdracht van klantgegevens',
          'Snellere start van samenwerking na ontvangst van formulier',
        ],
        hoeAI:
          'Het systeem verwerkt de ingevulde formulierdata automatisch: het vult de juiste velden in uw CRM in, maakt een projectrecord aan, stuurt een bevestiging naar de klant en triggert de eerste stap van de onboardingflow.',
        inbegrepen: [
          'Opzet van intakeformulier op maat',
          'Koppeling met uw CRM en projecttool',
          'Automatische bevestigingsmail naar de klant',
          'Foutvalidatie en datakwaliteitscontrole',
        ],
        nietInbegrepen: [
          'Juridisch bindende formulieren of akkoordverklaringen',
          'Meertalige formulieren (beschikbaar als meerwerk)',
          'Papieren of fysieke intakeprocessen',
        ],
        integraties: ['Typeform', 'Tally', 'HubSpot', 'Notion', 'Airtable', 'Gmail', 'Pipedrive'],
      },
      {
        id: 'interne-taakcreatie-handoff',
        titel: 'Interne taakcreatie en handoff',
        omschrijving:
          'Automatische aanmaak van interne taken en projectstappen wanneer een nieuwe klant of aanvraag binnenkomt — toegewezen aan de juiste medewerker op het juiste moment.',
        voorWie:
          'Teams die bij elke nieuwe klant of project dezelfde interne stappen moeten doorlopen en dit handmatig plannen en toewijzen.',
        wanneer:
          'Wanneer taken te laat worden aangemaakt, wanneer de handoff tussen medewerkers onduidelijk is, of wanneer stappen worden vergeten door de dagelijkse drukte.',
        waarde: [
          'Elk project start gestructureerd op, zonder manuele opstart',
          'Duidelijke verantwoordelijkheden van bij het begin',
          'Minder vergeten stappen in de projectopstart',
        ],
        hoeAI:
          'Op basis van het type klant of project bepaalt het systeem welke takentemplates van toepassing zijn, maakt de taken aan in uw projecttool en wijst ze toe aan de juiste medewerker op basis van beschikbaarheid of expertise.',
        inbegrepen: [
          'Opzet van takentemplates per projecttype',
          'Koppeling met uw projectmanagementtool',
          'Toewijzingslogica op maat',
          'Notificaties bij nieuwe taken',
        ],
        nietInbegrepen: [
          'Volledige projectmethodologie of -coaching',
          'Tijdregistratie of facturatiekoppeling (op aanvraag)',
          'Integratie met fysieke planningssystemen',
        ],
        integraties: ['Asana', 'Monday.com', 'Notion', 'Trello', 'ClickUp', 'Slack', 'HubSpot'],
      },
      {
        id: 'document-email-automatisatie',
        titel: 'Document- en e-mailautomatisatie',
        omschrijving:
          'Automatische generatie en verzending van terugkerende documenten en e-mails: samenvattingen, bevestigingen, herinneringen, rapportages — op het juiste moment, met de juiste inhoud.',
        voorWie:
          'Bedrijven die regelmatig dezelfde soort documenten of e-mails produceren en dit handmatig tijdrovend is — zoals offertes, rapporten, reminders of statusupdates.',
        wanneer:
          'Wanneer terugkerende documenten en communicatie te veel tijd vragen van uw team, of wanneer de kwaliteit of timing onvoldoende consistent is.',
        waarde: [
          'Tijdsbesparing op repetitieve documenttaken',
          'Consistentere communicatie richting klanten',
          'Minder risico op vergeten mails of documenten',
        ],
        hoeAI:
          'Op basis van triggers (projectstatus, deadline, klantactie) genereert het systeem automatisch het juiste document of de juiste e-mail — met de relevante gegevens ingevuld vanuit uw CRM of projecttool — en verstuurt of deelt het op het juiste moment.',
        inbegrepen: [
          'Opzet van minimaal 3 document- of e-mailflows',
          'Koppeling met uw CRM, projecttool en e-mailplatform',
          'Templates op maat van uw merk en processen',
          'Review na eerste maand gebruik',
        ],
        nietInbegrepen: [
          'Juridisch bindende documentinhoud',
          'Facturatie of boekhoudintegratie (op aanvraag)',
          'Grafisch ontwerp van documenten',
        ],
        integraties: ['Gmail', 'Outlook', 'Notion', 'HubSpot', 'Google Docs', 'Docusign', 'Airtable'],
      },
    ],
  },
]
