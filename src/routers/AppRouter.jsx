import React, {useEffect, useState} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {useDispatch} from 'react-redux'
import 'boxicons'
import AuthRouter from './AuthRouter'
import JournalRouter from './JournalRouter'
import {firebase} from '../firebase/firebaseConfig'
import {login} from '../actions/auth'
import {startLoadNotes} from '../actions/notes'

const AppRouter = () => {
	const dispatch = useDispatch()

	const [checking, setChecking] = useState(true)
	const [isLogged, setIsLogged] = useState(false)

	useEffect( () => {
		firebase.auth().onAuthStateChanged(async (user) => {
			if (user && user.uid) {
				dispatch( login(user.uid, user.displayName) )

				dispatch(startLoadNotes(user.uid))

				setIsLogged(true)
			}else{
				setIsLogged(false)
			}

			setChecking(false)
		})
	}, [dispatch])

	if (checking) {
		return(
		  <div className="ui__loading-box">
				<box-icon name='loader-alt'></box-icon>
				<p>Cargando...</p>
			</div>
		)
	}
	
	return(
		<>
			<Router>
				<Switch>						
					<Route 
						path="/auth" 
						component={ (props) => (
							<AuthRouter isLogged={isLogged} {...props}/>
						)}
					/>
					<Route 
						path="/" 
						component={ (props) => (
							<JournalRouter isLogged={isLogged} {...props}/>
						)}
					/>
				</Switch>
			</Router>
		</>
	)

}

export default AppRouter