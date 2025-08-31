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

    BATTLE_PAGE: 'battle-page',
    FIGHTER: 'fighter',
    LINE_LIFE: 'line-life',
    LINE_LIFE_RED: 'line-life_red',
    LIFES: '_lifes',
    COUNTER_LIFE: 'counter-life',
    CURRENT_LIFES: 'current-lifes',
    DIVIDER_LIFES: 'divider-lifes',
    MAX_LIFES: 'max-lifes',

    PICK_ZONES: 'pick-zones',
    PICK_ZONES_TITLE: 'pick-zones__title',
    PICK_ZONES_ZONES: 'pick-zones__zones',
    ZONE: 'zone',
    DIVIDER_ZONES: 'divider-zones',
    ZONE_TITLE: 'zone__title',
    ZONE_LIST: 'zone__list',
    DEFENCE_ZONE_LIST: 'defence-zone__list',
    ZONE_LIST_ITEM: 'zone__list-item',

    LABEL_ZONE_NAME: 'label-zone-name',

    PICK_ZONES_BUTTON: 'pick-zones__button',

    POPUP_GAME_OVER: 'popup-game-over',
}

import charactersJSON from "../characters.js";
import fightersJSON from "../fighters.js";
import listZonesJSON from "../listZones.js";

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
// const buttonFight = document.querySelector('.button-fight');
let characterImage = document.querySelector('.character-image');
// console.log(characterImage);
// let characterImage;
// let a = characterImage.src;
// characterImage.src = './assets/img/character/1.webp';

//  modalRegistrationButton.disabled = true;

// if (modalRegistrationInput.value !== '') {
//     modalRegistrationButton.classList.remove('_disable');
//     // modalRegistrationButton.removeAttribute('disabled');
// //     modalRegistrationButton.disabled = true;
// // } else {
//     // modalRegistrationButton.disabled = false;
//     openHomePage();
// }

function checkInputValue() {
    if (modalRegistrationInput.value !== '') {
        // modalRegistrationButton.classList.remove('_disable');

        // modalRegistrationButton.removeAttribute('disabled');
        //     modalRegistrationButton.disabled = true;
        // } else {
        // modalRegistrationButton.disabled = false;
        openHomePage();
    }
}

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


modalRegistrationButton.addEventListener('click', checkInputValue);

iconHome.addEventListener('click', openHomePage);
iconCharacter.addEventListener('click', openCharacterPage);
iconSettings.addEventListener('click', openSettingsPage);

// buttonFight.addEventListener('click', openBattle);

