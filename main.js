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

  breakpoints: {
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-next-sm",
    prevEl: ".swiper-prev-sm",
  },
  pagination: {
    el: ".swiper-pagination-custom-sm",
    type: "fraction",
  },
});

const swiper3 = new Swiper(".swiper-life", {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 24,
  navigation: {
    nextEl: ".swiper-next-life",
    prevEl: ".swiper-prev-life",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    992: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
  },
});

const swiper4 = new Swiper(".swiper-board", {
  slidesPerView: 1.2,
  spaceBetween: 24,

  breakpoints: {
    768: {
      slidesPerView: 2,
    },
  },
});

const swiper5 = new Swiper(".swiper-project", {
  slidesPerView: 1.2,
  spaceBetween: 24,

  breakpoints: {
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
  },
});
