import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Github, ExternalLink } from 'lucide-react'
import { useT } from '../i18n'
import SpotlightCard from './SpotlightCard'
import ScrollReveal from './ScrollReveal'

const projetos = [
  {
    titulo: 'Igreja App',
    descricao: 'Aplicação web completa para gestão de igreja com páginas institucionais, player de áudio, formulários com validação e animações fluidas.',
    tecnologias: ['React 19', 'TypeScript', 'Tailwind', 'Zustand', 'React Query', 'Framer Motion'],
    github: 'https://github.com/MarcioDias83/igreja-app',
    imagem: 'https://images.unsplash.com/photo-1548625149-fc4a29cf7092?w=800&q=85&fit=crop',
    cor: '#6c5ce7',
  },
  {
    titulo: 'Locadora React',
    descricao: 'Catálogo interativo de veículos com grid dinâmico, filtros, seções de serviços e navegação fluida com scroll spy.',
    tecnologias: ['React 19', 'Vite', 'Framer Motion'],
    github: 'https://github.com/MarcioDias83/locadora-react',
    imagem: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=85&fit=crop',
    cor: '#00cec9',
  },
  {
    titulo: 'App Full-stack',
    descricao: 'Aplicação completa com autenticação, CRUD, banco PostgreSQL e deploy automatizado com Docker.',
    tecnologias: ['React', 'TypeScript', 'Fastify', 'PostgreSQL', 'Docker', 'Fly.io'],
    github: null,
    imagem: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=85&fit=crop',
    cor: '#fd79a8',
  },
]

function CartaoProjeto({ projeto, indice }: { projeto: typeof projetos[0]; indice: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.2 1'],
  })
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1])
  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1])

  return (
    <motion.div ref={ref} style={{ scale, opacity }} className="group">
      <SpotlightCard className="h-full rounded-3xl overflow-hidden border-border p-0 card-hover">
        <div className="relative h-56 md:h-64 overflow-hidden">
          <img
            src={projeto.imagem}
            alt={projeto.titulo}
            loading="lazy"
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/40 to-transparent" />
          <div
            className="absolute bottom-0 left-0 right-0 h-1 transition-all duration-500 group-hover:h-1.5"
            style={{ background: `linear-gradient(90deg, ${projeto.cor}, transparent)` }}
          />
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <span
              className="px-3 py-1 rounded-full text-xs font-bold tracking-wider"
              style={{ background: `${projeto.cor}33`, color: projeto.cor }}
            >
              0{indice + 1}
            </span>
          </div>
          <div className="absolute inset-0 bg-dark-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-3">
            {projeto.github && (
              <a
                href={projeto.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass-strong rounded-xl hover:bg-accent/30 transition-all hover:scale-110"
                aria-label="GitHub"
                data-cursor=" Código"
              >
                <Github size={20} />
              </a>
            )}
            <a
              href={projeto.github || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-strong rounded-xl hover:bg-accent/30 transition-all hover:scale-110"
              aria-label="Link externo"
              data-cursor="Abrir"
            >
              <ExternalLink size={20} />
            </a>
          </div>
        </div>

        <div className="p-6 md:p-7 flex flex-col flex-1">
          <h3 className="text-xl font-bold mb-3 group-hover:text-accent-light transition-colors duration-300">
            {projeto.titulo}
          </h3>
          <p className="text-text-secondary text-sm leading-relaxed mb-5 flex-1">
            {projeto.descricao}
          </p>
          <div className="flex flex-wrap gap-2">
            {projeto.tecnologias.map((tag) => (
              <span key={tag} className="skill-tag text-[10px]">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </SpotlightCard>
    </motion.div>
  )
}

const containerAnim = {
  oculto: {},
  visivel: { transition: { staggerChildren: 0.2 } },
}

const itemAnim = {
  oculto: { opacity: 0, y: 60, scale: 0.95 },
  visivel: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] as const } },
}

export default function Projetos() {
  const { t } = useT()

  return (
    <section id="projetos" className="py-28 md:py-40 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-accent-warm/5 rounded-full blur-[120px]" />
      </div>

      <div className="section-container relative z-10">
        <ScrollReveal>
          <div className="text-center mb-20">
            <span className="inline-block text-accent-light text-xs font-semibold tracking-[0.3em] uppercase mb-4">
              {t.projects.badge}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              {t.projects.heading}
            </h2>
            <p className="text-text-secondary max-w-lg mx-auto text-lg">
              {t.projects.subtitle}
            </p>
            <div className="section-divider mt-8" />
          </div>
        </ScrollReveal>

        <motion.div
          variants={containerAnim}
          initial="oculto"
          whileInView="visivel"
          viewport={{ once: true, margin: '-50px' }}
          className="grid md:grid-cols-3 gap-8"
        >
          {projetos.map((p, i) => (
            <motion.div key={p.titulo} variants={itemAnim}>
              <CartaoProjeto projeto={p} indice={i} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