function openHomePage() {
    modalRegistration.classList.add(CssClasses.DISPLAY_NONE);
    gamePage.classList.add(CssClasses.DISPLAY);
    headerTitle.textContent = 'Home';
    createHomePage();
}

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
    const component = createElement('div', CssClasses.BATTLE_PAGE);

    // character 
    const character = createElement('div', CssClasses.FIGHTER);

    const characterName = createElement('p', CssClasses.CHARACTER_NAME);
    characterName.textContent = modalRegistrationInput.value;

    // const characterImage = createElement('img', CssClasses.CHARACTER_IMAGE);
    // characterImage.alt = 'character';
    // characterImage.width = 350;
    // characterImage.height = 500;
    // characterImage.src = charactersJSON[0].image;
    // // console.log(characterImage);
    let i = 0;
    const characterLineLife = createElement('div', CssClasses.LINE_LIFE);
    const characterLineLifeRed = createElement('div', CssClasses.LINE_LIFE_RED);
    characterLineLife.append(characterLineLifeRed);
    const characterCounterLife = createElement('div', CssClasses.COUNTER_LIFE);
    const characterCurrentLifes = createElement('p', CssClasses.CURRENT_LIFES);
    characterCurrentLifes.textContent = `${charactersJSON[i].maxLifes}`;
    const characterDividerLifes = createElement('p', CssClasses.DIVIDER_LIFES);
    characterDividerLifes.textContent = `|`;
    const characterMaxLifes = createElement('p', CssClasses.MAX_LIFES);
    characterMaxLifes.textContent = `${charactersJSON[i].maxLifes}`;

    characterCounterLife.append(characterCurrentLifes, characterDividerLifes, characterMaxLifes);
    character.append(characterName, createCharactereImage(), characterLineLife, characterCounterLife);


    // fighter 
    const fighter = createElement('div', CssClasses.FIGHTER);

    let randomFighter = Math.floor(Math.random() * fightersJSON.length);

    const fighterName = createElement('p', CssClasses.CHARACTER_NAME);
    fighterName.textContent = `${fightersJSON[randomFighter].name}`;

    const fighterImage = createElement('img', CssClasses.CHARACTER_IMAGE);
    fighterImage.width = 350;
    fighterImage.height = 500;
    fighterImage.alt = `${fightersJSON[randomFighter].name}`;
    fighterImage.src = fightersJSON[randomFighter].image;

    const fighterLineLife = createElement('div', CssClasses.LINE_LIFE);
    const fighterLineLifeRed = createElement('div', CssClasses.LINE_LIFE_RED);
    fighterLineLife.append(fighterLineLifeRed);
    const fighterCounterLife = createElement('div', CssClasses.COUNTER_LIFE);
    const fighterCurrentLifes = createElement('p', CssClasses.CURRENT_LIFES);
    fighterCurrentLifes.textContent = `${fightersJSON[randomFighter].maxLifes}`;
    const fighterDividerLifes = createElement('p', CssClasses.DIVIDER_LIFES);
    fighterDividerLifes.textContent = `|`;
    const fighterMaxLifes = createElement('p', CssClasses.MAX_LIFES);
    fighterMaxLifes.textContent = `${fightersJSON[randomFighter].maxLifes}`;

    fighterCounterLife.append(fighterCurrentLifes, fighterDividerLifes, fighterMaxLifes);
    fighter.append(fighterName, fighterImage, fighterLineLife, fighterCounterLife);

    // pick zones 
    const pickZones = createElement('div', CssClasses.PICK_ZONES);
    const pickZonesTitle = createElement('h2', CssClasses.PICK_ZONES_TITLE);
    pickZonesTitle.textContent = `Please pick 1 Attack zone and 2 Defence zones`;
    const pickZonesZones = createElement('div', CssClasses.PICK_ZONES_ZONES);
    const attackZone = createElement('div', CssClasses.ZONE);
    const attackZoneTitle = createElement('h3', CssClasses.ZONE_TITLE);
    attackZoneTitle.textContent = `Attack Zones`;
    const attackZoneList = createElement('ul', CssClasses.ZONE_LIST);

    listZonesJSON.forEach((zones) => {
        const zone = createElement('li', CssClasses.ZONE_LIST_ITEM);
        attackZoneList.append(zone);

        const labelZoneName = createElement('label', CssClasses.LABEL_ZONE_NAME);
        labelZoneName.setAttribute('for', zones.name);
        labelZoneName.textContent = `${zones.name}`;

        const inputZoneName = createElement('input', CssClasses.INPUT_ZONE_NAME);
        inputZoneName.setAttribute('type', 'radio');
        inputZoneName.setAttribute('id', zones.name);
        inputZoneName.setAttribute('name', 'attack_zone');
        inputZoneName.value = `${zones.name}`;

        zone.append(labelZoneName, inputZoneName);
    });

    attackZone.append(attackZoneTitle, attackZoneList);

    const dividerZones = createElement('div', CssClasses.DIVIDER_ZONES);

    const defenceZone = createElement('div', CssClasses.ZONE);

    const defenceZoneTitle = createElement('h3', CssClasses.ZONE_TITLE);
    defenceZoneTitle.textContent = `Defence Zones`;
    const defenceZoneList = createElement('ul', CssClasses.DEFENCE_ZONE_LIST);

    listZonesJSON.forEach((zones) => {
        const zone = createElement('li', CssClasses.ZONE_LIST_ITEM);
        defenceZoneList.append(zone);

        const labelZoneName = createElement('label', CssClasses.LABEL_ZONE_NAME);
        labelZoneName.setAttribute('for', 'checkboxGroup');
        labelZoneName.textContent = `${zones.name}`;

        const inputZoneName = createElement('input', CssClasses.INPUT_ZONE_NAME);
        inputZoneName.setAttribute('type', 'checkbox');
        inputZoneName.setAttribute('id', 'checkboxGroup');
        inputZoneName.setAttribute('name', 'defence_zone');
        inputZoneName.value = `${zones.name}`;

        zone.append(inputZoneName, labelZoneName);
    });

    defenceZone.append(defenceZoneTitle, defenceZoneList);

    pickZonesZones.append(attackZone, dividerZones, defenceZone);

    const buttonAttack = createElement('button', CssClasses.PICK_ZONES_BUTTON);
    buttonAttack.textContent = `Attack!`;

    pickZones.append(pickZonesTitle, pickZonesZones, buttonAttack);

    component.append(character, pickZones, fighter);
    //     return component;
    mainContent.append(component);

    buttonAttack.addEventListener('click', attack);

    // function attack 
    function attack() {

        //    checkboxes.forEach(cb => {
        //         if (!cb.checked && checkedCount === limit) {
        //             cb.disabled = true;
        //         } else {
        //             cb.disabled = false; // Re-enable if limit is not reached
        //         }
        //     });
        const radios = document.getElementsByName('attack_zone');
        const characterLosesNumber = document.getElementsByClassName(CssClasses.CHARACTER_LOSES_NUMBER);
        console.log(radios);
        console.log(characterLosesNumber);
        radios.forEach(radio => {
            if (radio.checked && radio.id === 'head') {
                characterCurrentLifes.textContent = `${Number(characterCurrentLifes.textContent) - 30}`;
                characterLineLifeRed.classList.add(CssClasses.LIFES);
                fighterCurrentLifes.textContent = `${Number(fighterCurrentLifes.textContent) - 20}`;
                fighterLineLifeRed.classList.add(CssClasses.LIFES);
            } else
                if (radio.checked && radio.id === 'neck') {
                    characterCurrentLifes.textContent = `${Number(characterCurrentLifes.textContent) - 10}`;
                    characterLineLifeRed.classList.add(CssClasses.LIFES);
                    fighterCurrentLifes.textContent = `${Number(fighterCurrentLifes.textContent) - 0}`;
                    fighterLineLifeRed.classList.add(CssClasses.LIFES);
                } else
                    if (radio.checked && radio.id === 'body') {
                        characterCurrentLifes.textContent = `${Number(characterCurrentLifes.textContent) - 30}`;
                        characterLineLifeRed.classList.add(CssClasses.LIFES);
                        fighterCurrentLifes.textContent = `${Number(fighterCurrentLifes.textContent) - 20}`;
                        fighterLineLifeRed.classList.add(CssClasses.LIFES);
                    } else
                        if (radio.checked && radio.id === 'belly') {
                            characterCurrentLifes.textContent = `${Number(characterCurrentLifes.textContent) - 20}`;
                            characterLineLifeRed.classList.add(CssClasses.LIFES);
                            fighterCurrentLifes.textContent = `${Number(fighterCurrentLifes.textContent) - 10}`;
                            fighterLineLifeRed.classList.add(CssClasses.LIFES);
                        } else
                            if (radio.checked && radio.id === 'legs') {
                                characterCurrentLifes.textContent = `${Number(characterCurrentLifes.textContent) - 10}`;
                                characterLineLifeRed.classList.add(CssClasses.LIFES);
                                fighterCurrentLifes.textContent = `${Number(fighterCurrentLifes.textContent) - 0}`;
                                fighterLineLifeRed.classList.add(CssClasses.LIFES);
                            } else
                                if (characterCurrentLifes.textContent <= 0) {
                                    characterCurrentLifes.textContent = `0`;
                                    characterLineLifeRed.classList.remove(CssClasses.LIFES);
                                    openPopupGameOver();
                                    // characterLosesNumber.textContent = Number(characterLosesNumber.textContent) + 1;
                                } else
                                    if (fighterCurrentLifes.textContent <= 0) {
                                        fighterCurrentLifes.textContent = '0';
                                        fighterLineLifeRed.classList.remove(CssClasses.LIFES);
                                        openPopupGameOver();
                                    }
        });
    }

    // document.addEventListener('DOMContentLoaded', function () {
    const checkboxes = document.getElementsByName('defence_zone');
    console.log(checkboxes);

    const limit = 2;

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function () {
            let checkedCount = 0;
            console.log(checkedCount);
            checkboxes.forEach(cb => {
                if (cb.checked) {
                    checkedCount++;
                    console.log(checkedCount);
                }
            });
            console.log(checkedCount);

            if (checkedCount > limit) {
                this.checked = false; // Uncheck the current checkbox if limit exceeded
                alert(`You can select a maximum of ${limit} options.`);
            }

            // Optionally, disable other checkboxes when the limit is reached
            checkboxes.forEach(cb => {
                if (!cb.checked && checkedCount === limit) {
                    cb.disabled = true;
                } else {
                    cb.disabled = false; // Re-enable if limit is not reached
                }
            });
        });
    });
    //  });
}


