import './li_museum.css'
import BtnMuseum from '../li_button/li_button'

const LiMuseum = (props) => {
  return (
    <div className="li_museum">
      <div className="text_li">
        <span className="li_text">{props.children}</span>
      </div>
      <BtnMuseum></BtnMuseum>
    </div>
  )
}

export default LiMuseum
