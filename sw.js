if(!self.define){let e,i={};const s=(s,d)=>(s=new URL(s+".js",d).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(d,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let o={};const t=e=>s(e,r),c={module:{uri:r},exports:o,require:t};i[r]=Promise.all(d.map((e=>c[e]||t(e)))).then((e=>(n(...e),o)))}}define(["./workbox-4de3aa5f"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"apple-touch-icon.png",revision:"1594838ed42b424ddd5d48b70ae046b5"},{url:"assets/index-1b12764c.js",revision:null},{url:"assets/index-d526a0c5.css",revision:null},{url:"favicon.ico",revision:"cef0d0eabdbe94c9c50c4e393be3ddf1"},{url:"index.html",revision:"3aa27db9bb70d3b89a69d5959c2d1220"},{url:"manifest.webmanifest",revision:"ac917793e92cdd8199caf892a2b1ad00"},{url:"registerSW.js",revision:"a04ed82fff33ed9981acc53a90e074bd"},{url:"robots.txt",revision:"987497bfb623e1059632e5a607d56454"},{url:"apple-touch-icon.png",revision:"1594838ed42b424ddd5d48b70ae046b5"},{url:"favicon.ico",revision:"cef0d0eabdbe94c9c50c4e393be3ddf1"},{url:"robots.txt",revision:"987497bfb623e1059632e5a607d56454"},{url:"manifest.webmanifest",revision:"ac917793e92cdd8199caf892a2b1ad00"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
