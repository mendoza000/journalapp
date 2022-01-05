import React from 'react'
import {useSelector} from 'react-redux'
import 'boxicons'
import TopBar from './TopBar'
import {NoNoteSelect} from './NoNoteSelect'
import {EditNote} from './EditNote'

const JournalScreen = ({history}) => {

	const {notes} = useSelector( state => state )
	const {active: note} = notes

	return(
		<div className="home__container">
			<TopBar />

			{
				(note === null)
				? ( <NoNoteSelect /> )
				: ( <EditNote note={note}/> )
			}

		</div>
	)

}

export default JournalScreen