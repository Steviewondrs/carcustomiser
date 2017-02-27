import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../components/Content.vue';
import ErrPage from '../components/Err-not-found.vue';
import Editor from '../components/Editor.vue';

// init router
Vue.use( VueRouter );

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/new',
        component: Editor
    },
    {
        path: '*',
        component: ErrPage
    }
];

export default new VueRouter( { routes } );