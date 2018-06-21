//% icon="\uf26c"
//% color="255" weight="90" block="OLED"
namespace OLED {

    /**
     * 初始化i2c OLED显示器
     * @param height height (in pixels)
     * @param width width (in pixels)
     */
    //% weight=100
    //% blockId=oled_init_terminal
    //% block="initialize OLED with height %height|width %width"
    //% icon="\uf1ec" 
    //% shim=OLED::init_terminal
    export function init(height: number = 64, width: number = 128): void {
        return;
    }

    /**
     * 清除OLED屏幕
     */
    //% weight=99
    //% blockId=oled_clear_screen
    //% block="clear OLED display"
    //% icon="\uf1ec" 
    //% shim=OLED::clearDisplay
    export function clear(): void {
        return;
    }

    /**
     * 在OLED显示器上打印字符串
     * @param text text to display
     */
    //% weight=98 blockGap=8
    //% block="show|string %text" 
    //% async
    //% blockId=oled_print_string
    //% icon="\uf1ec"
    //% shim=OLED::showString
    export function showString(text: string): void {
        console.log("display: " + text);
        return;
    }

    /**
     * 在OLED显示器上打印数字
     * @param number number to display
     */
    //% weight=97
    //% blockId=oled_print_number
    //% block="show|number %number" blockGap=8
    //% async 
    //% shim=OLED::showNumber
    export function showNumber(number: number): void {
        console.log("display: " + number);
        return;
    }


    /**
     * 在OLED显示器上启用画图显示或者关闭画图显示
     * @param onOffDisplay onOffDisplay to on or off display
     */
    //% weight=96
    //% blockId=oled_onOffDisplay
    //% block="show|onOff %onOff" blockGap=8
    //% async 
    //% shim=OLED::onOffDisplay
    export function onOffDisplay(onOff: boolean = true): void {
        console.log("display: " + onOff );
        return;
    }

    /**
     * 画圆
     * @param x x (in pixels)
     * @param y y (in pixels)
     * @param r r (in pixels)
     */
    //% weight=95
    //% blockId=oled_drawCircle
    //% block="draw circle with x %x|y %y|r %r"
    //% icon="\uf1ec" 
    //% shim=OLED::drawCircle
    export function drawCircle(x: number = 6, y: number = 6, r: number = 3): void {
        return;
    }

    /**
     * 填充圆
     * @param x x (in pixels)
     * @param y y (in pixels)
     * @param r r (in pixels)
     */
    //% weight=94
    //% blockId=oled_fillCircle
    //% block="fill circle with x %x|y %y|r %r"
    //% icon="\uf1ec" 
    //% shim=OLED::fillCircle
    export function fillCircle(x: number = 6, y: number = 6, r: number = 3): void {
        return;
    }

    /**
     * 画线
     * @param x0 x0 (in pixels)
     * @param y0 y0 (in pixels)
     * @param x1 x1 (in pixels)
     * @param y1 y1 (in pixels)
     */
    //% weight=93
    //% blockId=oled_drawLine
    //% block="draw line with x0 %x0|y0 %y0|x1 %x1|y1 %y1"
    //% icon="\uf1ec" 
    //% shim=OLED::drawLine
    export function drawLine(x0: number = 1, y0: number = 1, x1: number = 3, y1: number = 3): void {
        return;
    }

    /**
     * 画矩形
     * @param x x (in pixels)
     * @param y y (in pixels)
     * @param w w (in pixels)
     * @param h h (in pixels)
     */
    //% weight=92
    //% blockId=oled_drawRect
    //% block="draw rect with x %x|y %y|w %w|h %h"
    //% icon="\uf1ec" 
    //% shim=OLED::drawRect
    export function drawRect(x: number = 1, y: number = 1, w: number = 3, h: number = 3): void {
        return;
    }

    /**
     * 填充矩形
     * @param x x (in pixels)
     * @param y y (in pixels)
     * @param w w (in pixels)
     * @param h h (in pixels)
     */
    //% weight=91
    //% blockId=oled_fillRect
    //% block="fill rect with x %x|y %y|w %w|h %h"
    //% icon="\uf1ec" 
    //% shim=OLED::fillRect
    export function fillRect(x: number = 1, y: number = 1, w: number = 3, h: number = 3): void {
        return;
    }

    /**
     * 画带圆角的矩形
     * @param x x (in pixels)
     * @param y y (in pixels)
     * @param w w (in pixels)
     * @param h h (in pixels)
     * @param r r (in pixels)
     */
    //% weight=90
    //% blockId=oled_drawRoundRect
    //% block="draw round rect with x %x|y %y|w %w|h %h|r %r"
    //% icon="\uf1ec" 
    //% shim=OLED::drawRoundRect
    export function drawRoundRect(x: number = 1, y: number = 1, w: number = 3, h: number = 3, r: number = 2): void {
        return;
    }

    /**
     * 填充带圆角的矩形
     * @param x x (in pixels)
     * @param y y (in pixels)
     * @param w w (in pixels)
     * @param h h (in pixels)
     * @param r r (in pixels)
     */
    //% weight=89
    //% blockId=oled_fillRoundRect
    //% block="fill round rect with x %x|y %y|w %w|h %h|r %r"
    //% icon="\uf1ec" 
    //% shim=OLED::fillRoundRect
    export function fillRoundRect(x: number = 1, y: number = 1, w: number = 3, h: number = 3, r: number = 2): void {
        return;
    }

    /**
     * 画三角形
     * @param x0 x0 (in pixels)
     * @param y0 y0 (in pixels)
     * @param x1 x1 (in pixels)
     * @param y1 y1 (in pixels)
     * @param x2 x2 (in pixels)
     * @param y2 y2 (in pixels)
     */
    //% weight=88
    //% blockId=oled_drawTriangle
    //% block="draw triangle with x0 %x0|y0 %y0|x1 %x1|y1 %y1|x2 %x2|y2 %y2"
    //% icon="\uf1ec" 
    //% shim=OLED::drawTriangle
    export function drawTriangle(x0: number = 1, y0: number = 1, x1: number = 3, y1: number = 3, x2: number = 1, y2: number = 3): void {
        return;
    }

    /**
     * 填充三角形
     * @param x0 x0 (in pixels)
     * @param y0 y0 (in pixels)
     * @param x1 x1 (in pixels)
     * @param y1 y1 (in pixels)
     * @param x2 x2 (in pixels)
     * @param y2 y2 (in pixels)
     */
    //% weight=87
    //% blockId=oled_fillTriangle
    //% block="fill triangle with x0 %x0|y0 %y0|x1 %x1|y1 %y1|x2 %x2|y2 %y2"
    //% icon="\uf1ec" 
    //% shim=OLED::fillTriangle
    export function fillTriangle(x0: number = 1, y0: number = 1, x1: number = 3, y1: number = 3, x2: number = 1, y2: number = 3): void {
        return;
    }
}
