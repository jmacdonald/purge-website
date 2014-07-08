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

  $('.keys').waypoint(function() {
    $('.keys').transition({ opacity: 1, top: 0 }, 900);
  }, { offset: '50%' });

  // Fade features in automatically.
  $('.feature').each(function(index, feature) {
    $(feature).transition({ opacity: 1, delay: 500+index*800}, 1000);
  });
});
