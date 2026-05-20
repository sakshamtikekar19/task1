import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import WhyChooseUs from './components/WhyChooseUs';
import StatsBanner from './components/StatsBanner';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import AppointmentCTA from './components/AppointmentCTA';
import LocationMap from './components/LocationMap';
import Footer from './components/Footer';
import WhatsAppFab from './components/ui/WhatsAppFab';
import ScrollProgress from './components/ui/ScrollProgress';

function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Process />
        <WhyChooseUs />
        <StatsBanner />
        <Testimonials />
        <Gallery />
        <AppointmentCTA />
        <LocationMap />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}

export default App;
