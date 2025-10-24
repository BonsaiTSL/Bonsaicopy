const CACHE_NAME = 'bonsai-v1';

// Dynamically determine the base path from the service worker's scope
// This allows the app to work on any domain or subdirectory
function getBasePath() {
  const scope = self.registration.scope;
  const url = new URL(scope);
  return url.pathname;
}

// Install event - cache essential resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      const basePath = getBasePath();
      return cache.addAll([
        basePath,
        `${basePath}index.html`
      ]);
    })
  );
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  const basePath = getBasePath();
  
  // For navigation requests (HTML pages), always return index.html
  // This enables client-side routing with clean URLs
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request).catch(() => {
        return caches.match(`${basePath}index.html`);
      })
    );
    return;
  }

  // For other requests, try cache first, then network
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
