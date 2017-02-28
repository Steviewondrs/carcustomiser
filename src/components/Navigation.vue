<template>
    <header>
        <h1>Car Customiser</h1>
        <button @click="toggleSidebar" id="btnMenu" class="btn-menu">
            MENU
        </button>
    </header>
</template>

<script>
    export default {
        methods: {
            toggleSidebar( e ) {
                this.$store.dispatch( 'toggleSidebar' );
            }
        }
    }
</script>