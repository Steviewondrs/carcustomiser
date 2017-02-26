export default {
    '/': {
        component: require( '../components/home.vue' )
    },
    '*': {
        component: require( '../components/err-not-found.vue' )
    }
}