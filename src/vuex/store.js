export const state = {

	/*** CAR ****/
	// --- colors ----
	carColor: { hex: '#ffc200' },
	interiorColor: { hex: '#000000' },
	wheelColor: { hex: '#FFFFFF' },
	fenderColor: { hex: '#000000' },
	detailColor: { hex: '#bd9d07' },

	// --- part types ---
	spokesVisible: true,
	spokesColorClass: 'blue',

	// --- brands ---
	brands: [],
	selectedBrand: null,

	/*** UI ***/
    sideBarOpen: false

}

export const mutations = {
	/*** CAR ***/
	SET_COLOR( state, { part, color } ) {
		state[ part ] = color;
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