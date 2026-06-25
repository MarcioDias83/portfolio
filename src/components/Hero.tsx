import { useState, useEffect, Suspense } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'
import { useT } from '../i18n'
import AuroraBg from './AuroraBg'
import Magnet from './Magnet'
import TextReveal from './TextReveal'
import Parallax from './Parallax'
import HeroScene from './HeroScene'

function TypeText({ texts }: { texts: string[] }) {
  const [index, setIndex] = useState(0)
  const [char, setChar] = useState(0)
  const [dir, setDir] = useState(1)

  useEffect(() => {
    const t = setInterval(() => {
      setChar((c) => {
        const next = c + dir
        if (next >= texts[index].length + 8) {
          setTimeout(() => setDir(-1), 600)
          return c
        }
        if (next < 0) {
          setDir(1)
          setIndex((i) => (i + 1) % texts.length)
          return 0
        }
        return next
      })
    }, 70)
    return () => clearInterval(t)
  }, [index, dir, texts])

  return (
    <span className="gradient-text inline-block min-w-[4ch]">
      {texts[index].slice(0, char)}
      <span className="animate-pulse text-accent-light">|</span>
    </span>
  )
}

function FloatingOrb({ delay, x, y, size, color }: { delay: number; x: string; y: string; size: number; color: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, delay }}
      className="absolute rounded-full blur-3xl animate-float-slow"
      style={{
        left: x,
        top: y,
        width: size,
        height: size,
        background: color,
        animationDelay: `${delay}s`,
      }}
    />
  )
}

export default function Hero() {
  const { t } = useT()
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 500], [1, 0])
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const scale = useTransform(scrollY, [0, 500], [1, 0.9])

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
      {/* Imagem de fundo */}
      <div className="absolute inset-0 z-0">
        <img
          src="/imagens/hero/tech-gradient.jpg"
          alt=""
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-dark-900/60" />
      </div>

      {/* Cena 3D */}
      <Suspense fallback={null}>
        <HeroScene />
      </Suspense>

      {/* Aurora Background */}
      <div className="absolute inset-0 z-0">
        <AuroraBg
          colorStops={['#6c5ce7', '#a29bfe', '#4834d4']}
          amplitude={1.5}
          blend={0.7}
          speed={0.6}
        />
      </div>

      {/* Floating orbs com parallax */}
      <Parallax speed={0.3} className="absolute inset-0">
        <FloatingOrb delay={0.5} x="10%" y="20%" size={300} color="rgba(108,92,231,0.15)" />
        <FloatingOrb delay={1} x="80%" y="15%" size={250} color="rgba(162,155,254,0.1)" />
      </Parallax>
      <Parallax speed={0.2} className="absolute inset-0">
        <FloatingOrb delay={1.5} x="60%" y="70%" size={200} color="rgba(253,121,168,0.08)" />
        <FloatingOrb delay={2} x="20%" y="75%" size={180} color="rgba(0,206,201,0.06)" />
      </Parallax>

      {/* Glow do mouse */}
      <div
        className="absolute inset-0 opacity-30 transition-all duration-700 pointer-events-none z-10"
        style={{
          background: `radial-gradient(800px at ${mousePos.x}px ${mousePos.y}px, rgba(108,92,231,0.12), transparent 70%)`,
        }}
      />

      {/* Overlay gradiente */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900/30 via-transparent to-dark-900/80 z-10" />

      {/* Conteúdo */}
      <motion.div
        style={{ opacity, y, scale }}
        className="section-container relative z-20 text-center"
      >
        {/* Foto de perfil */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-accent/30 profile-glow transition-all duration-500">
              <img
                src="/profile.jpg"
                alt="Marcio Dias"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-1 right-1 w-5 h-5 rounded-full bg-green-400 border-3 border-dark-900 shadow-lg shadow-green-400/30" />
          </div>
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
        >
          <span className="inline-flex items-center gap-2 px-5 py-2 text-xs font-semibold tracking-[0.25em] uppercase text-accent-light glass-strong rounded-full mb-8 border-accent/20">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            {t.hero.available}
          </span>
        </motion.div>

        {/* Título principal com text reveal */}
        <div className="mb-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl md:text-3xl font-light text-text-secondary mb-2 tracking-normal"
          >
            {t.hero.hello}
          </motion.p>
          <TextReveal
            className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold leading-[1.05] tracking-tight gradient-text"
            delay={0.3}
            speed={0.02}
          >
            {'Marcio Dias'}
          </TextReveal>
        </div>

        {/* Typewriter do cargo */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="text-xl md:text-2xl text-text-secondary mb-3 font-light"
        >
          <TypeText texts={t.hero.roles} />
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: [0.23, 1, 0.32, 1] }}
          className="text-base md:text-lg text-text-muted max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          {t.hero.tagline_before}{' '}
          <span className="text-accent-light font-medium">
            <TypeText texts={t.hero.words} />
          </span>{' '}
          {t.hero.tagline_after}
        </motion.p>

        {/* Botões CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: [0.23, 1, 0.32, 1] }}
          className="flex flex-wrap items-center justify-center gap-4 mb-14"
        >
          <Magnet magnetStrength={5} padding={60}>
            <a href="#projetos" className="magnetic-btn magnetic-btn-primary block" data-cursor="Ver">
              <span className="relative z-10">{t.hero.btn_projects}</span>
            </a>
          </Magnet>
          <Magnet magnetStrength={5} padding={60}>
            <a href="#contato" className="magnetic-btn magnetic-btn-secondary block" data-cursor="Falar">
              <span className="relative z-10">{t.hero.btn_contact}</span>
            </a>
          </Magnet>
        </motion.div>

        {/* Links sociais */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: [0.23, 1, 0.32, 1] }}
          className="flex items-center justify-center gap-3"
        >
          {[
            { href: 'https://github.com/MarcioDias83', icon: Github, label: 'GitHub' },
            { href: 'https://linkedin.com/in/marciordias', icon: Linkedin, label: 'LinkedIn' },
            { href: 'mailto:1983mrd@gmail.com', icon: Mail, label: 'Email' },
          ].map(({ href, icon: Icon, label }) => (
            <Magnet key={label} magnetStrength={4} padding={40}>
              <a
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                className="p-3.5 glass-strong rounded-xl hover:bg-accent/20 transition-all duration-300 hover:text-accent-light hover:border-accent/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/20 block"
                aria-label={label}
                data-cursor={label}
              >
                <Icon size={20} />
              </a>
            </Magnet>
          ))}
        </motion.div>
      </motion.div>

      {/* Indicador de scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-text-muted font-medium">Scroll</span>
        <motion.a
          href="#projetos"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="block text-text-muted hover:text-accent-light transition-colors"
        >
          <ArrowDown size={20} />
        </motion.a>
      </motion.div>
    </section>
  )
}
