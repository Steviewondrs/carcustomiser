export const state = {

	/*** CAR ****/
	// --- colors ----
	chassisColor: '#dddddd',
	interiorColor: '',
	// wheel
	rimColor: '',
	fenderColor: '',
	detailColor: '',
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