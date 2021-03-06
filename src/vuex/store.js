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
	spokesColorClass: 'red',

	// --- brands ---
	brands: [],
	selectedBrand: undefined,

	/*** UI ***/
    sideBarOpen: false

}

export const mutations = {
	/*** CAR ***/
	SET_COLOR( state, { part, color } ) {
		state[ part ] = color;
	},

	TOGGLE_SPOKES( state, val ) {
		state.spokesVisible = val;
	},

	SET_SPOKES_COLOR( state, colorClass ) {
		state.spokesColorClass = colorClass;
	},

	API_BRANDS_SUCCESS( state, list ) {
		state.brands = list;
		state.selectedBrand = list[ 0 ];
	},

	SET_BRAND( state, brand ) {
		state.selectedBrand = brand;
	},

	API_BRANDS_ERROR( state, error ) {
		state.brands = [];
		state.selectedBrand = undefined;
	},

	/*** UI  ****/
    TOGGLE_SIDEBAR( state ) {
		state.sideBarOpen = !state.sideBarOpen
	}
}