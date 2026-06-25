import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'Igreja App',
    desc: 'Aplicacao web completa para gestao de igreja com paginas institucionais, player de audio para sermoes, formularios validados e animacoes fluidas.',
    tags: ['React 19', 'TypeScript', 'Tailwind', 'Zustand', 'React Query', 'Framer Motion'],
    github: 'https://github.com/MarcioDias83/igreja-app',
    demo: null,
  },
  {
    title: 'Locadora React',
    desc: 'Catalogo interativo de veiculos com grid dinamico, secoes de servicos, depoimentos, newsletter e navegacao com scroll spy.',
    tags: ['React 19', 'Vite', 'Framer Motion'],
    github: 'https://github.com/MarcioDias83/locadora-react',
    demo: null,
  },
  {
    title: 'App de Tarefas Full-stack',
    desc: 'Aplicacao completa com autenticacao, CRUD de tarefas, banco de dados PostgreSQL e deploy automatizado com Docker.',
    tags: ['React', 'TypeScript', 'Fastify', 'PostgreSQL', 'Docker', 'Fly.io'],
    github: null,
    demo: null,
  },
]

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2 },
  },
}

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function Projects() {
  return (
    <section id="projetos" className="py-24 md:py-32">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent-light text-sm font-medium tracking-widest uppercase">
            Projetos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            Trabalhos que ja entreguei
          </h2>
          <p className="text-text-secondary mt-3 max-w-lg mx-auto">
            Cada projeto foi construido com foco em qualidade, performance e experiencia do usuario.
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
            <motion.div
              key={p.title}
              variants={item}
              className="glass rounded-2xl p-6 hover:border-accent/50 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-colors">
                <div className="w-4 h-4 rounded-full bg-accent-light" />
              </div>

              <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-4">
                {p.desc}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 text-xs font-medium bg-accent/10 text-accent-light rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3">
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-text-secondary hover:text-accent-light transition-colors"
                  >
                    <Github size={15} />
                    Codigo
                  </a>
                )}
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-text-secondary hover:text-accent-light transition-colors"
                  >
                    <ExternalLink size={15} />
                    Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
