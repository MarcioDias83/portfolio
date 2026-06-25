import { motion } from 'framer-motion'
import {
  Palette, Database, Layout,
  Cloud, Terminal,
} from 'lucide-react'

const skillCategories = [
  {
    label: 'Frontend',
    icon: Layout,
    items: ['React 19', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    label: 'State & Data',
    icon: Database,
    items: ['Zustand', 'React Query', 'Zod', 'React Router'],
  },
  {
    label: 'Backend',
    icon: Terminal,
    items: ['Python', 'FastAPI', 'Node.js', 'APIs REST'],
  },
  {
    label: 'Ferramentas',
    icon: Wrench,
    items: ['Git', 'Docker', 'Vite', 'Vercel'],
  },
  {
    label: 'Infra & DevOps',
    icon: Cloud,
    items: ['Linux', 'PostgreSQL', 'Serverless', 'GitHub Actions'],
  },
  {
    label: 'Design',
    icon: Palette,
    items: ['UI/UX Design', 'Figma', 'Design Systems', 'Prototipagem'],
  },
]

function Wrench({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  )
}

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function SkillsShowcase() {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-64 h-64 bg-accent/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent-light/5 rounded-full blur-[120px]" />
      </div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent-light text-sm font-medium tracking-widest uppercase">
            Skills
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            Stack que uso no dia a dia
          </h2>
          <p className="text-text-secondary mt-3 max-w-lg mx-auto">
            Ferramentas e tecnologias que dominou e aplica em cada projeto.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {skillCategories.map((cat) => (
            <motion.div
              key={cat.label}
              variants={item}
              className="glass rounded-2xl p-6 hover:border-accent/40 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center group-hover:bg-accent/25 transition-colors">
                  <cat.icon size={20} className="text-accent-light" />
                </div>
                <h3 className="font-semibold text-text-primary">{cat.label}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1 text-xs font-medium bg-dark-600/50 text-text-secondary rounded-full border border-border"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
