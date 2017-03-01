<template>
	<section class="config">
		<ul>
			<li>
				<label for="carColor">Chassis</label>
				<ColorPicker id="carColor" :value="carColor" 
					@change-color="setColor('carColor', $event)"></ColorPicker>
			</li>
			<li>
				<label for="interiorColor">Interior</label>
				<ColorPicker id="interiorColor" :value="interiorColor" 
					@change-color="setColor('interiorColor', $event)"></ColorPicker>
			</li>
			<li>
				<label for="wheelColor">Wheels</label>
				<ColorPicker id="wheelColor" :value="wheelColor" 
					@change-color="setColor('wheelColor', $event)"></ColorPicker>
			</li>
			<li>
				<label for="fenderColor">Fenders</label>
				<ColorPicker id="fenderColor" :value="fenderColor" 
					@change-color="setColor('fenderColor', $event)"></ColorPicker>
			</li>
			<li>
				<label for="detailColor">Detailing</label>
				<ColorPicker id="detailColor" :value="detailColor" 
					@change-color="setColor('detailColor', $event)"></ColorPicker>
			</li>
			<li>
				<label>Spokes</label>
				<div class="configitem">
					<label for="cbx_spokes">Spoked Wheel</label>
					<input id="cbx_spokes" type="checkbox" :checked="spokesVisible" @change="setSpokesVisible">
					<ul class="colorswatches">
						<li @click="setSpokesColor( 'blue' )"   style="background-color: #0062b1"></li>
						<li @click="setSpokesColor( 'red' )"    style="background-color: #b90d0d"></li>
						<li @click="setSpokesColor( 'green' )"  style="background-color: #166f31"></li>
						<li @click="setSpokesColor( 'yellow' )" style="background-color: #ffc200"></li>
					</ul>
				</div>
			</li>
			<li>
				<label>Brands</label>
				<div class="configitem">
					<ul class="brands">
						<li v-for="item in brands">
							<img :src="item.logoUrl" :alt="item.make" @click="setCarBrand( item )">
						</li>
					</ul>
				</div>
			</li>
		</ul>
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
			spokesVisible: state => state.spokesVisible,
			brands: state => state.brands
		}),
		methods: {
			setColor( part, color ) {
				this.$store.dispatch( 'setColor', { part, color } );
			},
			setSpokesColor( colorClass ) {
				this.$store.dispatch( 'setSpokesColor', colorClass );
			},
			setSpokesVisible( e ) {
				this.$store.dispatch( 'setSpokesVisible', e.target.checked );
			},
			requestBrands() {
				this.$store.dispatch( 'requestBrands' );
			},
			setCarBrand( brand ) {
				this.$store.dispatch( 'setCarBrand', brand );
			}
		},
		mounted() {
			this.requestBrands();
		}
	}
</script>