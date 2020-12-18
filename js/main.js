$(document).ready(function () {

  var reviewsSlider = new Swiper('.reviews__slider', {
    autoplay: {
      delay: 7000
    },
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
    // keyboard: {
    //   enabled: true
    // },
    // navigation: {
    //   nextEl: '.reviews-slider__button--next',
    //   prevEl: '.reviews-slider__button--prev',
    // },
  });

  var settings = {
    // autoplay: {
    //   delay: 7000
    // },
    // loop: true,
    // pagination: {
    //   el: '.swiper-pagination',
    // },
    // keyboard: {
    //   enabled: true
    // },
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



  // function setOptions() {
  //   articlesSlider.slidesPerGroup = articlesSlidesPerGroup;
  //   articlesSlider.slidesPerColumn = articlesSlidesPerColumn;
  //   articlesSlider.spaceBetween = articlesSpaceBetween;
  // }


  // var menuButton = $('.menu-button');

  // menuButton.on('click', function () {
  //   $('.navbar-bottom').toggleClass('navbar-bottom--visible');
  //   $('body').toggleClass('body-overflow');
  // });

  // var modalButton = $('[data-toggle=modal]');
  // var closeModalButton = $('.modal__close');
  // modalButton.on('click', openModal);
  // closeModalButton.on('click', closeModal);

  // function openModal() {
  //   var modal = $('.modal');
  //   var modalOverlay = $('.modal__overlay');
  //   var modalDialog = $('.modal__dialog');
  //   var body = $('body');
  //   modal.addClass('modal--visible');
  //   body.addClass('body-overflow');
  //   setTimeout(function () {
  //     modalOverlay.addClass('modal__overlay--visible');
  //     modalDialog.addClass('modal__dialog--visible');
  //   }, 10);
  // }

  // function closeModal(event) {
  //   event.preventDefault();
  //   var modal = $('.modal');
  //   var modalOverlay = $('.modal__overlay');
  //   var modalDialog = $('.modal__dialog');
  //   var body = $('body');
  //   modalOverlay.removeClass('modal__overlay--visible');
  //   modalDialog.removeClass('modal__dialog--visible');
  //   body.removeClass('body-overflow');
  //   setTimeout(function () {
  //     modal.removeClass('modal--visible');
  //   }, 500);
  // }

  // $(document).on('keyup', function (evt) {
  //   if (evt.keyCode == 27) {
  //     var modal = $('.modal');
  //     var modalOverlay = $('.modal__overlay');
  //     var modalDialog = $('.modal__dialog');
  //     var body = $('body');
  //     body.removeClass('body-overflow');
  //     modalOverlay.removeClass('modal__overlay--visible');
  //     modalDialog.removeClass('modal__dialog--visible');
  //     setTimeout(function () {
  //       modal.removeClass('modal--visible');
  //     }, 500);
  //   }
  // });

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