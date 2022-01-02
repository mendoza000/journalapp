import { firebase, googleAuthProvider } from '../firebase/firebaseConfig'
import { types } from '../types/types.js'
import {
	setError,
	removeError,
	initLoading,
	endLoading
} from './ui.js'

export const loginWithMailPass = (mail, pass) => {
	return async (dispatch) => {
		dispatch( initLoading() )

		try {
			const {
				user
			} = await firebase.auth().signInWithEmailAndPassword(mail, pass)
			const {
				uid,
				displayName
			} = user

			dispatch(login(uid, displayName))
			dispatch(removeError())
			dispatch( endLoading() )

		} catch (e) {

			console.error(e);
			const { message } = e

			if (message.includes("network")) {
				dispatch(setError("Error de red, intente de nuevo"))
			} else if (message.includes("password")) {
				dispatch(setError("Contraseña incorrecta"))
			} else if (message.includes("There is no user record corresponding")) {
				dispatch(setError("Correo no registrado"))
			} else {
				dispatch(setError("Error desconocido, intente de nuevo"))
			}

			dispatch( endLoading() )

		}

	}
}
export const loginWithGoogle = () => {
	return async (dispatch) => {
		const userCred = await firebase.auth().signInWithPopup(googleAuthProvider)

		const {
			uid,
			displayName
		} = userCred.user;
		dispatch(login(uid, displayName))
	}
}
export const registerWithMailPass = (mail, pass, name) => {
	return async (dispatch) => {

		const {
			user
		} = await firebase.auth().createUserWithEmailAndPassword(mail, pass)
		await user.updateProfile({
			displayName: name
		})
		const {
			uid,
			displayName
		} = user

		dispatch(login(uid, displayName))

	}
}


export const login = (uid, displayName) => {

	return {
		type: types.login,
		payload: {
			uid,
			displayName
		}
	}

}

export const StartLogout = () => {
	return async (dispatch) => {
		await firebase.auth().signOut();

		dispatch( logout() )
	}
}

export const logout = () => {
	return {
		type: types.logout
	}
}