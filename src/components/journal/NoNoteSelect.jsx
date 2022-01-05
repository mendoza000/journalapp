import React from 'react'

export const NoNoteSelect = () => {
	return(
		<div className="new__no-note">
			<box-icon 
				name='note'>
			</box-icon>

			<h3>
				¡No hay ninguna nota seleccionada!
			</h3>
			<p>
				Puedes crear una nota nueva o editar alguna ya existente desde el menu
			</p>
		</div>
	)
}