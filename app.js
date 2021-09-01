import { gameLoop } from "./game.js";
import { createPlayer } from "./gameElementFactory.js";

export let startScreen = document.getElementsByClassName('startScreen')[0];
export let gameScreen = document.getElementsByClassName('gameScreen')[0];




startScreen.addEventListener('click', startGame);

function startGame() {
    startScreen.classList.add('hidden');
    gameScreen.classList.remove('hidden');

    window.requestAnimationFrame(gameLoop);

}

createPlayer();