import {
	createStore,
	combineReducers,
	applyMiddleware,
	compose
} from 'redux'
import thunk from 'redux-thunk'
import { authReducer } from '../reducers/authReducer.js'
import { uiReducer } from '../reducers/uiReducer.js'
import { notesReducer } from '../reducers/notesReducer'

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
	auth: authReducer,
	ui: uiReducer,
	notes: notesReducer
})

export const store = createStore(
	reducers,
	// Habilitamos la carga en la devtool de chrome!
	composeEnhancers(
		applyMiddleware(thunk)
	)
)