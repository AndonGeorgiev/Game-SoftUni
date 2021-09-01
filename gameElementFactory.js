import { gameScreen } from "./app.js";
import { gameState } from "./state.js";

export function createBug() {
    let bugElement = document.createElement("div");
    bugElement.classList.add("bug");
    gameScreen.appendChild(bugElement);
    bugElement.style.top = (gameScreen.offsetHeight - gameState.bug.height) * Math.random() + 'px';
    bugElement.style.left = (gameScreen.offsetWidth - gameState.bug.width) + 'px';
}

export function createClouds() {
    let cloudElement = document.createElement("div");
    cloudElement.classList.add("cloud");
    gameScreen.appendChild(cloudElement);
    cloudElement.style.top = (gameScreen.offsetHeight - gameState.cloud.height) * Math.random() + 'px';
    cloudElement.style.left = (gameScreen.offsetWidth - gameState.cloud.width + 200) + 'px'
}

export function createFairBall() {
    let fairBallElement = document.createElement("div");
    fairBallElement.classList.add("fairBall");
    gameScreen.appendChild(fairBallElement);
    fairBallElement.style.top = (gameState.player.y + 60) + 'px';
    fairBallElement.style.left = (gameState.player.x + 90) + 'px';
}

export function createPlayer() {

    let player = document.createElement('div');
    player.className = 'player';
    gameScreen.appendChild(player);
}

export function createBomb() {
    let bombElement = document.createElement("div");
    bombElement.classList.add("bomb");
    gameScreen.appendChild(bombElement);
    bombElement.style.top = (gameScreen.offsetHeight - gameState.bug.height) * Math.random() + 'px';
    bombElement.style.left = (gameScreen.offsetWidth - gameState.bug.width - 40) + 'px';
}