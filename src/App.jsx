import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Facilities from "./components/Facilities";
import Trainers from "./components/Trainers";
import Transformations from "./components/Transformations";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import AIAssistant from "./components/AIAssistant";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-dark">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Facilities />
      <Trainers />
      <Transformations />
      <Pricing />
      <Testimonials />
      <AIAssistant />
      <Contact />
      <Footer />
    </div>
  );
}
