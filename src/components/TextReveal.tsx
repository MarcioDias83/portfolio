import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface TextRevealProps {
  children: string
  className?: string
  delay?: number
  speed?: number
  once?: boolean
}

export default function TextReveal({
  children,
  className = '',
  delay = 0,
  speed = 0.03,
  once = true,
}: TextRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, margin: '-50px' })

  const words = children.split(' ')

  return (
    <div ref={ref} className={className}>
      {words.map((word, wi) => (
        <span key={wi} className="inline-block mr-[0.25em]">
          {word.split('').map((char, ci) => (
            <motion.span
              key={ci}
              className="inline-block"
              initial={{ opacity: 0, y: 20, rotateX: -40 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0, rotateX: 0 }
                  : { opacity: 0, y: 20, rotateX: -40 }
              }
              transition={{
                duration: 0.5,
                delay: delay + (wi * word.length + ci) * speed,
                ease: [0.23, 1, 0.32, 1],
              }}
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </div>
  )
}
