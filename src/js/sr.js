/*===== SCROLL REVEAL ANIMATION =====*/
// A JavaScript code to use the sr revel animation
const sr = ScrollReveal({
    origin: 'top',
    distance: '70px',
    duration: 1000,
    reset: true
});

/*SCROLL HOME*/
sr.reveal('.home__title', { delay: 100 });
sr.reveal('.button', { delay: 300 });
sr.reveal('.home__img', { delay: 300 });
sr.reveal('.home__social-icon', { interval: 200 });

/*NAVBAR*/
sr.reveal('.l-header', { interval: 50 });
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