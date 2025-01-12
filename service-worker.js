const CACHE_NAME = 'my-pwa-cache-v1';
const urlsToCache = [
  '/',
  'assets/css/style.css',
  'assets/js/main.js',
  'assets/icons/images/maskable_192.png',
  'assets/icons/images/icon_512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
