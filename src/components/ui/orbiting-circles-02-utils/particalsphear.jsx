import { useEffect, useRef } from 'react'

/* ParticleSphereAnimation
   ------------------------------------------------------------------
   Dit bestand zat NIET bij de aangeleverde component, maar wordt er wel
   door geïmporteerd. Hieronder een zelfstandige implementatie: punten
   verdeeld over een bol via de fibonacci-spiraal, geprojecteerd op een
   canvas en langzaam roterend om de verticale as.

   Geen externe dependencies. Respecteert prefers-reduced-motion en
   ruimt de animation frame en observer netjes op.                     */

const PARTICLE_COUNT = 900
const GOLDEN_ANGLE = Math.PI * (3 - Math.sqrt(5))
const TILT = 0.32 // lichte kanteling zodat het geen platte cirkel lijkt

// Punten liggen vast — één keer berekenen, niet per frame.
const POINTS = Array.from({ length: PARTICLE_COUNT }, (_, i) => {
  const y = 1 - (i / (PARTICLE_COUNT - 1)) * 2
  const ringRadius = Math.sqrt(Math.max(0, 1 - y * y))
  const theta = GOLDEN_ANGLE * i
  return {
    x: Math.cos(theta) * ringRadius,
    y,
    z: Math.sin(theta) * ringRadius,
    // een klein deel in accentkleur, verspreid over de bol
    accent: i % 11 === 0,
  }
})

export default function ParticleSphereAnimation({
  color = '58, 70, 92',       // gedempt blauwgrijs, past bij de pastelhero
  accentColor = '128, 186, 226', // zacht blauw accent
  speed = 0.12,
}) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let frame = 0
    let angle = 0
    let last = performance.now()
    let width = 0
    let height = 0

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

      const cx = width / 2
      const cy = height / 2
      const radius = Math.min(width, height) / 2

      const sin = Math.sin(angle)
      const cos = Math.cos(angle)
      const sinT = Math.sin(TILT)
      const cosT = Math.cos(TILT)

      for (const p of POINTS) {
        // rotatie om de y-as
        const rx = p.x * cos - p.z * sin
        const rz = p.x * sin + p.z * cos
        // kanteling om de x-as
        const ry = p.y * cosT - rz * sinT
        const rz2 = p.y * sinT + rz * cosT

        // zwak perspectief: punten vooraan groter en feller
        const depth = (rz2 + 1) / 2           // 0 achter, 1 voor
        const scale = 0.65 + depth * 0.35

        const px = cx + rx * radius * scale
        const py = cy + ry * radius * scale

        const alpha = 0.12 + depth * 0.55
        const size = 0.6 + depth * 1.1

        ctx.beginPath()
        ctx.arc(px, py, size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${p.accent ? accentColor : color}, ${alpha.toFixed(3)})`
        ctx.fill()
      }
    }

    const loop = (now) => {
      const dt = Math.min((now - last) / 1000, 0.05) // spring niet na tabwissel
      last = now
      angle += speed * dt
      draw()
      frame = requestAnimationFrame(loop)
    }

    const observer = new ResizeObserver(() => {
      resize()
      draw()
    })
    observer.observe(canvas)

    resize()
    if (reduced) {
      draw() // stilstaand beeld, geen animatie
    } else {
      frame = requestAnimationFrame(loop)
    }

    return () => {
      cancelAnimationFrame(frame)
      observer.disconnect()
    }
  }, [color, accentColor, speed])

  return <canvas ref={canvasRef} className="h-full w-full" aria-hidden="true" />
}
