import { useState } from 'react'
import './qr.css'

const Qr = () => {
  return (
    <div className="block_qr">
      <div className="block_text">
        <div className="title">Есть идеи и предложения?</div>
        <div className="description">
          Возникли идеи и предложения по устранению неполадок, обновлению или
          добавлению нового функционала? Переходите на страницу разработчика
          Вконтакте по QR-коду и обращайтесь в личные сообщения.
        </div>
      </div>
      <div className="image"></div>
    </div>
  )
}

export default Qr
