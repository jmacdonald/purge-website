$(document).ready(function() {
  $('.download .button').click(function() {
    if( $('.download ul').css('opacity') == '0' ) {
      $('.download .button').addClass('active');
      $('.download ul').transition({ opacity: 1, marginTop: '30px' }, 350);
      $('.download #checksum').transition({ opacity: 1 }, 350);
      $('#features').transition({ marginTop: 50 }, 350);

      // Highlight the first download option.
      $('.download #releases a').first().mouseenter();
    }
    else {
      $('.download .button').removeClass('active');
      $('.download ul').transition({ opacity: 0, marginTop: 0 }, 350);
      $('.download #checksum').transition({ opacity: 0 }, 350);
      $('#features').transition({ marginTop: 0 }, 350);
    }
  });

  $('.download #releases a').bind('mouseenter click', function(event) {
    link = $(this);

    // Un-highlight all other download links.
    $('.download #releases a').removeClass('highlight');

    // Highlight this download link.
    link.addClass('highlight');

    // Populate the checksum area with the right value.
    $('#checksum').html(link.attr('data-checksum'));
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

  $('.command').click(function() { $('.command').select(); });
});
