const state = {
	sideBarOpen: false
}

const mutations = {
	TOGGLE_SIDEBAR( state ) {
		state.sideBarOpen = !state.sideBarOpen
	}
}

export default { state, mutations };