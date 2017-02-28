<template>
    <div id="app">
        <Navigation></Navigation>
        <Sidebar></Sidebar>
        <main>
            <router-view></router-view>
        </main>
    </div>
</template>

<script>
    // import '../assets/sass/carcustomiser.scss';
    import Navigation from './Navigation.vue';
    import Sidebar from './Sidebar.vue';
    
    export default {
        components: {
            Navigation,
            Sidebar
        }
    }
</script>

<style lang="scss">
    @import '../assets/sass/carcustomiser.scss';
</style>