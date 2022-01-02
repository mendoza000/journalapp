import React, {useEffect} from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import AuthScreen from '../components/auth/AuthScreen'
import LoginScreen from "../components/auth/LoginScreen";
import RegisterScreen from "../components/auth/RegisterScreen";

const AuthRouter = ({history, isLogged}) => {

	useEffect( () => {
		if (isLogged) {
			history.replace('/')
		}
	}, [])

	return (
		<div className="auth__main">
			<div className="auth__box-container">
				<Switch>
					<Route exact path="/auth" component={AuthScreen} />
					<Route exact path="/auth/login" component={LoginScreen} />
					<Route exact path="/auth/register" component={RegisterScreen} />
					<Redirect to="/auth/login" />
				</Switch>
			</div>
		</div>
	);
};

export default AuthRouter;
