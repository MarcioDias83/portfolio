import { motion } from 'framer-motion'
import {
  Palette, Database, Layout,
  Cloud, Terminal, Wrench,
} from 'lucide-react'
import { useT } from '../i18n'

const skillCategories = [
  { labelKey: 'Frontend' as const, icon: Layout, items: ['React 19', 'TypeScript', 'Tailwind CSS', 'Framer Motion'], color: '#6c5ce7' },
  { labelKey: 'State & Data' as const, icon: Database, items: ['Zustand', 'React Query', 'Zod', 'React Router'], color: '#00cec9' },
  { labelKey: 'Backend' as const, icon: Terminal, items: ['Python', 'FastAPI', 'Node.js', 'APIs REST'], color: '#fd79a8' },
  { labelKey: 'Ferramentas' as const, icon: Wrench, items: ['Git', 'Docker', 'Vite', 'Vercel'], color: '#fdcb6e' },
  { labelKey: 'Infra & DevOps' as const, icon: Cloud, items: ['Linux', 'PostgreSQL', 'Serverless', 'GitHub Actions'], color: '#00b894' },
  { labelKey: 'Design' as const, icon: Palette, items: ['UI/UX Design', 'Figma', 'Design Systems', 'Prototipagem'], color: '#a29bfe' },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] as const } },
}

export default function SkillsShowcase() {
  const { t } = useT()

  return (
    <section className="py-28 md:py-40 relative">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-accent/4 rounded-full blur-[130px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-light/3 rounded-full blur-[150px]" />
      </div>

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="text-center mb-20"
        >
          <span className="inline-block text-accent-light text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            Skills
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            {t.skills.title}
          </h2>
          <p className="text-text-secondary mt-3 max-w-lg mx-auto text-lg">
            {t.skills.subtitle}
          </p>
          <div className="section-divider mt-8" />
        </motion.div>

        {/* Skills grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {skillCategories.map((cat) => {
            const label = cat.labelKey === 'Ferramentas' && t.skills_categories['Ferramentas']
              ? t.skills_categories['Ferramentas']
              : cat.labelKey
            return (
              <motion.div
                key={cat.labelKey}
                variants={item}
                className="glass-strong rounded-2xl p-6 hover:border-accent/30 transition-all duration-500 group card-hover"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{ background: `${cat.color}15` }}
                  >
                    <cat.icon size={20} style={{ color: cat.color }} />
                  </div>
                  <h3 className="font-bold text-text-primary">{label}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((s) => (
                    <span key={s} className="skill-tag">
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
