input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P0, 1)
})
input.onButtonPressed(Button.B, function () {
    pins.digitalWritePin(DigitalPin.P0, 0)
})
basic.clearScreen()
basic.showString("Bienvenue!")
basic.forever(function () {
    if (input.lightLevel() > 100) {
        basic.showLeds(`
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            # . # . #
            `)
    } else if (input.lightLevel() < 65) {
        basic.showLeds(`
            # . . . #
            . . # . .
            . # # # .
            . . # . .
            # . . . #
            `)
    } else {
        basic.clearScreen()
    }
    if (input.temperature() > 21) {
        basic.showString("Touche A pour allumer le fan")
    } else {
        basic.clearScreen()
    }
})
