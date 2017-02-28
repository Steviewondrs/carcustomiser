<template>
    <header>
        <button @click="toggleSidebar" id="btnMenu" class="btn-menu">
            MENU
        </button>
        <h1>Car Customiser</h1>
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