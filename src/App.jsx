import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppFab from './components/ui/WhatsAppFab';
import ScrollProgress from './components/ui/ScrollProgress';
import Landing from './routes/Landing';
import WhyUsPage from './routes/WhyUsPage';
import GalleryPage from './routes/GalleryPage';
import TestimonialsPage from './routes/TestimonialsPage';
import FaqPage from './routes/FaqPage';
import LocationPage from './routes/LocationPage';

function ScrollToTopOnRouteChange() {
  const location = useLocation();
  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }
  }, [location.pathname, location.hash]);
  return null;
}

const BASENAME = import.meta.env.BASE_URL.replace(/\/$/, '') || '/';

function App() {
  return (
    <BrowserRouter basename={BASENAME}>
      <ScrollToTopOnRouteChange />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[70] focus:px-4 focus:py-2 focus:rounded-full focus:bg-rose-deep focus:text-white focus:shadow-luxe focus:text-sm focus:font-semibold"
      >
        Skip to main content
      </a>
      <ScrollProgress />
      <Navbar />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/why-us" element={<WhyUsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/location" element={<LocationPage />} />
          <Route path="*" element={<Landing />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFab />
    </BrowserRouter>
  );
}

export default App;
