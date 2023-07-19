var swiper = new Swiper(".directions__content", {
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  grabCursor: true,
  keyboard: true,
  fade: true,

  pagination: { 
    el: ".swiper-pagination", 
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0:{slidesPerView: 1,},
    728:{slidesPerView: 2,},
    1200:{slidesPerView: 3,},
  },
});
