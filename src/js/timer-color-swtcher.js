/*===== Sequence Colour =====*/
// Time Based Color Picker

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
}

function switchColor(counter) {
    console.log("in switchcolor function")
    var colors = [
        "#5e9bff", "#ff5d4f", "#ffb152", "#32bf7a"
    ];
    var r = document.querySelector(':root')
    new_color = colors[counter]
    console.log("Color coming up is " + new_color)
    r.style.setProperty('--switch-color', new_color)
    counter++;

}


function trytimer() {
    var a = 0
    while (a <= 4) {
        console.log("a")
        switchColor(a)
        sleep(1000)
        a++;
        if (a == 4) {
            a = 0
        }
    }
}