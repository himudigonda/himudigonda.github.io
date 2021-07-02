/*===== SCROLL REVEAL ANIMATION =====*/
// A JavaScript code to use the sr revel animation
const srb = ScrollReveal({
    origin: 'bottom',
    distance: '70px',
    duration: 1000,
    reset: true
});



/*FOOTER CONTACT*/
srb.reveal('.footer', { interval: 200 });
srb.reveal('.footer__title', { interval: 200 });
srb.reveal('.footer__text', { interval: 200 });
srb.reveal('.footer__social-icon', { interval: 200 });