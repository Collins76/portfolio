import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import { experience } from '../data/experience'

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-gradient-to-b from-[#0f0f12] to-[#09090b]">
      <div className="max-w-4xl mx-auto">
        <SectionHeading title="Professional Experience" subtitle="19+ years across utility, oil & gas, and technology sectors" />

        <div className="relative">
          {/* Animated timeline line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b
              from-cyan-500 via-violet-500 to-transparent origin-top"
          />

          {experience.map((role, i) => (
            <motion.div
              key={role.company}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`relative flex gap-4 sm:gap-6 mb-8 sm:mb-12 ${
                i % 2 === 0
                  ? 'md:flex-row md:text-right'
                  : 'md:flex-row-reverse md:text-left'
              }`}
            >
              {/* Dot */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full
                bg-cyan-400 border-4 border-[#09090b] z-10 mt-2" />

              {/* Spacer for mobile */}
              <div className="w-12 md:hidden shrink-0" />

              {/* Card */}
              <div className={`flex-1 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <div className="p-4 sm:p-5 rounded-2xl border border-white/5 bg-white/[0.02]
                  hover:border-cyan-500/20 transition-all">
                  <div className={`flex items-center gap-3 mb-3 ${
                    i % 2 === 0 ? 'md:justify-end' : ''
                  }`}>
                    <div className="p-2 rounded-lg bg-cyan-500/10">
                      <Briefcase size={16} className="text-cyan-400" />
                    </div>
                    <span className="text-sm text-cyan-400 font-medium">{role.period}</span>
                  </div>

                  <h3 className="text-lg font-semibold text-slate-100 font-['Space_Grotesk']">
                    {role.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-3">
                    {role.company} &middot; {role.location}
                  </p>

                  <ul className={`space-y-2 ${i % 2 === 0 ? 'md:text-left' : ''}`}>
                    {role.bullets.map((b, j) => (
                      <li key={j} className="text-slate-300 text-sm flex items-start gap-2">
                        <span className="text-cyan-500/60 mt-1 shrink-0">&bull;</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Empty spacer for the other side on desktop */}
              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
