$(document).ready(function(){
    var $window = $(window);
    var windowsize = $window.width();
    var sizeSlide = 5;
    if(windowsize < 600 && windowsize > 320){
        sizeSlide = 4;
    }else if(windowsize < 320){
        sizeSlide = 3;
    }
    'use strict';
    $('.slide-slick').slick({
        infinite: false,
        slidesToShow: sizeSlide,
        slidesToScroll: 1,
        nextArrow: '<button type="button" class="button-circle arrow-next"><i class="fa fa-angle-right"></i></button>',
        prevArrow: '<button type="button" class="button-circle arrow-prev"><i class="fa fa-angle-left"></i></button>',
    });
  });