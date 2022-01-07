import toast from 'react-hot-toast';

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

export const startSave = (note) => {
	return async(dispatch, getState) => {
		const {uid} = getState().auth;

		const noteToFirestore = {...note}
		delete noteToFirestore.id

		try{
			await db.doc(`${uid}/journal/notes/${note.id}`).update(noteToFirestore)
			console.log("Nota guardada");
			toast.success('Nota guardada!')
			dispatch( startLoadNotes(uid) )

		}catch(e){
			console.error(e);
			console.warn("Error al guardar la nota!")
			toast.error("Error al guardar la nota.")
		}

	}
}

export const refreshNote = (id, note) => ({
	type: types.noteUpdate,
	payload: {
		id,
		note: {
			id,
			...note
		}
	}
})

export const startDeleting = (id) => {
	return async (dispatch, getState) => {
		const {uid} = getState().auth;

		try{
			await db.doc(`${uid}/journal/notes/${id}`).delete()
			console.log("Nota eliminada");
			toast.success('Nota borrada!')
			dispatch( deleteNote(id) )

		}catch(e){
			console.warn("Error al eliminar la nota");
			console.error(e);
			toast.error("Error al borrar la nota.")
		}

	}
}

export const deleteNote = (id) => ({
	type: types.noteDelete,
	payload: {
		id
	}
})

export const logoutCleaning = () => ({
	type: types.noteLogoutCleaning,
	payload: {}
})