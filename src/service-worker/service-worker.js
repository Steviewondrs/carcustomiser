const CACHE_NAME = 'car-customiser-V1';
// Files we want to cache
const filesToCache = [
    './',
    './index.html',
    './manifest.json',
    // './serviceworker-cache-polyfill.js',
    // './src/assets/img/blank-thumbnail.png',
    './src/assets/img/favicon.ico',
    './src/assets/img/icon48.png',
    './src/assets/img/icon72.png',
    './src/assets/img/icon96.png',
    './src/assets/img/icon144.png',
    './src/assets/img/icon192.png',
    './dist/build.js'
];

// // install service worker and add files to cache
self.oninstall = function( e ) {
    e.waitUntil( ( async () => {
        let cache = await caches.open( CACHE_NAME );
        
        console.log( '[ serviceWorker ]: Cache app shell' );
        await cache.addAll( filesToCache);

        console.log( '[ serviceWorker ]: Installed And Skiping Waiting on install');
        self.skipWaiting();
    })() );
}

// Cache management
self.onactivate = function( e ) {
    console.log( '[ serviceWorker ]: Activated' );
    const whiteList = [ 'car-customiser' ];
    e.waitUntil( ( async () => {
        const cacheNames = await caches.keys();
        for( let key in cacheNames ) {
            if( whiteList.indexOf( key ) === -1 ) {
                console.log( '[serviceWorker]: removing old cache', key );
                await caches.delete( key );
            } 
        }

        /*
        This fixes an edge case in which the app wasn't returning the latest data.
        if you do:
            1. load app for the first time
            2. refresh
            3. go offline
            4. reload app.
        then you'd expect to see fresh data, but instead you'll be greeted with wathever
        initial data you set.
        */
        console.log( '[ serviceWorker ]: Clients Claims' );
        await self.clients.claim();
    })() );
}

self.onfetch = function( e ) {
    console.log( '[ serviceWorker ]: Fetch', e.request.url );
    const DATA_URL = 'https://car-api.firebaseio.com/rest.json';

    if( e.request.url.indexOf( DATA_URL ) > -1 ) {
        e.respondWith( ( async () => {
            let cache = await caches.open( CACHE_NAME );
            let response = await fetch( e.request );
            cache.put( e.request.url, response.clone() );
            return response;
        })() );
    } else {
        e.respondWith(
            caches.match( e.request ).then( function( response ) {
                return response || fetch( e.request );
            })
        );
    }
};