import * as React from 'react'
import useEmblaCarousel from 'embla-carousel-react'

import { cn } from '@/lib/utils'

/* Carousel — shadcn-carousel, omgezet naar JSX
   ------------------------------------------------------------------
   Bewust ingekort t.o.v. het origineel: CarouselPrevious en
   CarouselNext zijn weggelaten. Die leunen op de shadcn Button, die
   op zijn beurt @radix-ui/react-slot en class-variance-authority
   nodig heeft. Logos3 gebruikt geen knoppen, dus dat zijn twee
   afhankelijkheden die anders voor niets in het project zouden komen.

   Voeg ze alsnog toe zodra er ergens een bediende carrousel komt.    */

const CarouselContext = React.createContext(null)

function useCarousel() {
  const context = React.useContext(CarouselContext)
  if (!context) throw new Error('useCarousel moet binnen een <Carousel /> gebruikt worden')
  return context
}

const Carousel = React.forwardRef(function Carousel(
  { orientation = 'horizontal', opts, setApi, plugins, className, children, ...props },
  ref
) {
  const [carouselRef, api] = useEmblaCarousel(
    { ...opts, axis: orientation === 'horizontal' ? 'x' : 'y' },
    plugins
  )
  const [canScrollPrev, setCanScrollPrev] = React.useState(false)
  const [canScrollNext, setCanScrollNext] = React.useState(false)

  const onSelect = React.useCallback((emblaApi) => {
    if (!emblaApi) return
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
  }, [])

  const scrollPrev = React.useCallback(() => api?.scrollPrev(), [api])
  const scrollNext = React.useCallback(() => api?.scrollNext(), [api])

  const handleKeyDown = React.useCallback(
    (event) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        scrollPrev()
      } else if (event.key === 'ArrowRight') {
        event.preventDefault()
        scrollNext()
      }
    },
    [scrollPrev, scrollNext]
  )

  React.useEffect(() => {
    if (!api || !setApi) return
    setApi(api)
  }, [api, setApi])

  React.useEffect(() => {
    if (!api) return
    onSelect(api)
    api.on('reInit', onSelect)
    api.on('select', onSelect)
    return () => {
      api?.off('select', onSelect)
    }
  }, [api, onSelect])

  return (
    <CarouselContext.Provider
      value={{
        carouselRef,
        api,
        opts,
        orientation: orientation || (opts?.axis === 'y' ? 'vertical' : 'horizontal'),
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext,
      }}
    >
      <div
        ref={ref}
        onKeyDownCapture={handleKeyDown}
        className={cn('relative', className)}
        role="region"
        aria-roledescription="carousel"
        {...props}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  )
})

const CarouselContent = React.forwardRef(function CarouselContent({ className, ...props }, ref) {
  const { carouselRef, orientation } = useCarousel()
  return (
    <div ref={carouselRef} className="overflow-hidden">
      <div
        ref={ref}
        className={cn('flex', orientation === 'horizontal' ? '-ml-4' : '-mt-4 flex-col', className)}
        {...props}
      />
    </div>
  )
})

const CarouselItem = React.forwardRef(function CarouselItem({ className, ...props }, ref) {
  const { orientation } = useCarousel()
  return (
    <div
      ref={ref}
      role="group"
      aria-roledescription="slide"
      className={cn(
        'min-w-0 shrink-0 grow-0 basis-full',
        orientation === 'horizontal' ? 'pl-4' : 'pt-4',
        className
      )}
      {...props}
    />
  )
})

export { Carousel, CarouselContent, CarouselItem }
