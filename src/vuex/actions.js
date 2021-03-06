import fetchBrands from '../API/brandsProxy';

// these are like actionCreators from Redux, but with Promises built in...
export const setColor = ({ commit }, { color, part } ) => {
	commit( 'SET_COLOR', { color, part });
}

export const setCarBrand = ({ commit }, brand )  => {
	commit( 'SET_BRAND', brand );
}

export const toggleSidebar = ({ commit }) => {
	commit( 'TOGGLE_SIDEBAR' );
}

export const setSpokesVisible = ({ commit }, val) => {
	commit( 'TOGGLE_SPOKES', val );
};

export const setSpokesColor = ({ commit }, colorClass ) => {
	commit( 'SET_SPOKES_COLOR', colorClass);
}

export const requestBrands = async ({ commit }) => {
	try {
		const brandsList = await fetchBrands();
		commit( 'API_BRANDS_SUCCESS', brandsList );
	} catch( error ) {
		commit( 'API_BRANDS_ERROR', error );
	}
}