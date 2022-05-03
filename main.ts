let motion = 0
radio.onReceivedNumber(function on_received_number(receivedNumber: number) {
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
input.onLogoEvent(TouchButtonEvent.LongPressed, function on_logo_long_pressed() {
    radio.sendNumber(1)
})
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    motion = 0
    basic.showNumber(0)
})
input.onGesture(Gesture.Shake, function on_gesture_shake() {
    
    motion += 1
    basic.showNumber(motion)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function on_logo_pressed() {
    radio.sendNumber(motion)
})
basic.forever(function on_forever() {
    
})
