import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, X } from 'lucide-react'
import { SiGithub } from 'react-icons/si'
import SectionHeading from './ui/SectionHeading'
import GlassCard from './ui/GlassCard'
import { projects } from '../data/projects'

/* Inline animated SVG mockup per type */
function Mockup({ type, color }) {
  const bg = '#0F172A'
  return (
    <svg viewBox="0 0 400 220" className="w-full rounded-t-xl" style={{ background: bg }}>
      {/* Top bar */}
      <rect x="0" y="0" width="400" height="28" fill="#1E293B" />
      <circle cx="14" cy="14" r="4" fill="#EF4444" />
      <circle cx="28" cy="14" r="4" fill="#F59E0B" />
      <circle cx="42" cy="14" r="4" fill="#22C55E" />

      {type === 'dashboard' && <>
        {/* Sidebar */}
        <rect x="0" y="28" width="70" height="192" fill="#1E293B" />
        {[48, 68, 88, 108, 128].map((y, i) => (
          <rect key={i} x="12" y={y} width="46" height="8" rx="2" fill={i === 0 ? color : '#334155'} opacity={i === 0 ? 1 : 0.5}>
            <animate attributeName="opacity" values={i === 0 ? '1;1' : '0.3;0.6;0.3'} dur="3s" begin={`${i * 0.2}s`} repeatCount="indefinite" />
          </rect>
        ))}
        {/* Stat cards */}
        {[85, 175, 265, 355].map((x, i) => (
          <g key={i}>
            <rect x={x} y="38" width="72" height="40" rx="6" fill="#1E293B" stroke={color} strokeWidth="0.5" strokeOpacity="0.3" />
            <rect x={x + 8} y="48" width="30" height="8" rx="2" fill={color}>
              <animate attributeName="width" values="10;30;10" dur="2.5s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
            </rect>
            <rect x={x + 8} y="62" width="50" height="5" rx="2" fill="#334155" />
          </g>
        ))}
        {/* Map area */}
        <rect x="80" y="88" width="190" height="120" rx="6" fill="#1E293B" />
        {[120, 150, 170, 130, 160].map((x, i) => (
          <circle key={i} cx={x} cy={120 + i * 15} r="3" fill={color}>
            <animate attributeName="r" values="0;3;3" dur="0.5s" begin={`${i * 0.3}s`} fill="freeze" />
            <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
          </circle>
        ))}
        {/* Chart */}
        <rect x="280" y="88" width="110" height="120" rx="6" fill="#1E293B" />
        {[0, 1, 2, 3, 4].map(i => (
          <rect key={i} x={292 + i * 18} y={180 - (i + 1) * 15} width="10" height={(i + 1) * 15} rx="2" fill={color} opacity="0.7">
            <animate attributeName="height" values={`0;${(i + 1) * 15}`} dur="1s" begin={`${i * 0.15}s`} fill="freeze" />
            <animate attributeName="y" values={`180;${180 - (i + 1) * 15}`} dur="1s" begin={`${i * 0.15}s`} fill="freeze" />
          </rect>
        ))}
      </>}

      {type === 'kpi' && <>
        {/* KPI cards row */}
        {[10, 105, 200, 295].map((x, i) => (
          <g key={i}>
            <rect x={x} y="38" width="88" height="55" rx="8" fill="#1E293B" />
            <rect x={x + 10} y="50" width="40" height="10" rx="3" fill={color}>
              <animate attributeName="width" values="15;40;15" dur="3s" begin={`${i * 0.2}s`} repeatCount="indefinite" />
            </rect>
            <rect x={x + 10} y="68" width="60" height="6" rx="2" fill="#334155" />
            <rect x={x + 10} y="80" width="68" height="4" rx="2" fill={color} opacity="0.3">
              <animate attributeName="width" values="20;68;20" dur="4s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
            </rect>
          </g>
        ))}
        {/* Line chart */}
        <rect x="10" y="105" width="380" height="105" rx="8" fill="#1E293B" />
        <polyline points="30,180 70,160 120,170 160,140 200,150 250,120 300,130 350,110 380,115"
          fill="none" stroke={color} strokeWidth="2" strokeDasharray="400" strokeDashoffset="400">
          <animate attributeName="stroke-dashoffset" values="400;0" dur="2s" fill="freeze" />
        </polyline>
      </>}

      {type === 'map' && <>
        {/* Full map area */}
        <rect x="10" y="38" width="250" height="172" rx="6" fill="#1E293B" />
        {/* Map grid */}
        {[60, 90, 120, 150, 180].map(y => (
          <line key={y} x1="15" y1={y} x2="255" y2={y} stroke="#334155" strokeWidth="0.5" />
        ))}
        {/* Animated markers */}
        {[[80, 80], [130, 120], [180, 100], [100, 160], [200, 150], [150, 70]].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="4" fill={color}>
            <animate attributeName="r" values="0;4;4" dur="0.4s" begin={`${i * 0.3}s`} fill="freeze" />
            <animate attributeName="opacity" values="0;1;0.7;1" dur="2s" begin={`${i * 0.3 + 0.4}s`} repeatCount="indefinite" />
          </circle>
        ))}
        {/* Side panel */}
        <rect x="270" y="38" width="120" height="172" rx="6" fill="#1E293B" />
        {[55, 80, 105, 130, 155, 180].map((y, i) => (
          <rect key={i} x="280" y={y} width={60 + Math.random() * 40} height="8" rx="2" fill={i === 0 ? color : '#334155'} opacity={0.5 + Math.random() * 0.3} />
        ))}
      </>}

      {type === 'powerbi' && <>
        {/* Header bar */}
        <rect x="10" y="38" width="380" height="25" rx="4" fill="#1E293B" />
        <rect x="20" y="46" width="60" height="8" rx="2" fill={color} />
        {/* Cards */}
        {[10, 105, 200, 295].map((x, i) => (
          <g key={i}>
            <rect x={x} y="72" width="88" height="40" rx="6" fill="#1E293B" />
            <rect x={x + 10} y="80" width="35" height="8" rx="2" fill={color} opacity="0.8" />
            <rect x={x + 10} y="94" width="55" height="5" rx="2" fill="#334155" />
          </g>
        ))}
        {/* Bar chart */}
        <rect x="10" y="122" width="185" height="88" rx="6" fill="#1E293B" />
        {[0, 1, 2, 3, 4, 5].map(i => (
          <rect key={i} x={25 + i * 26} y={190 - (3 + i * 2) * 6} width="14" height={(3 + i * 2) * 6} rx="2" fill={color} opacity="0.7">
            <animate attributeName="height" values={`0;${(3 + i * 2) * 6}`} dur="1s" begin={`${i * 0.1}s`} fill="freeze" />
            <animate attributeName="y" values={`190;${190 - (3 + i * 2) * 6}`} dur="1s" begin={`${i * 0.1}s`} fill="freeze" />
          </rect>
        ))}
        {/* Donut area */}
        <rect x="205" y="122" width="185" height="88" rx="6" fill="#1E293B" />
        <circle cx="297" cy="166" r="28" fill="none" stroke={color} strokeWidth="8" strokeDasharray="80 96" opacity="0.8">
          <animate attributeName="stroke-dashoffset" values="176;0" dur="1.5s" fill="freeze" />
        </circle>
      </>}

      {type === 'terminal' && <>
        <rect x="10" y="38" width="380" height="172" rx="6" fill="#0F172A" />
        {[
          { y: 52, text: '$ python feeder_extraction.py', color: '#22C55E' },
          { y: 72, text: 'Loading feeder polylines... 847 features', color: '#94A3B8' },
          { y: 92, text: 'Extracting start coordinates... done', color: '#94A3B8' },
          { y: 112, text: 'Extracting midpoints... done', color: '#94A3B8' },
          { y: 132, text: 'Extracting intersections... done', color: '#94A3B8' },
          { y: 152, text: 'Extracting endpoints... done', color: '#94A3B8' },
          { y: 172, text: 'Exported 3,388 coordinates to output.csv', color },
          { y: 192, text: '$ _', color: '#22C55E' },
        ].map((line, i) => (
          <text key={i} x="24" y={line.y} fill={line.color} fontSize="10" fontFamily="monospace" opacity="0">
            {line.text}
            <animate attributeName="opacity" values="0;1" dur="0.1s" begin={`${i * 0.4}s`} fill="freeze" />
          </text>
        ))}
      </>}
    </svg>
  )
}

