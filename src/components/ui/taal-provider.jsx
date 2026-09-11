import { useEffect } from 'react'

import { useTaal } from '@/lib/taal'

/* Houdt het lang-attribuut van de pagina gelijk aan de gekozen taal.
   Rendert verder niets eigens; het is puur een koppeling met de DOM.
   Staat los van de hook, omdat een bestand dat zowel componenten als
   functies exporteert fast refresh breekt.                            */

export default function TaalProvider({ children }) {
  const { taal } = useTaal()

  useEffect(() => {
    document.documentElement.lang = taal
  }, [taal])

  return children
}
