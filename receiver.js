radio.onReceivedNumber(function (receivedNumber) {
    if (radio.receivedPacket(RadioPacketProperty.SignalStrength) > -55) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else if (radio.receivedPacket(RadioPacketProperty.SignalStrength) > -60) {
        basic.showLeds(`
            . . . . .
            # # # # .
            # # # # .
            # # # # .
            # # # # .
            `)
    } else if (radio.receivedPacket(RadioPacketProperty.SignalStrength) > -71) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # . .
            # # # . .
            # # # . .
            `)
    } else if (radio.receivedPacket(RadioPacketProperty.SignalStrength) > -93) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # # . . .
            # # . . .
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # . . . .
            `)
    }
})
radio.setGroup(37)
