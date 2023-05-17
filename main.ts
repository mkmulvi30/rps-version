function PauseClear () {
    basic.pause(1000)
    basic.clearScreen()
}
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
        PauseClear()
    } else if (bucket >= 5 && bucket <= 20) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . . # . .
            . . # . .
            `)
        PauseClear()
    } else if (bucket == 0 || bucket == 21) {
        basic.showString("Boom!")
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . # # # .
            # # # # #
            . # # # .
            . . . . .
            `)
        basic.showLeds(`
            # . # . #
            . . . . .
            # . . . #
            . . . . .
            # . # . #
            `)
        PauseClear()
        basic.showString("YOU LOSE")
        lives += -3
    } else if (bucket >= 22 && bucket < 25) {
        basic.showLeds(`
            # # . # #
            . # # # .
            . . # . .
            . # # # .
            # # . # #
            `)
        PauseClear()
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
            PauseClear()
        }
        ScoreCounter += 1
    } else if (ScoreCounter == 3 || lives == 0) {
        basic.showString("GAME OVER")
    }
})
let bucket = 0
let lives = 0
let ScoreCounter = 0
ScoreCounter = 0
lives = 3
