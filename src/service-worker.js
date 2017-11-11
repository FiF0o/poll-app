/**
 * Created by jonlazarini on 15/07/17.
 */
// https required

/**
 * Boilerplate code to register service workers in our entrypoint
 */
let SW_FILE = './service-worker.js';

// register sw
if('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register(SW_FILE, {scope: './'}) // where/scope our sw to be run
        .then((registration) => console.log(`Service Worker registred: ${registration}`))
        .catch((err) => console.error(`Service Worker failed to register: ${err}`))
}
console.log('service worker file loaded!');


/**
 * Boilerplate code for our SW
 */
const cacheName = 'v1'; // cache busting & versioning
let cacheFiles = [
    // files to be cached
    './index.css',
    'index.js'
];

self.addEventListener('install', (e) => {
   console.log(`[SW] Installed`);
    // to be resolved first
    e.waitUntil(
       caches.open(cacheName)
           .then((cache) => {
                console.log(`[SW] ...Caching files...`)
               return cache.addAll(cacheFiles)
           })
    )
   console.log(`[SW] Files successfully cached!`)
});

self.addEventListener('activate', (e) => {
    console.log(`[SW] Activated`);
    // make sure old cached files don't remain
    e.waitUntil(
        caches.keys()
            .then((caNames) => {
                return Promise.all(caNames.map((c) => {
                    if (c !== cacheName) {
                        return caches.delete(c)
                    }
                }))
            })
    )
});

self.addEventListener('fetch', (e) => {
    //TODO Ajax example here to cache image(s)
    e.respondWith(
        caches.match(e.request)
            .then((res) => {
                if (res) return res;

                // Not in the cache, fetch and cache
                else {
                    let requestClone = e.request.clone();
                    window.fetch(requestClone)
                        .then((res) => {
                            if(!res) {
                                return res;
                            }
                            else {
                                let responseClone = res.clone();
                                caches.open(cacheName)
                                    .then((cache) => {
                                        // put fetch response in the current cache
                                        cache.put(e.request, responseClone);
                                        return res
                                    })
                            }
                        })
                        .catch((err) => console.error(err));
                }
            })
    )
});
