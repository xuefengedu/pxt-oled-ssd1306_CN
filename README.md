Forked from https://github.com/Tinkertanker/pxt-oled-ssd1306

# SSD1306 OLED液晶micro:bit pxt扩展包

1. Translate into Chinese Simplified
2. Add more functions:
```
    "OLED.drawCircle|block": "画圆 x %x|y %y|r %r",
    "OLED.fillCircle|block": "填充圆 x %x|y %y|r %r",
    "OLED.drawLine|block": "画线 x0 %x0|y0 %y0|x1 %x1|y1 %y1",
    "OLED.drawRect|block": "画矩形 x %x|y %y|w %w|h %h",
    "OLED.fillRect|block": "填充矩形 x %x|y %y|w %w|h %h",
    "OLED.drawRoundRect|block": "画带圆角的矩形 x %x|y %y|w %w|h %h|r %r",
    "OLED.fillRoundRect|block": "填充带圆角的矩形 x %x|y %y|w %w|h %h|r %r",
    "OLED.drawTriangle|block": "画三角形 x0 %x0|y0 %y0|x1 %x1|y1 %y1|x2 %x2|y2 %y2",
    "OLED.fillTriangle|block": "填充三角形 x0 %x0|y0 %y0|x1 %x1|y1 %y1|x2 %x2|y2 %y2"
```

## Screen shots

lcd1602 makecode picture:

![Alt text](1.PNG?raw=true "lcd1602 test picture")

![Alt text](2.PNG?raw=true "lcd1602 test picture")

![Alt text](3.PNG?raw=true "lcd1602 test picture")


# SSD1306 OLED MakeCode Package [![Build Status](https://travis-ci.org/Tinkertanker/pxt-oled-ssd1306.svg?branch=master)](https://travis-ci.org/Tinkertanker/pxt-oled-ssd1306)

This is the MakeCode Package for SSD1306 OLED controller, based on the Adafruit Arduino library available [here](https://github.com/adafruit/Adafruit_SSD1306).

## Hardware Setup
1. Insert the OLED display into the I2C ports on the break out board.

## Blocks
### Initialize OLED Display
Initializes the OLED display.

Sets up the OLED display and prepares it for use by the micro:bit.

```sig
OLED.init(64, 128);
```

This block must be placed before any of the ``show`` blocks.


### Show String
Displays a string on the OLED module.

```sig
OLED.showString("hello, micro:bit!")
```

The ``init`` block must be placed before this.


### Show Number
Displays a number on the OLED module.

```sig
OLED.showNumber(123)
```

The ``init`` block must be placed before this.


### Clear Display
Clears the display.

```sig
OLED.clear()
```

The ``init`` block must be placed before this.

## Example: Counter
The following code is a simple counter that displays an increasing number every second.

```blocks
OLED.init(64, 128)
let item = 0
basic.forever(() => {
    basic.pause(1000)
    item += 1
    OLED.showNumber(item)
})
```

## Supported targets

* for PXT/microbit

## Footnotes

1.  Datasheet https://cdn-shop.adafruit.com/datasheets/SSD1306.pdf
