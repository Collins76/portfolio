import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import TypeWriter from './ui/TypeWriter'
import ParticleGrid from './ui/ParticleGrid'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleGrid />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0F172A]/50 to-[#0F172A] pointer-events-none z-[1]" />

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-cyan-400 text-sm md:text-base font-medium tracking-widest uppercase mb-4"
        >
          Welcome to my portfolio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold font-['Space_Grotesk'] mb-6"
        >
          <span className="text-slate-100">Collins </span>
          <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
            Anyanwu
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-xl md:text-2xl text-slate-300 font-medium mb-4 h-10"
        >
          <TypeWriter
            strings={[
              'Geospatial Data Manager',
              'GIS Coordinator',
              'Full-Stack GIS Developer',
              'Python Automation Expert',
            ]}
            speed={70}
            pause={1800}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-slate-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto"
        >
          Turning spatial data into decisions that power millions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a href="#projects"
            className="px-8 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600
              text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/25
              transition-all hover:-translate-y-0.5">
            View Projects
          </a>
          <a href="/cv2.pdf" target="_blank" rel="noopener noreferrer"
            className="px-8 py-3 rounded-xl border border-white/20 text-slate-200
              hover:bg-white/5 hover:border-cyan-500/40 transition-all hover:-translate-y-0.5">
            Download CV
          </a>
          <a href="#contact"
            className="px-8 py-3 rounded-xl border border-violet-500/40 text-violet-300
              hover:bg-violet-500/10 transition-all hover:-translate-y-0.5">
            Get in Touch
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 2, y: { repeat: Infinity, duration: 1.5 } }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-slate-500 hover:text-cyan-400 transition-colors"
      >
        <ChevronDown size={28} />
      </motion.a>
    </section>
  )
}
