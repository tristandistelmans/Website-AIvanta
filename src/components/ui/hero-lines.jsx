import { useEffect, useRef } from 'react'

/* HeroLines
   ------------------------------------------------------------------
   Traag bewegend lijnenpatroon, opgebouwd als hoogtelijnen op een kaart
   in plaats van als golfbanner: elke lijn is een som van twee sinussen
   met een eigen fase, waardoor het patroon nooit exact herhaalt.

   Bewust monochroom (charcoal op cream), lijndikte 1px en een alfa
   tussen 0.04 en 0.10. Geen kleurverloop, geen gloed — die maken er
   meteen weer een technologiesjabloon van.

   Staat stil bij prefers-reduced-motion en tekent dan één beeld.       */

const LINE_COUNT = 30
const SAMPLE_STEP = 6 // px tussen punten; lager = vloeiender, duurder
const SPEED = 0.15 // radialen per seconde

export default function HeroLines({ className = '' }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let width = 0
    let height = 0
    let frame = 0
    let t = 0
    let last = performance.now()

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const rect = canvas.getBoundingClientRect()
      width = rect.width
      height = rect.height
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const draw = () => {
      if (!width || !height) return
      ctx.clearRect(0, 0, width, height)
      ctx.lineWidth = 1

      // Op smalle schermen loopt de tekst over vrijwel de hele breedte,
      // dus daar moeten de lijnen zwakker om leesbaar te blijven.
      const contrast = width < 768 ? 0.55 : 1

      for (let i = 0; i < LINE_COUNT; i++) {
        const p = i / (LINE_COUNT - 1)

        // lijnen liggen dichter bij elkaar bovenaan, ruimer onderaan
        const baseY = height * (-0.05 + p * 1.12)
        // amplitude het grootst in het midden van de bundel
        const amp = 9 + 30 * Math.sin(p * Math.PI)
        const f1 = 0.0040 + p * 0.0015
        const f2 = 0.0093 - p * 0.0021
        const phase = i * 0.37

        ctx.beginPath()
        for (let x = -30; x <= width + 30; x += SAMPLE_STEP) {
          const y =
            baseY +
            amp * Math.sin(x * f1 + t + phase) +
            amp * 0.45 * Math.sin(x * f2 - t * 0.72 + phase * 1.7)
          if (x === -30) ctx.moveTo(x, y)
          else ctx.lineTo(x, y)
        }

        const alpha = (0.06 + 0.09 * Math.sin(p * Math.PI)) * contrast
        ctx.strokeStyle = `rgba(26, 26, 26, ${alpha.toFixed(3)})`
        ctx.stroke()
      }
    }

    const loop = (now) => {
      const dt = Math.min((now - last) / 1000, 0.05)
      last = now
      t += SPEED * dt
      draw()
      frame = requestAnimationFrame(loop)
    }

    const observer = new ResizeObserver(() => {
      resize()
      draw()
    })
    observer.observe(canvas)

    resize()
    if (reduced) draw()
    else frame = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(frame)
      observer.disconnect()
    }
  }, [])

  return <canvas ref={canvasRef} className={`h-full w-full ${className}`} aria-hidden="true" />
}
