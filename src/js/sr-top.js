/*===== SCROLL REVEAL ANIMATION =====*/
// A JavaScript code to use the sr revel animation
const srt = ScrollReveal({
    origin: 'top',
    distance: '70px',
    duration: 1000,
    reset: true
});
/*SCROLL HOME*/
srt.reveal('.home__title', { delay: 100 });
srt.reveal('.home__subtitle1', { delay: 200 });
srt.reveal('.home__subtitle2', { delay: 400 });

// 
srt.reveal('.home__img', { delay: 300 });
srt.reveal('.home__social-icon', { interval: 200 });
srt.reveal('.button', { delay: 300 });

/*NAVBAR*/
// srt.reveal('.l-header', { interval: 50 });
// sr.reveal('.nav', { interval: 50 });
// sr.reveal('.nav__link', { interval: 100 });