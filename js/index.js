const CssClasses = {
    MODAL_REGISTRATION: 'modal-registration',

    DISABLED: 'disabled',
    ACTIVE: 'active',
    DISPLAY: '_display',
    DISPLAY_NONE: '_display-none',
    PAGE_LOCK: '_lock',
    PAGE_SHADOW_ACTIVE: 'page__shadow_active',
    HOME_PAGE: 'home-page',
    BUTTON_FIGHT: 'button-fight',

    CHARACTER_PAGE: 'character-page',
    CHARACTER_NAME: 'character-name',
    CHARACTER_IMAGES: 'character-images',
    CHARACTER_IMAGE: 'character-image',
    CHARACTER_INFO: 'character-info',
    CHARACTER_WINS: 'character-wins',
    CHARACTER_WINS_NUMBER: 'character-wins-number',
    CHARACTER_LOSES: 'character-loses',
    CHARACTER_LOSES_NUMBER: 'character-loses-number',
    BUTTON_CHANGE_CHARACTER: 'button-change-character',

    MODAL_CHARACTERS: 'modal-characters',
    MODAL_CHARACTERS_CONTAINER: 'modal-characters__container',
    MODAL_CHARACTERS_CONTENT: 'modal-characters__content',
    MODAL_CHARACTERS_LIST: 'modal-characters__list',
    CARD: 'card',
    IMAGE: 'item__image',
    BUTTON_CLOSE_MODAL: 'button-close-modal',

    SETTINGS_PAGE: 'settings-page',
    LABEL_PLAYER_NAME: 'label-player-name',
    INPUT_PLAYER_NAME: 'input-player-name',
    BUTTON_EDIT_PLAYER_NAME: 'button-edit-player-name',

    POPUP_GAME_OVER: 'popup-game-over',
}

import cardsJSON from "../cards.js";
console.log(cardsJSON);

const gamePage = document.querySelector('.game-page');
const pageShadow = document.querySelector(".page__shadow");

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

iconHome.addEventListener('click', openHomePage);
iconCharacter.addEventListener('click', openCharacterPage);
iconSettings.addEventListener('click', openSettingsPage);

function openHomePage() {
    modalRegistration.classList.add(CssClasses.DISPLAY_NONE);
    gamePage.classList.add(CssClasses.DISPLAY);
    headerTitle.textContent = 'Home';
    createHomePage();
}

// buttonFight.addEventListener('click', openBattle);

function openBattle() {
     headerTitle.textContent = 'Battle';
      createBattlePage();
}

function openCharacterPage() {
    headerTitle.textContent = 'Character';
    createCharacterePage();
    // modalRegistration.classList.add(CssClasses.DISPLAY_NONE);
    // homePage.classList.add(CssClasses.DISPLAY);
}

function openSettingsPage() {
    headerTitle.textContent = 'Settings';
    createSettingsPage();
}

