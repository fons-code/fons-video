import React from 'react'
import '../assets/styles/register.scss'
import {Link} from 'react-router-dom'

const Register = () => (
    <section className="register">
    <section className="register__container">
      <h2>Regístrate</h2>
      <form className="register__container--form">
        <input className="input" type="text" placeholder="Nombre"/>
        <input className="input" type="text" placeholder="Correo"/>
        <input className="input" type="password" placeholder="Contraseña"/>
        <button className="button"><Link to='/register'>Registrarme</Link></button>
      </form>
      <Link to='/login'>Iniciar sesion</Link>
    </section>
  </section>
)

export default Register;