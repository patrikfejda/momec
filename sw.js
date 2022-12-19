self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open('fox-store').then((cache) => cache.addAll([
            '/momec/',
            '/momec/index.html',
            '/momec/index.js',
            '/momec/sound_source/1.mp3'
        ])),
    );
});

self.addEventListener('fetch', (e) => {
    console.log(e.request.url);
    e.respondWith(
        caches.match(e.request).then((response) => response || fetch(e.request)),
    );
});