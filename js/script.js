$(document).ready(function() {
   $('.toggle-btn').on('click', () => {
       $('.coupon-wrapper').slideToggle();
   });
    $('.close-btn').on('click', () => {
        $('.coupon-wrapper').slideUp();
    })
});