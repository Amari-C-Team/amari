import About from '../components/About'
import FiverSection from '../components/FiverSection'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import Partner from '../components/Partner'
import Reviews from '../components/Reviews'
import Services from '../components/Services'
import IndexNavbar from '../components/shared/IndexNavbar'
// import WorkProcess from '../components/WorkProcess'

export default function Home() {
  return (
    <>
        <IndexNavbar />
        <HeroSection />
        <Services />
        <About />
        <FiverSection />
        <Reviews />
        <Partner />
        <Footer />
    </>
  )
}
