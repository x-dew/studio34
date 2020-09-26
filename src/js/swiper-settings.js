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

//Слайдер на страницу новостей
new Swiper('.news-slider', {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
        nextEl: '.news-slider__next',
        prevEl: '.news-slider__prev',
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            spaceBetween: 25,
            slidesPerView: 1,
        },
        767: {
            spaceBetween: 25,
            slidesPerView: 2,
        },
        // when window width is >= 441px
        1050: {
            spaceBetween: 20,
            slidesPerView: 3
        },
    }
});

