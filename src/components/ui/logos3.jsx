import AutoScroll from 'embla-carousel-auto-scroll'

import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'

/* Logos3
   ------------------------------------------------------------------
   Aangepast t.o.v. de aangeleverde broncode, omdat dit project geen
   TypeScript, geen shadcn en Tailwind v3 (niet v4) gebruikt:

   - .tsx -> .jsx, interfaces vervangen door defaults
   - "use client" weg (Next.js-directive, betekenisloos in Vite)
   - `bg-linear-to-r` is v4-syntax en bestaat niet in v3 -> bg-gradient-to-r
   - `from-background` bestaat hier niet -> from-cream
   - py-64 (256px boven en onder) teruggebracht naar de sectiemaat die
     de rest van de pagina gebruikt
   - `container` vervangen door dezelfde max-w-4xl als de andere secties

   De rij draait doorlopend, ook op mobiel — daar wordt niets onder
   elkaar gezet. Met maar drie logo's zijn er te weinig slides om de
   lus van embla vloeiend te laten sluiten, dus de reeks wordt een
   aantal keer herhaald (zie HERHALINGEN).                             */

// Hoogtes per logo, zodat ze optisch even zwaar wegen: een vierkant
// beeldmerk heeft meer hoogte nodig dan een breed woordmerk om even
// groot te ogen.
const STANDAARD_LOGOS = [
  { id: 'paddle', description: 'paddle.be', image: '/logos/klanten/paddle.png', className: 'h-7 w-auto md:h-8' },
  { id: 'mediatales', description: 'MediaTales', image: '/logos/klanten/mediatales.png', className: 'h-16 w-auto md:h-20' },
  { id: 'vinkmans', description: 'Vinkmans', image: '/logos/klanten/vinkmans.png', className: 'h-4 w-auto md:h-5' },
]

function LogoBeeld({ logo }) {
  return (
    <img
      src={logo.image}
      alt={logo.description}
      loading="lazy"
      // Ontbreekt het bestand, dan verdwijnt het logo uit de rij in
      // plaats van als gebroken beeld te blijven staan.
      onError={(e) => {
        e.currentTarget.style.display = 'none'
      }}
      className={logo.className}
    />
  )
}

// Embla sluit de lus alleen vloeiend als er meer slides zijn dan er in
// beeld passen. Drie logo's is te weinig, dus de reeks wordt herhaald.
const HERHALINGEN = 5

const Logos3 = ({ heading = 'Klanten', logos = STANDAARD_LOGOS }) => {
  const reeks = Array.from({ length: HERHALINGEN }).flatMap((_, ronde) =>
    logos.map((logo) => ({ ...logo, sleutel: `${logo.id}-${ronde}` }))
  )

  return (
    <section id="klanten" className="border-t border-charcoal/10 bg-cream">
      <div className="py-16 md:py-20">
        <h2 className="mx-auto max-w-4xl px-6 font-mono-brand text-xs uppercase tracking-[0.18em] text-charcoal/40 md:px-8">
          {heading}
        </h2>

        <div className="relative mt-12 flex items-center justify-center">
          <Carousel
            className="w-full"
            opts={{ loop: true, dragFree: true, align: 'start', containScroll: false }}
            plugins={[
              AutoScroll({
                playOnInit: true,
                speed: 0.9,
                startDelay: 0,
                stopOnInteraction: false,
                stopOnMouseEnter: false,
                stopOnFocusIn: false,
              }),
            ]}
          >
            <CarouselContent className="ml-0">
              {reeks.map((logo) => (
                <CarouselItem
                  key={logo.sleutel}
                  className="flex basis-1/2 justify-center pl-0 sm:basis-1/3 md:basis-1/4"
                >
                  <div className="mx-6 flex h-20 shrink-0 items-center justify-center md:mx-10">
                    <LogoBeeld logo={logo} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* cream-fade aan de randen */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-cream to-transparent md:w-24" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-cream to-transparent md:w-24" />
        </div>
      </div>
    </section>
  )
}

export { Logos3 }
