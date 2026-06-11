import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

export default function BackgroundFX() {
  const spotRef = useRef(null)
  const [showTop, setShowTop] = useState(false)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 130, damping: 28, mass: 0.4 })

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return
    const el = spotRef.current
    let raf = 0
    const onMove = e => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        el.style.setProperty('--mx', `${e.clientX}px`)
        el.style.setProperty('--my', `${e.clientY}px`)
      })
    }
    window.addEventListener('mousemove', onMove)
    return () => { window.removeEventListener('mousemove', onMove); cancelAnimationFrame(raf) }
  }, [])

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[3px] z-[60] origin-left
          bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500"
      />

      {/* Ambient layered background */}
      <div
        className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 120% 90% at 50% -10%, #0B1226 0%, #060A14 45%, #04060D 100%)' }}
      >
        <div className="aurora w-[55vw] h-[55vw] -top-[18vw] -left-[12vw]"
          style={{ background: 'radial-gradient(circle, rgba(14,165,233,0.14), transparent 62%)', animation: 'aurora-a 28s ease-in-out infinite' }} />
        <div className="aurora w-[48vw] h-[48vw] top-[28vh] -right-[16vw]"
          style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.12), transparent 62%)', animation: 'aurora-b 34s ease-in-out infinite' }} />
        <div className="aurora w-[44vw] h-[44vw] -bottom-[14vw] left-[18vw]"
          style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.10), transparent 62%)', animation: 'aurora-c 40s ease-in-out infinite' }} />
        <div className="absolute inset-0 bg-grid-overlay" />
      </div>

      {/* Cursor spotlight (desktop only) */}
      <div
        ref={spotRef}
        className="fixed inset-0 -z-10 pointer-events-none"
        style={{ background: 'radial-gradient(620px circle at var(--mx, 50%) var(--my, 32%), rgba(56,189,248,0.07), transparent 70%)' }}
      />

      {/* Back to top */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, y: 16, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
            className="fixed bottom-6 right-6 z-50 p-3 rounded-full cursor-pointer
              bg-[#0B1226]/80 backdrop-blur-md border border-cyan-500/30 text-cyan-300
              shadow-lg shadow-black/40 hover:bg-cyan-500/15 hover:border-cyan-400/50
              hover:-translate-y-0.5 transition-all"
          >
            <ArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}
