import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  delay?: number
  duration?: number
  distance?: number
  once?: boolean
  scale?: boolean
  rotate?: boolean
}

export default function ScrollReveal({
  children,
  className = '',
  direction = 'up',
  delay = 0,
  duration = 0.8,
  distance = 60,
  once = true,
  scale = false,
  rotate = false,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, margin: '-80px' })

  const directionMap = {
    up: { x: 0, y: distance },
    down: { x: 0, y: -distance },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
    none: { x: 0, y: 0 },
  }

  const initial = {
    opacity: 0,
    ...directionMap[direction],
    scale: scale ? 0.9 : 1,
    rotate: rotate ? -5 : 0,
  }

  const animate = {
    opacity: isInView ? 1 : 0,
    x: isInView ? 0 : directionMap[direction].x,
    y: isInView ? 0 : directionMap[direction].y,
    scale: isInView ? 1 : (scale ? 0.9 : 1),
    rotate: isInView ? 0 : (rotate ? -5 : 0),
  }

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={animate}
      transition={{
        duration,
        delay,
        ease: [0.23, 1, 0.32, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
