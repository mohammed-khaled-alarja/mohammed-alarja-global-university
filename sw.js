/* ALARJA GLOBAL — offline navigation fallback for the static concept site */
const CACHE_NAME='alarja-global-offline-v1';
const OFFLINE_URL=new URL('./index.html',self.registration.scope).href;
const ROOT_URL=new URL('./',self.registration.scope);
self.addEventListener('install',event=>{
 event.waitUntil(caches.open(CACHE_NAME).then(cache=>cache.add(OFFLINE_URL)).then(()=>self.skipWaiting()));
});
self.addEventListener('activate',event=>{
 event.waitUntil((async()=>{
  const names=await caches.keys();
  await Promise.all(names.filter(name=>name.startsWith('alarja-global-offline-')&&name!==CACHE_NAME).map(name=>caches.delete(name)));
  await self.clients.claim();
 })());
});
self.addEventListener('fetch',event=>{
 const request=event.request;
 if(request.method!=='GET'||request.mode!=='navigate')return;
 const url=new URL(request.url);
 if(url.origin!==self.location.origin||(url.pathname!==ROOT_URL.pathname&&url.pathname!==new URL('./index.html',ROOT_URL).pathname))return;
 event.respondWith((async()=>{
  try{
   const response=await fetch(request);
   if(response.ok){
    try{const cache=await caches.open(CACHE_NAME);await cache.put(OFFLINE_URL,response.clone())}catch(e){}
   }
   return response;
  }catch(e){
   return (await caches.match(OFFLINE_URL))||Response.error();
  }
 })());
});
