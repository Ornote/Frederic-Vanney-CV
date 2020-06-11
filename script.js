$(document).ready( function () {
  /* Anim link */
  $('a[href^="#"]').click(function(){  
    var id = $(this).attr("href");
    var offset = $(id).offset().top 
      $('html, body').animate({scrollTop: offset}, 'slow'); 
      return false;  
    });

  /* Go Top */
	var btn = $('.go-top');
	$(window).scroll(function() {
	  if ($(window).scrollTop() > 30) {
	    btn.addClass('show');
	  } else {
	    btn.removeClass('show');
	  }
	});
	btn.on('click', function(e) {
	  e.preventDefault();
	  $('html, body').animate({scrollTop:0}, '300');
	});
	
	/* Modal */
	$('.modal-toggle').on('click', function(e) {
	  e.preventDefault();
	  $('.modal').toggleClass('is-visible');
	});

	/* Anchor */
	$(window).scroll(function () {
        var scrollDistance = $(window).scrollTop();

        $('.detail-section').each(function (i) {
          if ($(this).position().top <= scrollDistance) {
            $('.navigation a.active').removeClass('active');
            $('.navigation a').eq(i).addClass('active');
          }
        });
      }).scroll();
}) 
