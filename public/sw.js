self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('b-meet-v1').then((cache) => {
      return cache.addAll([
        '/',
        '/icons/logo.svg',
        '/icons/hamburger.svg',
        // Add other static assets you want to cache
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
}); 