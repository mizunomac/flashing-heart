function 左回転 () {
    pins.servoWritePin(AnalogPin.P8, 0)
    pins.servoWritePin(AnalogPin.P12, 0)
    停止()
}
function 反転 () {
    pins.servoWritePin(AnalogPin.P8, 180)
    pins.servoWritePin(AnalogPin.P12, 180)
    basic.pause(1050)
    pins.servoWritePin(AnalogPin.P8, 左停止値)
    pins.servoWritePin(AnalogPin.P12, 右停止値)
}
function 後進 () {
    pins.servoWritePin(AnalogPin.P8, 0)
    pins.servoWritePin(AnalogPin.P12, 180)
    停止()
    basic.pause(200)
}
function 前進 () {
    pins.servoWritePin(AnalogPin.P8, 180)
    pins.servoWritePin(AnalogPin.P12, 0)
    basic.pause(500)
    pins.servoWritePin(AnalogPin.P8, 左停止値 + 5)
    pins.servoWritePin(AnalogPin.P12, 右停止値 - 5)
    basic.pause(100)
}
function 右回転 () {
    pins.servoWritePin(AnalogPin.P8, 180)
    pins.servoWritePin(AnalogPin.P12, 180)
    停止()
}
function 停止 () {
    basic.pause(550)
    pins.servoWritePin(AnalogPin.P8, 左停止値)
    pins.servoWritePin(AnalogPin.P12, 右停止値)
}
function _ () {
	
}
let 左距離 = 0
let 右距離 = 0
let 右停止値 = 0
let 左停止値 = 0
左停止値 = 96
右停止値 = 96
let 境界値 = 470
basic.forever(function () {
    前進()
    右距離 = pins.analogReadPin(AnalogPin.P0)
    左距離 = pins.analogReadPin(AnalogPin.P1)
    if (左距離 > 境界値 && 右距離 > 境界値) {
        後進()
        basic.pause(100)
        反転()
    } else if (左距離 > 境界値) {
        右回転()
    } else {
        if (右距離 > 境界値) {
            左回転()
        }
    }
})
