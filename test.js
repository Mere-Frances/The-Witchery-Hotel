jQuery(document).ready(function ($) {

  'use strict';

  var slider = $('#slider');
  var slidesWrapper = $('.slides');
  var slides = $('.slides li');
  var activeSlide = $('.slides.active');

  var timer = function() {
      setInterval(changeSlide, 7500);
  }

  function changeSlide() {
      var a = slidesWrapper.find('.active');
      
      var b = a.next('li');
      
      if( b.length === 0 ) {
          console.log();
          a.removeClass('active');
          slides.first().addClass('active');
      } else {
          a.removeClass('active');
          b.addClass('active');
      }
      //
  }

  timer();

  $('.slide-nav-down').click(function(e) {
      clearInterval(changeSlide);
      changeSlide();
  
  });

  $('.slide-nav-down').on('mousedown', function() {
      $(this).css({'opacity': 1});
  });

  $('.slide-nav-down').on('mouseup', function() {
      $(this).css({'opacity': 0.5});
  });

});