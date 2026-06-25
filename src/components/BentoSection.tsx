import { motion } from 'framer-motion'
import MagicBento from './MagicBento'
import { useT } from '../i18n'

export default function BentoSection() {
  const { t } = useT()

  const cards = [
    { color: 'rgba(10,10,26,0.5)', title: t.bento[0].title, description: t.bento[0].desc, label: t.bento[0].label },
    { color: 'rgba(10,10,26,0.5)', title: t.bento[1].title, description: t.bento[1].desc, label: t.bento[1].label },
    { color: 'rgba(10,10,26,0.5)', title: t.bento[2].title, description: t.bento[2].desc, label: t.bento[2].label },
    { color: 'rgba(10,10,26,0.5)', title: t.bento[3].title, description: t.bento[3].desc, label: t.bento[3].label },
    { color: 'rgba(10,10,26,0.5)', title: t.bento[4].title, description: t.bento[4].desc, label: t.bento[4].label },
    { color: 'rgba(10,10,26,0.5)', title: t.bento[5].title, description: t.bento[5].desc, label: t.bento[5].label },
  ]

  return (
    <section className="py-24 md:py-32 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-accent-light/5 rounded-full blur-[100px]" />
      </div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent-light text-sm font-medium tracking-widest uppercase">
            {t.bento_badge}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            {t.bento_heading}
          </h2>
          <p className="text-text-secondary mt-3 max-w-lg mx-auto">
            {t.bento_subtitle}
          </p>
        </motion.div>

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
      </div>
    </section>
  )
}
