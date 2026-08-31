/* Vorm van de bloem — gedeeld tussen het merkteken en het grote object.
   Staat los van het component, omdat een bestand dat zowel componenten
   als constanten exporteert fast refresh breekt. */

// viewBox 0 0 100 100, hart op 50,50. Vol blad met ronde punt, smal
// toelopend naar het hart; acht daarvan vormen samen de bloem.
export const BLAD =
  'M50 3 C55 3 58.6 9 59.6 17 C60.6 25.5 57 40 50 50 C43 40 39.4 25.5 40.4 17 C41.4 9 45 3 50 3 Z'

export const HOEKEN = [0, 45, 90, 135, 180, 225, 270, 315]
