"use strict";var precacheConfig=[["/index.html","e902717d6b5e70537799066712eecbc7"],["/static/css/main.65b34e58.css","8ffbe3de75033369aab3b8a1c1cabf5e"],["/static/js/main.ad133ac2.js","9b528798c7fdf0c46e5b5504396485ed"],["/static/media/Catch-tracker.52115871.png","52115871a35ae579d126f3f18c55baf8"],["/static/media/Ryan.997f672b.jpg","997f672bcdad9bc87663cd0fba1bdc0f"],["/static/media/Ryan_2.556ce501.JPG","556ce50115de8bc725f05841b7c0bfa2"],["/static/media/Waiter-App.26213d72.png","26213d722f77ad9199a8297f8b64011a"],["/static/media/emaillogo.8d2c6bd6.png","8d2c6bd67cc1b8ed669a53bd4ba57f9a"],["/static/media/htmllogo.8ec90809.png","8ec908094ae2c2c7a8bf1c2532d5d7a8"],["/static/media/laravellogo.a441c824.png","a441c8241e1a8473d265078d091a76a1"],["/static/media/linkedinlogo.a08f59f4.png","a08f59f44e32ab5f5fe579b7b4088b97"],["/static/media/live_icon.f7f36ba0.png","f7f36ba07f0b4a2a1e75dac6f7e046fb"],["/static/media/nodelogo.9100f2eb.png","9100f2eb47cae949fb1f01853263103c"],["/static/media/phplogo.b30b8904.png","b30b89042c7567f2a4dada0823eee80b"],["/static/media/postgreslogo.d116e5c6.png","d116e5c6a9e6bd4ac814ffde9a8b2125"],["/static/media/project_github.89ce3c23.png","89ce3c23896a87b6035dedd9e2384ce3"],["/static/media/pythonlogo.ca2ceddc.png","ca2ceddcd9c28a22c449286f3fe66751"],["/static/media/railslogo.45b116b1.png","45b116b1f66cc5e6f9724e8f9a2db73d"],["/static/media/reactlogo.61a7eeee.png","61a7eeee285cd4b16e3f86b37ab01ae3"],["/static/media/reactnativelogo.f187be96.png","f187be963d5a03dc530033106ad11a42"],["/static/media/rubylogo.dbf50c0f.png","dbf50c0fb74b07b1d7fe0c56f0d09616"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var c="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});