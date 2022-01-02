import React from 'react' 
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import 'boxicons'
// Componentes
import ReturnPage from '../ui/ReturnPage'
// Custom Hooks
import {useForm} from '../../hooks/useForm'
// Actions
import {login, loginWithMailPass, loginWithGoogle} from '../../actions/auth.js'

const LoginScreen = ({history}) => {
	const dispatch = useDispatch()
	const { msgError, loading } = useSelector(state => state.ui)

	const [values, handleInputChange] = useForm({
		mail: "",
		pass: ""
	})
 
	const {mail, pass} = values

	const handleSubmit = (e) => {
		dispatch( loginWithMailPass( mail, pass ) )
	}

	const handleGoogleLogin = () => {
		console.log("click");
		dispatch( loginWithGoogle() )
	}
	
	return(
		<div 
			className="auth__form">
			<ReturnPage path={"/auth"} history={history}/>

			<h1 className="auth__form-title">
				¡Bienvenido de nuevo! <br/>
				Inicia Sesión
			</h1>	

			<input 
				type="text"
				name="mail"
				placeholder="Tu correo"
				className="auth__form-input"
				value={ mail }
				onChange={handleInputChange}
				autoComplete="off"
			/>

			<input 
				type="password"
				name="pass"
				placeholder="Tu contraseña"
				className="auth__form-input"
				value={pass}
				onChange={handleInputChange}
				autoComplete="off"
			/>
			<div className="auth__form-btn">

				<div className={`auth__alert ${
					(msgError !== null) && 'auth__alert-error'	
				}`}>
					<box-icon name='error'></box-icon>
					<span>{msgError}</span>
				</div>

				<div className="auth__social-login" onClick={handleGoogleLogin}>
					<box-icon type='logo' name='google'></box-icon>
					<span>
						Iniciar con Google
					</span>
				</div>	 

				<button 
					onClick={handleSubmit}
					className={`btn btn-secondary btn-block ${
						(loading) && "btn-secondary-disabled"
					}`}
					disabled={loading}
				>
					Ingresar
					<box-icon name='log-in-circle'></box-icon>
				</button>
				<Link
					to="/auth/register"
					className="link"
				>
					No tengo una cuenta
				</Link>
			</div>
		</div>
	)

}

export default LoginScreen