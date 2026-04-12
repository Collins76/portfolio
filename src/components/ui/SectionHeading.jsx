import { motion } from 'framer-motion'

export default function SectionHeading({ title, subtitle }) {
  return (
    <div className="text-center mb-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold font-['Space_Grotesk'] mb-4
          bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-slate-400 text-lg max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mt-4 mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500"
      />
    </div>
  )
}
