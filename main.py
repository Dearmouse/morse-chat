motion = 0

def on_received_number(receivedNumber):
    if receivedNumber == 0:
        basic.show_leds("""
            . . . . .
                        . . . . .
                        . . # . .
                        . . . . .
                        . . . . .
        """)
        music.play_tone(440, music.beat(BeatFraction.HALF))
    else:
        basic.show_leds("""
            . . . . .
                        . . . . .
                        # # # # #
                        . . . . .
                        . . . . .
        """)
        music.play_tone(440, music.beat(BeatFraction.WHOLE))
    basic.clear_screen()
radio.on_received_number(on_received_number)

def on_logo_long_pressed():
    radio.send_number(1)
input.on_logo_event(TouchButtonEvent.LONG_PRESSED, on_logo_long_pressed)

def on_button_pressed_a():
    global motion
    motion = 0
    basic.show_number(0)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_gesture_shake():
    global motion
    motion += 1
    basic.show_number(motion)
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def on_logo_pressed():
    radio.send_number(motion)
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_pressed)

def on_forever():
    pass
basic.forever(on_forever)
