import { useNavigate, useLocation } from 'react-router-dom'
import './button_header.css'
import React, { useEffect, useState } from 'react'
import { auth } from '../../../firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'

const ButtonHeader = (props) => {
  const [authUser, setAuthUser] = useState(null)

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user)
      } else {
        setAuthUser(null)
      }
    })

    return () => {
      listen()
    }
  }, [])

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log('Успешный выход из аккаунта')
      })
      .catch((error) => console.log(error))
  }

  const navigate = useNavigate()

  function handleClick() {
    if (authUser && props.children === 'Вход/Регистрация') {
      userSignOut()
    } else if (authUser && props.children === 'Главное меню') {
      navigate('/main')
    } else {
      navigate(props.path)
    }
  }

  function logBtn() {
    if (props.children === 'Вход/Регистрация') {
      function test() {
        return authUser ? (
          <>
            <p>{`Выйти из аккаунта: ${authUser.email}`}</p>{' '}
          </>
        ) : (
          <p>Вход/Регистрация</p>
        )
      }
      return test()
    } else {
      return props.children
    }
  }

  return (
    <div>
      <button className="btn" onClick={handleClick}>
        {logBtn()}
      </button>
    </div>
  )
}

export default ButtonHeader
