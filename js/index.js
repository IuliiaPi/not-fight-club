const modalRegistrationInput = document.querySelector('.modal-registration__input');
const modalRegistrationButton = document.querySelector('.modal-registration__button');

// setLocalStorage 
function setLocalStorage() {
    localStorage.setItem('input-name', modalRegistrationInput.value);
}
window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
    if (localStorage.getItem('input-name')) {
        modalRegistrationInput.value = localStorage.getItem('input-name');
    }
}
window.addEventListener('load', getLocalStorage);
