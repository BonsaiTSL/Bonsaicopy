import { useEffect } from 'react';

export default function ServiceWorkerRegistration() {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        // Use the base path for production
        const basePath = import.meta.env.PROD ? '/Bonsaicopy' : '';
        const swPath = `${basePath}/service-worker.js`;
        
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
