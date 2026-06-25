import { motion } from 'framer-motion'
import {
  Code2, Monitor, Database, ShieldCheck, Terminal,
  Globe, Smartphone, Wrench, GraduationCap,
} from 'lucide-react'
import { useT } from '../i18n'

const competencies = [
  { icon: Code2, label: 'React . TypeScript . Vite' },
  { icon: Terminal, label: 'Python . APIs . Automação' },
  { icon: Database, label: 'Banco de Dados . SQL' },
  { icon: Monitor, label: 'Linux . Windows . Docker' },
  { icon: ShieldCheck, label: 'QA . Testes . Qualidade' },
  { icon: Globe, label: 'Git . GitHub . Deploy' },
  { icon: Wrench, label: 'Suporte N1/N2 . Infraestrutura' },
  { icon: Smartphone, label: 'Atendimento Remoto . Presencial' },
]

export default function About() {
  const { t } = useT()

  return (
    <section id="sobre" className="py-24 md:py-32">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent-light text-sm font-medium tracking-widest uppercase">
            {t.about.badge}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            {t.about.heading}
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 space-y-5 text-text-secondary leading-relaxed"
          >
            <p dangerouslySetInnerHTML={{ __html: t.about.p1 }} />
            <p dangerouslySetInnerHTML={{ __html: t.about.p2 }} />
            <p dangerouslySetInnerHTML={{ __html: t.about.p3 }} />

            <div className="glass rounded-xl p-5 mt-6">
              <h4 className="text-text-primary font-semibold mb-3 flex items-center gap-2">
                <GraduationCap size={18} className="text-accent-light" />
                {t.about.formation}
              </h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-accent-light mt-1">{'>'}</span>
                  <span>{t.about.degree1}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-light mt-1">{'>'}</span>
                  <span>{t.about.degree2}</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-3 py-1 text-xs bg-surface rounded-full text-text-muted">{t.about.lang_pt}</span>
              <span className="px-3 py-1 text-xs bg-surface rounded-full text-text-muted">{t.about.lang_en}</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-4"
          >
            <h3 className="font-semibold text-text-primary mb-1">{t.about.competencies}</h3>
            <div className="grid grid-cols-1 gap-2.5">
              {competencies.map((c) => (
                <div
                  key={c.label}
                  className="flex items-center gap-3 glass rounded-lg px-4 py-2.5 hover:border-accent/40 transition-all"
                >
                  <c.icon size={16} className="text-accent-light shrink-0" />
                  <span className="text-sm text-text-secondary">{c.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
