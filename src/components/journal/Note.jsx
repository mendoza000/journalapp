import React from 'react'

const Note = ({img, title, text}) => {
	
	return(
		<div className="journal__container-note">
			<p>{title}</p>
			<p>{text}</p>
		</div>
	)

}

export default Note