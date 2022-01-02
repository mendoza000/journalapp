import React from 'react'
import Note from './Note'
import {useSelector} from 'react-redux'

const ListScreen = () => {

	const {notes} = useSelector(state => (state))
	
	return(
		<div className="journal__container">
			<h1 className="journal__title">
				Lista de notas
			</h1>

			<div className="journal_note-list">
				{
					notes.notes.map(e=> {
							return(
								<Note 
									key={e}
									img={"https://upload.wikimedia.org/wikipedia/commons/7/78/Appleterminal2.png"}
									title="Ventajas de usar la consola"
									text="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
								/>
							)	
					})
				}
			</div>


		</div>
	)

}

export default ListScreen