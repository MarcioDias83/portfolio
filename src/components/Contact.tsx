import { Mail, MapPin, Github, Linkedin, Send, ArrowUpRight, Phone, MessageCircle } from 'lucide-react'
import { useT } from '../i18n'
import ScrollReveal from './ScrollReveal'

export default function Contato() {
  const { t } = useT()

  return (
    <section id="contato" className="py-28 md:py-40 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/4 rounded-full blur-[150px]" />
        <img
          src="/imagens/contact/tech-bg.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-[0.03]"
        />
      </div>

      <div className="section-container relative z-10">
        <ScrollReveal>
          <div className="text-center mb-20">
            <span className="inline-flex items-center gap-2 text-accent-light text-xs font-semibold tracking-[0.3em] uppercase mb-4">
              <MessageCircle size={14} />
              {t.contact.badge}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              {t.contact.heading}
            </h2>
            <p className="text-text-secondary mt-3 max-w-lg mx-auto text-lg">
              {t.contact.subtitle}
            </p>
            <div className="section-divider mt-8" />
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
          <ScrollReveal direction="left" className="lg:col-span-3">
            <form
              action="https://formspree.io/f/1983mrd@gmail.com"
              method="POST"
              className="space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="relative group">
                  <input
                    type="text"
                    name="name"
                    placeholder={t.contact.name_placeholder}
                    required
                    className="w-full px-5 py-4 bg-surface border border-border rounded-2xl text-text-primary placeholder-text-muted focus:outline-none focus:border-accent/50 focus:shadow-lg focus:shadow-accent/10 transition-all duration-300 text-sm"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-accent/5 opacity-0 group-focus-within:opacity-100 transition-opacity pointer-events-none" />
                </div>
                <div className="relative group">
                  <input
                    type="email"
                    name="email"
                    placeholder={t.contact.email_placeholder}
                    required
                    className="w-full px-5 py-4 bg-surface border border-border rounded-2xl text-text-primary placeholder-text-muted focus:outline-none focus:border-accent/50 focus:shadow-lg focus:shadow-accent/10 transition-all duration-300 text-sm"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-accent/5 opacity-0 group-focus-within:opacity-100 transition-opacity pointer-events-none" />
                </div>
              </div>
              <div className="relative group">
                <textarea
                  name="message"
                  rows={6}
                  placeholder={t.contact.message_placeholder}
                  required
                  className="w-full px-5 py-4 bg-surface border border-border rounded-2xl text-text-primary placeholder-text-muted focus:outline-none focus:border-accent/50 focus:shadow-lg focus:shadow-accent/10 transition-all duration-300 resize-none text-sm"
                />
                <div className="absolute inset-0 rounded-2xl bg-accent/5 opacity-0 group-focus-within:opacity-100 transition-opacity pointer-events-none" />
              </div>
              <button
                type="submit"
                className="w-full magnetic-btn magnetic-btn-primary py-4 rounded-2xl text-sm"
                data-cursor="Enviar"
              >
                <Send size={16} />
                <span className="relative z-10">{t.contact.send}</span>
                <ArrowUpRight size={16} className="relative z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </form>
          </ScrollReveal>

          <ScrollReveal direction="right" className="lg:col-span-2 space-y-4">
            <a
              href="mailto:1983mrd@gmail.com"
              className="flex items-center gap-4 glass-strong rounded-2xl p-5 hover:border-accent/30 transition-all duration-300 group"
              data-cursor="Email"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center group-hover:bg-accent/25 transition-colors shrink-0">
                <Mail size={18} className="text-accent-light" />
              </div>
              <div className="min-w-0">
                <p className="text-[11px] text-text-muted uppercase tracking-wider mb-0.5">{t.contact.email_label}</p>
                <p className="text-sm text-text-primary truncate">1983mrd@gmail.com</p>
              </div>
            </a>

            <a
              href="https://wa.me/5551992293999"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 glass-strong rounded-2xl p-5 hover:border-accent/30 transition-all duration-300 group"
              data-cursor="WhatsApp"
            >
              <div className="w-12 h-12 rounded-xl bg-green-500/15 flex items-center justify-center group-hover:bg-green-500/25 transition-colors shrink-0">
                <Phone size={18} className="text-green-400" />
              </div>
              <div className="min-w-0">
                <p className="text-[11px] text-text-muted uppercase tracking-wider mb-0.5">{t.contact.whatsapp_label}</p>
                <p className="text-sm text-text-primary">+55 51 99229-3999</p>
              </div>
            </a>

            <div className="flex items-center gap-4 glass-strong rounded-2xl p-5">
              <div className="w-12 h-12 rounded-xl bg-accent-cyan/15 flex items-center justify-center shrink-0">
                <MapPin size={18} className="text-accent-cyan" />
              </div>
              <div>
                <p className="text-[11px] text-text-muted uppercase tracking-wider mb-0.5">{t.contact.location_label}</p>
                <p className="text-sm text-text-primary">Rio Grande do Sul, Brasil</p>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-3">
              <a
                href="https://github.com/MarcioDias83"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 p-3.5 glass-strong rounded-xl hover:bg-accent/15 transition-all duration-300 hover:text-accent-light group"
                aria-label="GitHub"
                data-cursor="GitHub"
              >
                <Github size={18} />
                <span className="text-xs text-text-muted group-hover:text-text-primary transition-colors">GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/marciordias"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 p-3.5 glass-strong rounded-xl hover:bg-accent/15 transition-all duration-300 hover:text-accent-light group"
                aria-label="LinkedIn"
                data-cursor="LinkedIn"
              >
                <Linkedin size={18} />
                <span className="text-xs text-text-muted group-hover:text-text-primary transition-colors">LinkedIn</span>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
