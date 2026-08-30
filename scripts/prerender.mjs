/* Prerender — vult dist/index.html met de echte HTML van de pagina.
   ------------------------------------------------------------------
   Zonder deze stap levert Vite een lege <div id="root"></div> op, en
   dus een lege pagina voor iedere crawler die geen JavaScript uitvoert.
   Googlebot rendert wel, maar in een tweede, uitgestelde ronde; Bing,
   sociale scrapers en de meeste AI-crawlers doen het helemaal niet.

   Draait na de client-build en de SSR-build, en schrijft het resultaat
   terug in dist/index.html.                                            */
import { readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { pathToFileURL } from 'node:url'

const wortel = process.cwd()
const htmlPad = resolve(wortel, 'dist/index.html')
const ssrPad = pathToFileURL(resolve(wortel, 'dist-ssr/entry-server.js')).href

const { render } = await import(ssrPad)
const opmaak = render()

const html = readFileSync(htmlPad, 'utf-8')
const doel = '<div id="root"></div>'

if (!html.includes(doel)) {
  console.error('prerender: <div id="root"></div> niet gevonden in dist/index.html')
  process.exit(1)
}

writeFileSync(htmlPad, html.replace(doel, `<div id="root">${opmaak}</div>`), 'utf-8')

const woorden = opmaak.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim().split(' ').length
console.log(`prerender: ${opmaak.length} tekens HTML, ${woorden} woorden tekst in dist/index.html`)
