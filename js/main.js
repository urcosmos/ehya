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
    spaceBetween: 24,
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
  var mobileMenu = $('.mobile-menu');
  var body = $('body');

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

  $('.anchor-main').on('click', function (event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: 0 + 'px'
    }, 1000);
  });

  modalButton.on('click', openModal);
  closeModalButton.on('click', closeModal);

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

  // $('.form').each(function () {
  //   $(this).validate({
  //     errorClass: "invalid",
  //     messages: {
  //       name: {
  //         required: "Please specify your name",
  //         minlength: "Name should be more than 2 characters"
  //       },
  //       email: {
  //         required: "We need your email address to contact you",
  //         email: "Your email address must be in the format of name@domain.com"
  //       },
  //       phone: "Please specify your phone number"
  //     }
  //   });
  // });

  // $('.newsletter-subscribe').validate({
  //   errorClass: "invalid-subscribe",
  //   messages: {
  //     email: {
  //       required: "We need your email address to contact you",
  //       email: "Your email address must be in the format of name@domain.com"
  //     }
  //   }
  // });

  // $('.input--phone-masked').each(function () {
  //   $(this).mask('+7 (000) 000-00-00');
  // });

});