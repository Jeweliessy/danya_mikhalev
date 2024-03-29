import './what.css'

const What = () => {
  return (
    <div className="block_what">
      <div className="block_flex_what_1">
        <span className="title_what">Как забронировать билет онлайн?</span>

        <ul>
          <li className="li_what">
            <div className="title_li_what">
              1. Зарегистрируйтесь на платформе “Мой округ”.
            </div>
            На панели сверху доступна кнопка “Регистрация”. Нажав на неё,
            заполните все поля правильно, затем нажмите “Создать аккаунт”.
          </li>
          <li className="li_what">
            <div className="title_li_what">2. Войдите в аккаунт.</div> На
            панелисверху доступна кнопка “Вход”. Нажав на неё, заполните все
            поля правильно, затем нажмите “Войти”.
          </li>
          <li className="li_what">
            <div className="title_li_what">3. Выберите музей.</div>
            После входа произойдёт переход на главную страницу, где будет
            доступно множество музеев городского округа Павловский Посад с
            краткой текстовой информацией и картинками, а также онлайн записью.
            Выберите нужным вам музей.
          </li>
          <li className="li_what">
            <div className="title_li_what">4. Запишитесь онлайн.</div>
            Выбрав нужный вам музей, спуститесь ниже и нажмите на кнопку
            “Онлайн-запись”, затем выберите доступную дату и время. Готово!
          </li>
        </ul>
      </div>

      <div className="img_what"></div>
    </div>
  )
}

export default What
