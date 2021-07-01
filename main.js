/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    /*Active link*/
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');

    /*Remove menu mobile*/
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});

/*===== DarkThemer Colour =====*/
// JavaScript code to switch to dark theme 
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

function apply_dark_theme() {
    var rootElement = document.querySelector(':root')
    rootElement.style.setProperty('--backg-color', "#222")
    rootElement.style.setProperty('--backg-color2', "#ffffff")
    rootElement.style.setProperty('--second-color', "#ffffff")
    rootElement.style.setProperty('--nav-color', "#2c2c2c")
}

/*===== Random Colour =====*/
// JavaScript code to pick 
// a random color from array
window.onload = prpick()

function prpick() {
    pickColor();
    const cb = document.getElementById('mode-setter');
    if (cb.checked) { // dark mode enabled
        apply_dark_theme();
    }
}

function pickColor() {
    console.log("in pickColor function")
    var colors = [
        // '#e17f6f', '#eebd5a', '#95c78e'
        "#5e9bff", "#ff5d4f", "#ffb152", "#32bf7a"
    ];
    var random_color = colors[Math.floor(
        Math.random() * colors.length)];
    var r = document.querySelector(':root')
    console.log("first color is " + random_color)
    r.style.setProperty('--first-color', random_color)
}

/*SCROLL HOME*/
sr.reveal('.home__title', { delay: 100 });
sr.reveal('.button', { delay: 300 });
sr.reveal('.home__img', { delay: 300 });
sr.reveal('.home__social-icon', { interval: 200 });

/*NAVBAR*/
// sr.reveal('.l-header', { interval: 50 });
// sr.reveal('.nav', { interval: 50 });
// sr.reveal('.nav__link', { interval: 100 });

/*SCROLL ABOUT*/
sr.reveal('.about__img', {});
sr.reveal('.about__subtitle', { delay: 200 });
sr.reveal('.about__text', { delay: 200 });

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle', {});
sr.reveal('.skills__text', {});
sr.reveal('.skills__data', { interval: 100 });
sr.reveal('.skills__img', { delay: 300 });

/*SCROLL project*/
sr.reveal('.project__data', { interval: 100 });

/*SCROLL CONTACT*/
sr.reveal('.contact__input', { interval: 200 });

/*FOOTER CONTACT*/
sr.reveal('.footer', { interval: 200 });
sr.reveal('.footer__title', { interval: 200 });
sr.reveal('.footer__text', { interval: 200 });
sr.reveal('.footer__social-icon', { interval: 200 });