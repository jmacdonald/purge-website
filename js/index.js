$(document).ready(function() {
  $('.download .button').click(function() {
    if( $('.download ul').css('opacity') == '0' ) {
      $('.download ul').transition({ opacity: 1 }, 150);
      $('.download .button').removeClass('connected');
    }
    else {
      $('.download ul').transition({ opacity: 0 }, 150);
      $('.download .button').addClass('connected');
    }
  });
});
