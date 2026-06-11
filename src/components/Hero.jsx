import { motion } from 'framer-motion'
import { ChevronDown, MapPin, Zap, Users, Mail } from 'lucide-react'
import { SiGithub } from 'react-icons/si'
import { FaLinkedinIn } from 'react-icons/fa6'
import TypeWriter from './ui/TypeWriter'
import ParticleGrid from './ui/ParticleGrid'

const floatBadges = [
  { Icon: Zap, text: '20,641+ Assets Tracked', pos: 'top-2 -left-4 sm:-left-10', delay: 1.4, dur: 4 },
  { Icon: MapPin, text: '3,800+ km Network', pos: 'top-1/2 -right-4 sm:-right-12', delay: 1.7, dur: 5 },
  { Icon: Users, text: '1M+ Customers Served', pos: 'bottom-4 -left-2 sm:-left-8', delay: 2, dur: 4.5 },
]

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
      <ParticleGrid />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#09090b]/50 to-[#09090b] pointer-events-none z-[1]" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-8 items-center">

        {/* ── Text column ── */}
        <div className="text-center lg:text-left order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30
              bg-emerald-500/10 text-emerald-300 text-xs font-medium tracking-wide mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            Open to Remote &amp; International Opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-['Space_Grotesk'] mb-6"
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
            className="text-lg sm:text-xl md:text-2xl text-slate-300 font-medium mb-4 min-h-[2.5rem]"
          >
            <TypeWriter
              strings={[
                'Geospatial & AI Data Analyst',
                'Database & BI Specialist',
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
            className="text-slate-400 text-base sm:text-lg md:text-xl mb-8 max-w-2xl mx-auto lg:mx-0"
          >
            Turning spatial data into decisions that power millions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start items-center gap-3 sm:gap-4"
          >
            <a href="#projects"
              className="w-full sm:w-auto px-8 py-3 rounded-xl text-center bg-gradient-to-r from-cyan-500 to-blue-600
                text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/25
                transition-all hover:-translate-y-0.5">
              View Projects
            </a>
            <a href="/Collins_Anyanwu_CV_2026.pdf" target="_blank" rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3 rounded-xl text-center border border-white/20 text-slate-200
                hover:bg-white/5 hover:border-cyan-500/40 transition-all hover:-translate-y-0.5">
              Download CV
            </a>
            <a href="#contact"
              className="w-full sm:w-auto px-8 py-3 rounded-xl text-center border border-violet-500/40 text-violet-300
                hover:bg-violet-500/10 transition-all hover:-translate-y-0.5">
              Get in Touch
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="flex items-center justify-center lg:justify-start gap-5 mt-8"
          >
            <a href="https://github.com/Collins76" target="_blank" rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-slate-500 hover:text-cyan-400 transition-all hover:-translate-y-0.5">
              <SiGithub size={22} />
            </a>
            <a href="https://www.linkedin.com/in/collinsanyanwu/" target="_blank" rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-slate-500 hover:text-cyan-400 transition-all hover:-translate-y-0.5">
              <FaLinkedinIn size={22} />
            </a>
            <a href="mailto:collins.tochi@gmail.com" aria-label="Email"
              className="text-slate-500 hover:text-cyan-400 transition-all hover:-translate-y-0.5">
              <Mail size={23} />
            </a>
          </motion.div>
        </div>

        {/* ── Photo column ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="order-1 lg:order-2 flex justify-center"
        >
          <div className="relative">
            {/* Ambient glow */}
            <div className="absolute -inset-8 rounded-full bg-gradient-to-tr from-cyan-500/25 via-transparent to-violet-500/25 blur-3xl" />

            {/* Rotating conic gradient ring */}
            <div className="absolute -inset-[5px] rounded-full animate-spin-slower opacity-90"
              style={{ background: 'conic-gradient(from 0deg, #06B6D4, #8B5CF6, #0EA5E9, #06B6D4)' }} />

            {/* Headshot */}
            <img src="/collins.jpg" alt="Collins Anyanwu — Geospatial & AI Data Analyst"
              className="relative w-52 h-52 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full object-cover
                border-[6px] border-[#09090b] shadow-2xl shadow-black/50" />

            {/* Floating stat badges */}
            {floatBadges.map(({ Icon, text, pos, delay, dur }) => (
              <motion.div
                key={text}
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay, type: 'spring', stiffness: 200, damping: 15 }}
                className={`absolute ${pos} animate-float`}
                style={{ animationDuration: `${dur}s` }}
              >
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[11px] sm:text-xs font-medium
                  bg-[#0b1220]/85 backdrop-blur-md border border-cyan-500/25 text-slate-200
                  shadow-lg shadow-black/40 whitespace-nowrap">
                  <Icon size={13} className="text-cyan-400 shrink-0" />
                  {text}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 2, y: { repeat: Infinity, duration: 1.5 } }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-slate-500 hover:text-cyan-400 transition-colors"
      >
        <ChevronDown size={28} />
      </motion.a>
    </section>
  )
}
