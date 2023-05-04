import trottle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const formRef = document.querySelector('.feedback-form');
const userData = {};

formRef.addEventListener('input', trottle(userTypingHandler, 500));
formRef.addEventListener('submit', submitBtnHandler);

if (JSON.parse(localStorage.getItem(STORAGE_KEY))) {
  const { email, message } = JSON.parse(localStorage.getItem(STORAGE_KEY));
  formRef.email.value = email;
  formRef.message.value = message;
}

function userTypingHandler(evt) {
  userData[evt.target.name] = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(userData));
}

function submitBtnHandler(evt) {
  evt.preventDefault();
  
  if(!(formRef.email.value && formRef.message.value)){
    console.log("Заповніть всі поля");
    return;
  }

  console.log(userData);
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  return;
}
