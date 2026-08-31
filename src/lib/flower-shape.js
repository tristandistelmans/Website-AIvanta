/* Vorm van de bloem — gedeeld tussen het merkteken en het grote object.
   Staat los van het component, omdat een bestand dat zowel componenten
   als constanten exporteert fast refresh breekt. */

// viewBox 0 0 100 100, hart op 50,50. Smal blad met een scherpe punt en
// een diepe inkeping tussen de bladeren, zodat het merkteken ook klein
// nog als bloem leest in plaats van als vlek.
export const BLAD =
  'M50 2 C54.5 12 58 20.5 58 28.5 C58 38 54.5 44.5 50 50 C45.5 44.5 42 38 42 28.5 C42 20.5 45.5 12 50 2 Z'

export const HOEKEN = [0, 45, 90, 135, 180, 225, 270, 315]
