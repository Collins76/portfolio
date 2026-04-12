import { motion } from 'framer-motion'
import { Globe, Code2, Database, Cloud, BarChart3 } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import { skillGroups } from '../data/skills'

const iconMap = { Globe, Code2, Database, Cloud, BarChart3 }

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-gradient-to-b from-[#09090b] to-[#0f0f12]">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="Core Skills" subtitle="Technologies and tools I work with every day" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, gi) => {
            const Icon = iconMap[group.icon]
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: gi * 0.12, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="relative p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]
                  hover:border-white/[0.15] transition-all duration-300 group overflow-hidden cursor-default"
              >
                {/* Animated gradient background on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 30% 20%, ${group.color}12, transparent 60%),
                                 radial-gradient(circle at 80% 80%, ${group.color}08, transparent 50%)`,
                  }} />

                {/* Animated top accent line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500"
                  style={{ background: `linear-gradient(90deg, transparent, ${group.color}, transparent)` }} />

                {/* Floating glow behind icon */}
                <div className="absolute top-4 left-4 w-16 h-16 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-700 blur-xl pointer-events-none"
                  style={{ backgroundColor: group.color }} />

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, -5, 0] }}
                      transition={{ duration: 0.5 }}
                      className="p-3 rounded-xl border border-white/[0.06] transition-all duration-300
                        group-hover:border-transparent group-hover:shadow-lg"
                      style={{
                        backgroundColor: group.color + '15',
                        boxShadow: `0 0 0 0 ${group.color}00`,
                      }}
                    >
                      <Icon size={24} style={{ color: group.color }}
                        className="group-hover:scale-110 transition-transform duration-300" />
                    </motion.div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-100 font-['Space_Grotesk']
                        group-hover:text-white transition-colors">
                        {group.title}
                      </h3>
                      <p className="text-xs text-slate-500 group-hover:text-slate-400 transition-colors">
                        {group.skills.length} technologies
                      </p>
                    </div>
                  </div>

                  {/* Skill tags */}
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill, si) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.7, y: 10 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: gi * 0.08 + si * 0.04,
                          duration: 0.4,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        whileHover={{
                          scale: 1.1,
                          y: -3,
                          transition: { duration: 0.2 },
                        }}
                        className="px-3 py-1.5 text-sm rounded-lg border transition-all duration-200 cursor-default"
                        style={{
                          borderColor: 'rgba(255,255,255,0.08)',
                          backgroundColor: 'rgba(255,255,255,0.03)',
                          color: '#cbd5e1',
                        }}
                        onMouseEnter={e => {
                          e.currentTarget.style.borderColor = group.color + '50'
                          e.currentTarget.style.backgroundColor = group.color + '15'
                          e.currentTarget.style.color = group.color
                          e.currentTarget.style.boxShadow = `0 0 12px ${group.color}20`
                        }}
                        onMouseLeave={e => {
                          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                          e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.03)'
                          e.currentTarget.style.color = '#cbd5e1'
                          e.currentTarget.style.boxShadow = 'none'
                        }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>

                  {/* Animated progress bar at bottom */}
                  <div className="mt-5 h-1 w-full rounded-full bg-white/[0.04] overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true }}
                      transition={{ delay: gi * 0.15 + 0.3, duration: 1.2, ease: 'easeOut' }}
                      className="h-full rounded-full"
                      style={{
                        background: `linear-gradient(90deg, ${group.color}60, ${group.color})`,
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
