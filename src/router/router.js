import Vue from 'vue';
import VueRouter from 'vue-router';

import ErrPage from '../components/Err-not-found.vue';
import Editor from '../components/editor/Editor.vue';

// init router
Vue.use( VueRouter );

const routes = [
    {
        path: '/',
        component: Editor
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