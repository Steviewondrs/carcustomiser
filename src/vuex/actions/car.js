export const SET_COLOR = 'SET_COLOR'
export const setColor = ({ dispatch }, color, part ) => {
	dispatch( SET_COLOR, { color, part });
}