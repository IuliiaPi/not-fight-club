const CssClasses = {
    MODAL_REGISTRATION: 'modal-registration',

    DISABLED: 'disabled',
    ACTIVE: 'active',
    DISPLAY: '_display',
    DISPLAY_NONE: '_display-none',

    HOME_PAGE: 'home-page',
    BUTTON_FIGHT: 'button-fight',

    SETTINGS_PAGE: 'settings-page',
    LABEL_PLAYER_NAME: 'label-player-name',
    INPUT_PLAYER_NAME: 'input-player-name',
    BUTTON_EDIT_PLAYER_NAME: 'button-edit-player-name',

}

const gamePage = document.querySelector('.game-page');

const modalRegistration = document.querySelector('.modal-registration');
const modalRegistrationInput = document.querySelector('.modal-registration__input');
const modalRegistrationButton = document.querySelector('.modal-registration__button');

const headerTitle = document.querySelector('.header__title');
const itemIcon = document.querySelectorAll('.item-icon');
const iconHome = document.querySelector('.icon-home');
const iconCharacter = document.querySelector('.icon-character');
const iconSettings = document.querySelector('.icon-settings');

const mainContent = document.querySelector('.main__content');
const buttonFight = document.querySelector('.button-fight');


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


modalRegistrationButton.addEventListener('click', openHomePage);

function openHomePage() {
    modalRegistration.classList.add(CssClasses.DISPLAY_NONE);
    gamePage.classList.add(CssClasses.DISPLAY);
    headerTitle.textContent = 'Home';
    createHomePage();
}

iconHome.addEventListener('click', openHomePage);
iconCharacter.addEventListener('click', openCharacterPage);
iconSettings.addEventListener('click', openSettingsPage);

function openCharacterPage() {
    headerTitle.textContent = 'Character';
    // modalRegistration.classList.add(CssClasses.DISPLAY_NONE);
    // homePage.classList.add(CssClasses.DISPLAY);
}

function openSettingsPage() {
    headerTitle.textContent = 'Settings';
    createSettingsPage();
    // modalRegistration.classList.add(CssClasses.DISPLAY_NONE);
    // homePage.classList.add(CssClasses.DISPLAY);
}

function createHomePage(page) {
    mainContent.textContent = '';
    const component = createElement('div', CssClasses.HOME_PAGE);

    const buttonFight = createElement('button', CssClasses.BUTTON_FIGHT);
    buttonFight.textContent = 'Fight!';

    component.append(buttonFight);

    //     return component;
    mainContent.append(component);
}

function createSettingsPage(page) {
    mainContent.textContent = '';
    const component = createElement('div', CssClasses.SETTINGS_PAGE);

    const labelPlayerName = createElement('label', CssClasses.LABEL_PLAYER_NAME);
    labelPlayerName.textContent = 'Player Name:';

    const inputPlayerName = createElement('input', CssClasses.INPUT_PLAYER_NAME);
    inputPlayerName.value = modalRegistrationInput.value;

    const BUTTON_EDIT_PLAYER_NAME = createElement('button', CssClasses.BUTTON_EDIT_PLAYER_NAME);
    BUTTON_EDIT_PLAYER_NAME.textContent = 'Edit';

    component.append(labelPlayerName, inputPlayerName, BUTTON_EDIT_PLAYER_NAME);

    //     return component;
    mainContent.append(component);

    BUTTON_EDIT_PLAYER_NAME.addEventListener('click', editPlayerName);

    function editPlayerName() {
        modalRegistrationInput.value = inputPlayerName.value;
    }
}

function createElement(tagName, className) {
    const element = document.createElement(tagName);
    element.classList.add(className);
    return element;
}

// export { createComponent };

