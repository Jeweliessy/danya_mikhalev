import './Bron.css';
import React, { useState } from "react";
import { ref, set, push } from "firebase/database";
import { bookingRef } from "../../firebase";
const BookingForm = () => {
const [bookingData, setBookingData] = useState({
date: "",
time: "",
name: "",
museum: "",
});
const handleChange = (e) => {
const { name, value } = e.target;
setBookingData({ ...bookingData, [name]: value });
};
const handleSubmit = async (e) => {
e.preventDefault();
if (bookingData.date === 
  "" || bookingData.time === "" || bookingData.name === "" || bookingData.museum === "") {
  alert("Пожалуйста, заполните все поля.");
  return;
}
try {
  const newBookingRef = push(bookingRef);
  await set(newBookingRef, bookingData);
  alert("Бронирование успешно добавлено! Сделайте скриншот данной страницы и предъявите его на входе!");
} catch (error) {
  console.error("Ошибка добавления бронирования:", error);
  alert("Не удалось добавить бронирование. Пожалуйста, попробуйте еще раз.");
}
};
return (
<form onSubmit={handleSubmit} className='formBron'>
<div className="formtext">
<span className="one">мой</span>
<span className="two">округ</span>
</div>
  <div className="icon"></div>
  <label htmlFor="date">Дата бронирования:</label>
  <input type="date" id="date" name="date" value={bookingData.date} onChange={handleChange} />
  <label htmlFor="time">Время бронирования:</label>
  <input type="time" id="time" name="time" value={bookingData.time} onChange={handleChange} />
  <label htmlFor="name">Фамилия Имя Отчество</label>
  <input type="text" id="name" name="name" value={bookingData.name} onChange={handleChange} />
  <label htmlFor="museum">Название музея:</label>
  <select id="museum" name="museum" value={bookingData.museum} onChange={handleChange}>
    <option value="">Выберите музей</option>
    <option value="Историко-художественный музей ППМВК">Историко-художественный музей ППМВК</option>
    <option value="Музей космонавта Валерия Быковского">Музей космонавта Валерия Быковского</option>
    <option value="Музей истории русского платка и шали">Музей истории русского платка и шали</option>
    <option 
    value="Дом-музей Вячеслава Васильевича Тихонова">Дом-музей Вячеслава Васильевича Тихонова</option>
    <option 
    value="Музей Павлопосадской платочной мануфактуры">Музей Павлопосадской платочной мануфактуры</option>
    <option value="Музей пожарного дела">Музей пожарного дела</option>
  </select>
  <button type="submit" className='btn2'>
        Забронировать
  </button>
</form>
);
};

export default BookingForm;
