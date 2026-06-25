import { useState, useEffect } from 'react'
import { Menu, X, Languages } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useT } from '../i18n'
import Magnet from './Magnet'

export default function Header() {
  const { t, lang, setLang } = useT()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#hero', label: t.nav.home },
    { href: '#projetos', label: t.nav.projects },
    { href: '#sobre', label: t.nav.about },
    { href: '#contato', label: t.nav.contact },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass-strong shadow-xl shadow-dark-900/50 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <div className="section-container flex items-center justify-between h-16 md:h-18">
        <Magnet magnetStrength={5} padding={40}>
          <a href="#hero" className="text-xl font-bold gradient-text block tracking-tight">
            MD<span className="text-accent-light">.</span>
          </a>
        </Magnet>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Magnet key={l.href} magnetStrength={5} padding={30}>
              <a
                href={l.href}
                className="relative px-4 py-2 text-sm text-text-secondary hover:text-text-primary transition-colors block rounded-lg hover:bg-white/5"
              >
                {l.label}
              </a>
            </Magnet>
          ))}
          <div className="w-px h-5 bg-border mx-2" />
          <button
            onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')}
            className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold glass-strong rounded-lg hover:bg-accent/15 transition-all text-text-secondary hover:text-accent-light"
            aria-label="Toggle language"
          >
            <Languages size={14} />
            {lang === 'pt' ? 'EN' : 'PT'}
          </button>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')}
            className="flex items-center gap-1 px-3 py-2 text-xs font-semibold glass-strong rounded-lg text-text-secondary"
            aria-label="Toggle language"
          >
            <Languages size={14} />
            {lang === 'pt' ? 'EN' : 'PT'}
          </button>
          <button
            className="text-text-primary p-2 hover:bg-white/5 rounded-lg transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="md:hidden glass-strong border-t border-border overflow-hidden"
          >
            <nav className="flex flex-col p-4 gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-sm text-text-secondary hover:text-accent-light transition-colors py-3 px-4 rounded-lg hover:bg-white/5"
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
