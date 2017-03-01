import Vue from 'vue';

import App from './components/App.vue';
import router from './router/router.js';
import store from './vuex/index';


// Vue.directive('img', function(url) {
//   var img = new Image();
//   img.src = url;

//   img.onload = function() {
//     this.el.src = url;
//     $(this.el)
//       .css('opacity', 0)
//       .animate({ opacity: 1 }, 1000)
//   }.bind(this);
  
// });

// create and mount entrypoint
new Vue({
    store,
    router,
    render: h => h(App),
    el: '#app'
})