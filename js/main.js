$(document).ready(function () {

  var reviewsSlider = new Swiper('.reviews__slider', {
    autoplay: {
      delay: 7000
    },
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
  });

  $('.reviews__slider').mouseover(function () {
    reviewsSlider.autoplay.stop();
  });

  $('.reviews__slider').mouseout(function () {
    reviewsSlider.autoplay.start();
  });

  var settings = {
    navigation: {
      nextEl: '.articles__slider-button--next',
      prevEl: '.articles__slider-button--prev',
    },
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerColumn: 2,
    slidesPerColumnFill: 'row',
    // spaceBetween: 24,
    breakpoints: {
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        slidesPerColumn: 1,
        spaceBetween: 18
      }
    }
  };

  var articlesSlider = new Swiper('.articles__slider', settings);

  var menuButton = $('.mobile-menu-button');
  var menuCloseButton = $('.mobile-menu__close');
  var mobileMenuLink = $('.mobile-menu__link');
  var modalButton = $('[data-toggle=modal]');
  var closeModalButton = $('.modal__close');
  var modal = $('.modal');
  var modalOverlay = $('.modal__overlay');
  var mobileMenu = $('.mobile-menu');
  var body = $('body');
  var filterLink = $('.filter__link');
  var trendCard01 = $('.card-trend--01');
  var trendCard02 = $('.card-trend--02');
  var trendCard03 = $('.card-trend--03');
  var trendCard04 = $('.card-trend--04');
  var trendCard05 = $('.card-trend--05');
  var trendCard06 = $('.card-trend--06');
  var trendCard07 = $('.card-trend--07');
  var trendCardMore = $('.card-trend--more');


  menuButton.on('click', function (event) {
    openCloseMobileMenu(event);
  });

  menuCloseButton.on('click', function (event) {
    openCloseMobileMenu(event);
  });

  mobileMenuLink.on('click', function (event) {
    openCloseMobileMenu(event);
  });

  function openCloseMobileMenu(event) {
    event.preventDefault();
    mobileMenu.toggleClass('mobile-menu--visible');
    body.toggleClass('body-overflow');
  }

  $(document).on('keyup', function (event) {
    if (event.keyCode == 27) {
      mobileMenu.addClass('mobile-menu--visible');
      body.removeClass('body-overflow');
      modal.removeClass('modal--visible');
    }
  });

  $('.anchor').on('click', function (event) {
    event.preventDefault();
    var section = $(this).attr('href').substr($(this).attr('href').indexOf('#'));
    var $section = $(section);
    var offset = $section.offset().top;

    $('html, body').animate({
      scrollTop: offset - 100 + 'px'
    }, 1000);
  });

  filterLink.on('click', function (event) {
    event.preventDefault();
    var activeLink = $(this).attr('data-cat');
    filterLink.removeClass('filter__link--active');
    $(this).addClass('filter__link--active');
    if (activeLink == 'new') {
      trendCard01.css('order', 1);
      trendCard02.css('order', 2);
      trendCard03.css('order', 3);
      trendCard04.css('order', 4);
      trendCard05.css('order', 5);
      trendCard06.css('order', 6);
      trendCard07.css('order', 7);
      trendCardMore.css('order', 8);
    } else if (activeLink == 'best') {
      trendCard01.css('order', 4);
      trendCard02.css('order', 1);
      trendCard03.css('order', 5);
      trendCard04.css('order', 7);
      trendCard05.css('order', 3);
      trendCard06.css('order', 2);
      trendCard07.css('order', 6);
      trendCardMore.css('order', 8);
    } else {
      trendCard01.css('order', 3);
      trendCard02.css('order', 2);
      trendCard03.css('order', 4);
      trendCard04.css('order', 6);
      trendCard05.css('order', 7);
      trendCard06.css('order', 5);
      trendCard07.css('order', 1);
      trendCardMore.css('order', 8);
    }
  });

  $('.anchor-main').on('click', function (event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: 0 + 'px'
    }, 1000);
  });

  modalButton.on('click', openModal);
  closeModalButton.on('click', closeModal);
  modalOverlay.on('click', closeModal);


  function openModal() {
    modal.addClass('modal--visible');
    body.addClass('body-overflow');
  }

  function closeModal(event) {
    event.preventDefault();
    body.removeClass('body-overflow');
    modal.removeClass('modal--visible');
    mobileMenu.addClass('mobile-menu--visible');
  }

  $('.modal__form').validate({
    errorClass: "invalid-modal",
    messages: {
      name: {
        required: "Укажите свое имя",
        minlength: "Имя должно содержать больше 2 букв"
      },
      email: {
        required: "Необходимо ввести Email",
        email: "Пожалуйста, используйте формат записи name@domain.com"
      },
      phone: "Укажите телефон"
    }
  });

  $('.newsletter__form').validate({
    errorClass: "invalid-newsletter",
    messages: {
      email: {
        required: "Необходимо ввести Email",
        email: "Пожалуйста, используйте формат записи name@domain.com"
      }
    }
  });

  $('.input--phone-masked').mask('+7 (000) 000-00-00');

});