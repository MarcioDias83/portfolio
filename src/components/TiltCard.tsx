import { useState } from 'react'
import type { ReactNode } from 'react'

interface TiltCardProps {
  children: ReactNode
  className?: string
}

export default function TiltCard({ children, className = '' }: TiltCardProps) {
  const [style, setStyle] = useState({})

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = -(y - centerY) / 12
    const rotateY = (x - centerX) / 12
    setStyle({
      transform: `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
      transition: 'transform 0.1s ease',
    })
  }

  function onLeave() {
    setStyle({
      transform: 'perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      transition: 'transform 0.5s ease',
    })
  }

  return (
    <div
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={style}
      className={className}
    >
      {children}
    </div>
  )
}
