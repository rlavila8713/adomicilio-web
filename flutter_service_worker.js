'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "57a4b1ede10ce94db3da1722f070600c",
"assets/assets/fonts/linearicons.ttf": "9c43c7534cd08de688d6b73ae7684db4",
"assets/assets/fonts/LineIcons.ttf": "6e9fb56e13ffdf56a053e86545cafe3e",
"assets/assets/fonts/Raleway-Regular.ttf": "84abe14c9756256a4b91300ba3e4ec62",
"assets/assets/fonts/Raleway-SemiBold.ttf": "6ec58d1ea836b7ef69f94ea6770972a3",
"assets/assets/images/accept.png": "30f8e426130a371ea74696798a996335",
"assets/assets/images/cancel.png": "cb352f1a5ab908c0952c34619a744b03",
"assets/assets/images/card.png": "17fc7d5b320f0d86f3cfb61fddc243fe",
"assets/assets/images/compass.png": "84c23267140176ca065f3715ecb86cb6",
"assets/assets/images/contact_via.svg": "47001e2475ff6ca69130bc47b63ee735",
"assets/assets/images/deliveries.png": "2be461fe9f2ace756d0bc5d333b83dd9",
"assets/assets/images/deliveries.svg": "0be1bb3517ba6da5c9a2d858974e5350",
"assets/assets/images/delivery.png": "45df48d364f7dead86c4ed881274df4d",
"assets/assets/images/delivery_man.png": "9ff9a78c6190f22a11cb378b25de13f0",
"assets/assets/images/delivery_moto.png": "ac17d8de18b91f910c7321621007c452",
"assets/assets/images/delivery_package.png": "5ac629a3c2da076e4309211ad052cfbb",
"assets/assets/images/enter.png": "51ed9f93387535b1f252d427ace9d2fb",
"assets/assets/images/food_delivery.png": "84100ef4dd5d4fca7626f67a4fde6011",
"assets/assets/images/food_pin_map.png": "0be01e6bd4a540c3dc50317a3c5e5240",
"assets/assets/images/food_store.png": "a213a54ec38eee56042a3787ffa2bcb1",
"assets/assets/images/how_to_arrive_active_logo.png": "e86518b159104e4a5f16844a4da26692",
"assets/assets/images/iconscamera.svg": "8fd764bba9774105e9a69fe6c82cedfc",
"assets/assets/images/img_not_available.jpeg": "1c98fa4a13575d5854365f27b8bf66dc",
"assets/assets/images/location.png": "8d224412e7d9a97e7a5641652eafe76d",
"assets/assets/images/login_image.png": "711d58375ba9d395b73ab06223f4598a",
"assets/assets/images/logo.png": "8ca28be0d37b54c06b25422d098d78be",
"assets/assets/images/mail_sent.png": "2658310e452a43e68846599c288a2e40",
"assets/assets/images/mail_sent.svg": "bd8b1fabdd45c11e71951b8123c94653",
"assets/assets/images/map.png": "ead33077a2a2e78b6e4399d2a8d7c2cb",
"assets/assets/images/navigation.png": "77f3e01485810d1b14f07867b1076fe0",
"assets/assets/images/navigation.svg": "8c67a38062e565bb5facdebed2375f2f",
"assets/assets/images/no-wifi.png": "3fe3230b3cd3a0925d9c36a7af1b743a",
"assets/assets/images/no_image.png": "6219f836d95d5d2630da1103be27814f",
"assets/assets/images/offline.png": "27be076c4d3bc3c64316a04e9c51cfa2",
"assets/assets/images/onboarding/contract.svg": "682bda92f8ff1fe8dd5941c083f6bb72",
"assets/assets/images/onboarding/delivery_method.svg": "c2891b1ec5338cb2dadfa7fb495a4cbb",
"assets/assets/images/onboarding/form.svg": "5b7470acf961c7453ab13c6f664aeea4",
"assets/assets/images/onboarding/map.svg": "6cb284f3b0a521cba0381becfd0e2aa9",
"assets/assets/images/onboarding/moto.svg": "a3d0340f1281125e7a2cb546fd19e26e",
"assets/assets/images/onboarding/onboarding_map.svg": "f7f1ceecc13da595051470dd897e79ea",
"assets/assets/images/online.png": "94b6bbc596a6ee3a9e8a6acd6120d728",
"assets/assets/images/online.svg": "101cd0bc3af108408335c8cf15777c70",
"assets/assets/images/package.png": "735fcc1a33029197d85d6b5cee426c3d",
"assets/assets/images/padlock.png": "cd5318c1a558a1a4ef41c786b45c34b1",
"assets/assets/images/personal_info.svg": "ce38bf7fbae1b18d2c72dad8763b7a3f",
"assets/assets/images/placeholder.png": "6b8dde954efc091a53e09f6a875d4678",
"assets/assets/images/rectangle.svg": "1e2ea0f2cd6ca7e1905a4a37c3336b13",
"assets/assets/images/rectangle_0.svg": "33e365cbb5b333814429824ffeacb441",
"assets/assets/images/save-data.png": "0ac7922e06b14ec652427f2332dfb8a9",
"assets/assets/images/share-location-2.svg": "66b02cc375ea7e9f18a9c8635a23cd38",
"assets/assets/images/share-location.svg": "7d0124231298e6c77986177105541e01",
"assets/assets/images/telegram.svg": "f647f49d242569fc5d2682c2c2265dbc",
"assets/assets/images/user.png": "b8bb9852f644cc8b07764db0a7892557",
"assets/assets/images/warning.png": "d03714a858649fb0c0483a0cae72a9ce",
"assets/assets/images/whatsapp.svg": "0ce6f2747d794fcb627864c83558b319",
"assets/assets/images/wifi.png": "df8f9384d2040d72757a2bdf4f21cb7d",
"assets/assets/images/www.png": "5c87f839f4201dd07c728587fbe1cbc7",
"assets/FontManifest.json": "d7f27c94dc23b363bed631b68a48614d",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "32c29c0d109b06a185723259ecc026e7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/panara_dialogs/assets/confirm.png": "acf806139cb7c12e09fc5ca1185b8a2f",
"assets/packages/panara_dialogs/assets/info.png": "e4bb5858c90ab48c72f11ba44bb26b5b",
"canvaskit/canvaskit.js": "62b9906717d7215a6ff4cc24efbd1b5c",
"canvaskit/canvaskit.wasm": "b179ba02b7a9f61ebc108f82c5a1ecdb",
"canvaskit/profiling/canvaskit.js": "3783918f48ef691e230156c251169480",
"canvaskit/profiling/canvaskit.wasm": "6d1b0fc1ec88c3110db88caa3393c580",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "9e9c1692288d1eb3bc4b4c0470675fc3",
"/": "9e9c1692288d1eb3bc4b4c0470675fc3",
"main.dart.js": "9f2239862edf87a22f801dd3648ac3d7",
"manifest.json": "43b43433a69be83f1baa4c58eaa66393",
"splash/img/dark-1x.png": "51912a12bdfe72549351677f0179b17d",
"splash/img/dark-2x.png": "ede2652e0fd22270530bc0aa65e0e8e7",
"splash/img/dark-3x.png": "4db11f7dcf9853d5a502aa9cf1117af8",
"splash/img/light-1x.png": "51912a12bdfe72549351677f0179b17d",
"splash/img/light-2x.png": "ede2652e0fd22270530bc0aa65e0e8e7",
"splash/img/light-3x.png": "4db11f7dcf9853d5a502aa9cf1117af8",
"splash/style.css": "af1365e5194402999b43612e04178698",
"version.json": "6874e939bec47f69159af65bf3c77d3d"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
