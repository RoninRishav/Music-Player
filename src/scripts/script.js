
// Screen Variables 
const openingScreen = document.querySelector('.opening-app-screen');
const secretMessageScreen = document.querySelector('.secret-message-screen');
const musicPlayerScreen = document.querySelector('.music-player-screen');

// Functional SVG icons variables
const clickButton = document.querySelector('.click-button');
const openingPurpleHearts = document.querySelectorAll('.opening-purple-heart-js');
const secretMessagePurpleHeart = document.querySelector('.purple-heart-secret-message');


// Screen changing at opening screen
openingPurpleHearts.forEach(purpleHeart => {
    purpleHeart.addEventListener('click', () => {
        openingScreen.classList.add('hidden');
        secretMessageScreen.classList.remove('hidden');
    })
})

clickButton.addEventListener('click', () => {
    openingScreen.classList.add('hidden');
    musicPlayerScreen.classList.remove('hidden');
})

// Screen changing at secret message screen
secretMessagePurpleHeart.addEventListener('click', () => {
    secretMessageScreen.classList.add('hidden');
    openingScreen.classList.remove('hidden');
})