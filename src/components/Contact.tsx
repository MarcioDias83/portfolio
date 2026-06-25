import { motion } from 'framer-motion'
import { Mail, MapPin, Github, Linkedin, Send } from 'lucide-react'
import { useT } from '../i18n'

export default function Contact() {
  const { t } = useT()

  return (
    <section id="contato" className="py-24 md:py-32">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent-light text-sm font-medium tracking-widest uppercase">
            {t.contact.badge}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            {t.contact.heading}
          </h2>
          <p className="text-text-secondary mt-3 max-w-lg mx-auto">
            {t.contact.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              action="https://formspree.io/f/1983mrd@gmail.com"
              method="POST"
              className="space-y-4"
            >
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder={t.contact.name_placeholder}
                  required
                  className="w-full px-4 py-3 bg-surface border border-border rounded-xl text-text-primary placeholder-text-muted focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder={t.contact.email_placeholder}
                  required
                  className="w-full px-4 py-3 bg-surface border border-border rounded-xl text-text-primary placeholder-text-muted focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  rows={5}
                  placeholder={t.contact.message_placeholder}
                  required
                  className="w-full px-4 py-3 bg-surface border border-border rounded-xl text-text-primary placeholder-text-muted focus:outline-none focus:border-accent transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-accent hover:bg-accent/90 text-white rounded-xl font-medium transition-all hover:shadow-lg hover:shadow-accent/30 flex items-center justify-center gap-2"
              >
                <Send size={16} />
                {t.contact.send}
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <a
              href="mailto:1983mrd@gmail.com"
              className="flex items-center gap-4 glass rounded-xl p-4 hover:border-accent/40 transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                <Mail size={18} className="text-accent-light" />
              </div>
              <div>
                <p className="text-sm text-text-muted">{t.contact.email_label}</p>
                <p className="text-text-primary text-sm">1983mrd@gmail.com</p>
              </div>
            </a>

            <a
              href="https://wa.me/5551992293999"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 glass rounded-xl p-4 hover:border-accent/40 transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                <Send size={18} className="text-accent-light" />
              </div>
              <div>
                <p className="text-sm text-text-muted">{t.contact.whatsapp_label}</p>
                <p className="text-text-primary text-sm">+55 51 99229-3999</p>
              </div>
            </a>

            <div className="flex items-center gap-4 glass rounded-xl p-4">
              <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                <MapPin size={18} className="text-accent-light" />
              </div>
              <div>
                <p className="text-sm text-text-muted">{t.contact.location_label}</p>
                <p className="text-text-primary text-sm">Rio Grande do Sul, Brasil</p>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/MarcioDias83"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass rounded-lg hover:bg-surface-hover transition-all hover:text-accent-light"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://linkedin.com/in/marciodias83"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass rounded-lg hover:bg-surface-hover transition-all hover:text-accent-light"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
