radio.setGroup(37)
basic.forever(function () {
    radio.sendNumber(99)
    basic.showLeds(`
        . # # # .
        # . # . #
        # # # # #
        # . # . #
        . # # # .
        `)
})

