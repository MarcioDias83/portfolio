import { motion } from 'framer-motion'
import {
  Palette, Layout,
  Cloud, Wrench, Sparkles,
  Box, Wand2, Server, Brain,
} from 'lucide-react'
import { useT } from '../i18n'
import ScrollReveal from './ScrollReveal'

const skillsDestaques = [
  {
    titulo: 'React + TypeScript + Tailwind',
    descricao: 'Frontend moderno, tipado e estilizado',
    icone: Layout,
    cor: '#6c5ce7',
    itens: ['React 19', 'TypeScript', 'Tailwind CSS 4', 'Next.js', 'Vite'],
  },
  {
    titulo: 'Three.js / WebGL',
    descricao: 'Cenas 3D interativas e shaders',
    icone: Box,
    cor: '#00cec9',
    itens: ['Three.js', 'React Three Fiber', 'Drei', 'Shaders GLSL', 'Postprocessing'],
  },
  {
    titulo: 'GSAP / Framer Motion',
    descricao: 'Animações premium e scroll effects',
    icone: Wand2,
    cor: '#fd79a8',
    itens: ['GSAP', 'ScrollTrigger', 'Framer Motion', 'Lenis', 'Keyframes'],
  },
  {
    titulo: 'PostgreSQL + Docker',
    descricao: 'Banco robusto e containerização',
    icone: Server,
    cor: '#00b894',
    itens: ['PostgreSQL', 'Docker', 'Prisma', 'Fly.io', 'Vercel'],
  },
  {
    titulo: 'Python + FastAPI',
    descricao: 'Backend rápido e APIs modernas',
    icone: Brain,
    cor: '#a29bfe',
    itens: ['Python', 'FastAPI', 'Automação', 'APIs REST', 'SQLite'],
  },
]

const categoriasExtras = [
  { chave: 'Ferramentas', icone: Wrench, itens: ['Git', 'GitHub Actions', 'Linux', 'Vercel', 'Cloudflare'], cor: '#fdcb6e' },
  { chave: 'Design', icone: Palette, itens: ['Figma', 'UI/UX', 'Design Systems', 'Prototipagem', 'Acessibilidade'], cor: '#e17055' },
  { chave: 'Infraestrutura', icone: Cloud, itens: ['Serverless', 'CI/CD', 'Monitoring', 'Redis', 'Nginx'], cor: '#74b9ff' },
]

const containerAnim = {
  oculto: {},
  visivel: { transition: { staggerChildren: 0.1 } },
}

const itemAnim = {
  oculto: { opacity: 0, y: 40, scale: 0.95 },
  visivel: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] as const } },
}

export default function VitrineSkills() {
  const { t } = useT()

  return (
    <section className="py-28 md:py-40 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-accent/4 rounded-full blur-[130px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-light/3 rounded-full blur-[150px]" />
      </div>

      <div className="section-container relative z-10">
        <ScrollReveal>
          <div className="text-center mb-20">
            <span className="inline-flex items-center gap-2 text-accent-light text-xs font-semibold tracking-[0.3em] uppercase mb-4">
              <Sparkles size={14} />
              Destaques
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              {t.skills.title}
            </h2>
            <p className="text-text-secondary mt-3 max-w-lg mx-auto text-lg">
              {t.skills.subtitle}
            </p>
            <div className="section-divider mt-8" />
          </div>
        </ScrollReveal>

        {/* Skills em destaque — 5 principais */}
        <motion.div
          variants={containerAnim}
          initial="oculto"
          whileInView="visivel"
          viewport={{ once: true, margin: '-50px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16"
        >
          {skillsDestaques.map((skill, i) => (
            <motion.div
              key={skill.titulo}
              variants={itemAnim}
              className={`glass-strong rounded-2xl p-6 hover:border-accent/30 transition-all duration-500 group card-hover ${
                i === 4 ? 'sm:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                  style={{ background: `${skill.cor}20`, boxShadow: `0 0 20px ${skill.cor}00` }}
                >
                  <skill.icone size={22} style={{ color: skill.cor }} />
                </div>
                <div>
                  <h3 className="font-bold text-text-primary text-sm">{skill.titulo}</h3>
                  <p className="text-[11px] text-text-muted">{skill.descricao}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {skill.itens.map((s) => (
                  <span
                    key={s}
                    className="px-2.5 py-1 text-[10px] font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                    style={{ background: `${skill.cor}15`, color: skill.cor, border: `1px solid ${skill.cor}20` }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills extras */}
        <ScrollReveal>
          <div className="text-center mb-10">
            <h3 className="text-xl font-bold text-text-primary">Complementares</h3>
          </div>
        </ScrollReveal>

        <motion.div
          variants={containerAnim}
          initial="oculto"
          whileInView="visivel"
          viewport={{ once: true, margin: '-50px' }}
          className="grid sm:grid-cols-3 gap-4"
        >
          {categoriasExtras.map((cat) => (
            <motion.div
              key={cat.chave}
              variants={itemAnim}
              className="glass-strong rounded-2xl p-5 hover:border-accent/30 transition-all duration-500 group card-hover"
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{ background: `${cat.cor}15` }}
                >
                  <cat.icone size={16} style={{ color: cat.cor }} />
                </div>
                <h3 className="font-bold text-text-primary text-sm">{cat.chave}</h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {cat.itens.map((s) => (
                  <span key={s} className="skill-tag text-[10px]">
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
