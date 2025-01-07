self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('b-meet-v1').then((cache) => {
      return cache.addAll([
        '/',
        // Icons
        '/icons/logo.svg',
        '/icons/hamburger.svg',
        '/icons/add-meeting.svg',
        '/icons/add-personal.svg',
        '/icons/call-ended.svg',
        '/icons/checked.svg',
        '/icons/copy.svg',
        '/icons/Home.svg',
        '/icons/join-meeting.svg',
        '/icons/loading-circle.svg',
        '/icons/play.svg',
        '/icons/previous.svg',
        '/icons/recordings.svg',
        '/icons/schedule.svg',
        '/icons/share.svg',
        '/icons/three-dots.svg',
        '/icons/upcoming.svg',
        '/icons/Video.svg',
        '/icons/yoom-logo.svg',
        // Images
        '/images/avatar-1.jpeg',
        '/images/avatar-2.jpeg',
        '/images/avatar-3.png',
        '/images/avatar-4.png',
        '/images/avatar-5.png',
        '/images/hero-background.png',
        '/images/join-meeting.png',
        '/images/meeting-created.png',
        '/images/no-meetings.png',
        '/images/no-recordings.png'
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