import { useRef, useEffect } from 'react'

export default function ParticleGrid() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId
    let particles = []

    function resize() {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      init()
    }

    function init() {
      particles = []
      const spacing = 60
      const cols = Math.ceil(canvas.width / spacing)
      const rows = Math.ceil(canvas.height / spacing)
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          if (Math.random() > 0.35) continue
          particles.push({
            x: i * spacing + (Math.random() - 0.5) * 20,
            y: j * spacing + (Math.random() - 0.5) * 20,
            baseX: i * spacing,
            baseY: j * spacing,
            r: Math.random() * 1.5 + 0.5,
            phase: Math.random() * Math.PI * 2,
            speed: 0.003 + Math.random() * 0.005,
          })
        }
      }
    }

    let mouse = { x: -1000, y: -1000 }
    function onMouse(e) { mouse.x = e.clientX; mouse.y = e.clientY }

    function draw(t) {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (const p of particles) {
        p.x = p.baseX + Math.sin(t * p.speed + p.phase) * 8
        p.y = p.baseY + Math.cos(t * p.speed + p.phase) * 8

        const dx = mouse.x - p.x
        const dy = mouse.y - p.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        const glow = dist < 200 ? 1 - dist / 200 : 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r + glow * 2, 0, Math.PI * 2)
        const alpha = 0.15 + glow * 0.6
        ctx.fillStyle = glow > 0
          ? `rgba(6,182,212,${alpha})`
          : `rgba(148,163,184,${alpha})`
        ctx.fill()
      }

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 100) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(6,182,212,${0.08 * (1 - dist / 100)})`
            ctx.stroke()
          }
        }
      }

      animId = requestAnimationFrame(draw)
    }

    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', onMouse)
    resize()
    animId = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouse)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-auto"
      style={{ zIndex: 0 }}
    />
  )
}
