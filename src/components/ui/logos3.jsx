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

   Met een handvol logo's oogt een oneindig scrollende carrousel schraal;
   `autoScroll` staat daarom standaard uit en toont een stilstaande rij.
   Zet hem aan zodra er meer logo's zijn.                              */

const STANDAARD_LOGOS = [
  { id: 'paddle', description: 'paddle.be', image: '/logos/klanten/paddle.svg', className: 'h-7 w-auto' },
  { id: 'mediatales', description: 'MediaTales', image: '/logos/klanten/mediatales.png', className: 'h-11 w-auto' },
  { id: 'vinkmans', description: 'Vinkmans', image: '/logos/klanten/vinkmans.svg', className: 'h-6 w-auto' },
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
      className={`${logo.className} opacity-60 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0`}
    />
  )
}

const Logos3 = ({ heading = 'Zij werken met mij', logos = STANDAARD_LOGOS, autoScroll = false }) => {
  return (
    <section className="border-t border-charcoal/10 bg-cream">
      <div className="mx-auto max-w-4xl px-6 py-16 md:px-8 md:py-20">
        <h2 className="font-mono-brand text-xs uppercase tracking-[0.18em] text-charcoal/40">
          {heading}
        </h2>

        {autoScroll ? (
          <div className="relative mt-12 flex items-center justify-center">
            <Carousel opts={{ loop: true }} plugins={[AutoScroll({ playOnInit: true })]}>
              <CarouselContent className="ml-0">
                {logos.map((logo) => (
                  <CarouselItem
                    key={logo.id}
                    className="flex basis-1/3 justify-center pl-0 sm:basis-1/4 md:basis-1/5"
                  >
                    <div className="mx-10 flex shrink-0 items-center justify-center">
                      <LogoBeeld logo={logo} />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            {/* cream-fade aan de randen */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-cream to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-cream to-transparent" />
          </div>
        ) : (
          <div className="mt-12 flex flex-wrap items-center gap-x-14 gap-y-10 sm:gap-x-20">
            {logos.map((logo) => (
              <LogoBeeld key={logo.id} logo={logo} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export { Logos3 }
