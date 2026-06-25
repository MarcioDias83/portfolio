import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import { useT } from '../i18n'

export default function Footer() {
  const { t } = useT()

  return (
    <footer className="border-t border-border py-10 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-dark-900/50 to-transparent pointer-events-none" />
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-text-muted"
        >
          <p className="flex items-center gap-1">
            © {new Date().getFullYear()} Márcio Dias. {t.footer.rights}
          </p>
          <p className="flex items-center gap-1.5">
            {t.footer.made_with} <Heart size={12} className="text-accent-warm fill-accent-warm" /> <span className="text-accent-light font-medium">React + TypeScript + Tailwind</span>
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
