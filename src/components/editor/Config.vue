<template>
	<section class="config">
		<label for="carColor">Car Color</label>
        <ColorSlider id="carColor" :value="carColor" @change-color="setColor('car', $event)"></ColorSlider>
    </section>
</template>

<script>
	import { mapState } from 'vuex';
	import { Slider } from 'vue-color'; 

	export default {
		components: {
			ColorSlider: Slider
		},
		computed: mapState({
			carColor: state => state.carColor
		}),
		methods: {
			setColor( part, color ) {
				console.log( part );
				this.$store.dispatch( 'setColor', { part, color } );
			}
		}
	}
</script>