import { useEffect, useState, useRef } from 'react'
import { useInView } from 'framer-motion'

export default function AnimatedCounter({ target, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    const num = parseInt(target.toString().replace(/[^0-9]/g, ''))
    const step = Math.ceil(num / (duration / 16))
    let current = 0
    const timer = setInterval(() => {
      current += step
      if (current >= num) {
        setCount(num)
        clearInterval(timer)
      } else {
        setCount(current)
      }
    }, 16)
    return () => clearInterval(timer)
  }, [inView, target, duration])

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  )
}
