const state = {

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

const mutations = {
	/*** CAR ***/
	SET_COLOR( state, { part, color } ) {
		state[ `${ part }Color`] = color;
	},

	SET_TYPE( state, { part, type } ) {
		state[ `${ part }Type` ] = type;
	},

	SAVE_BRANDS( state, list ) {
		state.brands = list;
		state.selectedBrand = list[ 0 ];
	},

	FETCH_ERROR( state, error ) {
		state.brands = [];
		state.selectedBrand = null;
	},

	/*** UI  ****/
    TOGGLE_SIDEBAR( state ) {
		state.sideBarOpen = !state.sideBarOpen
	}
}

export default { state, mutations };