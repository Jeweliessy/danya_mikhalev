import './MainPage.css'
import { useNavigate, useLocation } from 'react-router-dom'

const MainPage = () => {
  const navigate = useNavigate()

  function mainClick(click) {
    navigate(click)
  }

  return (
    <div className="MainPageContainer">
      <div className="SubMainPageContainer">
        <div className="insruction">
          <div className="pokypkaBiletovText">
            <span>Онлайн покупка билетов в</span>
            <span>музеи</span>
          </div>

          <div className="svgContainer">
            <div className="flex">
              <div className="onesvgbackground">
                <div className="onesvg"></div>
              </div>
              <div className="font1">
                Спуститесь ниже и<div>выбирите музей</div>
              </div>
              <div></div>
            </div>
            <div className="flex">
              <div className="twosvgbackground">
                <div className="twosvg"></div>
              </div>
              <div className="font1">
                Перейдите на "Онлайн
                <div>запись" и выберите дату</div>
                <div>и время</div>
              </div>
            </div>
            <div className="flex">
              <div className="tresvgbackground">
                <div className="tresvg"></div>
              </div>
              <div className="font1">
                Спуститесь ниже и<div>выбирите музей</div>
              </div>
            </div>
          </div>
          <div className="flex2">
            <div className="back1">
              <div className="step1"></div>
            </div>
            <div className="back1">
              <div className="step2"></div>
            </div>
            <div className="back1">
              <div className="step3"></div>
            </div>
          </div>
        </div>

        <div className="biletcontainer">
          <div
            className="bilet"
            onClick={() => {
              mainClick('/museum')
            }}
          >
            <div className="textBil">Билеты</div>
            <div className="TextBron">Забронировать</div>
          </div>
          <div className="bilet2">
            <div className="textBil2">Экскурсии</div>
            <div className="TextBron2">Скоро в продаже</div>
          </div>
          <div className="bilet3">
            <div
              className="textBil3"
              onClick={() => {
                mainClick('/help')
              }}
            >
              Помощь
            </div>
            <div className="TextBron3">Перейти</div>
          </div>
        </div>
      </div>

      <div className='museumContainer'>
        <div className='popularMuseum'>
          Популярные музеи
        </div>
        <div className='displayFlex'>
          <div className='flexCenterCenter'>
            <div className='svgMuseum'></div>
            <div className='museumText'> Историко-<div>художественный</div> музей ППМВК</div>
          </div>

          <div className='flexCenterCenter'>
            <div className='svgMuseum'></div>
            <div className='museumText'>Музей космонавта<div>Валерия</div> Быковского</div>
          </div>

          <div className='flexCenterCenter'>
            <div className='svgMuseum'></div>
            <div className='museumText'> Музей истории<div>русского платка и </div> шали</div>
          </div>

          <div className='flexCenterCenter'>
            <div className='svgMuseum'></div>
            <div className='museumText'> Дом-музей Вячеслава<div>Васильевича</div>Тихонова</div>
          </div>

          <div className='flexCenterCenter'>
            <div className='svgMuseum'></div>
            <div className='museumText'> Музей<div>Павлопосадской</div> платочной мануфактуры</div>
          </div>

          <div className='flexCenterCenter'>
            <div className='svgMuseum'></div>
            <div className='museumText'> Музей<div>пожарного</div> дела</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainPage
