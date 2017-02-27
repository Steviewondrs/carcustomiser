const CACHE_NAME = 'car-customiser-V1';
// Files we want to cache
const filesToCache = [
    '/',
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

self.oninstall = function( e ) {
    e.waitUntil( ( async () => {
        let cache = await caches.open( CACHE_NAME );
        
        console.log( '[ serviceWorker ]: Cache app shell' );
        await cache.addAll( filesToCache);
        console.log( '[ serviceWorker ]: Installed And Skiping Waiting on install');
        self.skipWaiting();
    })() );
}



// // install service worker and add files to cache
// self.oninstall = function( e ) {
//     console.log( '[ serviceWorker ]: installing...' );
//     e.waitUntil(
//         caches.open( CACHE_NAME )
//             .then( function( cache )  {
//                 console.log( '[ serviceWorker ]: Cache app shell' )
//                 return cache.addAll( filesToCache );
//             })
//             .then( function() {
//                 console.log( '[ serviceWorker ]: Installed And Skiping Waiting on install');
//                 return self.skipWaiting();
//             })
//     )
// }


// // Cache management
// self.onactivate = function( e ) {
//     console.log( '[ serviceWorker ]: Activated' );

//     var whiteList = [ 'car-customiser' ];

//     e.waitUntil(
//         caches.keys()
//             .then( function( cacheList ) {
//                 return Promise.all( cacheList.map( function( cache ) {
//                     console.log( '[serviceWorker]: removing old cache', cache );
//                     return caches.delete( cache );
//                 }) );
//             })
//             .then( function() {
//                 /*
//                 This fixes an edge case in which the app wasn't returning the latest data.
//                 if you do:
//                     1. load app for the first time
//                     2. refresh
//                     3. go offline
//                     4. reload app.
//                 then you'd expect to see fresh data, but instead you'll be greeted with wathever
//                 initial data you set.
//                 */
//                 console.log( '[ serviceWorker ]: Clients Claims' );
//                 return self.clients.claim();
//             })
//     )
// };

// self.onfetch = function( e ) {
//     console.log( '[ serviceWorker ]: Fetch', e.request.url );
//     var dataURL = 'https://car-api.firebaseio.com/rest.json';

//     if( e.request.url.indexOf( dataURL ) > -1 ) {
//         e.respondWith(
//             caches.open( CACHE_NAME ).then( function( cache ) {
//                 return fetch( e.request ).then( function( res ){
//                     cache.put( e.request.url, res.clone() );
//                     return res;
//                 });
//             })
//         );
//     } else {
//         e.respondWith(
//             caches.match( e.request ).then( function( res ) {
//                 return res || fetch( e.request );
//             })
//         );
//     }
// };


//     // e.respondWith( 
//     //     caches.match( e.request ).catch( function() {
//     //         return fetch( e.request );
//     //     })
//     //     .then( function( res ) {
//     //         caches.open( CACHE_NAME ).then( function( cache ) {
//     //             cache.put( e.request, res.clone() );
//     //         })
//     //         return res;
//     //     })
//     //     .catch( function( err ) {
//     //         console.log( '[ serviceWorker ]: Fetch Error', err );
//     //     })
//     // );

// // self.onfetch =function( e ) {
// //     e.respondWith(
// //         caches.match( e.request )
// //             .then( res => res || fetch( e.request ))
// //     );
// // }