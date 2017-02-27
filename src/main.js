import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './components/App.vue';
import routes from './router/router.js';

import store from './vuex/store';

// init router
Vue.use( VueRouter );
const router = new VueRouter( {routes} );

// create and mount entrypoint
new Vue({
    store,
    router,
    render: h => h(App)
}).$mount( '#app')