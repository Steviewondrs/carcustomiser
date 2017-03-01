<template>
    <div id="app">
        <Navigation></Navigation>
        <main>
            <router-view></router-view>
        </main>
        <Sidebar></Sidebar>
    </div>
</template>

<script>
    import Navigation from './Navigation.vue';
    import Sidebar from './Sidebar.vue';
    console.log( 'test123 ' );
    export default {
        components: {
            Navigation,
            Sidebar,
        }
    }
</script>

<style lang="scss">
    @import "../assets/sass/carcustomiser.scss";
</style>