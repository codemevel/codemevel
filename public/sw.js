if(!self.define){let e,s={};const n=(n,a)=>(n=new URL(n+".js",a).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,t)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let c={};const r=e=>n(e,i),o={module:{uri:i},exports:c,require:r};s[i]=Promise.all(a.map((e=>o[e]||r(e)))).then((e=>(t(...e),c)))}}define(["./workbox-b62c49a8"],(function(e){"use strict";importScripts(),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"68c4ebd27fd973a303734ca80bb963c7"},{url:"/_next/static/W7nTCvBNZHM3nMvU8S81F/_buildManifest.js",revision:"beeab916a528424bc60ca2d9f23bbcaa"},{url:"/_next/static/W7nTCvBNZHM3nMvU8S81F/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/0cafd7a2-ab0b5c171eb53f3a.js",revision:"W7nTCvBNZHM3nMvU8S81F"},{url:"/_next/static/chunks/396-88c4de7c8ce03b30.js",revision:"W7nTCvBNZHM3nMvU8S81F"},{url:"/_next/static/chunks/556-85603be2e9e1679a.js",revision:"W7nTCvBNZHM3nMvU8S81F"},{url:"/_next/static/chunks/8-7fd7f271f0b73f61.js",revision:"W7nTCvBNZHM3nMvU8S81F"},{url:"/_next/static/chunks/878-4ac9f585b5801707.js",revision:"W7nTCvBNZHM3nMvU8S81F"},{url:"/_next/static/chunks/96903c69-950462a15470950e.js",revision:"W7nTCvBNZHM3nMvU8S81F"},{url:"/_next/static/chunks/app/about/page-df488b2078b25d2a.js",revision:"W7nTCvBNZHM3nMvU8S81F"},{url:"/_next/static/chunks/app/contact/page-af5e24060fe5cdd2.js",revision:"W7nTCvBNZHM3nMvU8S81F"},{url:"/_next/static/chunks/app/error-2b36058385d924a7.js",revision:"W7nTCvBNZHM3nMvU8S81F"},{url:"/_next/static/chunks/app/layout-f39c6598c268175e.js",revision:"W7nTCvBNZHM3nMvU8S81F"},{url:"/_next/static/chunks/app/loading-9412b52088869869.js",revision:"W7nTCvBNZHM3nMvU8S81F"},{url:"/_next/static/chunks/app/not-found-10e4b13389fa1000.js",revision:"W7nTCvBNZHM3nMvU8S81F"},{url:"/_next/static/chunks/app/page-c9236241d180ef16.js",revision:"W7nTCvBNZHM3nMvU8S81F"},{url:"/_next/static/chunks/app/privacy/page-6e3b6c828983350d.js",revision:"W7nTCvBNZHM3nMvU8S81F"},{url:"/_next/static/chunks/app/services/page-007f65933f7db17d.js",revision:"W7nTCvBNZHM3nMvU8S81F"},{url:"/_next/static/chunks/app/terms/page-b30df12f0fa507ca.js",revision:"W7nTCvBNZHM3nMvU8S81F"},{url:"/_next/static/chunks/app/work/page-64d0a90fe6ee81fc.js",revision:"W7nTCvBNZHM3nMvU8S81F"},{url:"/_next/static/chunks/framework-a522b22db33047dc.js",revision:"W7nTCvBNZHM3nMvU8S81F"},{url:"/_next/static/chunks/main-5e94b154aa813174.js",revision:"W7nTCvBNZHM3nMvU8S81F"},{url:"/_next/static/chunks/main-app-568e43d84dc6bb67.js",revision:"W7nTCvBNZHM3nMvU8S81F"},{url:"/_next/static/chunks/pages/_app-7d2323d58379b1d5.js",revision:"W7nTCvBNZHM3nMvU8S81F"},{url:"/_next/static/chunks/pages/_error-69c35b0fa30592d4.js",revision:"W7nTCvBNZHM3nMvU8S81F"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-4e3e06c7c61e3273.js",revision:"W7nTCvBNZHM3nMvU8S81F"},{url:"/_next/static/css/afe0cf9efc86c895.css",revision:"afe0cf9efc86c895"},{url:"/_next/static/media/0a0ce249959137f3-s.woff2",revision:"587c48d1657e8d379cafadd7b8a9a9df"},{url:"/_next/static/media/2084b837b601951d-s.woff2",revision:"da7530b6fb2a44da4883b85aeecc984c"},{url:"/_next/static/media/398b4bb64e745c45-s.woff2",revision:"800e4b03ee9aba1454fc70fd9b55fbe7"},{url:"/_next/static/media/3a634e28c4bd54fb-s.woff2",revision:"ac0aefa43d75a1481c61df50489e7321"},{url:"/_next/static/media/9366901f2e0806d1-s.woff2",revision:"dc79846f933acad2e093a61ef0311a23"},{url:"/_next/static/media/c4c7b0ec92b72e30-s.p.woff2",revision:"ae8ec5fbab76e9f5bd0624673aab8075"},{url:"/_next/static/media/d9f1473a63f76975-s.woff2",revision:"16a035757af44a681eda3b22ff43f2f0"},{url:"/applogo.svg",revision:"4aaa9ba8f926b1b8a7ba9389a513756b"},{url:"/dot.png",revision:"44a8937bed6769318e829599e4033358"},{url:"/favicon.ico",revision:"ffb82d9eb8d5b93d0bb30c78f57affe8"},{url:"/screenshot.png",revision:"d0e05fd7414a529eaa358a278a3dafd3"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
