document.addEventListener('DOMContentLoaded', () => {
  // gsap.registerPlugin(ScrollTrigger);

  const serviceSwiper = new Swiper('.service-slider', {
    slidesPerView: 7,
    pagination: {
      el: '.service-wrap .swiper-pagination',
      clickable: true,
    },
    spaceBetween: 12,
    navigation: {
      nextEl: '.service-btn-next',
      prevEl: '.service-btn-prev',
    },
  });
});
