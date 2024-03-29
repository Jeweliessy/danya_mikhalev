import './Header.css'

import ButtonHeader from './button_header/button_header'

const Header = () => {
  return (
    <div className="header">
      <div className="container1">
        <span className="one">мой</span>
        <span className="two">округ</span>
      </div>

      <div className="container2">
        <ButtonHeader path="/help">Помощь</ButtonHeader>
        <ButtonHeader path="/">Главное меню</ButtonHeader>
        <ButtonHeader path="/signup">Вход/Регистрация</ButtonHeader>
      </div>
    </div>
  )
}

export default Header
