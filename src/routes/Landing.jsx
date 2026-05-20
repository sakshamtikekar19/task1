import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import About from '../components/About';
import Services from '../components/Services';
import Process from '../components/Process';
import AppointmentCTA from '../components/AppointmentCTA';

export default function Landing() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        // Wait for layout to settle, then scroll.
        requestAnimationFrame(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
      }
    }
  }, [location]);

  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Process />
      <AppointmentCTA />
    </>
  );
}
