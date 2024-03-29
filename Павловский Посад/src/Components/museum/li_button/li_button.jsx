import './li_button.css'
import { useNavigate, useLocation } from 'react-router-dom'

const BtnMuseum = (props) => {
  const navigate = useNavigate()
  function clickBtnMuseum() {
    navigate('/bron')
  }

  return (
    <button className="btn_Museum" onClick={clickBtnMuseum}>
      Онлайн-бронь
    </button>
  )
}

export default BtnMuseum
