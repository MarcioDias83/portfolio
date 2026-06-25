import Header from './components/Header'
import Hero from './components/Hero'
import SkillsMarquee from './components/SkillsMarquee'
import SkillsShowcase from './components/SkillsShowcase'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SkillsMarquee />
        <SkillsShowcase />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
