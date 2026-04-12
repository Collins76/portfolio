import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { FaLinkedinIn } from 'react-icons/fa6'
import { SiGithub } from 'react-icons/si'
import SectionHeading from './ui/SectionHeading'

const socials = [
  { icon: Mail, label: 'Email', value: 'collins.tochi@gmail.com', href: 'mailto:collins.tochi@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+234 806 217 2134', href: 'tel:+2348062172134' },
  { icon: MapPin, label: 'Location', value: 'Lagos, Nigeria', href: null },
  { icon: FaLinkedinIn, label: 'LinkedIn', value: 'collinsanyanwu', href: 'https://www.linkedin.com/in/collinsanyanwu/' },
  { icon: SiGithub, label: 'GitHub', value: 'Collins76', href: 'https://github.com/Collins76' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  function handleSubmit(e) {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)
    window.location.href = `mailto:collins.tochi@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="py-24 px-6 bg-gradient-to-b from-[#0A0E1A] to-[#0F172A]">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="Get in Touch" subtitle="Have a project in mind? Let's collaborate." />

        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            {[
              { name: 'name', type: 'text', placeholder: 'Your Name' },
              { name: 'email', type: 'email', placeholder: 'Your Email' },
            ].map(f => (
              <input
                key={f.name}
                type={f.type}
                placeholder={f.placeholder}
                required
                value={form[f.name]}
                onChange={e => setForm({ ...form, [f.name]: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5
                  text-slate-200 placeholder:text-slate-500 focus:border-cyan-500/50
                  focus:outline-none focus:ring-1 focus:ring-cyan-500/30 transition-all"
              />
            ))}
            <textarea
              placeholder="Your Message"
              required
              rows={5}
              value={form.message}
              onChange={e => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5
                text-slate-200 placeholder:text-slate-500 focus:border-cyan-500/50
                focus:outline-none focus:ring-1 focus:ring-cyan-500/30 transition-all resize-none"
            />
            <button type="submit"
              className="flex items-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r
                from-cyan-500 to-blue-600 text-white font-semibold hover:shadow-lg
                hover:shadow-cyan-500/25 transition-all hover:-translate-y-0.5
                cursor-pointer relative z-10">
              <Send size={18} /> Send Message
            </button>
          </motion.form>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {socials.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                {s.href ? (
                  <a href={s.href}
                    {...(s.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="flex items-center gap-4 p-4 rounded-xl border border-white/5
                      bg-white/[0.02] hover:border-cyan-500/20 hover:bg-cyan-500/5 transition-all
                      group cursor-pointer relative z-10">
                    <div className="p-2.5 rounded-lg bg-cyan-500/10 group-hover:bg-cyan-500/20 transition-colors">
                      <s.icon size={20} className="text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400">{s.label}</p>
                      <p className="text-slate-200 font-medium">{s.value}</p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.02]">
                    <div className="p-2.5 rounded-lg bg-violet-500/10">
                      <s.icon size={20} className="text-violet-400" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400">{s.label}</p>
                      <p className="text-slate-200 font-medium">{s.value}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
