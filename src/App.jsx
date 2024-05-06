import './App.css'
import Navbar from './components/navbar/Navbar'
// import OffCanvas from './components/offcanvas/Offcanvas'
import HeroSection from './components/hero/Herosection'
import Service from './components/services/Service'
import AboutMe from './components/about/About-Me'
import Design from './components/design/Design'
import Skills from './components/skills/Skills'
import Portfolio from './components/portfolio/Portfolio'
import Testimonial from './components/testimonial/Testimonial'
import Brand from './components/brand/Brand'
import Blog from './components/blog/Blog'
import Subscribe from './components/subscribe/Subscribe'
import Footer from './components/footer/Footer'

export default function App() {

  return (
    <>
      <Navbar />
      {/* <OffCanvas /> */}
      <HeroSection />
      <Service />
      <AboutMe />
      <Design />
      <Skills />
      <Portfolio />
      <Testimonial />
      <Brand />
      <Blog />
      <Subscribe />
      <Footer />
    </>
  )
}
