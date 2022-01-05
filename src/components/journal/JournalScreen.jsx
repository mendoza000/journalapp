import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import TopBar from './TopBar'
import 'boxicons'

const JournalScreen = ({history}) => {

	const {notes} = useSelector( state => state )
	
	return(
		<div className="home__container">
			<TopBar />

			{
				(notes.active === null)
				? (
					<div className="new__no-note">
						<box-icon 
							name='note'>
						</box-icon>

						<h3>
							¡No hay ninguna nota seleccionada!
						</h3>
						<p>Puedes crear una nota nueva o editar alguna ya existente desde el menu</p>
					</div>
				)
				: (
				  <div className="new__content">
						<input 
							type="text"
							placeholder="Un asombroso titulo"
							className="new__input-title"
						/>
						<textarea
							placeholder="¿Qué paso hoy?"
							className="new__textarea"
						></textarea>
					</div>
				)
			}

		</div>
	)

}

export default JournalScreen