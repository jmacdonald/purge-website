$(document).ready(function() {
  $('.download .button').click(function() {
    if( $('.download ul').css('opacity') == '0' ) {
      $('.download ul').transition({ opacity: 1, marginTop: '30px' }, 350);
    }
    else {
      $('.download ul').transition({ opacity: 0, marginTop: 0 }, 350);
    }
  });

  // Fade-in usage information.
  $('.screenshot').waypoint(function() {
    $('.screenshot').transition({ opacity: 1, right: 0 }, 900);
    $('.keys').transition({ opacity: 1, left: 0 }, 900);
    $('#usage p').transition({ opacity: 1 }, 1900);
  }, { offset: '75%' });

  // Fade features in automatically.
  $('.feature').each(function(index, feature) {
    $(feature).transition({ opacity: 1, delay: 400+index*500}, 1000);
  });
});
