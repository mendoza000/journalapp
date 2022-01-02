import { types } from '../types/types.js'

export const setError = (err) => {
	return {
		type: types.uiSetError,
		payload: err
	}
}
export const removeError = () => {
	return {
		type: types.uiRemoveError
	}
}

export const initLoading = () => {
	return {
		type: types.uiInitLoading
	}
}
export const endLoading = () => {
	return {
		type: types.uiEndLoading
	}
}