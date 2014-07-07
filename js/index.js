$(document).ready(function() {
  $('.download .button').click(function() {
    if( $('.download ul').is(':visible') ) {
      $('.download ul').hide();
      $('.download .button').removeClass('connected');
    }
    else {
      $('.download ul').show();
      $('.download .button').addClass('connected');
    }
  });
});
