import React from 'react'

const ReturnPage = ({path = '/', history}) => {
	
	const handleReturn = () => {
		history.push(path)
	}

	return(
		<button 
			onClick={handleReturn}
			className="ui__return-btn">
			<box-icon name='arrow-back'></box-icon>
		</button>
	)

}

export default ReturnPage