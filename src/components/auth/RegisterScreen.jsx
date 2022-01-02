import React from 'react'
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import validator from 'validator'
import 'boxicons'
// Componentes
import ReturnPage from '../ui/ReturnPage'
// Hooks
import {useForm} from '../../hooks/useForm'
// Actions
import { setError, removeError } from '../../actions/ui'
import { registerWithMailPass } from '../../actions/auth.js'

const RegisterScreen = ({history}) => {
	const dispatch = useDispatch()
	const {msgError} = useSelector(state => state.ui)

	const [values, handleInputChange] = useForm({
		name: "omar",
		mail: "mendoza@gmail.com",
		pass: "12345",
		pass2: "12345"
	})
	const {name, mail, pass, pass2} = values

	const handleSubmit = (e) => {
		e.preventDefault()
		if (isFormValid()) {
			dispatch( registerWithMailPass(mail, pass, name) )
		}
	}

	const isFormValid = () => {
		// TODO: Realizar validacion del formulario con validator npm
		if (name.trim().length <= 1) {
			dispatch( setError("El nombre es muy corto") )
			return false
		}else if (!validator.isEmail(mail)){
			dispatch( setError("El correo es incorrecto") )
			return false
		}else if (pass.trim().length <= 5 || pass !== pass2) {
			dispatch( setError("La contraseña debe ser mayor a 6 digitos y la confirmación debe ser igual") )
			return false
		}
		dispatch( removeError() )
		return true
	}
	
	return(
		<div className="auth__form">
			<ReturnPage path="/auth" history={history}/>
			<h1 className="auth__form-title">
				¿Eres nuevo aqui?
				¡Registrate!
			</h1>

			<input 
				type="text"
				name="name"
				onChange={handleInputChange}
				value={name}
				placeholder="Tu nombre"
				className="auth__form-input"
				autoComplete="off"
			/>
			{/*<label className="auth__form-label">
				Ingrese su correo
			</label>*/}
			<input 
				type="text"
				name="mail"
				onChange={handleInputChange}
				value={mail}
				placeholder="Tu correo"
				className="auth__form-input"
				autoComplete="off"
			/>
			{/*<label className="auth__form-label">
				Ingrese su contraseña
			</label>*/}
			<input 
				type="password"
				name="pass"
				onChange={handleInputChange}
				value={pass}
				placeholder="Tu contraseña"
				className="auth__form-input"
				autoComplete="off"
			/>
			<input 
				type="password"
				name="pass2"
				onChange={handleInputChange}
				value={pass2}
				placeholder="Confirma tu contraseña"
				className="auth__form-input"
				autoComplete="off"
			/>

			<div className="auth__form-btn">
				<div className={`auth__alert ${
					(msgError !== null) && 'auth__alert-error'	
				}`}>
					<box-icon name='error'></box-icon>
					<span>{msgError}</span>
				</div>

				<button 
					type="submit"
					className="btn btn-secondary btn-block"
					onClick={handleSubmit}
				>
					Registrarse
					<box-icon name='log-in-circle'></box-icon>
				</button>
				<Link
					to="/auth/login"
					className="link"
				>
					Ya tengo una cuenta!
				</Link>
			</div>
		</div>
	)

}

export default RegisterScreen