function ProjectModal({ project, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4
        bg-black/60 backdrop-blur-sm"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={e => e.stopPropagation()}
        className="relative max-w-2xl w-full max-h-[85vh] overflow-y-auto
          rounded-2xl border border-white/10 bg-[#0F172A] p-6 shadow-2xl"
      >
        <button onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors">
          <X size={20} />
        </button>

        <Mockup type={project.mockupType} color={project.color} />

        <h3 className="text-2xl font-bold font-['Space_Grotesk'] text-slate-100 mt-5 mb-2">
          {project.title}
        </h3>
        <p className="text-slate-400 mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map(t => (
            <span key={t} className="px-2.5 py-1 text-xs rounded-md bg-cyan-500/10
              text-cyan-300 border border-cyan-500/20">{t}</span>
          ))}
        </div>

        {project.features && (
          <ul className="space-y-2 mb-5">
            {project.features.map((f, i) => (
              <li key={i} className="text-slate-300 text-sm flex items-start gap-2">
                <span className="text-cyan-400 mt-1">&#10003;</span> {f}
              </li>
            ))}
          </ul>
        )}

        <div className="flex gap-3">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10
                text-slate-300 hover:bg-white/5 transition-all text-sm">
              <SiGithub size={16} /> GitHub
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500/10
                text-cyan-300 border border-cyan-500/20 hover:bg-cyan-500/20 transition-all text-sm">
              <ExternalLink size={16} /> Live Demo
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Projects() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="Featured Projects" subtitle="Dashboards, automation tools, and geospatial applications" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <GlassCard className="h-full flex flex-col">
                <Mockup type={p.mockupType} color={p.color} />
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="text-lg font-semibold text-slate-100 font-['Space_Grotesk'] mb-2">
                    {p.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-4 flex-1 line-clamp-3">
                    {p.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {p.tech.slice(0, 4).map(t => (
                      <span key={t} className="px-2 py-0.5 text-xs rounded-md
                        bg-white/5 text-slate-400 border border-white/5">{t}</span>
                    ))}
                    {p.tech.length > 4 && (
                      <span className="px-2 py-0.5 text-xs rounded-md bg-white/5 text-slate-500">
                        +{p.tech.length - 4}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-3">
                    <button onClick={() => setSelected(p)}
                      className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors">
                      View Details &rarr;
                    </button>
                    <div className="flex-1" />
                    {p.github && (
                      <a href={p.github} target="_blank" rel="noopener noreferrer"
                        className="text-slate-500 hover:text-slate-300 transition-colors">
                        <SiGithub size={18} />
                      </a>
                    )}
                    {p.live && (
                      <a href={p.live} target="_blank" rel="noopener noreferrer"
                        className="text-slate-500 hover:text-slate-300 transition-colors">
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
        </AnimatePresence>
      </div>
    </section>
  )
}
