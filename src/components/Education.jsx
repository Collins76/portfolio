import { motion } from 'framer-motion'
import { GraduationCap, Award } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import { education, certifications } from '../data/education'

export default function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="Education & Certifications" />

        {/* Degrees */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl border border-white/5 bg-white/[0.02]
                hover:border-cyan-500/20 transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-violet-500/10">
                  <GraduationCap size={20} className="text-violet-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-100 font-['Space_Grotesk']">
                    {edu.degree}
                  </h3>
                  <p className="text-slate-400 text-sm">{edu.school}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <h3 className="text-xl font-semibold text-slate-200 font-['Space_Grotesk'] mb-6 text-center">
          Certifications
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ y: -4 }}
              className="p-4 rounded-xl border border-white/5 bg-white/[0.02]
                hover:border-violet-500/30 hover:bg-violet-500/5 transition-all text-center"
            >
              <Award size={20} className="text-violet-400 mx-auto mb-2" />
              <p className="text-sm font-medium text-slate-200">{cert.title}</p>
              <p className="text-xs text-slate-500 mt-1">{cert.issuer} &middot; {cert.year}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
