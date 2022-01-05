import React from 'react'
import {NavLink} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import 'boxicons'
import Note from '../journal/Note.jsx'
import {StartLogout} from '../../actions/auth'
import {startNewNote} from '../../actions/notes'

export const handleClose = () => {
	const nav = document.querySelector('.ui__nav');
	nav.style.left = '-150vw'
}
	
const NavBar = () => {

	const {auth, notes} = useSelector( state => state)
	const dispatch = useDispatch()

	const handleLogout = () => {
		dispatch(StartLogout())
	}
	const handleCreateNew = () => {
		dispatch(startNewNote())
		handleClose()
	}

	return(
		<nav className="ui__nav">
			<div className="ui__topbar">

				<div>
					<button onClick={handleLogout}>
						<box-icon name='log-out-circle'></box-icon>
					</button>
					<span className="ui__displayName">
						{auth?.name}
					</span>	
				</div>

				<button onClick={handleClose}>
					<box-icon name='x'></box-icon>
				</button>
			</div>

			<button 
				className="ui__new-note-button"
				onClick={handleCreateNew}>
				<box-icon name='message-alt-add'></box-icon>
				Nueva nota
			</button>

			<div className="ui__nav-line"></div>

			<div className="ui__notes-list">
				{
					notes.notes.map(e => (
						<Note 
							key={e.id}
							{...e}
						/>
					))
				}
			</div>

		</nav>


	)

}

export default NavBar