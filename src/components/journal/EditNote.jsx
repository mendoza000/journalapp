import React, {useEffect, useRef} from 'react'
import {useDispatch} from 'react-redux'
import {useForm} from '../../hooks/useForm'
import {activateNote} from '../../actions/notes'

export const EditNote = ({note}) => {
	const dispatch = useDispatch()

	const [formValues, handleInputChange, reset] = useForm(note)
	const {title, body} = formValues

	const activeId = useRef( note?.id )

	useEffect(() => {
		if(note?.id !== activeId.current){
			reset(note)
			activeId.current = note?.id
		}
	}, [note, reset])

	useEffect(() => {
		dispatch( activateNote(formValues.id, formValues) )
	}, [dispatch, formValues])

	return(
		<div className="new__content">
			<input 
				type="text"
				name="title"
				placeholder="Un asombroso titulo"
				className="new__input-title"
				value={title}
				onChange={handleInputChange}
			/>
			<textarea
				placeholder="¿Qué paso hoy?"
				className="new__textarea"
				value={body}
				onChange={handleInputChange}
				name={"body"}
			></textarea>
		</div>
	)
}