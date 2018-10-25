$(document).ready(function(){

//слайдер (не стала вдаваться в подробности, тк всего один на странице)
    var slideNow = 1;
    var countSlides;
    if($(document).resize()){
    function resFunc(){ 
    if($(document).width() < 992){
        countSlides = $('.slider').children().length;
    } else if($(document).width() > 1250){
      countSlides = $('.slider').children().length / 3;
    } else if($(document).width() < 1250){
      countSlides = $('.slider').children().length / 2;
    }
  }};
    resFunc(); 
    $('.arrowPrev').click(function(){
         if(slideNow == 1){
           $('.slider').children('.slide1').css('margin-left', '-' + (countSlides - 1) + '00%');
           slideNow = countSlides;
         } else {
            $('.slider').children('.slide1').css('margin-left', '-' + (slideNow - 2) + '00%');
           slideNow--;
         }
     });
    $('.arrowNext').click(function(){
        if(slideNow == countSlides){
            $('.slider').children('.slide1').css('margin-left', '0%');
           slideNow = 1;
        } else {
            $('.slider').children('.slide1').css('margin-left', '-' + slideNow + '00%');
           slideNow++;
        }
    });

    //

    $(document).on("scroll", function(){ 
    if($(document).scrollTop() > 60){
        $('.nav').addClass('scrollNav');
    } else if ($(document).scrollTop() < 60){
        $('.nav').removeClass('scrollNav');
    }
});

    //

    $('.fa-bars').on('click', function(){
      $('.menuSmall').children('ul').toggle();
      $('.open').toggle();
      $('.close').toggle();
    });

    $('.fa-times').on('click', function(){
      $('.menuSmall').children('ul').toggle();
      $('.open').toggle();
      $('.close').toggle();
    });
});