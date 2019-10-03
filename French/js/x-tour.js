// menu-mobile
$(function () {
  $('[data-toggle="offcanvas"]').on('click', function () {
    $('.offcanvas-collapse').toggleClass('open')
  })
})

$(document).ready(function(){
    // vo hieu hoa href="#" 
   $('a[href="#"]').click( function(e) {
      e.preventDefault();
   });
   $('a[href=""]').click( function(e) {
      e.preventDefault();
   });
});