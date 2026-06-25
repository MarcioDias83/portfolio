import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Code2, Briefcase, Award, Users } from 'lucide-react'

function Counter({ to, suffix = '' }: { to: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return
    const duration = 2500
    const steps = 80
    const increment = to / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= to) {
        setCount(to)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [isInView, to])

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  )
}

const stats = [
  { icon: Code2, value: 5, suffix: '+', label: 'Projetos entregues', color: '#6c5ce7' },
  { icon: Briefcase, value: 10, suffix: '+', label: 'Anos de TI', color: '#00cec9' },
  { icon: Award, value: 2, suffix: '', label: 'Formações acadêmicas', color: '#fd79a8' },
  { icon: Users, value: 500, suffix: '+', label: 'Usuários impactados', color: '#a29bfe' },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const item = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: [0.23, 1, 0.32, 1] as const } },
}

export default function Stats() {
  return (
    <section className="py-20 relative">
      <div className="section-container">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {stats.map((s) => (
            <motion.div
              key={s.label}
              variants={item}
              className="glass-strong rounded-2xl p-6 md:p-7 text-center group hover:border-accent/30 transition-all duration-500 card-hover"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                style={{ background: `${s.color}15`, boxShadow: `0 0 0 0 ${s.color}00` }}
              >
                <s.icon size={22} style={{ color: s.color }} />
              </div>
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <p className="text-text-muted text-xs md:text-sm font-medium">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
