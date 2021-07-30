/*===== SCROLL REVEAL ANIMATION =====*/
// A JavaScript code to use the srr revel animation
const srr = ScrollReveal({
    origin: 'top',
    distance: '70px',
    duration: 600,
    reset: true
});


/*SCROLL ABOUT*/
srr.reveal('.about__img', {});
srr.reveal('.about__subtitle', { delay: 200 });
srr.reveal('.about__text1', { delay: 200 });
srr.reveal('.about__text2', { delay: 300 });
srr.reveal('.about__text3', { delay: 400 });
srr.reveal('.about__text4', { delay: 500 });
srr.reveal('.about__text5', { delay: 600 });
srr.reveal('.about__text6', { delay: 700 });

/*SCROLL project*/
srr.reveal('.project__data', { interval: 100 });

/*EDUCATION RIGHT*/
srl.reveal('.education__controller_left', { interval: 200 });
srl.reveal('.education__points', { interval: 200 });
