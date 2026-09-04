import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import App from './App.jsx'

/* Server-entry voor de prerender-stap.
   ------------------------------------------------------------------
   Sinds er meerdere routes zijn, moet hier een StaticRouter omheen met
   dezelfde locatie als de pagina die geprerenderd wordt. Zonder dat
   krijgt /bedankt de HTML van de homepage en klapt de hydratie om.   */
export function render(locatie = '/') {
  return renderToString(
    <StaticRouter location={locatie}>
      <App />
    </StaticRouter>
  )
}
