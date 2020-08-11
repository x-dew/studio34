// Импортируем Swiper slider
import Swiper from "swiper";

new Swiper(".swiper-container", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});