let reading = 0
basic.forever(function () {
    reading = pins.analogReadPin(AnalogPin.P4)
    basic.showNumber(reading)
})
