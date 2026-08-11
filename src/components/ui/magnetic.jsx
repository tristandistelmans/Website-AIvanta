import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

/* MagneticLink
   ------------------------------------------------------------------
   Een link die de cursor licht volgt zolang die er overheen gaat, en
   terugveert bij vertrek. Bewust zwak afgesteld (strength 0.28) —
   sterker dan dit voelt als speelgoed in plaats van als afwerking.

   Doet niets op touch-apparaten en bij prefers-reduced-motion.        */

export default function MagneticLink({ strength = 0.28, children, ...props }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (window.matchMedia('(hover: none)').matches) return

    const quickX = gsap.quickTo(el, 'x', { duration: 0.5, ease: 'power3.out' })
    const quickY = gsap.quickTo(el, 'y', { duration: 0.5, ease: 'power3.out' })

    const onMove = (e) => {
      const r = el.getBoundingClientRect()
      quickX((e.clientX - (r.left + r.width / 2)) * strength)
      quickY((e.clientY - (r.top + r.height / 2)) * strength)
    }
    const onLeave = () => {
      quickX(0)
      quickY(0)
    }

    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    return () => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
      gsap.killTweensOf(el)
    }
  }, [strength])

  return (
    <a ref={ref} {...props}>
      {children}
    </a>
  )
}
