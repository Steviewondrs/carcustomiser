import fetchBrands from '../API/brandsProxy';

// these are like actionCreators from Redux, but with Promises built in...
export const setColor = ({ commit }, color, part ) => {
	commit( 'SET_COLOR', { color, part });
}

export const setPartType = ({ commit }, type, part )  => {
	commit( 'SET_PARTTYPE', { type, part } );
}

export const toggleSidebar = ({ commit }) => {
	commit( 'TOGGLE_SIDEBAR' );
}

const API = createRequestTypes( 'BRANDS' );
export const requestBrands = async ({ commit }) => {
	try {
		const brandsList = await fetchBrands();
		console.log( brandsList );
		commit( API.SUCCESS, brandsList );
	} catch( error ) {
		commit( API.ERROR, error );
	}
}


function createRequestTypes( name ) {
	return {
		SUCCESS: `${ name }SUCCESS`,
		ERROR  : `${ name }ERROR`,
		REQUEST: `${ name }REQUEST`
	}
}