// checkboxes 
// document.addEventListener('DOMContentLoaded', function () {
//     const checkboxes = document.getElementsByName('defence_zone');
//     console.log(checkboxes);
//     //  console.log(4);
//     const limit = 2;

//     checkboxes.forEach(checkbox => {
//         checkbox.addEventListener('change', function () {
//             let checkedCount = 0;
//             checkboxes.forEach(cb => {
//                 if (cb.checked) {
//                     checkedCount++;
//                 }
//             });

//             if (checkedCount > limit) {
//                 this.checked = false; // Uncheck the current checkbox if limit exceeded
//                 alert(`You can select a maximum of ${limit} options.`);
//             }

//             // Optionally, disable other checkboxes when the limit is reached
//             checkboxes.forEach(cb => {
//                 if (!cb.checked && checkedCount === limit) {
//                     cb.disabled = true;
//                 } else {
//                     cb.disabled = false; // Re-enable if limit is not reached
//                 }
//             });
//         });
//     });
// });


function createHomePage(page) {
    mainContent.textContent = '';
    const component = createElement('div', CssClasses.HOME_PAGE);

    const buttonFight = createElement('button', CssClasses.BUTTON_FIGHT);
    buttonFight.textContent = 'Fight!';

    component.append(buttonFight);

    //     return component;
    mainContent.append(component);

    buttonFight.addEventListener('click', openBattle);
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

// // modal Characters

const MODAL_CHARACTERS = createElement('div', CssClasses.MODAL_CHARACTERS);
document.body.append(MODAL_CHARACTERS);

const MODAL_CHARACTERS_CONTAINER = createElement('div', CssClasses.MODAL_CHARACTERS_CONTAINER);
MODAL_CHARACTERS.append(MODAL_CHARACTERS_CONTAINER);

const popupCharactersContent = createElement('div', CssClasses.MODAL_CHARACTERS_CONTENT);
MODAL_CHARACTERS_CONTAINER.append(popupCharactersContent);

const MODAL_CHARACTERS_LIST = createElement('ul', CssClasses.MODAL_CHARACTERS_LIST);
popupCharactersContent.append(MODAL_CHARACTERS_LIST);



// function createComponent(card) {
//     const component = createElement('li', CssClasses.CARD);

//     const image = createElement('img', CssClasses.IMAGE);
//     image.alt = TEXT_ALT_IMAGE + ` ${card.title}`;
//     image.width = 100;
//     image.height = 200;
//     image.src = card.image;

//     return component;
// }

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

function disableBtn() {
    document.getElementById('button').disabled = true;
}

function enableBtn() {
    document.getElementById('button').disabled = false;
}

function createCharacterePage() {
    mainContent.textContent = '';
    const component = createElement('div', CssClasses.CHARACTER_PAGE);

    const characterImages = createElement('div', CssClasses.CHARACTER_IMAGES);

    // createCharactereImage();

    const BUTTON_CHANGE_CHARACTER = createElement('button', CssClasses.BUTTON_CHANGE_CHARACTER);
    BUTTON_CHANGE_CHARACTER.textContent = 'Change Character';

    BUTTON_CHANGE_CHARACTER.addEventListener('click', onButtonChangeCharacterClick);

    characterImages.append(createCharactereImage(), BUTTON_CHANGE_CHARACTER);

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

// createCharactereImage 
function createCharactereImage() {
    const characterImage = createElement('img', CssClasses.CHARACTER_IMAGE);
    characterImage.alt = 'character';
    characterImage.width = 350;
    characterImage.height = 500;
    characterImage.src = charactersJSON[0].image;
    return characterImage;
}

let characterImage2 = document.querySelector(CssClasses.CHARACTER_IMAGE);
console.log(characterImage2);
// console.log(characterImage2.src);
let characterImage3 = document.getElementsByClassName(CssClasses.CHARACTER_IMAGE);
console.log(characterImage3);
let characterImage1 = document.getElementsByClassName('.character-image');
console.log(characterImage1);
console.log(characterImage1.src);

charactersJSON.forEach((character) => {
    const card = createElement('li', CssClasses.CARD);
    MODAL_CHARACTERS_LIST.append(card);

    const image = createElement('img', CssClasses.IMAGE);
    image.alt = `${character.name}`;
    image.width = 200;
    image.height = 300;
    image.src = character.image;
    card.append(image);

    image.addEventListener('click', changeCharacter);
    // image.forEach((c) => {
    // c.addEventListener('click', changeCharacter);
    // });
    function changeCharacter() {
        let x = characterImage1.src;
        console.log(image.src);
        // characterImages.append(image);
        image.height = 100;
        characterImage1.height = 100;
        characterImage1.src = character.image;

        console.log(characterImage1.src);
        console.log(character.image);
    }
});


// popup Game Over

const popupGameOver = createElement('div', CssClasses.POPUP_GAME_OVER);
document.body.append(popupGameOver);

const popupContainer = document.createElement('div');
popupContainer.className = 'popup-game-over__container';
popupGameOver.append(popupContainer);

const popupContent = document.createElement('div');
popupContent.className = 'popup-game-over__content';
popupContainer.append(popupContent);

const popupTitle = document.createElement('p');
popupTitle.className = 'popup-game-over__title';
popupTitle.textContent = 'Game Over!!';
popupContent.append(popupTitle);

const popupSubtitle = document.createElement('p');
popupSubtitle.className = 'popup-game-over__subtitle';
popupContent.append(popupSubtitle);

const buttonPlayAgain = document.createElement('button');
buttonPlayAgain.className = 'popup-game-over__button';
buttonPlayAgain.setAttribute('type', 'button');
buttonPlayAgain.textContent = 'Play again';
popupContent.append(buttonPlayAgain);


buttonPlayAgain.addEventListener('click', closePopupGameOver);

pageShadow.addEventListener('click', function (event) {
    const isOutSide = !event.target.closest('.popup-game-over__container');
    if (isOutSide) {
        closePopupGameOver();
    }
});

function openPopupGameOver(e) {
    document.body.classList.toggle(CssClasses.PAGE_LOCK);
    pageShadow.classList.add(CssClasses.PAGE_SHADOW_ACTIVE);
    popupGameOver.classList.add(CssClasses.DISPLAY);
}

function closePopupGameOver(e) {
    if (popupGameOver.classList.contains(CssClasses.DISPLAY)) {
        document.body.classList.remove(CssClasses.PAGE_LOCK);
        popupGameOver.classList.remove(CssClasses.DISPLAY);
        pageShadow.classList.remove(CssClasses.PAGE_SHADOW_ACTIVE);
        openCharacterPage();
    }
}