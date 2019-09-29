// menu-mobile
$(function () {
  $('[data-toggle="offcanvas"]').on('click', function () {
    $('.offcanvas-collapse').toggleClass('open')
  })
})


// product slide
$(document).ready(function(){
    // vo hieu hoa href="#" 
   $('a[href="#"]').click( function(e) {
      e.preventDefault();
   });
   $('a[href=""]').click( function(e) {
      e.preventDefault();
   });

   //carousel
  $('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      nav:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          1000:{
              items:3
          }
        }
  })
});
