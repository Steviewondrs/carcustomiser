!function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var r={};return e.m=t,e.c=r,e.i=function(t){return t},e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=41)}({1:function(t,e,r){(function(e,r){!function(e){"use strict";function n(t,e,r,n){var o=Object.create((e||i).prototype),c=new v(n||[]);return o._invoke=l(t,r,c),o}function o(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function i(){}function c(){}function a(){}function u(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function s(t){this.arg=t}function f(t){function e(e,r){var n=t[e](r),o=n.value;return o instanceof s?Promise.resolve(o.arg).then(i,c):Promise.resolve(o).then(function(t){return n.value=t,n})}function n(t,r){function n(){return e(t,r)}return o=o?o.then(n,n):new Promise(function(t){t(n())})}"object"==typeof r&&r.domain&&(e=r.domain.bind(e));var o,i=e.bind(t,"next"),c=e.bind(t,"throw");e.bind(t,"return");this._invoke=n}function l(t,e,r){var n=L;return function(i,c){if(n===E)throw new Error("Generator is already running");if(n===j){if("throw"===i)throw c;return d()}for(;;){var a=r.delegate;if(a){if("return"===i||"throw"===i&&a.iterator[i]===g){r.delegate=null;var u=a.iterator.return;if(u){var s=o(u,a.iterator,c);if("throw"===s.type){i="throw",c=s.arg;continue}}if("return"===i)continue}var s=o(a.iterator[i],a.iterator,c);if("throw"===s.type){r.delegate=null,i="throw",c=s.arg;continue}i="next",c=g;var f=s.arg;if(!f.done)return n=k,f;r[a.resultName]=f.value,r.next=a.nextLoc,r.delegate=null}if("next"===i)r._sent=c,r.sent=n===k?c:g;else if("throw"===i){if(n===L)throw n=j,c;r.dispatchException(c)&&(i="next",c=g)}else"return"===i&&r.abrupt("return",c);n=E;var s=o(t,e,r);if("normal"===s.type){n=r.done?j:k;var f={value:s.arg,done:r.done};if(s.arg!==T)return f;r.delegate&&"next"===i&&(c=g)}else"throw"===s.type&&(n=j,i="throw",c=s.arg)}}}function h(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function p(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function v(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(h,this),this.reset(!0)}function y(t){if(t){var e=t[w];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(m.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=g,e.done=!0,e};return n.next=n}}return{next:d}}function d(){return{value:g,done:!0}}var g,m=Object.prototype.hasOwnProperty,w="function"==typeof Symbol&&Symbol.iterator||"@@iterator",x="object"==typeof t,b=e.regeneratorRuntime;if(b)return void(x&&(t.exports=b));b=e.regeneratorRuntime=x?t.exports:{},b.wrap=n;var L="suspendedStart",k="suspendedYield",E="executing",j="completed",T={},O=a.prototype=i.prototype;c.prototype=O.constructor=a,a.constructor=c,c.displayName="GeneratorFunction",b.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===c||"GeneratorFunction"===(e.displayName||e.name))},b.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,a):t.__proto__=a,t.prototype=Object.create(O),t},b.awrap=function(t){return new s(t)},u(f.prototype),b.async=function(t,e,r,o){var i=new f(n(t,e,r,o));return b.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},u(O),O[w]=function(){return this},O.toString=function(){return"[object Generator]"},b.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},b.values=y,v.prototype={constructor:v,reset:function(t){if(this.prev=0,this.next=0,this.sent=g,this.done=!1,this.delegate=null,this.tryEntries.forEach(p),!t)for(var e in this)"t"===e.charAt(0)&&m.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=g)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){function e(e,n){return i.type="throw",i.arg=t,r.next=e,!!n}if(this.done)throw t;for(var r=this,n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],i=o.completion;if("root"===o.tryLoc)return e("end");if(o.tryLoc<=this.prev){var c=m.call(o,"catchLoc"),a=m.call(o,"finallyLoc");if(c&&a){if(this.prev<o.catchLoc)return e(o.catchLoc,!0);if(this.prev<o.finallyLoc)return e(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return e(o.catchLoc,!0)}else{if(!a)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return e(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&m.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?this.next=o.finallyLoc:this.complete(i),T},complete:function(t,e){if("throw"===t.type)throw t.arg;"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=t.arg,this.next="end"):"normal"===t.type&&e&&(this.next=e)},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),p(r),T}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;p(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:y(t),resultName:e,nextLoc:r},T}}}("object"==typeof e?e:"object"==typeof window?window:"object"==typeof self?self:this)}).call(e,r(3),r(5))},3:function(t,e){var r;r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(r=window)}t.exports=r},41:function(t,e,r){r(1),t.exports=r(7)},5:function(t,e){function r(){throw new Error("setTimeout has not been defined")}function n(){throw new Error("clearTimeout has not been defined")}function o(t){if(f===setTimeout)return setTimeout(t,0);if((f===r||!f)&&setTimeout)return f=setTimeout,setTimeout(t,0);try{return f(t,0)}catch(e){try{return f.call(null,t,0)}catch(e){return f.call(this,t,0)}}}function i(t){if(l===clearTimeout)return clearTimeout(t);if((l===n||!l)&&clearTimeout)return l=clearTimeout,clearTimeout(t);try{return l(t)}catch(e){try{return l.call(null,t)}catch(e){return l.call(this,t)}}}function c(){y&&p&&(y=!1,p.length?v=p.concat(v):d=-1,v.length&&a())}function a(){if(!y){var t=o(c);y=!0;for(var e=v.length;e;){for(p=v,v=[];++d<e;)p&&p[d].run();d=-1,e=v.length}p=null,y=!1,i(t)}}function u(t,e){this.fun=t,this.array=e}function s(){}var f,l,h=t.exports={};!function(){try{f="function"==typeof setTimeout?setTimeout:r}catch(t){f=r}try{l="function"==typeof clearTimeout?clearTimeout:n}catch(t){l=n}}();var p,v=[],y=!1,d=-1;h.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];v.push(new u(t,e)),1!==v.length||y||o(a)},u.prototype.run=function(){this.fun.apply(null,this.array)},h.title="browser",h.browser=!0,h.env={},h.argv=[],h.version="",h.versions={},h.on=s,h.addListener=s,h.once=s,h.off=s,h.removeListener=s,h.removeAllListeners=s,h.emit=s,h.binding=function(t){throw new Error("process.binding is not supported")},h.cwd=function(){return"/"},h.chdir=function(t){throw new Error("process.chdir is not supported")},h.umask=function(){return 0}},7:function(t,e,r){"use strict";function n(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,r){function n(o,i){try{var c=e[o](i),a=c.value}catch(t){return void r(t)}if(!c.done)return Promise.resolve(a).then(function(t){n("next",t)},function(t){n("throw",t)});t(a)}return n("next")})}}function o(t,e){return fetch(t.request.clone()).then(function(r){return r.status<400&&e.put(t.request,r.clone()),r})}var i="car-customiser-V2",c=["./index.html","./manifest.json","./src/assets/img/favicon.ico","./src/assets/img/icon48.png","./src/assets/img/icon72.png","./src/assets/img/icon96.png","./src/assets/img/icon144.png","./src/assets/img/icon192.png","./dist/build.js"];self.oninstall=function(t){var e=this;console.log("[ serviceWorker ]: Installing..."),t.waitUntil(n(regeneratorRuntime.mark(function t(){var r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,caches.open(i);case 2:return r=t.sent,console.log("[ serviceWorker ]: Cache All"),t.next=6,r.addAll(c);case 6:console.log("[ serviceWorker ]: Installed And Skiping Waiting on install"),self.skipWaiting();case 8:case"end":return t.stop()}},t,e)}))())},self.onactivate=function(t){var e=this;console.log("[ serviceWorker ]: Activated"),t.waitUntil(n(regeneratorRuntime.mark(function t(){var r,n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,caches.keys();case 2:r=t.sent,t.t0=regeneratorRuntime.keys(r);case 4:if((t.t1=t.t0()).done){t.next=12;break}if(n=t.t1.value,n===i){t.next=10;break}return console.log("[serviceWorker]: removing old cache",n),t.next=10,caches.delete(n);case 10:t.next=4;break;case 12:return console.log("[ serviceWorker ]: Clients Claims"),t.abrupt("return",self.clients.claim());case 14:case"end":return t.stop()}},t,e)}))())},self.onfetch=function(t){var e=this;console.log("[ serviceWorker ]: Fetch",t.request.url),t.request.url.indexOf("https://car-api.firebaseio.com/rest.json")>-1?t.respondWith(n(regeneratorRuntime.mark(function r(){var n,c;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,caches.open(i);case 3:if(n=e.sent,c=n.match(t.request),!c){e.next=10;break}return o(t,n),e.abrupt("return",c);case 10:return e.abrupt("return",o(t,n));case 11:e.next=17;break;case 13:throw e.prev=13,e.t0=e.catch(0),console.log("[ serviceWorker ]: Error on fetch",e.t0),e.t0;case 17:case"end":return e.stop()}},r,e,[[0,13]])}))()):t.respondWith(caches.match(t.request).then(function(e){return e||fetch(t.request)}))}}});
//# sourceMappingURL=service-worker.js.map