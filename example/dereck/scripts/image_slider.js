const swiper = new Swiper(".swiper", {
  // slider autoplay
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  loop: true,

  // click on pagination to choose image
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
