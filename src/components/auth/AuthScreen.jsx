import React from 'react'
import 'boxicons'
// Imagenes
import authImg from '../../../assets/auth.svg'

const AuthScreen = ({history}) => {
	
	return(
		<div className="auth__container">
			<img src={authImg} alt="auth_img" className="auth__img"/>

			<h1 className="auth__container-title">
				Journal App
			</h1>

			<p className="auth__container-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

			<div className="auth__container-btns">
				<button 
					className="auth__container-btn"
					onClick={e => {
						history.push('/auth/register')
					}}>
					Registarme
					<box-icon name='log-in-circle'></box-icon>
				</button>

				<button 
					className="auth__container-btn"
					onClick={e => {
						history.push('/auth/login')
					}}>
					Iniciar Sesión
					<box-icon name='log-in-circle'></box-icon>
				</button>				
			</div>
		</div>
	)

}

export default AuthScreen