import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin } from 'lucide-react'

const roles = ['Full-stack Developer', 'UI Designer', 'React Specialist', 'Problem Solver']
const words = ['solucoes', 'interfaces', 'experiencias', 'sistemas']

function TypeText({ texts }: { texts: string[] }) {
  const [index, setIndex] = useState(0)
  const [char, setChar] = useState(0)
  const [dir, setDir] = useState(1)

  useEffect(() => {
    const t = setInterval(() => {
      setChar((c) => {
        const next = c + dir
        if (next >= texts[index].length + 8) {
          setTimeout(() => setDir(-1), 500)
          return c
        }
        if (next < 0) {
          setDir(1)
          setIndex((i) => (i + 1) % texts.length)
          return 0
        }
        return next
      })
    }, 80)
    return () => clearInterval(t)
  }, [index, dir, texts])

  return (
    <span className="gradient-text inline-block min-w-[3ch]">
      {texts[index].slice(0, char)}
      <span className="animate-pulse">|</span>
    </span>
  )
}

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const onMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-30 transition-all duration-500"
        style={{
          background: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(108,92,231,0.15), transparent)`,
        }}
      />
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-accent/15 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-light/10 rounded-full blur-[150px] animate-pulse-glow" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[180px] animate-pulse-glow" style={{ animationDelay: '2s' }} />

      <div className="section-container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-widest uppercase text-accent-light glass rounded-full mb-6 border-accent/30">
            Disponível para novos projetos
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-4"
        >
          Ola, eu sou{' '}
          <span className="gradient-text">Marcio Dias</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-xl md:text-2xl text-text-secondary mb-2"
        >
          <TypeText texts={roles} />
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-base md:text-lg text-text-muted max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Transformando ideias em <TypeText texts={words} /> digitais —
          do design a entrega, com foco em qualidade e experiencia do usuario.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projetos"
            className="group relative px-8 py-3 bg-accent hover:bg-accent/90 text-white rounded-full font-medium transition-all"
          >
            <span className="absolute inset-0 rounded-full bg-white/20 blur-md group-hover:blur-xl transition-all opacity-0 group-hover:opacity-100" />
            <span className="relative">Ver projetos</span>
          </a>
          <a
            href="#contato"
            className="px-8 py-3 glass hover:bg-surface-hover text-text-primary rounded-full font-medium transition-all border-border hover:border-accent/50"
          >
            Entrar em contato
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex items-center justify-center gap-4 mt-12"
        >
          {[
            { href: 'https://github.com/MarcioDias83', icon: Github, label: 'GitHub' },
            { href: 'https://linkedin.com/in/marciodias83', icon: Linkedin, label: 'LinkedIn' },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass rounded-full hover:bg-surface-hover transition-all hover:text-accent-light hover:border-accent/40 hover:-translate-y-1"
              aria-label={label}
            >
              <Icon size={20} />
            </a>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#projetos"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="block text-text-muted hover:text-accent-light transition-colors"
        >
          <ArrowDown size={24} />
        </motion.a>
      </motion.div>
    </section>
  )
}
