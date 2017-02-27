import Home from '../components/Content.vue';
import ErrPage from '../components/Err-not-found.vue';
import Editor from '../components/Editor.vue';

export default [
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
]