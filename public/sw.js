/* eslint-disable no-undef */
importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js'
);

// This ensures Workbox is loaded
if (workbox) {
    console.log(`Workbox is loaded 🎉`);

    // Skip waiting for lifecycle to activate immediately
    workbox.core.skipWaiting();
    workbox.core.clientsClaim();

    // Cache compiled scripts and styles
    workbox.routing.registerRoute(
        /\.(?:js|css)$/,
        new workbox.strategies.StaleWhileRevalidate({
            cacheName: 'static-resources',
        })
    );

    // Cache images
    workbox.routing.registerRoute(
        /\.(?:png|jpg|jpeg|svg|gif|webp)$/,
        new workbox.strategies.CacheFirst({
            cacheName: 'images',
            plugins: [
                new workbox.expiration.ExpirationPlugin({
                    maxEntries: 60,
                    maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
                }),
            ],
        })
    );

    // Cache Fonts (Google Fonts)
    workbox.routing.registerRoute(
        ({ url }) => url.origin === 'https://fonts.googleapis.com' ||
            url.origin === 'https://fonts.gstatic.com',
        new workbox.strategies.StaleWhileRevalidate({
            cacheName: 'google-fonts',
            plugins: [
                new workbox.expiration.ExpirationPlugin({
                    maxEntries: 20,
                }),
            ],
        })
    );

    // Fallback for navigation (Offline page)
    const offlineFallbackPage = '/offline.html';
    // Note: Since we are static export, we can potentially cache '/' as start_url

    // Precache the offline page
    self.addEventListener('install', (event) => {
        event.waitUntil(
            caches.open('offline-cache').then((cache) => cache.add(offlineFallbackPage))
        );
    });

    workbox.routing.registerRoute(
        ({ request }) => request.mode === 'navigate',
        new workbox.strategies.NetworkFirst({
            cacheName: 'pages',
            plugins: [
                new workbox.expiration.ExpirationPlugin({
                    maxEntries: 50,
                }),
            ],
        })
    );

    // Catch handler for navigation errors
    workbox.routing.setCatchHandler(({ event }) => {
        if (event.request.mode === 'navigate') {
            return caches.match(offlineFallbackPage);
        }
        return Response.error();
    });

} else {
    console.log(`Workbox didn't load 😬`);
}
