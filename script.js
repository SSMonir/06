// Swiper JS Gallery 
let swiperCards = new Swiper(".gallery-cards", {
    loop: true,
    loopedSlides: 8,
    cssMode: true,
    effect: 'fade',
});

let swiperThumbs = new Swiper(".gallery-thumbs", {
    loop: true,
    loopedSlides: 8,
    slidesPerView: 3,
    centeredSlides: true,
    slideToClickedSlide: true,

    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

swiperThumbs.controller.control = swiperCards