function createBattlePage(page) {
    mainContent.textContent = '';
    const component = createElement('div', CssClasses.HOME_PAGE);

    const buttonFight = createElement('button', CssClasses.BUTTON_FIGHT);
    buttonFight.textContent = '!';

    component.append(buttonFight);

    //     return component;
    mainContent.append(component);
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

function createCharacterePage(cardsJSON) {
    mainContent.textContent = '';
    const component = createElement('div', CssClasses.CHARACTER_PAGE);

    const characterImages = createElement('div', CssClasses.CHARACTER_IMAGES);

    const characterImage = createElement('img', CssClasses.CHARACTER_IMAGE);
    characterImage.alt = 'character';
    characterImage.width = 350;
    characterImage.height = 500;
    characterImage.src = './assets/img/character/1.webp';
    // characterImage.src = cardsJSON.image;

    console.log(characterImage.src);

    const BUTTON_CHANGE_CHARACTER = createElement('button', CssClasses.BUTTON_CHANGE_CHARACTER);
    BUTTON_CHANGE_CHARACTER.textContent = 'Change Character';

    BUTTON_CHANGE_CHARACTER.addEventListener('click', onButtonChangeCharacterClick);

    characterImages.append(characterImage, BUTTON_CHANGE_CHARACTER);

    const characterInfo = createElement('div', CssClasses.CHARACTER_INFO);

    component.append(characterImages, characterInfo);

    const characterName = createElement('p', CssClasses.CHARACTER_NAME);
    characterName.textContent = modalRegistrationInput.value;

    const characterWins = createElement('div', CssClasses.CHARACTER_WINS);
    characterWins.textContent = 'Wins:';
    const characterWinsNumber = createElement('span', CssClasses.CHARACTER_WINS_NUMBER);
    characterWinsNumber.textContent = '0';
    characterWins.append(characterWinsNumber);

    const characterLoses = createElement('div', CssClasses.CHARACTER_LOSES);
    characterLoses.textContent = 'Loses:';
    const characterLosesNumber = createElement('span', CssClasses.CHARACTER_LOSES_NUMBER);
    characterLosesNumber.textContent = '0';
    characterLoses.append(characterLosesNumber);

    characterInfo.append(characterName, characterWins, characterLoses);

    //     return component;
    mainContent.append(component);
}

// const characterImage = document.getElementsByClassName('.character-image');
// console.log(characterImage.src);

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

// modal Characters

const MODAL_CHARACTERS = createElement('div', CssClasses.MODAL_CHARACTERS);
document.body.append(MODAL_CHARACTERS);

const MODAL_CHARACTERS_CONTAINER = createElement('div', CssClasses.MODAL_CHARACTERS_CONTAINER);
MODAL_CHARACTERS.append(MODAL_CHARACTERS_CONTAINER);

const popupCharactersContent = createElement('div', CssClasses.MODAL_CHARACTERS_CONTENT);
MODAL_CHARACTERS_CONTAINER.append(popupCharactersContent);

const MODAL_CHARACTERS_LIST = createElement('ul', CssClasses.MODAL_CHARACTERS_LIST);
popupCharactersContent.append(MODAL_CHARACTERS_LIST);

cardsJSON.forEach((character) => {
    const card = createElement('li', CssClasses.CARD);
    MODAL_CHARACTERS_LIST.append(card);

    const image = createElement('img', CssClasses.IMAGE);
    image.alt = `${character.name}`;
    image.width = 200;
    image.height = 300;
    image.src = character.image;
    card.append(image);

    card.addEventListener('click', changeCharacter);

    function changeCharacter() {
        console.log(image.src);
        characterImage.src =  image.src ;
    }
});

function createComponent(card) {
    const component = createElement('li', CssClasses.CARD);

    const image = createElement('img', CssClasses.IMAGE);
    image.alt = TEXT_ALT_IMAGE + ` ${card.title}`;
    image.width = 100;
    image.height = 200;
    image.src = card.image;

    return component;
}

const BUTTON_CLOSE_MODAL = createElement('button', CssClasses.BUTTON_CLOSE_MODAL);
BUTTON_CLOSE_MODAL.setAttribute('type', 'button');
BUTTON_CLOSE_MODAL.textContent = 'x';
MODAL_CHARACTERS_CONTAINER.append(BUTTON_CLOSE_MODAL);

BUTTON_CLOSE_MODAL.addEventListener('click', closeModal);

pageShadow.addEventListener('click', function (event) {
    const isOutSide = !event.target.closest(CssClasses.MODAL_CHARACTERS_CONTAINER);
    if (isOutSide) {
        closeModal();
    }
});

function onButtonChangeCharacterClick(e) {
    document.body.classList.toggle(CssClasses.PAGE_LOCK);
    pageShadow.classList.add(CssClasses.PAGE_SHADOW_ACTIVE);
    MODAL_CHARACTERS.classList.add(CssClasses.DISPLAY);
}

function closeModal(e) {
    if (MODAL_CHARACTERS.classList.contains(CssClasses.DISPLAY)) {
        document.body.classList.remove(CssClasses.PAGE_LOCK);
        MODAL_CHARACTERS.classList.remove(CssClasses.DISPLAY);
        pageShadow.classList.remove(CssClasses.PAGE_SHADOW_ACTIVE);
    }
}

// popup Game Over

const popupGameOver = createElement('div', CssClasses.POPUP_GAME_OVER);
document.body.append(popupGameOver);

const popupContainer = document.createElement('div');
popupContainer.className = 'popup__container';
popupGameOver.append(popupContainer);

const popupContent = document.createElement('div');
popupContent.className = 'popup__content';
popupContainer.append(popupContent);

const popupTitle = document.createElement('p');
popupTitle.className = 'popup__title';
popupTitle.textContent = 'Game Over!!';
popupContent.append(popupTitle);

const popupSubtitle = document.createElement('p');
popupSubtitle.className = 'popup__subtitle';
popupContent.append(popupSubtitle);

const buttonPlayAgain = document.createElement('button');
buttonPlayAgain.className = 'popup__button button-play-again';
buttonPlayAgain.setAttribute('type', 'button');
buttonPlayAgain.textContent = 'Play again';
popupContent.append(buttonPlayAgain);


