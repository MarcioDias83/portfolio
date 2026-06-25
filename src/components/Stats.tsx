import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Code2, Briefcase, Award, Users } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

function Contador({ para, sufixo = '' }: { para: number; sufixo?: string }) {
  const [contagem, setContagem] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const estaVisivel = useInView(ref, { once: true })

  useEffect(() => {
    if (!estaVisivel) return
    const duracao = 2500
    const passos = 80
    const incremento = para / passos
    let atual = 0
    const timer = setInterval(() => {
      atual += incremento
      if (atual >= para) {
        setContagem(para)
        clearInterval(timer)
      } else {
        setContagem(Math.floor(atual))
      }
    }, duracao / passos)
    return () => clearInterval(timer)
  }, [estaVisivel, para])

  return (
    <span ref={ref} className="tabular-nums">
      {contagem}{sufixo}
    </span>
  )
}

const estatisticas = [
  { icone: Code2, valor: 5, sufixo: '+', rotulo: 'Projetos entregues', cor: '#6c5ce7' },
  { icone: Briefcase, valor: 10, sufixo: '+', rotulo: 'Anos de TI', cor: '#00cec9' },
  { icone: Award, valor: 2, sufixo: '', rotulo: 'Formações acadêmicas', cor: '#fd79a8' },
  { icone: Users, valor: 500, sufixo: '+', rotulo: 'Usuários impactados', cor: '#a29bfe' },
]

const container = {
  oculto: {},
  visivel: { transition: { staggerChildren: 0.12 } },
}

const item = {
  oculto: { opacity: 0, y: 40, scale: 0.95 },
  visivel: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: [0.23, 1, 0.32, 1] as const } },
}

export default function Estatisticas() {
  return (
    <section className="py-20 relative">
      <div className="section-container">
        <ScrollReveal direction="none">
          <motion.div
            variants={container}
            initial="oculto"
            whileInView="visivel"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
          >
            {estatisticas.map((e) => (
              <motion.div
                key={e.rotulo}
                variants={item}
                className="glass-strong rounded-2xl p-6 md:p-7 text-center group hover:border-accent/30 transition-all duration-500 card-hover"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                  style={{ background: `${e.cor}15`, boxShadow: `0 0 0 0 ${e.cor}00` }}
                >
                  <e.icone size={22} style={{ color: e.cor }} />
                </div>
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  <Contador para={e.valor} sufixo={e.sufixo} />
                </div>
                <p className="text-text-muted text-xs md:text-sm font-medium">{e.rotulo}</p>
              </motion.div>
            ))}
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  )
}
