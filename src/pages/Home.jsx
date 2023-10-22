import About from '../components/About'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import Reviews from '../components/Reviews'
import Services from '../components/Services'
// import WorkProcess from '../components/WorkProcess'
import Navbar from '../components/shared/Navbar'

export default function Home() {
  return (
    <>
        <Navbar />
        <HeroSection />
        <Services />
        <About />
        <Reviews />
        <Footer />
    </>
  )
}
