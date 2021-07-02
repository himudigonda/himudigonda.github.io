/*===== SCROLL REVEAL ANIMATION =====*/
// A JavaScript code to use the srr revel animation
const srrr = ScrollReveal({
    origin: 'right',
    distance: '70px',
    duration: 1000,
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

/*SCROLL project*/
srr.reveal('.project__data', { interval: 100 });