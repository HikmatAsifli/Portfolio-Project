import './App.css'
import Navbar from './components/navbar/Navbar'
import HeroSection from './components/hero/Herosection'
import Service from './components/services/Service'
import AboutMe from './components/about/About-Me'
import Design from './components/design/Design'
import Skills from './components/skills/Skills'
import Portfolio from './components/portfolio/Portfolio'
import Testimonial from './components/testimonial/Testimonial'


export default function App() {

  return (
    <>
      <Navbar />
      <HeroSection />
      <Service />
      <AboutMe />
      <Design />
      <Skills />
      <Portfolio />
      <Testimonial />
    </>
  )
}
