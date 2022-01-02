import React, {useEffect} from "react";
import {
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
// Screens
import JournalScreen from '../components/journal/JournalScreen'
import ListScreen from '../components/journal/ListScreen'
import NewNoteScreen from '../components/journal/NewNoteScreen'
import NavBar from '../components/ui/NavBar'

const JournalRouter = ({history, isLogged}) => {
	useEffect(() => {
		if (!isLogged) {
			history.replace('/auth')
		}
	}, [])

	return (
		<>
			<NavBar />
			<Switch>
				<Route 
					exact 
					path="/" 
					component={JournalScreen} 
				/>
				{/*<Route 
					exact 
					path="/list" 
					component={ListScreen} 
				/>
				<Route 
					exact 
					path="/new" 
					component={NewNoteScreen} 
				/>*/}

				<Redirect to="/" />
			</Switch>
		</>
	);
};

export default JournalRouter;
