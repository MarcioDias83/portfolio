import { useState, useRef, useEffect, type ImgHTMLAttributes } from 'react'

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
  lowRes?: string
}

export default function LazyImage({ src, alt, lowRes, className = '', ...props }: Props) {
  const [loaded, setLoaded] = useState(false)
  const [inView, setInView] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect() } },
      { rootMargin: '200px' }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  if (!inView) {
    return <div ref={ref} className={`bg-dark-700 rounded-[inherit] ${className}`} style={{ minHeight: props.height ? `${props.height}px` : undefined }} />
  }

  return (
    <div ref={ref} className={`relative overflow-hidden rounded-[inherit] ${className}`}>
      {lowRes && (
        <img
          src={lowRes}
          alt=""
          className={`absolute inset-0 w-full h-full object-cover blur-xl scale-110 transition-opacity duration-700 ${loaded ? 'opacity-0' : 'opacity-100'}`}
        />
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`w-full h-full object-cover transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        {...props}
      />
      {!loaded && (
        <div className="absolute inset-0 bg-dark-700 animate-shimmer" />
      )}
    </div>
  )
}
