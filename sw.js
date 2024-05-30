/*
 *
 *  Tenes un min?
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License
 *
 */

// Version 0.57
let version = '0.58';

self.addEventListener('install', e => {
  let timeStamp = Date.now();
  e.waitUntil(
    caches.open('tenesunmin').then(cache => {
      return cache.addAll([
        `/`,
        `/manifest.json?timestamp=${timeStamp}`,
        `/static/css/fonts.css?timestamp=${timeStamp}`,
        `/static/css/master.css?timestamp=${timeStamp}`,
        `/static/fonts/Cormorant_SC-ext.woff2?timestamp=${timeStamp}`,
        `/static/fonts/Cormorant_SC.woff2?timestamp=${timeStamp}`,
        `/static/fonts/PinyonScript.woff2?timestamp=${timeStamp}`,
        `/static/js/particles.min.js?timestamp=${timeStamp}`,
        `/static/js/buenas.js?timestamp=${timeStamp}`,
        `/static/js/manueles.json?timestamp=${timeStamp}`,
        `/static/js/estrellas.json?timestamp=${timeStamp}`,
        `/static/img/favicon.ico?timestamp=${timeStamp}`,
        `/static/img/trueba.png?timestamp=${timeStamp}`,
        `/static/img/whatsapp_logo.png?timestamp=${timeStamp}`,
        `/static/img/facebook.png?timestamp=${timeStamp}`,
        `/static/img/space_bg-1422.jpg?timestamp=${timeStamp}`,
        `/static/snd/buenas_0.mp3?timestamp=${timeStamp}`,
        `/static/snd/buenas_1.mp3?timestamp=${timeStamp}`,
        `/static/snd/buenas_2.mp3?timestamp=${timeStamp}`,
        `/static/snd/buenas_3.mp3?timestamp=${timeStamp}`,
        `/static/snd/buenas_4.mp3?timestamp=${timeStamp}`,
        `/static/snd/buenas_5.mp3?timestamp=${timeStamp}`,
        `/static/snd/buenas_6.mp3?timestamp=${timeStamp}`,
        `/static/snd/buenas_7.mp3?timestamp=${timeStamp}`,
        `/static/snd/buenas_8.mp3?timestamp=${timeStamp}`,
        `/static/snd/buenas_9.mp3?timestamp=${timeStamp}`,
        `/static/snd/buenas_10.mp3?timestamp=${timeStamp}`
      ])
      .then(() => self.skipWaiting());
    })
  )
});

self.addEventListener('activate',  event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request, {ignoreSearch:true}).then(response => {
      return response || fetch(event.request);
    })
  );
});
