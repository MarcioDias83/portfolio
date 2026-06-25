import { motion } from 'framer-motion'
import {
  Code2, Monitor, Database, ShieldCheck, Terminal,
  Globe, Smartphone, Wrench, GraduationCap
} from 'lucide-react'

const competencies = [
  { icon: Code2, label: 'React . TypeScript . Vite' },
  { icon: Terminal, label: 'Python . APIs . Automacao' },
  { icon: Database, label: 'Banco de Dados . SQL' },
  { icon: Monitor, label: 'Linux . Windows . Docker' },
  { icon: ShieldCheck, label: 'QA . Testes . Qualidade' },
  { icon: Globe, label: 'Git . GitHub . Deploy' },
  { icon: Wrench, label: 'Suporte N1/N2 . Infraestrutura' },
  { icon: Smartphone, label: 'Atendimento Remoto . Presencial' },
]

export default function About() {
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
            Sobre Mim
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            Quem sou eu
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
            <p>
              Profissional de TI formado em <strong className="text-text-primary">Analise e Desenvolvimento de Sistemas</strong>,
              com pos-graduacao na area e foco em solucoes praticas — do suporte ao desenvolvimento.
            </p>
            <p>
              Minha trajetoria une <strong className="text-text-primary">suporte tecnico</strong> (N1/N2, help desk,
              infraestrutura) com <strong className="text-text-primary">desenvolvimento de sistemas</strong> modernos
              usando React, TypeScript, Python e APIs. Essa combinacao me permite entender o problema completo
              — da infraestrutura a interface — e entregar solucoes que realmente funcionam.
            </p>
            <p>
              Ja atuei em empresas de grande porte, projetos de migracao de sistemas, suporte corporativo
              e tambem em areas comerciais e telecomunicacoes, fortalecendo habilidades de comunicacao,
              negociacao e foco no cliente.
            </p>

            <div className="glass rounded-xl p-5 mt-6">
              <h4 className="text-text-primary font-semibold mb-3 flex items-center gap-2">
                <GraduationCap size={18} className="text-accent-light" />
                Formacao
              </h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-accent-light mt-1">{'>'}</span>
                  <span>Analise e Desenvolvimento de Sistemas (Superior)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-light mt-1">{'>'}</span>
                  <span>Pos-graduacao em Tecnologia</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-3 py-1 text-xs bg-surface rounded-full text-text-muted">Portugues: Nativo</span>
              <span className="px-3 py-1 text-xs bg-surface rounded-full text-text-muted">Ingles Tecnico: Pre-Intermediario</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-4"
          >
            <h3 className="font-semibold text-text-primary mb-1">Competencias</h3>
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
