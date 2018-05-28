'use strict';
var $ = jQuery;
//
var idBrickSelected = '1-1-product1';
var roomSelected = 'guessroom';
var producted = 'product1';
var row = 1;
var col = 1;
var slider;
$(document).ready(function(){
    $('#defaultOpen').click();

    var containerNav = $('#container-nav');
    var widthScreen = $(window).width();
    var heightScreen = $(window).height();
    containerNav.css('display', 'none');
    $('#sm-container-nav').css('display', 'none');
    if($(window).width() <= 600){
        $('#header-nav').css('display', 'none');
        $('#sm-header-nav').css('display', 'flex');
    }
    else {
        $('#sm-header-nav').css('display', 'none');
        $('#header-nav').css('display', 'flex');
    }

    // Check height of screen
    if(heightScreen > widthScreen && widthScreen > 600) {
        containerNav.css('height', '50vh');
        var wrapper = $('.nav-session-2 .wrapper');
        var tabLayout1 = $('.nav-session-2 .tab-layout1');
        var layout3 = $('.nav-session-2 .layout3');
        var layout2 = $('.nav-session-2 .layout2');
        var socialDiv = $('.nav-session-3 .social-div');
        $('.wrapper .image-show').css('height', '50vh');
        tabLayout1.css('padding-left', '10px');
        wrapper.css('padding-top', '2vh');
        socialDiv.css('margin-top', '10vh');
        socialDiv.css('margin-bottom', '10vh');
        layout2.css('height', '50vh');
        layout3.css('height', '50vh');
        $('#ecocarat-tab').css('padding-top', '8vh');
        $('#tech-ecocarat-tab').css('padding-top', '10vh');
        $('#home-page-introduce').css('padding-top', '14vh');
        $('#reference-project-tab').css('padding-top', '17vh');
        $('#phoi-mau-gach-introduce').css('padding-top', '19vh');
        $('#shop-tab').css('padding-top', '16vh');
        $('#catalogue-tab').css('padding-top', '16vh');
        $('#news-feed-introduce').css('padding-top', '19vh');
    }
    // slide custom
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
        nextArrow: '<button type="button" class="button-circle-slide-type2 arrow-next-slide-type2"><i class="fa fa-angle-right"></i></button>',
        prevArrow: '<button type="button" class="button-circle-slide-type2 arrow-prev-slide-type2"><i class="fa fa-angle-left"></i></button>',
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
        autoplaySpeed: 3000,
        nextArrow: '<button type="button" class="button-circle-slide-type3"><i class="fa fa-angle-right"></i></button>',
        prevArrow: '<button type="button" class="button-circle-slide-type3"><i class="fa fa-angle-left"></i></button>',
    });

    $('.slide-slick-type4').slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed:500,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: '<button type="button" class="button-circle-slide-type4"></i></button>',
        prevArrow: '<button type="button" class="button-circle-slide-type4"></button>',
    });

    $('.room-type-slide').slick({
        dots: false,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
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
    

    //scroll event
    // GENERAL SETTING
    window.sr = ScrollReveal({ reset: true });

    // Custom Settings
    sr.reveal('.demo-scroll', {
        origin: 'right',
        duration: 2200
    });
  });

