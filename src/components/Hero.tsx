import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-accent/20 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-light/10 rounded-full blur-[150px] animate-pulse-glow" style={{ animationDelay: '1s' }} />
      </div>

      <div className="section-container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-widest uppercase text-accent-light glass rounded-full mb-6">
            Full-stack & UI Designer
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6"
        >
          Ola, eu sou{' '}
          <span className="gradient-text">Marcio Dias</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Transformando ideias em solucoes digitais — do frontend ao backend,
          do design a entrega.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projetos"
            className="px-8 py-3 bg-accent hover:bg-accent/90 text-white rounded-full font-medium transition-all hover:shadow-lg hover:shadow-accent/30"
          >
            Ver projetos
          </a>
          <a
            href="#contato"
            className="px-8 py-3 glass hover:bg-surface-hover text-text-primary rounded-full font-medium transition-all"
          >
            Entrar em contato
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex items-center justify-center gap-4 mt-12"
        >
          <a
            href="https://github.com/MarcioDias83"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 glass rounded-full hover:bg-surface-hover transition-all hover:text-accent-light"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com/in/marciodias83"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 glass rounded-full hover:bg-surface-hover transition-all hover:text-accent-light"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#projetos"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1.5 }, y: { repeat: Infinity, duration: 2 } }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-text-muted hover:text-accent-light transition-colors"
      >
        <ArrowDown size={24} />
      </motion.a>
    </section>
  )
}
