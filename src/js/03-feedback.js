// 1. Відстежуй на формі подію input, і щоразу записуй у локальне сховище об'єкт з полями email і message, у яких зберігай поточні значення полів форми. Нехай ключем для сховища буде рядок "feedback-form-state". +

// 2. Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані, заповнюй ними поля форми. В іншому випадку поля повинні бути порожніми.

// 3. Під час сабміту форми очищуй сховище і поля форми, а також виводь у консоль об'єкт з полями email, message та їхніми поточними значеннями. +

// 4. Зроби так, щоб сховище оновлювалось не частіше, ніж раз на 500 мілісекунд. Для цього додай до проекту і використовуй бібліотеку lodash.throttle. +

import throttle from 'lodash.throttle';

const formEl = document.querySelector('.js-feedback-form');
const form = JSON.parse(localStorage.getItem('feedback-form-state')) ?? {
  email: '',
  message: '',
};

const input = document.querySelector('.js-input');
const textArea = document.querySelector('.js-text-area');

input.value = form.email;
textArea.value = form.message;

// formEl.input = "qwer@gmail.com";
// // if(formEl.input.name)
// console.log(formEl.input);



formEl.addEventListener('input', throttle(onInput, 500));
formEl.addEventListener('submit', onSubmit);

function onInput(evt) {
  if (evt.target.name === 'email') {
    form.email = evt.target.value;
  }
  if (evt.target.name === 'message') {
    form.message = evt.target.value;
  }
  localStorage.setItem('feedback-form-state', JSON.stringify(form));
}

function onSubmit(evt) {
  evt.preventDefault();

  if (!form.email || !form.message) {
    alert('Всі поля форми повинні бути заповнені!');
  } else {
    console.log(form);
    formEl.reset();
    localStorage.clear();
  }
}
