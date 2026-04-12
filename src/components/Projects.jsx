import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, X, Eye } from 'lucide-react'
import { SiGithub } from 'react-icons/si'
import SectionHeading from './ui/SectionHeading'
import { projects } from '../data/projects'

/* ── Animated SVG Mockup ── */
function Mockup({ type, color }) {
  const bg = '#020408'
  const panelBg = '#0A0F1C'
  return (
    <svg viewBox="0 0 400 220" className="w-full rounded-t-xl" style={{ background: bg }}>
      {/* Top bar */}
      <rect x="0" y="0" width="400" height="28" fill={panelBg} />
      <circle cx="14" cy="14" r="4" fill="#EF4444" opacity="0.8" />
      <circle cx="28" cy="14" r="4" fill="#F59E0B" opacity="0.8" />
      <circle cx="42" cy="14" r="4" fill="#22C55E" opacity="0.8" />

      {type === 'dashboard' && <>
        <rect x="0" y="28" width="70" height="192" fill={panelBg} />
        {[48, 68, 88, 108, 128].map((y, i) => (
          <rect key={i} x="12" y={y} width="46" height="8" rx="2" fill={i === 0 ? color : '#1E293B'}>
            <animate attributeName="opacity" values={i === 0 ? '0.4;1;0.4' : '0.2;0.5;0.2'} dur={`${2 + i * 0.5}s`} repeatCount="indefinite" />
          </rect>
        ))}
        {[85, 175, 265, 355].map((x, i) => (
          <g key={i}>
            <rect x={x} y="38" width="72" height="40" rx="6" fill={panelBg} stroke={color} strokeWidth="0.5" strokeOpacity="0.2">
              <animate attributeName="stroke-opacity" values="0.1;0.4;0.1" dur={`${3 + i * 0.3}s`} repeatCount="indefinite" />
            </rect>
            <rect x={x + 8} y="48" width="30" height="8" rx="2" fill={color} opacity="0.8">
              <animate attributeName="width" values="10;30;10" dur={`${2.5 + i * 0.3}s`} repeatCount="indefinite" />
            </rect>
            <rect x={x + 8} y="62" width="50" height="5" rx="2" fill="#111827" />
          </g>
        ))}
        <rect x="80" y="88" width="190" height="120" rx="6" fill={panelBg} />
        {[120, 150, 170, 130, 160].map((x, i) => (
          <g key={i}>
            <circle cx={x} cy={120 + i * 15} r="3" fill={color} opacity="0">
              <animate attributeName="opacity" values="0;0.9;0.5" dur="2s" begin={`${i * 0.4}s`} repeatCount="indefinite" />
              <animate attributeName="r" values="0;5;3" dur="2s" begin={`${i * 0.4}s`} repeatCount="indefinite" />
            </circle>
            <circle cx={x} cy={120 + i * 15} r="8" fill="none" stroke={color} strokeWidth="1" opacity="0">
              <animate attributeName="opacity" values="0;0.3;0" dur="2s" begin={`${i * 0.4}s`} repeatCount="indefinite" />
              <animate attributeName="r" values="3;12;12" dur="2s" begin={`${i * 0.4}s`} repeatCount="indefinite" />
            </circle>
          </g>
        ))}
        <rect x="280" y="88" width="110" height="120" rx="6" fill={panelBg} />
        {[0, 1, 2, 3, 4].map(i => (
          <rect key={i} x={292 + i * 18} y={180} width="10" height="0" rx="2" fill={color} opacity="0.7">
            <animate attributeName="height" values={`0;${(i + 1) * 15};${(i + 1) * 12}`} dur="1.5s" begin={`${i * 0.2}s`} fill="freeze" repeatCount="indefinite" />
            <animate attributeName="y" values={`180;${180 - (i + 1) * 15};${180 - (i + 1) * 12}`} dur="1.5s" begin={`${i * 0.2}s`} fill="freeze" repeatCount="indefinite" />
          </rect>
        ))}
      </>}

      {type === 'kpi' && <>
        {[10, 105, 200, 295].map((x, i) => (
          <g key={i}>
            <rect x={x} y="38" width="88" height="55" rx="8" fill={panelBg}>
              <animate attributeName="fill-opacity" values="0.8;1;0.8" dur={`${3 + i * 0.5}s`} repeatCount="indefinite" />
            </rect>
            <rect x={x + 10} y="50" width="40" height="10" rx="3" fill={color}>
              <animate attributeName="width" values="15;40;15" dur={`${3 + i * 0.2}s`} repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.5;1;0.5" dur={`${3 + i * 0.2}s`} repeatCount="indefinite" />
            </rect>
            <rect x={x + 10} y="68" width="60" height="6" rx="2" fill="#111827" />
            <rect x={x + 10} y="80" width="68" height="4" rx="2" fill={color} opacity="0.2">
              <animate attributeName="width" values="20;68;20" dur={`${4 + i * 0.3}s`} repeatCount="indefinite" />
            </rect>
          </g>
        ))}
        <rect x="10" y="105" width="380" height="105" rx="8" fill={panelBg} />
        <polyline points="30,180 70,160 120,170 160,140 200,150 250,120 300,130 350,110 380,115"
          fill="none" stroke={color} strokeWidth="2" strokeDasharray="400" strokeDashoffset="400" opacity="0.8">
          <animate attributeName="stroke-dashoffset" values="400;0;400" dur="4s" repeatCount="indefinite" />
        </polyline>
        <polyline points="30,180 70,160 120,170 160,140 200,150 250,120 300,130 350,110 380,115"
          fill="none" stroke={color} strokeWidth="6" strokeDasharray="400" strokeDashoffset="400" opacity="0.1" strokeLinecap="round">
          <animate attributeName="stroke-dashoffset" values="400;0;400" dur="4s" repeatCount="indefinite" />
        </polyline>
      </>}

      {type === 'map' && <>
        <rect x="10" y="38" width="250" height="172" rx="6" fill={panelBg} />
        {[60, 90, 120, 150, 180].map(y => (
          <line key={y} x1="15" y1={y} x2="255" y2={y} stroke="#1E293B" strokeWidth="0.5" />
        ))}
        {[50, 100, 150, 200].map(x => (
          <line key={x} x1={x} y1="43" x2={x} y2="205" stroke="#1E293B" strokeWidth="0.5" />
        ))}
        {[[80, 80], [130, 120], [180, 100], [100, 160], [200, 150], [150, 70], [60, 130], [220, 180]].map(([x, y], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r="4" fill={color} opacity="0">
              <animate attributeName="opacity" values="0;0.9;0.5;0.9" dur="3s" begin={`${i * 0.35}s`} repeatCount="indefinite" />
              <animate attributeName="r" values="0;5;3;5" dur="3s" begin={`${i * 0.35}s`} repeatCount="indefinite" />
            </circle>
            <circle cx={x} cy={y} r="8" fill="none" stroke={color} strokeWidth="1" opacity="0">
              <animate attributeName="opacity" values="0;0.4;0" dur="2s" begin={`${i * 0.35 + 0.2}s`} repeatCount="indefinite" />
              <animate attributeName="r" values="4;14;14" dur="2s" begin={`${i * 0.35 + 0.2}s`} repeatCount="indefinite" />
            </circle>
          </g>
        ))}
        <rect x="270" y="38" width="120" height="172" rx="6" fill={panelBg} />
        {[55, 80, 105, 130, 155, 180].map((y, i) => (
          <rect key={i} x="280" y={y} width={0} height="8" rx="2" fill={i === 0 ? color : '#1E293B'} opacity="0.6">
            <animate attributeName="width" values={`0;${40 + i * 8};${40 + i * 8}`} dur="0.8s" begin={`${i * 0.15}s`} fill="freeze" />
          </rect>
        ))}
      </>}

      {type === 'powerbi' && <>
        <rect x="10" y="38" width="380" height="25" rx="4" fill={panelBg} />
        <rect x="20" y="46" width="60" height="8" rx="2" fill={color} opacity="0.7">
          <animate attributeName="opacity" values="0.4;0.9;0.4" dur="3s" repeatCount="indefinite" />
        </rect>
        {[10, 105, 200, 295].map((x, i) => (
          <g key={i}>
            <rect x={x} y="72" width="88" height="40" rx="6" fill={panelBg} />
            <rect x={x + 10} y="80" width="35" height="8" rx="2" fill={color} opacity="0.8">
              <animate attributeName="width" values="15;35;15" dur={`${2.5 + i * 0.4}s`} repeatCount="indefinite" />
            </rect>
            <rect x={x + 10} y="94" width="55" height="5" rx="2" fill="#111827" />
          </g>
        ))}
        <rect x="10" y="122" width="185" height="88" rx="6" fill={panelBg} />
        {[0, 1, 2, 3, 4, 5].map(i => (
          <rect key={i} x={25 + i * 26} y={190} width="14" height="0" rx="2" fill={color} opacity="0.7">
            <animate attributeName="height" values={`0;${(3 + i * 2) * 6};${(2 + i * 2) * 6}`} dur="2s" begin={`${i * 0.15}s`} repeatCount="indefinite" />
            <animate attributeName="y" values={`190;${190 - (3 + i * 2) * 6};${190 - (2 + i * 2) * 6}`} dur="2s" begin={`${i * 0.15}s`} repeatCount="indefinite" />
          </rect>
        ))}
        <rect x="205" y="122" width="185" height="88" rx="6" fill={panelBg} />
        <circle cx="297" cy="166" r="28" fill="none" stroke={color} strokeWidth="8" strokeDasharray="0 176" opacity="0.8">
          <animate attributeName="stroke-dasharray" values="0 176;120 56;80 96" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="297" cy="166" r="20" fill="none" stroke="#3B82F6" strokeWidth="6" strokeDasharray="0 126" opacity="0.5">
          <animate attributeName="stroke-dasharray" values="0 126;60 66;40 86" dur="3s" begin="0.3s" repeatCount="indefinite" />
        </circle>
      </>}

      {type === 'terminal' && <>
        <rect x="10" y="38" width="380" height="172" rx="6" fill="#020617" />
        {[
          { y: 52, text: '$ python analysis.py --run', color: '#22C55E' },
          { y: 72, text: 'Loading dataset... 2,847 records', color: '#94A3B8' },
          { y: 92, text: 'Running statistical analysis... done', color: '#94A3B8' },
          { y: 112, text: 'Generating visualizations... done', color: '#94A3B8' },
          { y: 132, text: 'Computing correlations... done', color: '#94A3B8' },
          { y: 152, text: 'Building reports... done', color: '#94A3B8' },
          { y: 172, text: 'Exported results to output/', color },
          { y: 192, text: '$ _', color: '#22C55E' },
        ].map((line, i) => (
          <text key={i} x="24" y={line.y} fill={line.color} fontSize="10" fontFamily="monospace" opacity="0">
            {line.text}
            <animate attributeName="opacity" values="0;1" dur="0.15s" begin={`${i * 0.5}s`} fill="freeze" />
          </text>
        ))}
        {/* Blinking cursor */}
        <rect x="42" y="184" width="7" height="12" fill="#22C55E">
          <animate attributeName="opacity" values="0;1;0" dur="1s" begin="4s" repeatCount="indefinite" />
        </rect>
      </>}
    </svg>
  )
}

