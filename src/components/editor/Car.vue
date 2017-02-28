<template>
    <section class="container">
        <div class="car" :style="bgCarColor"></div>
    </section>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        computed: mapState({
            bgCarColor: state => ({ backgroundColor: state.carColor.hex }),
        })
    }

    /*
        <div class="car" style="background-color: #ffc200">
            <div class="grill" style="background-color: #bd9d07"></div>
            <div class="fenders" style="background-color: #000000">
            <div class="front" style="border-top-color: #000; border-right-color: #000"></div>
            <div class="back" style="border-top-color: #000; border-left-color: #000"></div>
            </div>
            <div class="interior" style="background-color: #000000; color: #000"></div>
            <div class="wheels">
            <div class="wheel front spokes yellow" style="background-color: #FFF">
                <div class="axle" style="background-color: #bd9d07"></div>
            </div>
            <div class="wheel back spokes yellow" style="background-color: #FFF">
                <div class="axle" style="background-color: #bd9d07"></div>
            </div>
            <div class="wheel spare spokes red" style="background-color: #FFF">
                <div class="axle" style="background-color: #bd9d07"></div>
            </div>
            </div>
            <div class="lights">
            <div class="front" style="background-color: #bd9d07"></div>
            <div class="back" style="background-color: #bd9d07"></div>
            </div>
            <div class="doors" style="border-color: #bd9d07"></div>
            <div class="soft-top" style="background-color: #000000"></div>
        </div>
    */
</script>