/* Vorm van de bloem — gedeeld tussen het merkteken en het grote object.
   Staat los van het component, omdat een bestand dat zowel componenten
   als constanten exporteert fast refresh breekt. */

// viewBox 0 0 100 100, hart op 50,50.
// Zes blaadjes, om de 60 graden. Halve breedte 10 op een straal van 28:
// ruim binnen de 30 graden die elk blad krijgt, zodat er diepe inkepingen
// tussen de blaadjes blijven. Breder maken geeft een madeliefje in plaats
// van het scherpe merkteken.
export const BLAD =
  'M50 3 C56.2 3 60.8 11 60.8 22 C60.8 33 55.8 43 50 50 C44.2 43 39.2 33 39.2 22 C39.2 11 43.8 3 50 3 Z'

export const HOEKEN = [0, 60, 120, 180, 240, 300]
