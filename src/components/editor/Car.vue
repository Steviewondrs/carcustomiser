<template>
    <section class="container">
        <div class="car" :style="carStyles">
            <!-- Grill -->
            <div class="grill" :style="detailStyles"></div>
            <!-- Fenders -->
            <div class="fenders" :style="fenderStyles">
                <div class="front" :style="frontFenderStyles"></div>
                <div class="back" :style="backFenderStyles"></div>
            </div>
            <!-- Interior -->
            <div class="interior" :style="interiorStyles"></div>
            <!-- Wheels -->
            <div class="wheels">
                <div class="wheel front spokes yellow" :style="wheelStyles">
                    <div class="axle" :style="detailStyles"></div>
                </div>
                <div class="wheel back spokes yellow" :style="wheelStyles">
                    <div class="axle" :style="detailStyles"></div>
                </div>
                <div class="wheel spare spokes red" :style="wheelStyles">
                    <div class="axle" :style="detailStyles"></div>
                </div>
            </div>
            <!-- Lights -->
            <div class="lights">
                <div class="front" :style="detailStyles"></div>
                <div class="back" :style="detailStyles"></div>
            </div>
            <!-- Doors -->
            <div class="doors" :style="doorStyles"></div>
            <!-- Soft Top -->
            <div class="soft-top" :style="interiorStyles"></div>
        </div>
    </section>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        computed: mapState({
            carStyles:         state => ({ backgroundColor: state.carColor.hex }),
            interiorStyles:    state => ({ 
                backgroundColor: state.interiorColor.hex,
                color: state.interiorColor.hex
             }),
            wheelStyles:       state => ({ backgroundColor: state.wheelColor.hex }),
            fenderStyles:      state => ({ backgroundColor: state.fenderColor.hex }),
            frontFenderStyles: state => ({
                borderTopColor: state.fenderColor.hex,
                borderRightColor: state.fenderColor.hex
            }),
            backFenderStyles:  state => ({
                borderTopColor: state.fenderColor.hex,
                borderLeftColor: state.fenderColor.hex
            }),
            detailStyles: state => ({ backgroundColor: state.detailColor.hex }),
            doorStyles: state => ({ borderColor: state.detailColor.hex }),
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

<!--<style lang="scss">
    @import '../../assets/sass/carcustomiser.scss';
</style>-->