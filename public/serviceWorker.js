var CACHE_NAME = 'pwa-news'
var urlsToCache = ['/', '/index.html']

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Opened cache')
      return cache.addAll(urlsToCache)
    })
  )
})

self.addEventListener('active', (event) => {
  var cacheWhitelist = ['pwa-task-manager']
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName)
          }
        })
      )
    })
  )
})

self.addEventListener('fetch', (event) => {
  console.log('fetch', event)
  event.respondWith(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.match(event.request).then((response) => {
        console.log('response', response)
        return (
          response ||
          fetch(event.request).then((response) => {
            cache.put(event.request, response.clone())
            return response
          })
        )
      })
    })
  )
})
