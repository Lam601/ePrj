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
  // $('.owl-carousel').owlCarousel({
  //     loop:true,
  //     margin:10,
  //     nav:true,
  //     responsive:{
  //         0:{
  //             items:1
  //         },
  //         600:{
  //             items:2
  //         },
  //         1000:{
  //             items:3
  //         }
  //       }
  // })
});


function check(){
    var firstName = document.getElementById('firstName').value;
    var lastName  = document.getElementById('lastName').value;
    var email     = document.getElementById('email').value;
    var phone     = document.getElementById('phone').value; 
    var date      = document.getElementById('date').value;
    if (firstName) {
      if (lastName) {
        if (email) {
          if (phone) {
            if (date) {
              alert("You have successfully submitted the request. Someone to verify soon!");
            }
          }
        }
      }
    } else {
      // alert('a');
      return false;
    }
}


