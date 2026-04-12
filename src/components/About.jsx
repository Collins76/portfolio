import ScrollReveal from './ui/ScrollReveal'
import AnimatedCounter from './ui/AnimatedCounter'
import SectionHeading from './ui/SectionHeading'
import { motion } from 'framer-motion'

const stats = [
  { value: 19, suffix: '+', label: 'Years Experience' },
  { value: 3800, suffix: '+', label: 'km Network Managed' },
  { value: 1, suffix: 'M+', label: 'Customers Served' },
  { value: 20641, suffix: '+', label: 'Assets Tracked' },
  { value: 23, suffix: '', label: 'Geospatial Layers' },
]

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="About Me" subtitle="Building the spatial intelligence layer for Africa's largest utility" />

        <ScrollReveal>
          <p className="text-slate-300 text-lg leading-relaxed max-w-3xl mx-auto text-center mb-16">
            Results-driven Geospatial Data Manager with 19+ years of progressive experience in
            GIS data engineering, spatial analysis, and geospatial database management across
            utility, oil &amp; gas, and technology sectors. Currently leading GIS operations at{' '}
            <span className="text-cyan-400 font-medium">Ikeja Electric Plc</span>, managing a
            3,800+ km electricity distribution network serving 1M+ customers across Lagos. Expert
            in ArcGIS Enterprise, QGIS, PostgreSQL/PostGIS, Python automation, and modern
            full-stack web development with React, Next.js, TypeScript, and Supabase.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-4 sm:p-6 rounded-2xl border border-white/5 bg-white/[0.02]
                hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all group"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold font-['Space_Grotesk']
                bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent mb-2">
                <AnimatedCounter target={s.value} suffix={s.suffix} />
              </div>
              <div className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
