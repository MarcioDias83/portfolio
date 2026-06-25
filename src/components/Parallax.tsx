import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface ParallaxProps {
  children: React.ReactNode
  speed?: number
  className?: string
  direction?: 'up' | 'down' | 'left' | 'right'
}

export default function Parallax({
  children,
  speed = 0.5,
  className = '',
  direction = 'up',
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const transforms = {
    up: useTransform(scrollYProgress, [0, 1], [speed * 100, -speed * 100]),
    down: useTransform(scrollYProgress, [0, 1], [-speed * 100, speed * 100]),
    left: useTransform(scrollYProgress, [0, 1], [speed * 100, -speed * 100]),
    right: useTransform(scrollYProgress, [0, 1], [-speed * 100, speed * 100]),
  }

  const y = direction === 'up' || direction === 'down' ? transforms[direction] : 0
  const x = direction === 'left' || direction === 'right' ? transforms[direction] : 0

  return (
    <motion.div ref={ref} style={{ x, y }} className={className}>
      {children}
    </motion.div>
  )
}