$( window ).resize(function() {
    if($(window).width() <= 600){
        $('#header-nav').css('display', 'none');
        $('#sm-header-nav').css('display', 'flex');
        $('#sm-container-nav').css('display', 'none');
        $('#container-nav').css('display', 'none');
    }
    else {
        $('#sm-header-nav').css('display', 'none');
        $('#header-nav').css('display', 'flex');
        $('#sm-container-nav').css('display', 'none');
        $('#container-nav').css('display', 'none');
    }

    var wrapper = $('.nav-session-2 .wrapper');
    var tabLayout1 = $('.nav-session-2 .tab-layout1');
    var layout3 = $('.nav-session-2 .layout3');
    var layout2 = $('.nav-session-2 .layout2');
    var socialDiv = $('.nav-session-3 .social-div');
    if($(window).height() > $(window).width() && $(window).width() > 600) {
        $('#container-nav').css('height', '50vh');
        $('.wrapper .image-show').css('height', '50vh');
        tabLayout1.css('padding-left', '10px');
        wrapper.css('padding-top', '2vh');
        socialDiv.css('margin-top', '10vh');
        socialDiv.css('margin-bottom', '10vh');
        layout2.css('height', '50vh');
        layout3.css('height', '50vh');
        $('#ecocarat-tab').css('padding-top', '8vh');
        $('#tech-ecocarat-tab').css('padding-top', '10vh');
        $('#home-page-introduce').css('padding-top', '14vh');
        $('#reference-project-tab').css('padding-top', '17vh');
        $('#phoi-mau-gach-introduce').css('padding-top', '19vh');
        $('#shop-tab').css('padding-top', '16vh');
        $('#catalogue-tab').css('padding-top', '16vh');
        $('#news-feed-introduce').css('padding-top', '19vh');
    }
    else if($(window).height() < $(window).width()) {
        $('#container-nav').css('height', '100vh');
        $('.wrapper .image-show').css('height', '100vh');
        tabLayout1.css('padding-left', '30px');
        wrapper.css('padding-top', '4.5vh');
        socialDiv.css('margin-top', '20vh');
        socialDiv.css('margin-bottom', '30vh');
        layout2.css('height', '100vh');
        layout3.css('height', '100vh');
        $('#ecocarat-tab').css('padding-top', '16vh');
        $('#tech-ecocarat-tab').css('padding-top', '21vh');
        $('#home-page-introduce').css('padding-top', '34vh');
        $('#reference-project-tab').css('padding-top', '35vh');
        $('#phoi-mau-gach-introduce').css('padding-top', '44vh');
        $('#shop-tab').css('padding-top', '35vh');
        $('#catalogue-tab').css('padding-top', '35vh');
        $('#news-feed-introduce').css('padding-top', '44vh');
    }
});

    $('#close-btn').click(function() {
        $('#container-nav').css('display', 'none');
        $('#header-nav').css('display', 'flex');
    });

    $('#open-navbar').click(function() {
        $('#container-nav').css('display', 'flex');
        $('#header-nav').css('display', 'none');
    });

    $('#sm-open-navbar').click(function() {
        $('#sm-container-nav').toggle();
    });

    // control mobile nav
    var smProduct = $('#sm-product-tab-show');
    var smTech = $('#sm-tech-tab-show');
    var smLib = $('#sm-lib-tab-show');
    var smSys = $('#sm-sys-tab-show');
    var smDoc = $('#sm-doc-tab-show');
    $('#toggle-product-tab').click(function() {
        smProduct.toggle();
        if(smTech.css('display')==='block'){
            smTech.css('display', 'none');
        }
        if(smLib.css('display')==='block'){
            smLib.css('display', 'none');
        }
        if(smDoc.css('display')==='block'){
            smDoc.css('display', 'none');
        }
        if(smSys.css('display')==='block'){
            smSys.css('display', 'none');
        }
    });
    $('#toggle-tech-tab').click(function() {
        smTech.toggle();
        if(smProduct.css('display')==='block'){
            smProduct.css('display', 'none');
        }
        if(smLib.css('display')==='block'){
            smLib.css('display', 'none');
        }
        if(smDoc.css('display')==='block'){
            smDoc.css('display', 'none');
        }
        if(smSys.css('display')==='block'){
            smSys.css('display', 'none');
        }
    });
    $('#toggle-lib-tab').click(function() {
        smLib.toggle();
        if(smTech.css('display')==='block'){
            smTech.css('display', 'none');
        }
        if(smProduct.css('display')==='block'){
            smProduct.css('display', 'none');
        }
        if(smDoc.css('display')==='block'){
            smDoc.css('display', 'none');
        }
        if(smSys.css('display')==='block'){
            smSys.css('display', 'none');
        }
    });
    $('#toggle-sys-tab').click(function() {
        smSys.toggle();
        if(smTech.css('display')==='block'){
            smTech.css('display', 'none');
        }
        if(smLib.css('display')==='block'){
            smLib.css('display', 'none');
        }
        if(smDoc.css('display')==='block'){
            smDoc.css('display', 'none');
        }
        if(smProduct.css('display')==='block'){
            smProduct.css('display', 'none');
        }
    });
    $('#toggle-doc-tab').click(function() {
        smDoc.toggle();
        if(smTech.css('display')==='block'){
            smTech.css('display', 'none');
        }
        if(smLib.css('display')==='block'){
            smLib.css('display', 'none');
        }
        if(smProduct.css('display')==='block'){
            smDoc.css('display', 'none');
        }
        if(smSys.css('display')==='block'){
            smSys.css('display', 'none');
        }
    });
    $('#toggle-internal-tab').click(function() {
        $('#sm-internal-tiles-show').toggle();
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

$('.dropdownClick').click(function() {
    $(this).siblings('.duAnClick').toggleClass('show-content');
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

$('.view-box-photo').click(function() {
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

$('.tablinks').click(function() {
    var i, tabcontent, tablinks;
    var selector;
    tabcontent = $('.tabcontent');
    for (i = 0; i < tabcontent.length; i++) {
        $(tabcontent[i]).css('display', 'none');
    }
    var selector = $(this).data('selector');
    $('#'+selector).css('display', 'flex');

    tablinks = $('.tablinks');
    for (i = 0; i < tablinks.length; i++) {
        $(tablinks[i]).removeClass('menu-selected');
    }
    $(this).addClass('menu-selected');
});

function initialize() {
    var locationLatLng = {lat: 21.0081751, lng: 105.7978339};
    var mapOptions = {
        zoom: 15,
        center: locationLatLng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var mapCanvas = document.createElement("div");
    mapCanvas.id = "canvas";
    mapCanvas.style.width = "100%";
    mapCanvas.style.height = "450px"
    $('#image-show-ggapi').append(mapCanvas);
    var map = new google.maps.Map(mapCanvas, mapOptions);
    var marker = new google.maps.Marker({
        position: locationLatLng,
        title: "Tòa nhà Charmvit Tower",
      });
      marker.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);