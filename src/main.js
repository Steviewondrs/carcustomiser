import Vue from 'vue';

import App from './components/App.vue';
import router from './router/router.js';
import store from './vuex/index';

// create and mount entrypoint
new Vue({
    store,
    router,
    render: h => h(App),
    el: '#app'
})