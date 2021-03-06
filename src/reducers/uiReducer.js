import {types} from '../types/types.js'

const initialState = {
	loading: false,
	msgError: null
}

export const uiReducer = (state = initialState, action) => {

	switch(action.type){

		case types.uiSetError:
			return {
				...state,
				msgError: action.payload
			}
		case types.uiRemoveError:
			return {
				...state,
				msgError: null
			}
		case types.uiInitLoading:
			return {
				...state,
				loading: true
			}
		case types.uiEndLoading:
			return {
				...state,
				loading: false
			}
		default:
			return state

	}

} 