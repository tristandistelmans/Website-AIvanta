/* Prerender — schrijft elke route als echte HTML naar dist/.
   ------------------------------------------------------------------
   Zonder deze stap levert Vite een lege <div id="root"></div> op, en
   dus een lege pagina voor iedere crawler die geen JavaScript uitvoert.

   Elke route krijgt een eigen bestand. /bedankt wordt via vercel.json
   naar bedankt.html gestuurd; zou die URL de HTML van de homepage
   krijgen, dan rendert de browser eerst de homepage en klapt de
   hydratie om zodra de router de juiste pagina kiest.                 */
import { readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { pathToFileURL } from 'node:url'

const wortel = process.cwd()
const sjabloonPad = resolve(wortel, 'dist/index.html')
const ssrPad = pathToFileURL(resolve(wortel, 'dist-ssr/entry-server.js')).href

const ROUTES = [
  { pad: '/', bestand: 'index.html' },
  {
    pad: '/bedankt',
    bestand: 'bedankt.html',
    titel: 'Bedankt | Ainova',
    // Anders erft de bedankpagina de deelteksten van de homepage.
    meta: {
      description: 'Bedankt voor uw bericht. Ik neem binnen 24 uur contact op.',
      'og:title': 'Bedankt | Ainova',
      'og:description': 'Bedankt voor uw bericht. Ik neem binnen 24 uur contact op.',
      'og:url': 'https://ainova.be/bedankt',
      'twitter:title': 'Bedankt | Ainova',
      'twitter:description': 'Bedankt voor uw bericht. Ik neem binnen 24 uur contact op.',
    },
    canonical: 'https://ainova.be/bedankt',
    // Een bedankpagina hoort niet in de zoekresultaten: hij is alleen
    // zinvol na het versturen van het formulier.
    extraHead: '<meta name="robots" content="noindex, nofollow" />',
  },
]

const { render } = await import(ssrPad)
const sjabloon = readFileSync(sjabloonPad, 'utf-8')
const doel = '<div id="root"></div>'

if (!sjabloon.includes(doel)) {
  console.error('prerender: <div id="root"></div> niet gevonden in dist/index.html')
  process.exit(1)
}

for (const route of ROUTES) {
  const opmaak = render(route.pad)
  let html = sjabloon.replace(doel, `<div id="root">${opmaak}</div>`)

  if (route.titel) {
    html = html.replace(/<title>[^<]*<\/title>/, `<title>${route.titel}</title>`)
  }
  for (const [naam, waarde] of Object.entries(route.meta ?? {})) {
    const attribuut = naam.startsWith('og:') ? 'property' : 'name'
    const patroon = new RegExp(`<meta ${attribuut}="${naam}" content="[^"]*" />`)
    if (!patroon.test(html)) {
      console.error(`prerender: meta ${naam} niet gevonden in het sjabloon`)
      process.exit(1)
    }
    html = html.replace(patroon, `<meta ${attribuut}="${naam}" content="${waarde}" />`)
  }

  if (route.canonical) {
    html = html.replace(/<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${route.canonical}" />`)
  }

  if (route.extraHead) {
    html = html.replace('</head>', `  ${route.extraHead}\n  </head>`)
  }

  writeFileSync(resolve(wortel, 'dist', route.bestand), html, 'utf-8')

  const woorden = opmaak.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim().split(' ').length
  console.log(`prerender: ${route.pad} -> dist/${route.bestand} (${opmaak.length} tekens, ${woorden} woorden)`)
}
