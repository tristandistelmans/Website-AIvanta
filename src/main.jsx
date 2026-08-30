import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

const wortel = document.getElementById('root')

const boom = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

/* De build prerendert de pagina, dus staat er al HTML in #root. Die
   hergebruiken we via hydrateRoot in plaats van hem weg te gooien:
   de bezoeker ziet de tekst meteen, ook voor de JavaScript geladen is.
   Bij een lege root (bijvoorbeeld in de dev-server) valt het terug op
   de gewone createRoot. */
if (wortel.hasChildNodes()) {
  hydrateRoot(wortel, boom)
} else {
  createRoot(wortel).render(boom)
}
