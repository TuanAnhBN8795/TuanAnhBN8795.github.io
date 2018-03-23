'use strict';
var $ = jQuery;
// navbar
document.getElementById("close-btn").addEventListener("click", myFunction);
document.getElementById("open-navbar").addEventListener("click", myOpenFunction);
document.getElementById("my-navbar").style.display = "none";

function myFunction() {
    document.getElementById("my-navbar").style.display = "none";
    document.getElementById("my-header-home").style.display = "flex";
}
function myOpenFunction() {
    document.getElementById("my-navbar").style.display = "flex";
    document.getElementById("my-header-home").style.display = "none";
}
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}
//
var idBrickSelected = '1-1-product1';
var roomSelected = 'guessroom';
var producted = 'product1';
var row = 1;
var col = 1;
var room = 'guess'
$(document).ready(function(){
    var $window = $(window);
    var windowsize = $window.width();
    var sizeSlide = 5;
    sizeSlide = parseInt($('#slide-history').attr('size'));
    $("#light-slider").lightSlider({
        gallery: true,
        item: 1,
        loop: true,
        slideMargin: 0,
        thumbItem: 9
    });

    $('.slide-slick').slick({
        infinite: false,
        slidesToShow: sizeSlide,
        slidesToScroll: 1,
        nextArrow: '<button type="button" class="button-circle arrow-next"><i class="fa fa-angle-right"></i></button>',
        prevArrow: '<button type="button" class="button-circle arrow-prev"><i class="fa fa-angle-left"></i></button>',
    });
  });
  $('.tech-box-prototype').click(function() {
      $('#'+idBrickSelected).removeClass('view-box-selected');
     $(this).addClass('view-box-selected');
     idBrickSelected = this.id;
     var valueGet = idBrickSelected.split('-');
     row = parseInt(valueGet[0]);
     col = parseInt(valueGet[1]);
     producted = valueGet[2];
     $('#imageThumb').attr("src","assets/img/"+producted+".jpg");
     $('#imageMain').attr("src","assets/img/"+roomSelected+"/"+producted+".jpg");
});
$('.room-type').click(function() {
    $('#'+roomSelected).removeClass('room-selected');
   $(this).addClass('room-selected');
   roomSelected = this.id;
   $('#imageMain').attr("src","assets/img/"+roomSelected+"/"+producted+".jpg");
});
$('.button-nonfill').click(function() {
    if(this.id=='button-select-prev'){
        col = col - 1;
        if(col == 0){
            row = row - 1;
            if(row == 0){
                row = 6;
            }
            col = 6;
        }
    }else if(this.id=='button-select-next'){
        col = col + 1;
        if(col == 7){
            row = row + 1;
            if(row == 7){
                row = 1;
            }
            col = 1;
        }
    }
    var arrayResult = $('[id^='+row+"-"+col+']');
    $('#'+idBrickSelected).removeClass('view-box-selected');
     $(arrayResult[0]).addClass('view-box-selected');
     idBrickSelected = arrayResult[0].id;
     var valueGet = idBrickSelected.split('-');
     row = parseInt(valueGet[0]);
     col = parseInt(valueGet[1]);
     producted = valueGet[2];
     $('#imageThumb').attr("src","assets/img/"+producted+".jpg");
     $('#imageMain').attr("src","assets/img/"+roomSelected+"/"+producted+".jpg");
});


$('.view-box-gallery').click(function() {
    $('#myNav').width('100%');
});
