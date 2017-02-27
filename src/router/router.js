import Home from '../components/home.vue';
import ErrPage from '../components/err-not-found.vue';

export default [
    {
        path: '/',
        component: Home
    },
    {
        path: '*',
        component: ErrPage
    }
]