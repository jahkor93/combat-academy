const CACHE="csa-v3";
const ASSETS=[
  './','./index.html','./manifest.json','./icon-192.png','./icon-512.png',
  './gamaken_stage1.png','./gamaken_stage2.png','./gamaken_stage3.png','./gamaken_stage4.png','./gamaken_stage5.png','./gamaken_stage6.png',
  './gamaken_calm.png','./gamaken_inspired.png','./gamaken_resting.png','./gamaken_main.png'
];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET') return;
  e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(resp=>{const copy=resp.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));return resp}).catch(()=>caches.match('./index.html'))));
});
