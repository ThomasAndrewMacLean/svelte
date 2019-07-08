/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "bundle.css",
    "revision": "4e3abf2237494ecc9b1f03807a73af0c"
  },
  {
    "url": "bundle.js",
    "revision": "ce6bab466e2b033a36ccbf28a3917b60"
  },
  {
    "url": "global.css",
    "revision": "0fb076d5a3fdb2941b72e51f1e0f1d2b"
  },
  {
    "url": "images/android-chrome-192x192.png",
    "revision": "f76fe3b38f532d505323da7e8d577b7c"
  },
  {
    "url": "images/android-chrome-512x512.png",
    "revision": "b29d1b089e815cf9b8886960fb79b1a9"
  },
  {
    "url": "images/apple-touch-icon.png",
    "revision": "f2f3f9b0f2ce00132b8c8e1787c48daa"
  },
  {
    "url": "images/favicon-16x16.png",
    "revision": "5e7f0236eb026eb1f20a9963e893e81f"
  },
  {
    "url": "images/favicon-32x32.png",
    "revision": "2d2e7318aba0eff0cf7d8d83bffee1b5"
  },
  {
    "url": "images/favicon.ico",
    "revision": "0ec8716b6e30048ee1c860f4e2208d0d"
  },
  {
    "url": "images/kiss.jpeg",
    "revision": "4a0b7f3d36de7abacc8a7eddf01af4c0"
  },
  {
    "url": "index.html",
    "revision": "fcdad18f428638c49a1f4dedc1829273"
  },
  {
    "url": "site.webmanifest",
    "revision": "f1514e06a8bfee50fad02a49b04360e0"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.precaching.cleanupOutdatedCaches();
