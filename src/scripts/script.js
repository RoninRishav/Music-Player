
// Screen Variables 
const openingScreen = document.querySelector('.opening-app-screen');
const secretMessageScreen = document.querySelector('.secret-message-screen');
const musicPlayerScreen = document.querySelector('.music-player-screen');

// Functional SVG icons variables
const clickButton = document.querySelector('.click-button');
const openingPurpleHearts = document.querySelectorAll('.opening-purple-heart-js');
const secretMessagePurpleHeart = document.querySelector('.purple-heart-secret-message');


// Screen changing to secret message screen
openingPurpleHearts.forEach(purpleHeart => {
    purpleHeart.addEventListener('click', () => showScreen(secretMessageScreen))
})

// Screen changing to music player
clickButton.addEventListener('click', () => showScreen(musicPlayerScreen))

// Screen changing to opening screen
secretMessagePurpleHeart.addEventListener('click', () => showScreen(openingScreen));

// Function to change screens 
function showScreen(screenToShow) {
    document.querySelectorAll('.opening-app-screen, .secret-message-screen, .music-player-screen')
        .forEach(screen => {
            screen.classList.remove('show');
            screen.classList.add('hide');
        })
    
        screenToShow.classList.add('show');
        screenToShow.classList.remove('hide');
}