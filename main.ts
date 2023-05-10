radio.setGroup(213)
radio.setFrequencyBand(7)


const directionState = {
    STOP: 0,
    FORWARD: -1,
    BACKWARD: 1,
    LEFT: -2,
    RIGHT: 2
}

let Xdir = directionState.STOP
let Zdir = directionState.STOP

let lastXdir = directionState.STOP
let lastZdir = directionState.STOP

basic.forever(function () {
    let pitch = input.rotation(Rotation.Pitch)
    let roll = input.rotation(Rotation.Roll)
    if (roll >= 45) {
        Xdir = directionState.RIGHT
    } else if (roll <= -45) {
        Xdir = directionState.LEFT
    } else {
        Xdir = directionState.STOP
    }
    if (pitch >= 45) {
        Zdir = directionState.BACKWARD
    } else if (pitch <= -45) {
        Zdir = directionState.FORWARD
    } else {
        Zdir = directionState.STOP
    }

    if (Xdir != lastXdir) {
        radio.sendValue("Xdir",Xdir)
    }

    if (Zdir != lastZdir) {
        radio.sendValue("Zdir", Zdir)
    }

    lastXdir = Xdir
    lastZdir = Zdir
})