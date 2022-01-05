export const types = {
	// Login
	login: '[Auth] login',
	logout: '[Auth] logout',

	// Errors
	uiSetError: '[UI] Set Error',
	uiRemoveError: '[UI] Remove Error',

	// Loading
	uiInitLoading: '[UI] Init Loading',
	uiEndLoading: '[UI] End Loading',

	// Notes
	noteCreate: '[Note] Create new note',
	noteUpdate: '[Note] Update note',
	noteActive: '[Note] Set Active note',
	noteLoad:   '[Note] Load notes',
	noteDelete: '[Note] Delete note',
	noteLogoutCleaning: '[Note] Set Cleaning In Logout'
}