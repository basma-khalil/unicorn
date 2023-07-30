const staticCacheName = 'unicorn-static-v1',
      dynamicCacheName = 'unicorn-dynamic-v1',
      imageCacheName = 'unicorn-image-v1';

const assets = [
    '/',
    '/index.html',
    '/css/main.css',
    '/js/main.js',
    '/p/offline.html',
    '/ar/p/offline.html',
    '/css/offline.css',
    '/p/404.html',
    '/ar/p/404.html',
    '/css/404.css',
    '/js/app.js',
    '/manifest.json',
    '/images/icons/favicon.ico',
    'https://cdnjs.cloudflare.com/ajax/libs/splidejs/4.1.4/css/splide.min.css',
    'https://unpkg.com/aos@2.3.1/dist/aos.css',
    'https://cdnjs.cloudflare.com/ajax/libs/splidejs/4.1.4/js/splide.min.js',
    'https://unpkg.com/aos@2.3.1/dist/aos.js',
    'https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700;900&display=swap',
    'https://fonts.gstatic.com/s/sourcesanspro/v21/6xK3dSBYKcSV-LCoeQqfX1RYOo3qNa7lqDY.woff2',
    'https://fonts.googleapis.com/css2?family=Almarai:wght@400;700;800&display=swap',
    'https://fonts.gstatic.com/s/almarai/v12/tsstApxBaigK_hnnQ1iFow.woff2',
];

const imageAssets = [
    '/images/icons/icon-144.webp',
    '/images/hero-576w.webp',
    '/images/hero-1080w.webp',
    '/images/hero-1500w.webp',
    '/images/hero-2000w.webp',
    '/images/facts-576w.webp',
    '/images/facts-992w.webp',
    '/images/facts-1500w.webp',
    '/images/icon-broccoli.webp',
    '/images/icon-clock.webp',
    '/images/icon-vector.webp',
    '/images/icon-tractor.webp',
    '/images/profile-1.webp',
    '/images/profile-2.webp',
    '/images/profile-3.webp',
    '/images/logo-1.webp',
    '/images/logo-2.webp',
    '/images/logo-3.webp',
    '/images/logo-4.webp',
    '/images/logo-5.webp',
    '/images/logo-6.webp',
    '/images/logo-7.webp',
    '/images/logo-8.webp',
    '/images/logo-9.webp',
    '/images/logo-10.webp',
    '/images/logo-11.webp',
    '/images/logo-12.webp',
    '/images/portfolio-1.webp',
    '/images/portfolio-2.webp',
    '/images/portfolio-3.webp',
    '/images/portfolio-4.webp',
    '/images/portfolio-5.webp',
    '/images/icon-quote.svg',
    '/images/team-1.webp',
    '/images/team-2.webp',
    '/images/team-3.webp',
    '/images/team-4.webp',
    '/images/post-1.webp',
    '/images/post-2.webp',
    '/images/post-3.webp',
    '/images/icon-twitter.svg',
    '/images/icon-facebook.svg',
    '/images/icon-linkedin.svg',
];


// Cache Size Limitation
const limitCacheSize = (name, size) => {

    caches.open(name).then(cache => {

        cache.keys().then(keys => {

            if (keys.length > size) {

                cache.delete(keys[0]).then(limitCacheSize(name, size));
            }
        })
    })
};


// Install Service worker
self.addEventListener('install', (evt) => {

    evt.waitUntil(

        caches.open(staticCacheName).then(cache => {

            cache.addAll(assets);
            // Test which file is not cached [Change file path]
            // for (let asset of assets) {
            //     cache.add(new Request(asset));
            // }
            // return cache;

        }).then(caches.open(imageCacheName).then((cache) => {

            cache.addAll(imageAssets);
            // Test which file is not cached [Change file path]
            // for (let asset of imageAssets) {
            //     cache.add(new Request(asset));
            // }
            // return cache;

        }))
    );
});

// Activate Event
self.addEventListener('activate', (evt) => {

    evt.waitUntil(

        caches.keys().then(keys => {

            return Promise.all(

                keys.filter(key => key !== staticCacheName && key !== dynamicCacheName && key !== imageCacheName)
                    .map(key => caches.delete(key))
            );
        })
    );
});


// Fetch Event
self.addEventListener('fetch', (evt) => {
    // check if request is made by chrome extensions or web page
    // if request is made for web page url must contains http.
    if (!(evt.request.url.indexOf('http') === 0)) return; // skip the request. if request is not made with http protocol

    evt.respondWith(

        caches.match(evt.request).then(cacheRes => {

            return cacheRes || fetch(evt.request).then(fetchRes => {

                if (fetchRes.ok) {

                    return caches.open(dynamicCacheName).then(cache => {

                        cache.put(evt.request.url, fetchRes.clone());
                        limitCacheSize(dynamicCacheName, 50);
                        return fetchRes;
                    });

                } else if (fetchRes.status == 404) {

                    if (evt.request.url.indexOf('ar/') > -1) {

                        return caches.open(staticCacheName)
                            .then(cache => cache.match('/ar/p/404.html'));

                    } else {

                        return caches.open(staticCacheName)
                            .then(cache => cache.match('/p/404.html'));
                    }
                }
            });

        }).catch(() => {

            if (evt.request.url.indexOf('.html') > -1) {

                if (evt.request.url.indexOf('ar/') > -1) {

                    return caches.open(staticCacheName)
                        .then(cache => cache.match('/ar/p/offline.html'));

                } else {

                    return caches.open(staticCacheName)
                        .then(cache => cache.match('/p/offline.html'));
                }
            }
        })
    );
});