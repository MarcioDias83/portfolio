import { motion } from 'framer-motion'
import {
  Code2, Monitor, Database, ShieldCheck, Terminal,
  Globe, Smartphone, Wrench, GraduationCap, Zap,
  ArrowRight,
} from 'lucide-react'
import { useT } from '../i18n'

const competencies = [
  { icon: Code2, label: 'React . TypeScript . Vite', color: '#6c5ce7' },
  { icon: Terminal, label: 'Python . APIs . Automação', color: '#00cec9' },
  { icon: Database, label: 'Banco de Dados . SQL', color: '#fd79a8' },
  { icon: Monitor, label: 'Linux . Windows . Docker', color: '#a29bfe' },
  { icon: ShieldCheck, label: 'QA . Testes . Qualidade', color: '#00b894' },
  { icon: Globe, label: 'Git . GitHub . Deploy', color: '#74b9ff' },
  { icon: Wrench, label: 'Suporte N1/N2 . Infraestrutura', color: '#fdcb6e' },
  { icon: Smartphone, label: 'Atendimento Remoto . Presencial', color: '#e17055' },
]

const timeline = [
  { year: '2019', title: 'Início na TI', desc: 'Suporte técnico N1/N2 e help desk corporativo' },
  { year: '2021', title: 'Desenvolvimento', desc: 'Transição para frontend com React e TypeScript' },
  { year: '2023', title: 'Full-stack', desc: 'APIs Python/Fastify, PostgreSQL, Docker' },
  { year: '2025', title: 'UI Designer', desc: 'Design systems, Figma, prototipagem avançada' },
]

export default function About() {
  const { t } = useT()

  return (
    <section id="sobre" className="py-28 md:py-40 relative">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-accent/3 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-accent-cyan/3 rounded-full blur-[130px]" />
      </div>

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="text-center mb-20"
        >
          <span className="inline-block text-accent-light text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            {t.about.badge}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            {t.about.heading}
          </h2>
          <div className="section-divider mt-8" />
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: Bio + Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Bio paragraphs */}
            <div className="flex items-start gap-5 mb-6">
              <div className="shrink-0">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden border border-accent/20 profile-glow transition-all duration-500">
                  <img
                    src="/profile.jpg"
                    alt="Marcio Dias"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-5 text-text-secondary leading-relaxed text-[15px]">
                <p dangerouslySetInnerHTML={{ __html: t.about.p1 }} />
                <p dangerouslySetInnerHTML={{ __html: t.about.p2 }} />
                <p dangerouslySetInnerHTML={{ __html: t.about.p3 }} />
              </div>
            </div>

            {/* Education card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-strong rounded-2xl p-6 mt-8"
            >
              <h4 className="text-text-primary font-bold mb-4 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center">
                  <GraduationCap size={16} className="text-accent-light" />
                </div>
                {t.about.formation}
              </h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3 group">
                  <ArrowRight size={14} className="text-accent-light mt-1 shrink-0 group-hover:translate-x-1 transition-transform" />
                  <span className="text-sm text-text-secondary">{t.about.degree1}</span>
                </div>
                <div className="flex items-start gap-3 group">
                  <ArrowRight size={14} className="text-accent-light mt-1 shrink-0 group-hover:translate-x-1 transition-transform" />
                  <span className="text-sm text-text-secondary">{t.about.degree2}</span>
                </div>
              </div>
            </motion.div>

            {/* Languages */}
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="skill-tag">{t.about.lang_pt}</span>
              <span className="skill-tag">{t.about.lang_en}</span>
            </div>
          </motion.div>

          {/* Right: Timeline + Competencies */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="lg:col-span-5 space-y-8"
          >
            {/* Timeline */}
            <div>
              <h3 className="font-bold text-text-primary mb-6 flex items-center gap-2">
                <Zap size={18} className="text-accent-light" />
                Trajetória
              </h3>
              <div className="relative space-y-6">
                {/* Vertical line */}
                <div className="absolute left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-accent/50 via-accent/20 to-transparent" />

                {timeline.map((item, i) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="relative pl-10 group"
                  >
                    {/* Dot */}
                    <div className="absolute left-0 top-1 w-[30px] h-[30px] rounded-full bg-dark-800 border-2 border-accent/40 flex items-center justify-center group-hover:border-accent group-hover:shadow-lg group-hover:shadow-accent/20 transition-all duration-300">
                      <div className="w-2 h-2 rounded-full bg-accent-light" />
                    </div>

                    <div className="glass rounded-xl p-4 hover:border-accent/30 transition-all duration-300">
                      <span className="text-[10px] font-bold tracking-widest text-accent-light uppercase">{item.year}</span>
                      <h4 className="text-sm font-semibold text-text-primary mt-1">{item.title}</h4>
                      <p className="text-xs text-text-muted mt-1">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Competencies */}
            <div>
              <h3 className="font-bold text-text-primary mb-4">{t.about.competencies}</h3>
              <div className="grid grid-cols-1 gap-2.5">
                {competencies.map((c) => (
                  <motion.div
                    key={c.label}
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-3 glass rounded-xl px-4 py-3 hover:border-accent/30 transition-all duration-300 group cursor-default"
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110"
                      style={{ background: `${c.color}15` }}
                    >
                      <c.icon size={15} style={{ color: c.color }} />
                    </div>
                    <span className="text-sm text-text-secondary group-hover:text-text-primary transition-colors">{c.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
