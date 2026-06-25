import { I18nProvider } from './i18n'
import Header from './components/Header'
import ScrollProgress from './components/ScrollProgress'
import ParticleField from './components/ParticleField'
import CustomCursor from './components/CustomCursor'
import SmoothScroll from './components/SmoothScroll'
import Hero from './components/Hero'
import SkillsMarquee from './components/SkillsMarquee'
import Stats from './components/Stats'
import BentoSection from './components/BentoSection'
import SkillsShowcase from './components/SkillsShowcase'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <I18nProvider>
      <SmoothScroll>
        <CustomCursor />
        <ScrollProgress />
        <ParticleField />
        <div className="relative z-10">
          <Header />
          <main>
            <Hero />
            <SkillsMarquee />
            <Stats />
            <BentoSection />
            <SkillsShowcase />
            <Projects />
            <About />
            <Contact />
          </main>
          <Footer />
        </div>
      </SmoothScroll>
    </I18nProvider>
  )
}
