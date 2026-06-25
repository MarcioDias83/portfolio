import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-text-muted"
        >
          <p>© {new Date().getFullYear()} Márcio Dias. Todos os direitos reservados.</p>
          <p>
            Feito com <span className="text-accent-light">React + TypeScript + Tailwind</span>
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
