const CACHE = "juquilita-v1";

self.addEventListener("install", e=>{
  e.waitUntil(
    caches.open(CACHE).then(cache=>{
      return cache.addAll([
        "./",
        "index.html",
        "taqueria.jpg",
        "hamburguesa.jpg",
        "hotdog.jpg",
        "tacos.jpg",
        "bebidas.jpg"
      ]);
    })
  );
});

self.addEventListener("fetch", e=>{
  e.respondWith(
    caches.match(e.request).then(res=>{
      return res || fetch(e.request);
    })
  );
});