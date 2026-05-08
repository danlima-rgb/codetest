import Nav from './components/Nav'
import Hero from './components/Hero'
import WhyUs from './components/WhyUs'
import Procedures from './components/Procedures'
import FeaturedProcedure from './components/FeaturedProcedure'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Nav />
      <Hero />
      <WhyUs />
      <Procedures />
      <FeaturedProcedure />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}
