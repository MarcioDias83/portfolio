import Header from './components/Header'
import ScrollProgress from './components/ScrollProgress'
import ParticleField from './components/ParticleField'
import Hero from './components/Hero'
import SkillsMarquee from './components/SkillsMarquee'
import Stats from './components/Stats'
import SkillsShowcase from './components/SkillsShowcase'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <ScrollProgress />
      <ParticleField />
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <SkillsMarquee />
          <Stats />
          <SkillsShowcase />
          <Projects />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}