/* ── Project Detail Modal ── */
function ProjectModal({ project, onClose }) {
  const [showDemo, setShowDemo] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4
        bg-black/70 backdrop-blur-md"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        onClick={e => e.stopPropagation()}
        className="relative max-w-3xl w-full max-h-[90vh] overflow-y-auto
          rounded-2xl border border-white/10 bg-[#040810] p-0 shadow-2xl shadow-black/50"
      >
        <button onClick={onClose}
          className="absolute top-4 right-4 z-20 p-1.5 rounded-lg bg-black/40
            text-slate-400 hover:text-white hover:bg-white/10 transition-all">
          <X size={18} />
        </button>

        {/* Live Demo Section (first card) */}
        {project.live && (
          <div className="border-b border-white/5">
            {showDemo ? (
              <div className="relative w-full" style={{ height: '400px' }}>
                <iframe
                  src={project.live}
                  title={`${project.title} live demo`}
                  className="w-full h-full rounded-t-2xl"
                  sandbox="allow-scripts allow-same-origin allow-popups"
                />
                <button onClick={() => setShowDemo(false)}
                  className="absolute top-3 left-3 px-3 py-1.5 rounded-lg bg-black/70 backdrop-blur
                    text-xs text-slate-300 hover:text-white border border-white/10 transition-all">
                  Close Preview
                </button>
              </div>
            ) : (
              <div className="relative">
                <Mockup type={project.mockupType} color={project.color} />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-t-2xl
                  opacity-0 hover:opacity-100 transition-opacity">
                  <button onClick={() => setShowDemo(true)}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 backdrop-blur-md
                      border border-white/20 text-white font-medium hover:bg-white/20 transition-all">
                    <Eye size={18} /> Open Live Preview
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Mockup only (no live demo) */}
        {!project.live && (
          <div className="border-b border-white/5">
            <Mockup type={project.mockupType} color={project.color} />
          </div>
        )}

        <div className="p-6">
          <h3 className="text-2xl font-bold font-['Space_Grotesk'] text-slate-100 mb-2">
            {project.title}
          </h3>
          <p className="text-slate-400 mb-5">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-5">
            {project.tech.map(t => (
              <motion.span key={t}
                whileHover={{ scale: 1.05, y: -1 }}
                className="px-2.5 py-1 text-xs rounded-md bg-cyan-500/10
                  text-cyan-300 border border-cyan-500/20">{t}</motion.span>
            ))}
          </div>

          {project.features && (
            <ul className="space-y-2 mb-6">
              {project.features.map((f, i) => (
                <motion.li key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="text-slate-300 text-sm flex items-start gap-2">
                  <span className="text-cyan-400 mt-0.5">&#10003;</span> {f}
                </motion.li>
              ))}
            </ul>
          )}

          <div className="flex gap-3">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10
                  text-slate-300 hover:bg-white/5 hover:border-white/20 transition-all text-sm">
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
        </div>
      </motion.div>
    </motion.div>
  )
}

/* ── Projects Section ── */
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
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="group"
            >
              <div className="relative h-full flex flex-col rounded-2xl overflow-hidden
                border border-white/[0.06] bg-[#040810] hover:border-white/[0.12]
                shadow-lg shadow-black/30 hover:shadow-xl hover:shadow-black/40 transition-all duration-300">

                {/* Animated glow border on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `linear-gradient(135deg, ${p.color}15, transparent 50%, ${p.color}10)`,
                  }} />

                {/* Accent line at top */}
                <div className="h-[2px] w-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(90deg, transparent, ${p.color}, transparent)` }} />

                <div className="relative">
                  <Mockup type={p.mockupType} color={p.color} />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <motion.button
                      onClick={() => setSelected(p)}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      className="px-4 py-2 rounded-lg bg-white/10 backdrop-blur border border-white/20
                        text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300
                        hover:bg-white/20 cursor-pointer"
                    >
                      View Details
                    </motion.button>
                  </div>
                </div>

                <div className="relative z-10 p-5 flex-1 flex flex-col">
                  <h3 className="text-lg font-semibold text-slate-100 font-['Space_Grotesk'] mb-2
                    group-hover:text-white transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-slate-500 text-sm mb-4 flex-1 line-clamp-3 group-hover:text-slate-400 transition-colors">
                    {p.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {p.tech.slice(0, 4).map(t => (
                      <span key={t} className="px-2 py-0.5 text-xs rounded-md
                        bg-white/[0.04] text-slate-500 border border-white/[0.04]
                        group-hover:bg-white/[0.08] group-hover:text-slate-400 group-hover:border-white/[0.08] transition-all">{t}</span>
                    ))}
                    {p.tech.length > 4 && (
                      <span className="px-2 py-0.5 text-xs rounded-md bg-white/[0.03] text-slate-600">
                        +{p.tech.length - 4}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-3 pt-3 border-t border-white/[0.04]">
                    <button onClick={() => setSelected(p)}
                      className="text-sm font-medium transition-colors cursor-pointer"
                      style={{ color: p.color }}>
                      View Details &rarr;
                    </button>
                    <div className="flex-1" />
                    {p.github && (
                      <a href={p.github} target="_blank" rel="noopener noreferrer"
                        className="text-slate-600 hover:text-slate-300 transition-colors">
                        <SiGithub size={17} />
                      </a>
                    )}
                    {p.live && (
                      <a href={p.live} target="_blank" rel="noopener noreferrer"
                        className="text-slate-600 hover:text-slate-300 transition-colors">
                        <ExternalLink size={17} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
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
