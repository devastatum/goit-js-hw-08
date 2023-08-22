import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('.feedback-form input');
const textInput = document.querySelector('.feedback-form textarea');

const STORAGE_KEY = "feedback-form-state";

getDataFromStorage();

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

function onFormInput() {
    const formData = form.elements;

    const email = formData.email.value;
    const message = formData.message.value;
    const dataToSave = { email, message };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(dataToSave));
}

function onFormSubmit(event) {
    event.preventDefault();

    const {elements: { email, message }}  = event.currentTarget;

    if (email.value === "" || message.value === "") {
        alert("Please fill in all the fields!");
    } else {
        console.log({ email: email.value, message: message.value });
    }
    
    event.currentTarget.reset();
    
    localStorage.removeItem(STORAGE_KEY);
}

function getDataFromStorage() {
    const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (savedData) {
        emailInput.value = savedData.email;
        textInput.value = savedData.message;
    }
}
