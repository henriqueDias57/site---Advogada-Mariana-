import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Areas from './components/Areas';
import Team from './components/Team';
import Differentials from './components/Differentials';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import CustomCursor from './components/CustomCursor';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      {/* Background & Global Elements */}
      <ParticleBackground />
      <CustomCursor />
      <FloatingWhatsApp />
      <Toaster position="bottom-right" reverseOrder={false} />
      
      {/* Content */}
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Areas />
        <Team />
        <Differentials />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
