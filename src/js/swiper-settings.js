// Импортируем Swiper slider
import Swiper from "swiper";

//Инициализация слайдера work-examples
new Swiper('.work-examples__slider', {
    centeredSlides: true,
    slidesPerView: 'auto',
    spaceBetween: 40,
    loop: true,
    navigation: {
        nextEl: '.work-examples__slider-next',
        prevEl: '.work-examples__slider-prev',
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            spaceBetween: 25,
            centeredSlides: false,
        },
        // when window width is >= 441px
        441: {
            spaceBetween: 40,
            centeredSlides: false,
        },
        // when window width is >= 641px
        641: {
            centeredSlides: true,
        },
        // when window width is >= 1205px
        1205: {
            spaceBetween: 60
        }
    }
});