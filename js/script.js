$(function () {
  gsap.registerPlugin(ScrollToPlugin);
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
      el: '.banner-wrap .swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.btn-banner-next',
      prevEl: '.btn-banner-prev',
    },
  });

  const newsSwiper = new Swiper('.news-slider', {
    pagination: {
      el: '.news-wrap .swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.news-btn-next',
      prevEl: '.news-btn-prev',
    },
  });

  // header

  const $window = $(window);
  const $body = $('body');
  const $header = $('#header');
  const $menu = $('.gnb > li');
  const $subMenu = $('.submenu');
  const $dim = $('.header-dim');

  $menu.on('mouseenter', function () {
    $header.addClass('active');
    $subMenu.stop().fadeIn();
    $dim.fadeIn();
  });

  $menu.on('mouseleave', function () {
    $header.removeClass('active');
    $subMenu.hide();
    $dim.hide();
  });

  const $btnFamily = $('.btn-family-site');
  const $familySite = $('.family-list');
  const $btnExtra = $('.btn-extra-site');
  const $extraSite = $('.extra-list');

  $btnFamily.on('click', () => {
    $familySite.stop().slideToggle();
    $btnFamily.toggleClass('active');
  });
  $btnExtra.on('click', () => {
    $extraSite.stop().slideToggle();
    $btnExtra.toggleClass('active');
  });

  const $tabBtn = $('.new-btns a');
  const $newsTab = $('.news-con');

  $newsTab.hide();
  $newsTab.eq(0).show();

  $tabBtn.removeClass('active');
  $tabBtn.eq(0).addClass('active');

  $tabBtn.on('click', function () {
    $tabBtn.removeClass('active');
    $(this).addClass('active');

    const tabIdx = $(this).index();
    $newsTab.hide();
    $newsTab.eq(tabIdx).show();
  });

  $tabBtn.on('click', function (e) {
    e.preventDefault();
    gsap.from($newsTab, {
      y: 200,
      autoAlpha: 0,
      duration: 0.5,
    });
  });

  gsap.from($newsTab, {
    scrollTrigger: {
      trigger: '.news',
      start: 'top 70%',
      markers: true,
    },
    y: 200,
    autoAlpha: 0,
    duration: 0.5,
  });

  const $checkBox = $('.search-check label');
  $checkBox.eq(0).addClass('active');
  $checkBox.on('click', function () {
    $checkBox.removeClass('active');
    $(this).toggleClass('active');
  });

  const $sideMenu = $('aside');
  const $quickText = $('.quickmenu li a i');
  const $btnSide = $('.buttom-list');
  const $btnTop = $('.btn-go-top');

  $sideMenu.on('mouseenter', () => {
    $quickText.removeClass('hidden');
    gsap.set($btnSide, {
      x: -150,
    });
  });
  $sideMenu.on('mouseleave', () => {
    $quickText.addClass('hidden');
    gsap.set($btnSide, {
      x: 0,
    });
  });

  $btnTop.on('click', () => {
    gsap.to($window, {
      scrollTo: 'top',
    });
  });
});
