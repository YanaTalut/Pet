import React, { useState } from 'react';
import classes from "./Services.module.css";

function Services() {
  const [petFormSubmitted, setPetFormSubmitted] = useState(false);
  const [contactFormSubmitted, setContactFormSubmitted] = useState(false);

  const handleSubmitPetForm = (event) => {
    event.preventDefault();
    const files = event.target.images.files;

    if (files.length !== 4) {
      alert("Пожалуйста, загрузите ровно 4 фотографии.");
      return;
    }

    const firstName = event.target.FirstName.value;
    const lastName = event.target.LastName.value;
    const petName = event.target.petName.value;

    if (!firstName || !lastName || !petName) {
      alert("Пожалуйста, заполните все поля!");
      return;
    }

    alert(`${firstName} ${lastName}, у вас прекрасный питомец ${petName}, ждите его фотографии на нашем сайте`);
    setPetFormSubmitted(true);
    event.target.reset();
  };

  const handleSubmitContactForm = (event) => {
    event.preventDefault();
    const firstName = event.target.FirstName.value;
    const lastName = event.target.LastName.value;
    const email = event.target.mail.value;
    const phone = event.target.tel.value;

    if (!/^\+?\d{10,15}$/.test(phone)) {
      alert("Пожалуйста, введите корректный номер телефона.");
      return;
    }

    if (!firstName || !lastName) {
      alert("Пожалуйста, заполните имя и фамилию.");
      return;
    }

    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      alert("Пожалуйста, введите корректный адрес электронной почты.");
      return;
    }

    alert(`${firstName} ${lastName}, спасибо за отправленную форму, ответ пришлем вам на почту: ${email}`);
    setContactFormSubmitted(true);
    event.target.reset();
  };

  return (
    <div>
      <div className={classes.container}>
        <h2 className={classes.title}>Поделись своим питомцем!</h2>
        <p>Заполни и отправь анкету про любимца.</p>
        <form onSubmit={handleSubmitPetForm}>

          <label htmlFor="FirstName" className={classes.label}>Имя хозяина:</label>
          <input type="text" id="FirstName" className={classes.input} placeholder="Имя хозяина" required />

          <label htmlFor="LastName" className={classes.label}>Фамилия хозяина:</label>
          <input type="text" id="LastName" className={classes.input} placeholder="Фамилия хозяина" required />

          <label htmlFor="petName" className={classes.label}>Имя питомца:</label>
          <input type="text" id="petName" className={classes.input} placeholder="Имя питомца" required />

          <label htmlFor="breed" className={classes.label}>Порода:</label>
          <input type="text" id="breed" className={classes.input} placeholder="Порода" required />

          <label htmlFor="age" className={classes.label}>Возраст питомца:</label>
          <input type="number" id="age" className={classes.input} placeholder="Возраст питомца" min="0" required />

          <label htmlFor="description" className={classes.label}>О питомце:</label>
          <textarea id="description" className={classes.textarea} placeholder="Расскажите о своем питомце" required></textarea>

          <label htmlFor="images" className={classes.label}>Загрузите 4 фотографии питомца:</label>
          <input type="file" id="images" className={classes.input} multiple accept="image/*" required />

          <button type="submit" className={classes.button}>Отправить</button>
        </form>
      </div>

      <div className={classes.container}>
        <h2 className={classes.title}>У тебя есть какие-то вопросы или предложения? Действуй!</h2>
        <form onSubmit={handleSubmitContactForm}>
          <label htmlFor="FirstNameContact" className={classes.label}>Имя:</label>
          <input type="text" id="FirstNameContact" className={classes.input} placeholder="Иван" required />

          <label htmlFor="LastNameContact" className={classes.label}>Фамилия:</label>
          <input type="text" id="LastNameContact" className={classes.input} placeholder="Иванов" required />

          <label htmlFor="mail" className={classes.label}>Email:</label>
          <input type="email" id="mail" className={classes.input} placeholder="example@mail.com" required />

          <label htmlFor="tel" className={classes.label}>Телефон:</label>
          <input type="tel" id="tel" className={classes.input} placeholder="+712345678901" maxLength="12" required pattern="^\+?\d{10,15}$" />

          <textarea id="question" className={classes.textarea} placeholder="Поделись своими мыслями" required></textarea>
          <button type="submit" className={classes.button}>Отправить</button>
        </form>
      </div>
    </div>
  );
}

export default Services;
