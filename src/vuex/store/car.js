const state = {
	// CAR
	chassisColor: '#dddddd',
	wheelColor: 'black',

	// TODO: define waaaay more options
}

const mutations = {
	// CAR
	SET_COLOR( state, { part, color } ) {
		state[ `${ part }Color`] = color;
	},

	// TODO: define waaaay more mutations to match the waaaay more options ;-)

	SAVE_CAR( state ) {

	}
}

export default { state, mutations };