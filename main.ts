radio.onReceivedValue(function (name, value) {
    if (name == "Xval") {
        x = value
    } else if (name == "Yval") {
        y = value
    } else if (name == "Zval") {
        z = value
    }
})
let z = 0
let y = 0
let x = 0
radio.setGroup(33)
basic.forever(function () {
    serial.writeValue("x", x)
    serial.writeValue("y", y)
    serial.writeValue("z", z)
})
