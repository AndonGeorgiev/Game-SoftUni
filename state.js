export let gameState = {
    player: {
        speed: 5,
        x: 50,
        y: 100,
        width: 80,
        height: 100,
    },
    gameOver: false,
    keys: {},
    bug: {
        width: 50,
        height: 50,
        nextPrint: 100,
        maxTimePrint: 1500,
        speed: 4,
        maxSpeed: 7,
    },
    sores: 0,
    fairBall: {
        speed: 10,
        nextTimeAttack: 0,
        timeAttack: 600,
    },
    cloud: {
        speed: 1,
        nextPrint: 0,
        maxTimePrint: 10000,
        width: 150,
        height: 100,
    }
}