import './reg.css'
import { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase'
import { Link } from 'react-router-dom'
import AuthDetails from '../Auth1/AuthDetails'

const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const signUp = (e) => {
    e.preventDefault()
    if (password.length < 6) {
      alert('Пароль должен быть не менее 6 символов.')
      return
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <form onSubmit={signUp} className="mainContainer">
      
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
        Зарегистрироваться
      </button>
      <Link to="/auth" class="link_reg">Вход в аккаунт</Link>
      <AuthDetails/>
    </form>
  )
}

export default SignUp
