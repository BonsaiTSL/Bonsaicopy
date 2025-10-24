import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import ServiceWorkerRegistration from './components/ServiceWorkerRegistration';
import Home from './components/Home';
import Contact from './components/Contact';
import Legal from './components/Legal';
import Privacy from './components/Privacy';
import Terms from './components/Terms';

export default function App() {
  const basename = import.meta.env.PROD ? '/Bonsaicopy' : '/';
  
  return (
    <>
      <ServiceWorkerRegistration />
      <Router basename={basename}>
        <ScrollToTop />
        <div className="min-h-screen bg-background">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/legal" element={<Legal />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            {/* Catch-all route for any unmatched paths */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}
