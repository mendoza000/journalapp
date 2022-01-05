import React from 'react'
import {useDispatch} from 'react-redux'
import {activateNote} from '../../actions/notes'
import {handleClose} from '../ui/NavBar'

const Note = (note) => {
	const dispatch = useDispatch()

	const handleActivateClick = () => {
		dispatch( activateNote(note.id, note) )
		handleClose()
	}
	
	return(
		<div 
			className="journal__container-note"
			onClick={handleActivateClick}
		>
			<p>{note.title}</p>
			<p>{note.body}</p>
		</div>
	)

}

export default Note