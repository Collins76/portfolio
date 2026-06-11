import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Experience', href: '#experience', id: 'experience' },
  { label: 'Education', href: '#education', id: 'education' },
  { label: 'Contact', href: '#contact', id: 'contact' },
]

export default function Navbar({ activeSection = '' }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function handleClick(e, href) {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled
          ? 'bg-[#060A14]/75 backdrop-blur-lg border-b border-white/5 shadow-lg shadow-black/20'
          : 'bg-transparent'}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        <a href="#" onClick={e => handleClick(e, '#hero')}
          className="text-xl font-bold font-['Space_Grotesk']
            bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
          CA
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href}
              onClick={e => handleClick(e, l.href)}
              className={`relative text-sm transition-colors py-1
                ${activeSection === l.id ? 'text-cyan-400' : 'text-slate-400 hover:text-cyan-400'}`}>
              {l.label}
              {activeSection === l.id && (
                <motion.div
                  layoutId="navIndicator"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-cyan-400 rounded-full"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
            </a>
          ))}
          <a href="/Collins_Anyanwu_CV_2026.pdf" target="_blank" rel="noopener noreferrer"
            className="text-sm px-4 py-2 rounded-lg border border-cyan-500/40
              text-cyan-400 hover:bg-cyan-500/10 transition-all">
            Resume
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-slate-300 p-1">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#060A14]/95 backdrop-blur-lg border-b border-white/5"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {links.map(l => (
                <a key={l.href} href={l.href}
                  onClick={e => handleClick(e, l.href)}
                  className={`transition-colors text-base
                    ${activeSection === l.id ? 'text-cyan-400 font-medium' : 'text-slate-300 hover:text-cyan-400'}`}>
                  {l.label}
                </a>
              ))}
              <a href="/Collins_Anyanwu_CV_2026.pdf" target="_blank" rel="noopener noreferrer"
                className="text-cyan-400 border border-cyan-500/40 rounded-lg px-4 py-2 text-center
                  hover:bg-cyan-500/10 transition-all">
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
