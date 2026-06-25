import { motion } from 'framer-motion'
import { Github } from 'lucide-react'
import TiltCard from './TiltCard'

const projects = [
  {
    title: 'Igreja App',
    desc: 'Aplicacao web completa para gestao de igreja com paginas institucionais, player de audio, formularios com validacao e animacoes fluidas.',
    tags: ['React 19', 'TypeScript', 'Tailwind', 'Zustand', 'React Query', 'Framer Motion'],
    github: 'https://github.com/MarcioDias83/igreja-app',
    img: 'https://images.unsplash.com/photo-1548625149-fc4a29cf7092?w=600&q=85&fit=crop',
  },
  {
    title: 'Locadora React',
    desc: 'Catalogo interativo de veiculos com grid dinamico, filtros, secoes de servicos e navegacao fluida com scroll spy.',
    tags: ['React 19', 'Vite', 'Framer Motion'],
    github: 'https://github.com/MarcioDias83/locadora-react',
    img: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&q=85&fit=crop',
  },
  {
    title: 'App Full-stack',
    desc: 'Aplicacao completa com autenticacao, CRUD, banco PostgreSQL e deploy automatizado com Docker. Demonstra habilidades de backend integrado.',
    tags: ['React', 'TypeScript', 'Fastify', 'PostgreSQL', 'Docker', 'Fly.io'],
    github: null,
    img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=85&fit=crop',
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
}

const item = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function Projects() {
  return (
    <section id="projetos" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[100px]" />
      </div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent-light text-sm font-medium tracking-[0.2em] uppercase">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-3">
            Projetos que ja entreguei
          </h2>
          <p className="text-text-secondary max-w-lg mx-auto">
            Cada projeto combina tecnologia moderna com design cuidadoso.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {projects.map((p) => (
            <motion.div key={p.title} variants={item}>
              <TiltCard className="h-full">
                <div className="group glass rounded-2xl overflow-hidden h-full flex flex-col hover:border-accent/50 transition-colors duration-300">
                  <div className="h-40 relative overflow-hidden">
                    <img
                      src={p.img}
                      alt={p.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-dark-900/30 to-transparent" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
                    <p className="text-text-secondary text-sm leading-relaxed mb-4 flex-1">
                      {p.desc}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 text-[11px] font-medium bg-accent/10 text-accent-light/90 rounded-md"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-3 pt-2 border-t border-border">
                      {p.github && (
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-xs text-text-secondary hover:text-accent-light transition-colors"
                        >
                          <Github size={14} />
                          Codigo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
