import { renderToString } from 'react-dom/server'
import App from './App.jsx'

/* Server-entry voor de prerender-stap.
   ------------------------------------------------------------------
   App bevat zelf geen routes meer, en BrowserRouter zet geen eigen HTML
   in de uitvoer. Daarom kan App hier rechtstreeks gerenderd worden en
   is de opmaak identiek aan wat de browser bij hydratie verwacht.

   Komen er later wel routes bij, dan hoort hier een StaticRouter omheen
   met dezelfde locatie als de pagina die geprerenderd wordt.          */
export function render() {
  return renderToString(<App />)
}
