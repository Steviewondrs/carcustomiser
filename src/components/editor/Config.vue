<template>
	<section class="config">
		<label for="carColor">Chassis</label>
        <ColorPicker id="carColor" :value="carColor" 
			@change-color="setColor('carColor', $event)"></ColorPicker>

		<label for="interiorColor">Interior</label>
        <ColorPicker id="interiorColor" :value="interiorColor" 
			@change-color="setColor('interiorColor', $event)"></ColorPicker>

		<label for="wheelColor">Wheels</label>
        <ColorPicker id="wheelColor" :value="wheelColor" 
			@change-color="setColor('wheelColor', $event)"></ColorPicker>

		<label for="fenderColor">Fenders</label>
        <ColorPicker id="fenderColor" :value="fenderColor" 
			@change-color="setColor('fenderColor', $event)"></ColorPicker>

		<label for="detailColor">Detailing</label>
        <ColorPicker id="detailColor" :value="detailColor" 
			@change-color="setColor('detailColor', $event)"></ColorPicker>

    </section>
</template>

<script>
	import { mapState } from 'vuex';
	import { Slider, Compact } from 'vue-color'; 

	export default {
		components: {
			ColorPicker: Compact
		},
		computed: mapState({
			carColor: state => state.carColor,
			interiorColor: state => state.interiorColor,
			wheelColor: state => state.wheelColor,
			fenderColor: state => state.fenderColor,
			detailColor: state => state.detailColor,
		}),
		methods: {
			setColor( part, color ) {
				console.log( part );
				this.$store.dispatch( 'setColor', { part, color } );
			}
		}
	}
</script>