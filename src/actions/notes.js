import {db} from '../firebase/firebaseConfig'
import {types} from '../types/types'
import {loadNotes} from '../helpers/loadNotes'

export const startNewNote = () => {
	return async (dispatch, getState) => {
		const {uid} = getState().auth;
		
		const newNote = {
			title: '',
			body: '',
			date: new Date().getTime()
		}

		const docRef = await db.collection(`${uid}/journal/notes`).add(newNote)
		
		dispatch( activateNote(docRef.id, newNote) )
	}
}

export const activateNote = (id, note) => {
	return {
		type: types.noteActive,
		payload: {
			id,
			...note
		}
	}
}

export const startLoadNotes = (uid) => {

	return async (dispatch) => {
		const notes = await loadNotes(uid)
		dispatch(setNotes(notes))
	}
}

export const setNotes = (notes) => ({
	type: types.noteLoad,
	payload: notes
})