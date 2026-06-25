import { useState, useEffect } from 'react'
import { Menu, X, Languages } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useT } from '../i18n'

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="section-container flex items-center justify-between h-16">
        <a href="#hero" className="text-lg font-bold gradient-text">
          MD
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-text-secondary hover:text-accent-light transition-colors"
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium glass rounded-full hover:bg-surface-hover transition-all text-text-secondary hover:text-accent-light"
            aria-label="Toggle language"
          >
            <Languages size={14} />
            {lang === 'pt' ? 'EN' : 'PT'}
          </button>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')}
            className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium glass rounded-full text-text-secondary"
            aria-label="Toggle language"
          >
            <Languages size={14} />
            {lang === 'pt' ? 'EN' : 'PT'}
          </button>
          <button
            className="text-text-primary"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-border overflow-hidden"
          >
            <nav className="flex flex-col p-4 gap-3">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-sm text-text-secondary hover:text-accent-light transition-colors py-2"
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
