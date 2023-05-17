input.onButtonPressed(Button.A, function () {
    basic.showNumber(ScoreCounter)
})
input.onGesture(Gesture.Shake, function () {
    bucket = randint(0, 25)
    if (bucket <= 4) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . # # # .
            # # # # #
            `)
    } else if (bucket >= 5 && bucket <= 20) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . . # . .
            . . # . .
            `)
    } else if (bucket == 0) {
        basic.showString("Boom!")
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . # # # .
            # # # # #
            . # # # .
            . . . . .
            `)
        game.removeLife(1)
    } else if (bucket >= 21 && bucket < 25) {
        basic.showLeds(`
            # # . # #
            . # # # .
            . . # . .
            . # # # .
            # # . # #
            `)
    } else if (bucket == 25) {
        for (let index = 0; index < 2; index++) {
            basic.showLeds(`
                . . # . .
                . . # . .
                # # . # #
                . . # . .
                . . # . .
                `)
            basic.showLeds(`
                . . . . .
                . . # . .
                . # # # .
                . . # . .
                . . . . .
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
                `)
        }
        ScoreCounter += 1
    }
})
let bucket = 0
let ScoreCounter = 0
ScoreCounter = 0
let lives = 3
basic.forever(function () {
    if (ScoreCounter == 3 || lives == 0) {
        game.gameOver()
    }
})
