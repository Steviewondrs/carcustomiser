import fetchBrands from '../../API/brandsProxy';

// these are like actionCreators from Redux, but with Promises built in...

export const SET_COLOR = 'SET_COLOR'
export const setColor = ({ dispatch }, color, part ) => {
	dispatch( SET_COLOR, { color, part });
}

export const SET_PARTTYPE = 'SET_PARTTYPE';
export const setPartType = ({ dispatch }, type, part )  => {
	dispatch( SET_PARTTYPE, { type, part } );
}

export const API = createRequestTypes( 'BRANDS' );
export const requestBrands = async ({ commit }) => {
	try {
		const brandsList = await fetchBrands();
		console.log( brandsList );
		commit( API.SUCCESS, brandsList );
	} catch( error ) {
		commit( API.ERROR, error );
	}
}

export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';
export const toggleSidebar = ({ dispatch }) => {
	dispatch( TOGGLE_SIDEBAR );
}

// misc
function createRequestTypes( name ) {
	return {
		SUCCESS: `${ name }SUCCESS`,
		ERROR  : `${ name }ERROR`,
		REQUEST: `${ name }REQUEST`
	}
}