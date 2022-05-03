let motion = 0
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        music.playTone(440, music.beat(BeatFraction.Half))
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
        music.playTone(440, music.beat(BeatFraction.Whole))
    }
    basic.clearScreen()
})
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    radio.sendNumber(1)
})
input.onButtonPressed(Button.A, function () {
    motion = 0
    basic.showNumber(0)
})
input.onGesture(Gesture.Shake, function () {
    motion += 1
    basic.showNumber(motion)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendNumber(motion)
})
basic.forever(function () {
	
})
