/*===== SCROLL REVEAL ANIMATION =====*/
// A JavaScript code to use the sr revel animation
const srl = ScrollReveal({
    origin: 'top',
    distance: '70px',
    duration: 600,
    reset: true
});

/*SCROLL SKILLS*/
srl.reveal('.skills__subtitle', {});
srl.reveal('.skills__text', {});
srl.reveal('.skills__data', { interval: 100 });
srl.reveal('.skills__img', { delay: 500 });

/*SCROLL CONTACT*/
srl.reveal('.contact__input', { interval: 200 });

/*EDUCATION RIGHT*/
srl.reveal('.education__controller_right', { interval: 200 });
