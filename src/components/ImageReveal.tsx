import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface ImageRevealProps {
  src: string
  alt: string
  className?: string
}

export default function ImageReveal({ src, alt, className = '' }: ImageRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.2 1'],
  })

  const clipPath = useTransform(
    scrollYProgress,
    [0, 1],
    ['inset(100% 0 0 0)', 'inset(0% 0 0 0)']
  )

  const scale = useTransform(scrollYProgress, [0, 1], [1.15, 1])

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div style={{ clipPath, scale }}>
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </div>
  )
}
