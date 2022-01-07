import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {startSave, startDeleting} from '../../actions/notes'

const TopBar = () => {
	const dispatch = useDispatch()
	const {active: note} = useSelector(state => state.notes)

	const data = new Date
	const day = data.getDay()

	const dayReal = (day === 1)
		? "Lunes"
		: (day === 2)
		? "Martes"
		: (day === 3)
		? "Miercoles"
		: (day === 4)
		? "Jueves"
		: (day === 5)
		? "Viernes"
		: (day === 6)
		? "Sabado"
		: (day === 0)
		? "Domingo"
		: "NotDay"
	const dayNum = data.getDate()

	const handleOpen = () => {
		const nav = document.querySelector('.ui__nav');
		nav.style.left = '0'
	}

	const handleSave = () => {
		dispatch( startSave(note) )
	}
	const handleDelete = () => {
		dispatch( startDeleting(note.id) )
	}
	
	return(
		<div className="new__topbar">
			<button
				className="home__nav-button"
				onClick={handleOpen}>
				<box-icon 
					name='menu'>
				</box-icon>
			</button>

			<span>
				{dayReal} {dayNum}
			</span>

			<div className={(
				note === null 
				? "new__disabled"
				: ""
				)}>
				<box-icon 
					name='save'
					onClick={handleSave}
				></box-icon>
				<box-icon 
					name='trash'
					onClick={handleDelete}
				></box-icon>
			</div>
		</div>
	)

}

export default TopBar 