import { Sparkles } from 'lucide-react'
import MagicBento from './MagicBento'
import { useT } from '../i18n'
import ScrollReveal from './ScrollReveal'

export default function SecaoBento() {
  const { t } = useT()

  const cards = [
    { color: 'rgba(10,10,26,0.5)', title: t.bento[0].title, description: t.bento[0].desc, label: t.bento[0].label, image: '/imagens/bento/react.jpg' },
    { color: 'rgba(10,10,26,0.5)', title: t.bento[1].title, description: t.bento[1].desc, label: t.bento[1].label, image: '/imagens/bento/api.jpg' },
    { color: 'rgba(10,10,26,0.5)', title: t.bento[2].title, description: t.bento[2].desc, label: t.bento[2].label, image: '/imagens/bento/animation.jpg' },
    { color: 'rgba(10,10,26,0.5)', title: t.bento[3].title, description: t.bento[3].desc, label: t.bento[3].label, image: '/imagens/bento/database.jpg' },
    { color: 'rgba(10,10,26,0.5)', title: t.bento[4].title, description: t.bento[4].desc, label: t.bento[4].label, image: '/imagens/bento/3d.jpg' },
    { color: 'rgba(10,10,26,0.5)', title: t.bento[5].title, description: t.bento[5].desc, label: t.bento[5].label, image: '/imagens/bento/python.jpg' },
  ]

  return (
    <section className="py-28 md:py-40 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-accent-light/5 rounded-full blur-[100px]" />
      </div>

      <div className="section-container relative z-10">
        <ScrollReveal>
          <div className="text-center mb-20">
            <span className="inline-flex items-center gap-2 text-accent-light text-xs font-semibold tracking-[0.3em] uppercase mb-4">
              <Sparkles size={14} />
              {t.bento_badge}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              {t.bento_heading}
            </h2>
            <p className="text-text-secondary mt-3 max-w-lg mx-auto text-lg">
              {t.bento_subtitle}
            </p>
            <div className="section-divider mt-8" />
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.2}>
          <MagicBento
            cards={cards}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={true}
            enableMagnetism={true}
            clickEffect={true}
            textAutoHide={true}
            glowColor="108, 92, 231"
          />
        </ScrollReveal>
      </div>
    </section>
  )
}
