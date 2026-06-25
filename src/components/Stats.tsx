import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Code2, Briefcase, Award, Users } from 'lucide-react'

function Counter({ to, suffix = '' }: { to: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return
    const duration = 2000
    const steps = 60
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
  { icon: Code2, value: 5, suffix: '+', label: 'Projetos entregues' },
  { icon: Briefcase, value: 10, suffix: '+', label: 'Anos de TI' },
  { icon: Award, value: 2, suffix: '', label: 'Formações acadêmicas' },
  { icon: Users, value: 500, suffix: '+', label: 'Usuários impactados' },
]

export default function Stats() {
  return (
    <section className="py-16 relative">
      <div className="section-container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {stats.map((s) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass rounded-2xl p-6 text-center hover:border-accent/40 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center mx-auto mb-3">
                <s.icon size={22} className="text-accent-light" />
              </div>
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <p className="text-text-muted text-sm">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
