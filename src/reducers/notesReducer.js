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

		case types.noteUpdate:
			return{
				...state,
				notes: state.notes.map(
					note => note.id === action.payload.id
					? action.payload.note
					: note
				)
			}
		case types.noteDelete:
			const newListNotes = []
			state.notes.forEach(note => {
				if (note.id !== action.payload.id) {
					newListNotes.push(note)
				}
			})

			return{
				...state,
				notes: [...newListNotes],
				active: null
			}
		
		default:
			return state
	}

}