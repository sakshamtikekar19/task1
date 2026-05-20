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
import FAQ from './components/FAQ';
import LocationMap from './components/LocationMap';
import Footer from './components/Footer';
import WhatsAppFab from './components/ui/WhatsAppFab';
import ScrollProgress from './components/ui/ScrollProgress';

function App() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[70] focus:px-4 focus:py-2 focus:rounded-full focus:bg-rose-deep focus:text-white focus:shadow-luxe focus:text-sm focus:font-semibold"
      >
        Skip to main content
      </a>
      <ScrollProgress />
      <Navbar />
      <main id="main-content">
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Process />
        <WhyChooseUs />
        <StatsBanner />
        <Testimonials />
        <Gallery />
        <FAQ />
        <AppointmentCTA />
        <LocationMap />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}

export default App;
