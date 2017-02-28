export const state = {

	/*** CAR ****/
	// --- colors ----
	carColor: { hex: '#9CD279' },
	// interior
	interiorColor: 'deeppink',
	// wheel
	wheelColor: 'pink',
	axleColor: 'deeppink',
	// fender
	fenderColor: 'deeppink',
	// detailing
	detailColor: 'deeppink',

	// --- part types ---
	wheelType: 'default', 
	lampType: 'default', 
	// --- brands ---
	brands: [],
	selectedBrand: null,

	/*** UI ***/
    sideBarOpen: false

}

export const mutations = {
	/*** CAR ***/
	SET_COLOR( state, { part, color } ) {
		state[ `${ part }Color`] = color;
	},

	SET_TYPE( state, { part, type } ) {
		state[ `${ part }Type` ] = type;
	},

	API_BRANDS_SUCCESS( state, list ) {
		state.brands = list;
		state.selectedBrand = list[ 0 ];
	},

	API_BRANDS_ERROR( state, error ) {
		state.brands = [];
		state.selectedBrand = null;
	},

	/*** UI  ****/
    TOGGLE_SIDEBAR( state ) {
		state.sideBarOpen = !state.sideBarOpen
	}
}