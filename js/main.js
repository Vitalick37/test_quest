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
  
      if (winPos > navPos) {
        $('.header').addClass('fixed shadow');  
        $('.clone-nav').show();
      } 
      else {
        $('.header').removeClass('fixed shadow');
        $('.clone-nav').hide();
      }
    });
  
  

    // $('[data-modal=consultation1]').on('click', function () {
    //   $('#consultation1').fadeToggle('slow');
    // })
  
    // $('.popap__close').on('click', function () {
    //   $('#consultation1').fadeOut('fast');
    // })



    // $('[data-modal=consultation2]').on('click', function () {
    //   $('#consultation2').fadeToggle('slow');
    // })
  
    // $('.popap__close').on('click', function () {
    //   $('#consultation2').fadeOut('fast');
    // })



    // $('[data-modal=consultation3]').on('click', function () {
    //   $('#consultation3').fadeToggle('slow');
    // })
  
    // $('.popap__close').on('click', function () {
    //   $('#consultation3').fadeOut('fast');
    // })



    // $('[data-modal=consultation4]').on('click', function () {
    //   $('#consultation4').fadeToggle('slow');
    // })
  
    // $('.popap__close').on('click', function () {
    //   $('#consultation4').fadeOut('fast');
    // })



    let cardDesc = document.querySelectorAll('.card__descr'),
    popapClose = document.querySelectorAll('.popap__close'),
    cardPopap = document.querySelectorAll('.card__popap');
   

  function openDesc(a) {
    cardPopap[a].classList.toggle('show');
    // cardPopap[a].classList.remove('hide');
  };

  // function closeDesc(b) {
  //   if (cardPopap[b].classList.contains('show')) {
  //     cardPopap[b].classList.remove('show');
  //     cardPopap[b].classList.add('hide');
  //   };
  // };


  document.addEventListener('click', (event) => {
    let target = event.target;
    if (target && target.classList.contains('card__descr')) {
        for (let i = 0; i < cardDesc.length; i++) {
          if (target == cardDesc[i]) {
            openDesc(i);
            break;
          };
        };
      };
  });
  document.addEventListener('click',  (event) => {
    let target = event.target;
    if (target && target.classList.contains('popap__close') || target && target.classList.contains('card__descr')) {
        for (let i = 0; i < popapClose.length; i++) {
          if (target == popapClose[i]) {
            openDesc(i);
            break;
          };
        };
      };
  });
   
})