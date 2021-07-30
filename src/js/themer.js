/*===== DarkThemer Colour =====*/
// JavaScript code to choose a accent color and switch to dark theme on window load 
window.onload = prpick()
    // window.onload = trytimer()

function prpick() {
    pickColor();
    const cb = document.getElementById('mode-setter');
    if (cb.checked) { // dark mode enabled
        apply_dark_theme();
    }
}

/*===== Apply initial dark theme =====*/
// JavaScript code to switch to apply dark theme colors
function apply_dark_theme() {
    var rootElement = document.querySelector(':root')
    rootElement.style.setProperty('--backg-color', "#222")
    rootElement.style.setProperty('--backg-color2', "#ffffff")
    rootElement.style.setProperty('--second-color', "#ffffff")
    rootElement.style.setProperty('--nav-color', "#2c2c2c")
}

/*===== Random Colour =====*/
// JavaScript code to pick a random color from predefined color palette
function pickColor() {
    console.log("in pickColor function")
    var colors = [
        // '#e17f6f', '#eebd5a', '#95c78e' #ffb152
        "#4d87e8", "#e0584c", "#e89c4a", "#32bf7a"
    ];
    var random_color = colors[Math.floor(
        Math.random() * colors.length)];
    var r = document.querySelector(':root')
    console.log("choosen color is " + random_color)
    r.style.setProperty('--first-color', random_color)
}