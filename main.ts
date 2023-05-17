let bucket = 0
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
            # . . # #
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
    } else if (bucket >= 21 && bucket < 25) {
        basic.showLeds(`
            # # . # #
            . # # # .
            . . # . .
            . # # # .
            # # . # #
            `)
    } else {
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
    }
})
