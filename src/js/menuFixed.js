window.addEventListener('DOMContentLoaded', function () {
  'use strict';
 
 // fixed menu*******************************************************

  let navPos, winPos, navHeight;

  function refreshVar() {
    navPos = $('.header').offset().top;
    navHeight = $('.header').outerHeight(true);
  }

  refreshVar();
  $(window).resize(refreshVar);

  $('<div class="clone-nav"></div>').insertBefore('.header').css('height', navHeight).hide();

  $(window).scroll(function() {
    winPos = $(window).scrollTop();

    if (winPos >= navPos) {
      $('.header').addClass('fixed shadow');  
      $('.clone-nav').show();
    } 
    else {
      $('.header').removeClass('fixed shadow');
      $('.clone-nav').hide();
    }
  });

 
})