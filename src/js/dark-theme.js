function theme_switcher() {
    const cb = document.getElementById('mode-setter');
    console.log("Theme switcher");
    var rootElement = document.querySelector(':root')
    if (!cb.checked) { // dark mode disabled
        rootElement.style.setProperty('--backg-color', "#ffffff")
        rootElement.style.setProperty('--backg-color2', "#222222")
        rootElement.style.setProperty('--second-color', "#121212")
        rootElement.style.setProperty('--nav-color', "#f2f2f2")
    }
    if (cb.checked) { // dark mode enabled
        rootElement.style.setProperty('--backg-color', "#222")
        rootElement.style.setProperty('--backg-color2', "#ffffff")
        rootElement.style.setProperty('--second-color', "#ffffff")
        rootElement.style.setProperty('--nav-color', "#2c2c2c")
    }
}