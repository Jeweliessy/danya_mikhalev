import '../Reg/reg.css'
import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { auth } from '../../firebase'
import { Link } from 'react-router-dom'
import AuthDetails from './AuthDetails'

const Auth1 = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const signIn = (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <form onSubmit={signIn} className="mainContainer">
      <div className="formtext">
        <span className="one">мой</span>
        <span className="two">округ</span>
      </div>

      <div className="icon"></div>

      <div className="inputContainer">
        <div className="mrg1">
          <div className="usericon"></div>
          <input
            type="email"
            placeholder="Почта"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mrg1">
          <div className="lockicon"></div>
          <input
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>

      <button type="submit" className="btn2">
        Войти в аккаунт
      </button>
      <Link to="/signup" className="link_reg ">
        Регистрация
      </Link>
      <AuthDetails/>
    </form>
  )
}

export default Auth1
