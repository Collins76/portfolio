import { motion } from 'framer-motion'

export default function GlassCard({ children, className = '', hover = true }) {
  return (
    <motion.div
      whileHover={hover ? { y: -4, scale: 1.01 } : {}}
      className={`relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md
        shadow-lg shadow-black/20 overflow-hidden group ${className}`}
    >
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100
        transition-opacity duration-500 pointer-events-none
        bg-gradient-to-br from-cyan-500/10 via-transparent to-violet-500/10" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  )
}
