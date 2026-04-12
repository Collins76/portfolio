import { useState, useEffect } from 'react'

export default function TypeWriter({ strings, speed = 80, pause = 2000 }) {
  const [text, setText] = useState('')
  const [strIdx, setStrIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = strings[strIdx]
    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, charIdx + 1))
        if (charIdx + 1 === current.length) {
          setTimeout(() => setDeleting(true), pause)
        } else {
          setCharIdx(charIdx + 1)
        }
      } else {
        setText(current.slice(0, charIdx - 1))
        if (charIdx - 1 === 0) {
          setDeleting(false)
          setStrIdx((strIdx + 1) % strings.length)
          setCharIdx(0)
        } else {
          setCharIdx(charIdx - 1)
        }
      }
    }, deleting ? speed / 2 : speed)
    return () => clearTimeout(timeout)
  }, [charIdx, deleting, strIdx, strings, speed, pause])

  return (
    <span>
      {text}
      <span className="animate-blink ml-0.5 text-cyan-400">|</span>
    </span>
  )
}
