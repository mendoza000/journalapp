import React from 'react'
import {useSelector} from 'react-redux'
import 'boxicons'
import 'animate.css'

import TopBar from './TopBar'
import {NoNoteSelect} from './NoNoteSelect'
import {EditNote} from './EditNote'
import NavBarInJournal from '../ui/NavBarInJournal'

const JournalScreen = ({history}) => {

	const {notes} = useSelector( state => state )
	const {active: note} = notes

	return(
		<div className="home__container animate__animated animate__fadeIn animate__faster">

			<NavBarInJournal />

			<div className="home__journal-container">
				<TopBar />

			{
				(note === null)
				? ( <NoNoteSelect /> )
				: ( <EditNote note={note}/> )
			}

			</div>
		</div>
	)

}

export default JournalScreen