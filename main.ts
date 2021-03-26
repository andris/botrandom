let speedRandom = 0
let forwardRandom = 0
let turnRandom = 0
let direction = 0
function advance (speed: number, forward: number, turn: number, direction: number) {
    crickit.tank(direction * speed, direction * speed)
    light.showAnimation(light.rainbowAnimation, forward)
    light.clear()
    crickit.motor1.stop()
    crickit.motor2.stop()
    pause(1000)
    crickit.tank(direction * speed, -1 * (direction * speed))
    light.showAnimation(light.theaterChaseAnimation, turn)
    light.clear()
    crickit.motor1.stop()
    crickit.motor2.stop()
    pause(1000)
}
input.buttonA.onEvent(ButtonEvent.Click, function () {
    for (let index = 0; index < 6; index++) {
        speedRandom = randint(40, 100)
        forwardRandom = Math.map(randint(0, 200), 0, 100, 500, 2000)
        turnRandom = Math.map(randint(0, 200), 0, 100, 500, 2000)
        if (randint(1, 2) == 1) {
            direction = 1
        } else {
            direction = -1
        }
        advance(speedRandom, forwardRandom, turnRandom, direction)
    }
})
forever(function () {
	
})
