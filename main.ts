radio.setGroup(213)
radio.setFrequencyBand(7)

radio.onReceivedNumber(function (receivedNumber) {
    console.log(receivedNumber)
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
})

input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(3)
})

radio.onReceivedValue(function (name, value) {

})
radio.onReceivedValue(function (name: string, value: number) {
    console.log(name)
    console.log(value)
})