if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,n)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let c={};const r=e=>a(e,t),o={module:{uri:t},exports:c,require:r};s[t]=Promise.all(i.map((e=>o[e]||r(e)))).then((e=>(n(...e),c)))}}define(["./workbox-575dd241"],(function(e){"use strict";importScripts(),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"e0f3a6f7b3bcf6286c1198f108731fea"},{url:"/_next/static/V6pgX9di6mOa6qOQRbyGj/_buildManifest.js",revision:"beeab916a528424bc60ca2d9f23bbcaa"},{url:"/_next/static/V6pgX9di6mOa6qOQRbyGj/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/0cafd7a2-bd4b59ead5510c69.js",revision:"V6pgX9di6mOa6qOQRbyGj"},{url:"/_next/static/chunks/177-4ba81d5ca3715246.js",revision:"V6pgX9di6mOa6qOQRbyGj"},{url:"/_next/static/chunks/8-e1b0428e92f388dd.js",revision:"V6pgX9di6mOa6qOQRbyGj"},{url:"/_next/static/chunks/838-c88aece89efdddfa.js",revision:"V6pgX9di6mOa6qOQRbyGj"},{url:"/_next/static/chunks/app/about/page-ef95662e61a62e0f.js",revision:"V6pgX9di6mOa6qOQRbyGj"},{url:"/_next/static/chunks/app/contact/page-3c52604582a76db1.js",revision:"V6pgX9di6mOa6qOQRbyGj"},{url:"/_next/static/chunks/app/error-acbb94c3ce7a991c.js",revision:"V6pgX9di6mOa6qOQRbyGj"},{url:"/_next/static/chunks/app/layout-03a2efc0c525021f.js",revision:"V6pgX9di6mOa6qOQRbyGj"},{url:"/_next/static/chunks/app/loading-4fa430a2e1fff7cc.js",revision:"V6pgX9di6mOa6qOQRbyGj"},{url:"/_next/static/chunks/app/not-found-c6331876cef70420.js",revision:"V6pgX9di6mOa6qOQRbyGj"},{url:"/_next/static/chunks/app/page-7a081b77e939c375.js",revision:"V6pgX9di6mOa6qOQRbyGj"},{url:"/_next/static/chunks/app/privacy/page-15b03f165c774d57.js",revision:"V6pgX9di6mOa6qOQRbyGj"},{url:"/_next/static/chunks/app/services/page-a81d99db7e744466.js",revision:"V6pgX9di6mOa6qOQRbyGj"},{url:"/_next/static/chunks/app/terms/page-4977d4e66bc1f735.js",revision:"V6pgX9di6mOa6qOQRbyGj"},{url:"/_next/static/chunks/app/work/page-361190cb0abc105c.js",revision:"V6pgX9di6mOa6qOQRbyGj"},{url:"/_next/static/chunks/framework-a522b22db33047dc.js",revision:"V6pgX9di6mOa6qOQRbyGj"},{url:"/_next/static/chunks/main-app-d07e2360b7bb2916.js",revision:"V6pgX9di6mOa6qOQRbyGj"},{url:"/_next/static/chunks/main-efbaabcf8c219b7b.js",revision:"V6pgX9di6mOa6qOQRbyGj"},{url:"/_next/static/chunks/pages/_app-7d2323d58379b1d5.js",revision:"V6pgX9di6mOa6qOQRbyGj"},{url:"/_next/static/chunks/pages/_error-69c35b0fa30592d4.js",revision:"V6pgX9di6mOa6qOQRbyGj"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-98a2122ebdb6f5bb.js",revision:"V6pgX9di6mOa6qOQRbyGj"},{url:"/_next/static/css/dca4390538524789.css",revision:"dca4390538524789"},{url:"/_next/static/media/0a0ce249959137f3-s.woff2",revision:"587c48d1657e8d379cafadd7b8a9a9df"},{url:"/_next/static/media/2084b837b601951d-s.woff2",revision:"da7530b6fb2a44da4883b85aeecc984c"},{url:"/_next/static/media/398b4bb64e745c45-s.woff2",revision:"800e4b03ee9aba1454fc70fd9b55fbe7"},{url:"/_next/static/media/3a634e28c4bd54fb-s.woff2",revision:"ac0aefa43d75a1481c61df50489e7321"},{url:"/_next/static/media/9366901f2e0806d1-s.woff2",revision:"dc79846f933acad2e093a61ef0311a23"},{url:"/_next/static/media/c4c7b0ec92b72e30-s.p.woff2",revision:"ae8ec5fbab76e9f5bd0624673aab8075"},{url:"/_next/static/media/d9f1473a63f76975-s.woff2",revision:"16a035757af44a681eda3b22ff43f2f0"},{url:"/applogo.svg",revision:"4aaa9ba8f926b1b8a7ba9389a513756b"},{url:"/dot.png",revision:"44a8937bed6769318e829599e4033358"},{url:"/favicon.ico",revision:"ffb82d9eb8d5b93d0bb30c78f57affe8"},{url:"/screenshot.png",revision:"d0e05fd7414a529eaa358a278a3dafd3"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>self.origin===e.origin&&!(!e.pathname.startsWith("/_next/data/")||-1===e.pathname.indexOf(".json"))),new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{cacheWillUpdate:async({request:e,response:s})=>e.headers.get("x-middleware-prefetch")||s.headers.get("x-middleware-skip")?null:200===s.status?s:null},{cachedResponseWillBeUsed:async({cacheName:e,request:s,matchOptions:a,cachedResponse:i,event:n})=>i&&i.headers.get("x-middleware-skip")?null:i}]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/callback/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
