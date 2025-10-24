import { useEffect } from 'react';

export default function ServiceWorkerRegistration() {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        // Use Vite's BASE_URL which automatically uses the correct path
        const basePath = import.meta.env.BASE_URL;
        const swPath = `${basePath}service-worker.js`;
        
        navigator.serviceWorker
          .register(swPath)
          .then((registration) => {
            console.log('Service Worker registered successfully:', registration.scope);
          })
          .catch((error) => {
            console.log('Service Worker registration failed:', error);
          });
      });
    }
  }, []);

  return null;
}
