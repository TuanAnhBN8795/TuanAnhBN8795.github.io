'use strict';
var $ = jQuery;
//
var idBrickSelected = '1-1-product1';
var roomSelected = 'guessroom';
var producted = 'product1';
var row = 1;
var col = 1;
var room = 'guess';
var slider;
$(document).ready(function(){
    $('#my-navbar').css('display', 'none');
    $('#my-nav').css('display', 'none');
    $('#sm-my-nav').css('display', 'none');
    if($(window).width() <= 600){
        $('#main-nav').css('display', 'none');
    }
    else {
        $('#sm-main-nav').css('display', 'none');
    }
    $('#myNav').css('width', '0%');
    var sizeSlide = 5;
    sizeSlide = parseInt($('#slide-history').attr('size'));
    $('.slide-slick').slick({
        infinite: false,
        slidesToShow: sizeSlide,
        slidesToScroll: 1,
        nextArrow: '<button type="button" class="button-circle arrow-next"><i class="fa fa-angle-right"></i></button>',
        prevArrow: '<button type="button" class="button-circle arrow-prev"><i class="fa fa-angle-left"></i></button>',
        responsive: [
            {
                breakpoint: 980, // tablet breakpoint
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 480, // mobile breakpoint
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });
    $('.slide-slick-home').slick({
        infinite: false,
        slidesToShow: sizeSlide,
        slidesToScroll: 1,
        nextArrow: '<button type="button" class="button-circle arrow-next"><i class="fa fa-angle-right"></i></button>',
        prevArrow: '<button type="button" class="button-circle arrow-prev"><i class="fa fa-angle-left"></i></button>',
        responsive: [
            {
                breakpoint: 980, // tablet breakpoint
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480, // mobile breakpoint
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    $('.slide-slick-type1').slick({
        dots: true,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: '<button type="button" class="button-circle-slide-type1 arrow-next-slide-type1"><i class="fa fa-angle-right"></i></button>',
        prevArrow: '<button type="button" class="button-circle-slide-type1 arrow-prev-slide-type1"><i class="fa fa-angle-left"></i></button>',
        responsive: [
            {
                breakpoint: 980, // tablet breakpoint
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480, // mobile breakpoint
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    $('.slide-slick-type2').slick({
        dots: true,
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: '<button type="button" class="button-circle-slide-type1 arrow-next-slide-type1"><i class="fa fa-angle-right"></i></button>',
        prevArrow: '<button type="button" class="button-circle-slide-type1 arrow-prev-slide-type1"><i class="fa fa-angle-left"></i></button>',
        responsive: [
            {
                breakpoint: 980, // tablet breakpoint
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 480, // mobile breakpoint
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });

    $('.slide-slick-type3').slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed:500,
        autoplay: true,
        autoplaySpeed: 1000,
        nextArrow: '<button type="button" class="button-circle-slide-type3"><i class="fa fa-angle-right"></i></button>',
        prevArrow: '<button type="button" class="button-circle-slide-type3"><i class="fa fa-angle-left"></i></button>',
    });
  });

$( window ).resize(function() {
    if($(window).width() <= 600){
        $('#main-nav').css('display', 'none');
        $('#sm-main-nav').css('display', 'flex');
        $('#my-nav').css('display', 'none');
    }
    else {
        $('#sm-main-nav').css('display', 'none');
        $('#main-nav').css('display', 'flex');
        $('#sm-my-nav').css('display', 'none');
    }
});

$('#close-btn').click(function() {
    $('#my-nav').css('display', 'none');
    $('#main-nav').css('display', 'flex');
});

$('#open-navbar').click(function() {
    $('#my-nav').css('display', 'flex');
    $('#main-nav').css('display', 'none');
});

$('#sm-open-navbar').click(function() {
    $('#sm-my-nav').toggle();
});

  $('.tech-box-prototype').click(function() {
      $('#'+idBrickSelected).removeClass('view-box-selected');
     $(this).addClass('view-box-selected');
     idBrickSelected = this.id;
     var valueGet = idBrickSelected.split('-');
     row = parseInt(valueGet[0]);
     col = parseInt(valueGet[1]);
     producted = valueGet[2];
     $('#imageThumb').attr('src','assets/img/'+producted+'.jpg');
     $('#imageMain').attr('src','assets/img/'+roomSelected+'/'+producted+'.jpg');
});
$('.room-type').click(function() {
    $('#'+roomSelected).removeClass('room-selected');
   $(this).addClass('room-selected');
   roomSelected = this.id;
   $('#imageMain').attr('src','assets/img/'+roomSelected+'/'+producted+'.jpg');
});
$('.button-nonfill').click(function() {
    if(this.id==='button-select-prev'){
        col = col - 1;
        if(col === 0){
            row = row - 1;
            if(row === 0){
                row = 6;
            }
            col = 6;
        }
    }else if(this.id==='button-select-next'){
        col = col + 1;
        if(col === 7){
            row = row + 1;
            if(row === 7){
                row = 1;
            }
            col = 1;
        }
    }
    var arrayResult = $('[id^='+row+'-'+col+']');
    $('#'+idBrickSelected).removeClass('view-box-selected');
     $(arrayResult[0]).addClass('view-box-selected');
     idBrickSelected = arrayResult[0].id;
     var valueGet = idBrickSelected.split('-');
     row = parseInt(valueGet[0]);
     col = parseInt(valueGet[1]);
     producted = valueGet[2];
     $('#imageThumb').attr('src','assets/img/'+producted+'.jpg');
     $('#imageMain').attr('src','assets/img/'+roomSelected+'/'+producted+'.jpg');
});

$('#dropdownClick').click(function() {
    $('#duAnClick').toggleClass('show-content');
});

$(window).click(function(e) {
  if ($(event.target).hasClass('dropdown') || $(event.target).hasClass('dropdown-i')) {

  }else{
        var dropdowns = $('.dropdown-content');
            var i;
            for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show-content')) {
                openDropdown.classList.remove('show-content');
            }
            }
      }
});


$('.view-box-gallery').click(function() {
    $('#myModal').css('display', 'block');
    slider = $('#light-slider').lightSlider({
        gallery: true,
        item: 1,
        loop: true,
        autoWidth: false,
        slideMargin: 100,
        thumbItem: 9
    });
});

$('.doc-photo-box').click(function() {
    $('#myModal').css('display', 'block');
    slider = $('#light-slider').lightSlider({
        gallery: true,
        item: 1,
        loop: true,
        autoWidth: false,
        slideMargin: 100,
        thumbItem: 9
    });
});

$('.close').click(function() {
    $('#myModal').css('display', 'none');
    slider.destroy();
});