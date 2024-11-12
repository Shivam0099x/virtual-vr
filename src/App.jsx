import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import  WorkFlowSection  from "./Components/WorkFlowSection";
import  Pricing  from "./Components/Pricing";
import  Testimonials  from "./Components/Testimonials";
import  Footer  from "./Components/Footer";


function App() {
  return (
    <>
    <Navbar />
    <div className="max-w-7xl mx-auto pt-20 px-6">
      <HeroSection />
      <FeatureSection />
      <WorkFlowSection />
      <Pricing />
      <Testimonials />
      <Footer />
    </div>
  </>
  )
}

export default App;