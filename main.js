import "./assets/scss/all.scss";
import "bootstrap/dist/js/bootstrap.min.js";

console.log("Hello world!");

const swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  slidesPerGroup: 2,
  spaceBetween: 48,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
  pagination: {
    el: ".swiper-pagination-custom",
    type: "fraction",
  },
});

const swiper2 = new Swiper(".swiper-sm", {
  slidesPerView: 1.08,
  slidesPerGroup: 1,
  spaceBetween: 24,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
  pagination: {
    el: ".swiper-pagination-custom-sm",
    type: "fraction",
  },
});
