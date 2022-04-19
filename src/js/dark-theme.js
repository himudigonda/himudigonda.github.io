/*===== DARK THEME =====*/
function theme_switcher() {
    const cb = document.getElementById('mode-setter');
    console.log("Theme switcher");
    var rootElement = document.querySelector(':root')
    if (cb.checked) { // dark mode disabled
        rootElement.style.setProperty('--backg-color', "#ebebeb")
        rootElement.style.setProperty('--backg-color2', "#666666")
        rootElement.style.setProperty('--second-color', "#666666")
        rootElement.style.setProperty('--nav-color', "#f2f2f2")
    }
    if (!cb.checked) { // dark mode enabled
        rootElement.style.setProperty('--backg-color', "#666666")
        rootElement.style.setProperty('--backg-color2', "#ebebeb")
        rootElement.style.setProperty('--second-color', "#ebebeb")
        rootElement.style.setProperty('--nav-color', "#666666")
    }
}