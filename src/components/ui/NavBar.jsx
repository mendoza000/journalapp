import React from 'react'
import {NavLink} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import 'boxicons'
import Note from '../journal/Note.jsx'

const NavBar = () => {

	const {auth} = useSelector( state => state)
	const dispatch = useDispatch()

	const handleLogout = () => {
		dispatch(StartLogout())
	}
	const handleClose = () => {
		const nav = document.querySelector('.ui__nav');
		nav.style.left = '-100vw'
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

			<button className="ui__new-note-button">
				<box-icon name='message-alt-add'></box-icon>
				Nueva nota
			</button>

			<div className="ui__nav-line"></div>

			<div className="ui__notes-list">
				<Note 
					// key={e}
					img={"https://upload.wikimedia.org/wikipedia/commons/7/78/Appleterminal2.png"}
					title="Ventajas de usar la consola"
					text="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
				/>
			</div>

		</nav>


	)

}

export default NavBar