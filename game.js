import { gameScreen } from "./app.js";
import { createBug, createClouds, createFairBall } from "./gameElementFactory.js";
import { hasCollision } from "./helpers.js";
import { gameState } from "./state.js";

document.addEventListener('keydown', keydown);
document.addEventListener('keyup', keyup);

export function gameLoop(time) {

    if (time > gameState.cloud.nextPrint) {
        createClouds();
        gameState.cloud.nextPrint = time + (gameState.cloud.maxTimePrint * Math.random() * 1.1);
    }

    Array.from(document.getElementsByClassName('cloud'))
        .forEach(x => {

            let currentPosition = parseInt(x.style.left);
            if (currentPosition > -50) {
                x.style.left = (currentPosition - gameState.cloud.speed) + 'px';
            } else {
                x.remove();
            }

        })


    let player = document.getElementsByClassName("player")[0];

    if (gameState.player.y + gameState.player.height + 50 < gameScreen.offsetHeight) {
        gameState.player.y += 1;
    }

    if (gameState.keys.ArrowUp && gameState.player.y > 0) {
        gameState.player.y -= gameState.player.speed;
    }

    if (gameState.keys.ArrowDown && gameState.player.y + gameState.player.height + 50 < gameScreen.offsetHeight) {
        gameState.player.y += gameState.player.speed;
    }

    if (gameState.keys.ArrowLeft && gameState.player.x > 0) {
        gameState.player.x -= gameState.player.speed;
    }

    if (gameState.keys.ArrowRight && gameState.player.x + gameState.player.width + 50 < gameScreen.offsetWidth) {
        gameState.player.x += gameState.player.speed;
    }

    if (gameState.keys.Space) {
        player.style.backgroundImage = 'url(./images/wizard-fire.png)';
        if (time > gameState.fairBall.nextTimeAttack) {
            gameState.fairBall.nextTimeAttack = time + gameState.fairBall.timeAttack;
            createFairBall()
        }

    } else {
        player.style.backgroundImage = 'url(./images/wizard.png)'
    }

    Array.from(document.getElementsByClassName('fairBall'))
        .forEach(x => {
            let currentPosition = parseInt(x.style.left);
            if (currentPosition < gameScreen.offsetWidth + 50) {
                x.style.left = (currentPosition + gameState.fairBall.speed) + 'px';
            } else {
                x.remove();
            }

            Array.from(document.getElementsByClassName('bug'))
                .forEach(y => {
                    if (hasCollision(x, y)) {
                        y.remove();
                        x.remove();
                        gameState.sores += 1;
                    }
                })

        })

    Array.from(document.getElementsByClassName('bug'))
        .forEach(x => {

            if (hasCollision(player, x)) {
                gameState.gameOver = true;
            }
            let currentPosition = parseInt(x.style.left);
            if (currentPosition > -50) {
                x.style.left = (currentPosition - gameState.bug.speed) + 'px';
            } else {
                x.remove();
            }

        })


    if (time > gameState.bug.nextPrint) {
        createBug();
        gameState.bug.nextPrint = time + (gameState.bug.maxTimePrint * Math.random() * 1.1);
    }



    player.style.top = gameState.player.y + 'px';
    player.style.left = gameState.player.x + 'px';
    if (gameState.bug.speed <= gameState.bug.maxSpeed) {
        gameState.bug.speed += 0.001
    }



    if (!gameState.gameOver) {
        window.requestAnimationFrame(gameLoop)
        gameState.sores += 0.002;
    } else {
        location.reload();
    }

    let soresScreen = document.getElementById('sores');
    soresScreen.textContent = (gameState.sores).toFixed(0) + ' pts.';

    let speedScreen = document.getElementById('bugSpeed');
    speedScreen.textContent = 'Bugs speed: ' + (gameState.bug.speed).toFixed(0);
}

function keydown(e) {
    console.log(e.code);

    gameState.keys[e.code] = true;
}

function keyup(e) {
    gameState.keys[e.code] = false;
}