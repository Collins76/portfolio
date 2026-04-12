import { motion } from 'framer-motion'
import { Globe, Code2, Database, Cloud, BarChart3 } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import { skillGroups } from '../data/skills'

const iconMap = { Globe, Code2, Database, Cloud, BarChart3 }

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-gradient-to-b from-[#0A0E1A] to-[#0F172A]">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="Core Skills" subtitle="Technologies and tools I work with every day" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, gi) => {
            const Icon = iconMap[group.icon]
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: gi * 0.1 }}
                className="p-6 rounded-2xl border border-white/5 bg-white/[0.02]
                  hover:border-white/10 transition-all group"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 rounded-xl transition-all"
                    style={{ backgroundColor: group.color + '15' }}>
                    <Icon size={22} style={{ color: group.color }}
                      className="group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-100 font-['Space_Grotesk']">
                    {group.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, si) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: gi * 0.05 + si * 0.03 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-3 py-1.5 text-sm rounded-lg border border-white/10
                        text-slate-300 bg-white/[0.03] hover:border-white/20
                        hover:bg-white/[0.06] transition-all cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
