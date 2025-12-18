import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustedBrands from './components/TrustedBrands'
import TrustProblem from './components/TrustProblem'
import Testimonial from './components/Testimonial'
import TrustStats from './components/TrustStats'
import BatchReviews from './components/BatchReviews'
import WhyChoose from './components/WhyChoose'
import Solutions from './components/Solutions'
import Customization from './components/Customization'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustedBrands />
        <TrustProblem />
        <Testimonial />
        <TrustStats />
        <BatchReviews />
        <WhyChoose />
        <Solutions />
        <Customization />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  )
}

export default App
