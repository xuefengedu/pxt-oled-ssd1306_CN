//% icon="\uf26c"
//% color="255" weight="90" block="OLED"
namespace OLED {

    /**
     * 初始化i2c OLED显示器
     * @param height height (in pixels)
     * @param width width (in pixels)
     */
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
    //% weight=87 blockGap=8
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
    //% weight=96
    //% blockId=oled_print_number
    //% block="show|number %number" blockGap=8
    //% async 
    //% shim=OLED::showNumber
    export function showNumber(number: number): void {
        console.log("display: " + number);
        return;
    }
}
