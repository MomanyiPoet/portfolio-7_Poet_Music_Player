let swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    effect: 'coverflow',
    grabCursor: 'true',
    slidesPerview: 'auto',
    coverflow: {
        rotate: 20,
        sretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: true,
    },
    loop: false,
})

let typed = new Typed('.multiple-text', {
    strings: ["LISTEN", "LOVE", "VIBE TO"],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 4000,
    loop: true
})