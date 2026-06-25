import { motion } from 'framer-motion'
import { Heart, ArrowUp, Github, Linkedin, Mail } from 'lucide-react'
import { useT } from '../i18n'
import ScrollReveal from './ScrollReveal'

export default function Rodape() {
  const { t } = useT()

  const voltarAoTopo = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-border relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent pointer-events-none" />

      <div className="section-container relative z-10 py-12">
        <ScrollReveal>
          <div className="flex flex-col items-center gap-8">
            {/* Logo */}
            <motion.a
              href="#hero"
              className="text-3xl font-bold gradient-text tracking-tight"
              whileHover={{ scale: 1.05 }}
            >
              MD<span className="text-accent-light">.</span>
            </motion.a>

            {/* Links */}
            <div className="flex items-center gap-6">
              {[
                { href: 'https://github.com/MarcioDias83', icone: Github, rotulo: 'GitHub' },
                { href: 'https://linkedin.com/in/marciordias', icone: Linkedin, rotulo: 'LinkedIn' },
                { href: 'mailto:1983mrd@gmail.com', icone: Mail, rotulo: 'Email' },
              ].map(({ href, icone: Icone, rotulo }) => (
                <a
                  key={rotulo}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  className="p-2.5 glass-strong rounded-lg hover:bg-accent/15 transition-all duration-300 hover:text-accent-light"
                  aria-label={rotulo}
                  data-cursor={rotulo}
                >
                  <Icone size={18} />
                </a>
              ))}
            </div>

            {/* Divider */}
            <div className="section-divider w-full" />

            {/* Bottom */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 w-full text-sm text-text-muted">
              <p>
                © {new Date().getFullYear()} Márcio Dias. {t.footer.rights}
              </p>
              <p className="flex items-center gap-1.5">
                {t.footer.made_with} <Heart size={12} className="text-accent-warm fill-accent-warm" /> <span className="text-accent-light font-medium">React + TypeScript + Tailwind</span>
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Botão voltar ao topo */}
      <motion.button
        onClick={voltarAoTopo}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="fixed bottom-6 right-6 z-40 p-3 glass-strong rounded-xl hover:bg-accent/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/20 group"
        aria-label="Voltar ao topo"
        data-cursor="Topo"
      >
        <ArrowUp size={20} className="text-text-muted group-hover:text-accent-light transition-colors" />
      </motion.button>
    </footer>
  )
}
