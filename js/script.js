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

  const bannerSwiper = new Swiper('.banner-slider', {
    pagination: {
      el: '.service-wrap .swiper-pagination',
      clickable: true,
    },
    spaceBetween: 12,
    navigation: {
      nextEl: '.btn-banner-next',
      prevEl: '.btn-banner-prev',
    },
  });
});
