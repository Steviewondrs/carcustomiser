import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.config.debug = true;
Vue.config.devTools = true;

// component entrypoint
import app from './components/app.vue';
// routes
import map from './router/map.js';

// connect everything
Vue.use( VueRouter );
let router = new VueRouter();
router.map( map );

// mount
let App = Vue.extend( app );
router.start( App, 'app' );