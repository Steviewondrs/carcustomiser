import Vue from 'vue';
import Vuex from 'vuex';

import ui from './store/ui';
import car from './store/car';

Vue.use( Vuex );

export default new Vuex.Store({
	modules: {
		ui,
		car
	}
	// , strict: true
});