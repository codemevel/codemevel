if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,t)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let n={};const o=e=>a(e,i),r={module:{uri:i},exports:n,require:o};s[i]=Promise.all(c.map((e=>r[e]||o(e)))).then((e=>(t(...e),n)))}}define(["./workbox-b62c49a8"],(function(e){"use strict";importScripts(),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"007bd2674ef15f882b58dd3de3d91697"},{url:"/_next/static/9xAXSojhaPObgyYoK2G08/_buildManifest.js",revision:"55c7df5423acf65c832c768130e4d940"},{url:"/_next/static/9xAXSojhaPObgyYoK2G08/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/03451709-21246fbd8e76096d.js",revision:"9xAXSojhaPObgyYoK2G08"},{url:"/_next/static/chunks/1391.f6df693797407389.js",revision:"f6df693797407389"},{url:"/_next/static/chunks/1409-560b1fc63e532d5c.js",revision:"9xAXSojhaPObgyYoK2G08"},{url:"/_next/static/chunks/1675.8800e1ffc26c1777.js",revision:"8800e1ffc26c1777"},{url:"/_next/static/chunks/1831.9c9321bba91ce493.js",revision:"9c9321bba91ce493"},{url:"/_next/static/chunks/1876.15d9708053ca3d8f.js",revision:"15d9708053ca3d8f"},{url:"/_next/static/chunks/1e1757e2-df34deb76048c0ad.js",revision:"9xAXSojhaPObgyYoK2G08"},{url:"/_next/static/chunks/2559-32aa47acfa8c1072.js",revision:"9xAXSojhaPObgyYoK2G08"},{url:"/_next/static/chunks/26b0d091-d95d0b5dac26efe9.js",revision:"9xAXSojhaPObgyYoK2G08"},{url:"/_next/static/chunks/2825.d4b18b503762c240.js",revision:"d4b18b503762c240"},{url:"/_next/static/chunks/3378.920efb3a058379ad.js",revision:"920efb3a058379ad"},{url:"/_next/static/chunks/4057.bc302ef6bb386f4b.js",revision:"bc302ef6bb386f4b"},{url:"/_next/static/chunks/422-ef0305402411b07a.js",revision:"9xAXSojhaPObgyYoK2G08"},{url:"/_next/static/chunks/4317-41aaa886c4e517a9.js",revision:"9xAXSojhaPObgyYoK2G08"},{url:"/_next/static/chunks/4427.efc614f89eeb87c6.js",revision:"efc614f89eeb87c6"},{url:"/_next/static/chunks/4437.c9c874ddfb7dc158.js",revision:"c9c874ddfb7dc158"},{url:"/_next/static/chunks/4570.14af674897abc989.js",revision:"14af674897abc989"},{url:"/_next/static/chunks/4807-efccecd5b8cbc592.js",revision:"9xAXSojhaPObgyYoK2G08"},{url:"/_next/static/chunks/515-038b8f88fcea271b.js",revision:"9xAXSojhaPObgyYoK2G08"},{url:"/_next/static/chunks/5314.730d3c04a469e9a3.js",revision:"730d3c04a469e9a3"},{url:"/_next/static/chunks/54114622.f3b29d4d803256c2.js",revision:"f3b29d4d803256c2"},{url:"/_next/static/chunks/5632-184f87b6ae4f275b.js",revision:"9xAXSojhaPObgyYoK2G08"},{url:"/_next/static/chunks/6115-aead9741a081a9fd.js",revision:"9xAXSojhaPObgyYoK2G08"},{url:"/_next/static/chunks/6217.5f70705f7de2c72a.js",revision:"5f70705f7de2c72a"},{url:"/_next/static/chunks/6416.63baf1c9e24d9011.js",revision:"63baf1c9e24d9011"},{url:"/_next/static/chunks/6457.8f8fca2952348d25.js",revision:"8f8fca2952348d25"},{url:"/_next/static/chunks/6840.c9f3afd2a78a4d4c.js",revision:"c9f3afd2a78a4d4c"},{url:"/_next/static/chunks/6976.35154c7dc69e6ecb.js",revision:"35154c7dc69e6ecb"},{url:"/_next/static/chunks/6d5c9369-d243daa7c4bc4495.js",revision:"9xAXSojhaPObgyYoK2G08"},{url:"/_next/static/chunks/7367.cdc18fff71380923.js",revision:"cdc18fff71380923"},{url:"/_next/static/chunks/7534.639fea62318d0bce.js",revision:"639fea62318d0bce"},{url:"/_next/static/chunks/7582.3fe32b3b4cd36854.js",revision:"3fe32b3b4cd36854"},{url:"/_next/static/chunks/7657-8375652737a6c101.js",revision:"9xAXSojhaPObgyYoK2G08"},{url:"/_next/static/chunks/768d02ca-a8c3a89c6f8858b1.js",revision:"9xAXSojhaPObgyYoK2G08"},{url:"/_next/static/chunks/7822.f5c773994a26c663.js",revision:"f5c773994a26c663"},{url:"/_next/static/chunks/7925.3aace3fe9c1a786d.js",revision:"3aace3fe9c1a786d"},{url:"/_next/static/chunks/8056-b39b5e0d19736d00.js",revision:"9xAXSojhaPObgyYoK2G08"},{url:"/_next/static/chunks/8113.2d405f9d82da49b2.js",revision:"2d405f9d82da49b2"},{url:"/_next/static/chunks/8159.ba281bec1c5c4171.js",revision:"ba281bec1c5c4171"},{url:"/_next/static/chunks/8242.954daa337e02bc46.js",revision:"954daa337e02bc46"},{url:"/_next/static/chunks/8652.355fe85b730ee2bf.js",revision:"355fe85b730ee2bf"},{url:"/_next/static/chunks/88cac51d-2c101e4cba06c019.js",revision:"9xAXSojhaPObgyYoK2G08"},{url:"/_next/static/chunks/8981.347e8486e9c8741a.js",revision:"347e8486e9c8741a"},{url:"/_next/static/chunks/919.59c59a30b687edb5.js",revision:"59c59a30b687edb5"},{url:"/_next/static/chunks/9313.850c6cd5f1ccd89f.js",revision:"850c6cd5f1ccd89f"},{url:"/_next/static/chunks/9345.439a1eebdc0cfa3b.js",revision:"439a1eebdc0cfa3b"},{url:"/_next/static/chunks/93591040-4f13b09a4915c688.js",revision:"9xAXSojhaPObgyYoK2G08"},{url:"/_next/static/chunks/9558.5763bf754a3a68ee.js",revision:"5763bf754a3a68ee"},{url:"/_next/static/chunks/96903c69-0f282e7a899ac42a.js",revision:"9xAXSojhaPObgyYoK2G08"},{url:"/_next/static/chunks/9afe9515-03c27407655822f7.js",revision:"9xAXSojhaPObgyYoK2G08"},{url:"/_next/static/chunks/app/(site)/about/page-10cf572440b22738.js",revision:"9xAXSojhaPObgyYoK2G08"},{url:"/_next/static/chunks/app/(site)/blog/%5Bslug%5D/page-72f92502abbd477c.js",revision:"9xAXSojhaPObgyYoK2G08"},{url:"/_next/static/chunks/app/(site)/blog/page-4bb5e3f489a75e8f.js",revision:"9xAXSojhaPObgyYoK2G08"},{url:"/_next/static/chunks/app/(site)/contact/page-583faba163dbb100.js",revision:"9xAXSojhaPObgyYoK2G08"},{url:"/_next/static/chunks/app/(site)/layout-d02c26fbd664d6a2.js",revision:"9xAXSojhaPObgyYoK2G08"},{url:"/_next/static/chunks/app/(site)/page-3eb62c89ac886298.js",revision:"9xAXSojhaPObgyYoK2G08"},{url:"/_next/static/chunks/app/(site)/preview/page-50e1ba76c0f36a41.js",revision:"9xAXSojhaPObgyYoK2G08"},{url:"/_next/static/chunks/app/(site)/preview/post/%5Bslug%5D/page-907db76809a56cfd.js",revision:"9xAXSojhaPObgyYoK2G08"},{url:"/_next/static/chunks/app/(site)/privacy/page-45866b5ebe8fd682.js",revision:"9xAXSojhaPObgyYoK2G08"},{url:"/_next/static/chunks/app/(site)/services/page-4c3cca5783e33ba2.js",revision:"9xAXSojhaPObgyYoK2G08"},{url:"/_next/static/chunks/app/(site)/terms/page-b47b7ef3277094f6.js",revision:"9xAXSojhaPObgyYoK2G08"},{url:"/_next/static/chunks/app/(site)/work/page-4eb8440d47b1ce57.js",revision:"9xAXSojhaPObgyYoK2G08"},{url:"/_next/static/chunks/app/error-c035c9cbc0298833.js",revision:"9xAXSojhaPObgyYoK2G08"},{url:"/_next/static/chunks/app/layout-d45d16f391f678a1.js",revision:"9xAXSojhaPObgyYoK2G08"},{url:"/_next/static/chunks/app/loading-b0e861ebaea2e223.js",revision:"9xAXSojhaPObgyYoK2G08"},{url:"/_next/static/chunks/app/not-found-33ab850b2863980a.js",revision:"9xAXSojhaPObgyYoK2G08"},{url:"/_next/static/chunks/app/studio/%5B%5B...index%5D%5D/page-d6695ba20bc025cb.js",revision:"9xAXSojhaPObgyYoK2G08"},{url:"/_next/static/chunks/b056723b-25f4cbdc9827eed5.js",revision:"9xAXSojhaPObgyYoK2G08"},{url:"/_next/static/chunks/cc8af702-dd5913427974160a.js",revision:"9xAXSojhaPObgyYoK2G08"},{url:"/_next/static/chunks/e193c69f-3d47c5be075cd801.js",revision:"9xAXSojhaPObgyYoK2G08"},{url:"/_next/static/chunks/ff657cea-92b549a0a421b042.js",revision:"9xAXSojhaPObgyYoK2G08"},{url:"/_next/static/chunks/framework-0514ef3c295e9367.js",revision:"9xAXSojhaPObgyYoK2G08"},{url:"/_next/static/chunks/main-860015ee9c68a09b.js",revision:"9xAXSojhaPObgyYoK2G08"},{url:"/_next/static/chunks/main-app-050885184db565cf.js",revision:"9xAXSojhaPObgyYoK2G08"},{url:"/_next/static/chunks/pages/_app-4565906c43947d69.js",revision:"9xAXSojhaPObgyYoK2G08"},{url:"/_next/static/chunks/pages/_error-e1d181002228ae5c.js",revision:"9xAXSojhaPObgyYoK2G08"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-a7f61bdfbbbae478.js",revision:"9xAXSojhaPObgyYoK2G08"},{url:"/_next/static/css/9377d3a0fd38343f.css",revision:"9377d3a0fd38343f"},{url:"/_next/static/media/0a0ce249959137f3-s.woff2",revision:"587c48d1657e8d379cafadd7b8a9a9df"},{url:"/_next/static/media/2084b837b601951d-s.woff2",revision:"da7530b6fb2a44da4883b85aeecc984c"},{url:"/_next/static/media/398b4bb64e745c45-s.woff2",revision:"800e4b03ee9aba1454fc70fd9b55fbe7"},{url:"/_next/static/media/3a634e28c4bd54fb-s.woff2",revision:"ac0aefa43d75a1481c61df50489e7321"},{url:"/_next/static/media/9366901f2e0806d1-s.woff2",revision:"dc79846f933acad2e093a61ef0311a23"},{url:"/_next/static/media/c4c7b0ec92b72e30-s.p.woff2",revision:"ae8ec5fbab76e9f5bd0624673aab8075"},{url:"/_next/static/media/d9f1473a63f76975-s.woff2",revision:"16a035757af44a681eda3b22ff43f2f0"},{url:"/dot.png",revision:"44a8937bed6769318e829599e4033358"},{url:"/favicon.ico",revision:"ffb82d9eb8d5b93d0bb30c78f57affe8"},{url:"/logo.svg",revision:"4aaa9ba8f926b1b8a7ba9389a513756b"},{url:"/screenshot.png",revision:"d0e05fd7414a529eaa358a278a3dafd3"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
