import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
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
        <RedirectHandler />
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

// Component to handle 404.html redirects from GitHub Pages
function RedirectHandler() {
  const navigate = useNavigate();
  
  useEffect(() => {
    const redirectPath = sessionStorage.getItem('redirectPath');
    if (redirectPath) {
      sessionStorage.removeItem('redirectPath');
      // Remove the basename from the path before navigating
      const cleanPath = redirectPath.replace('/Bonsaicopy', '');
      navigate(cleanPath, { replace: true });
    }
  }, [navigate]);
  
  return null;
}
