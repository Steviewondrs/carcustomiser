<template>
    <div class="editor">
        <Car></Car>
        <Config></Config>
    </div>
</template>

<script>
    import Car from './Car.vue';
    import Config from './Config.vue';

    export default {
        components: {
            Car,
            Config
        }
    }
</script>