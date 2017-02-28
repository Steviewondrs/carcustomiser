<template>
    <div>
        <h1 class="header__title">Car Customiser</h1>
        <button @click="toggleSidebar" id="btnMenu" class="btn-menu">
            MENU
        </button>
        <button @click="requestBrands">Test</button>
    </div>
</template>

<script>
    export default {
        methods: {
            toggleSidebar( e ) {
                this.$store.dispatch( 'toggleSidebar' );
            },
            requestBrands( e ) {
                this.$store.dispatch( 'requestBrands' );
            }
        }
    }
</script>