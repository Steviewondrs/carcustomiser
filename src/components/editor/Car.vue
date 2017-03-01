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
                <div class="wheel front" :class="wheelType" :style="wheelStyles">
                    <div class="axle" :style="detailStyles"></div>
                </div>
                <div class="wheel back" :class="wheelType" :style="wheelStyles">
                    <div class="axle" :style="detailStyles"></div>
                </div>
                <div class="wheel spare" :class="wheelType" :style="wheelStyles">
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
            doorStyles: state => ({ 
                borderColor: state.detailColor.hex,
                backgroundImage: state.selectedBrand !== undefined 
                    ? `url( ${state.selectedBrand.logoUrl} )` 
                    : ''
             }),
            wheelType: state => {
                return state.spokesVisible 
                    ? `spokes ${ state.spokesColorClass }`
                    : state.spokesColorClass;
            },
            selectedBrand: state => state.selectedBrand,
            isBrandSet: state => typeof state.selectedBrand !== 'undefined'
        })
    }

</script>