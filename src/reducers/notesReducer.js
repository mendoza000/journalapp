import {types} from '../types/types.js'

const initialState = {
	notes: [],
	active: null,
	// active: {
	//   id: "o123om123mlsad",
	//	 title: "",
	//   body: ""
	//	 date: ""
	//}
}

export const notesReducer = (state = initialState, action) => {

	switch(action.type){
		case types.noteActive:
			return{
				...state,
				active: {
					...action.payload
				}
			}

		case types.noteLoad:
			return{
				...state,
				notes: action.payload
			}
		
		default:
			return state
	}

}