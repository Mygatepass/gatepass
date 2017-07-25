 $(document).ready(function() {

 	$(".button-collapse").sideNav({
 		menuWidth: 550,
 	});
 	$('.modal').modal();
 	$("select[required]").css({
    display: "inline",
    height: 0,
    padding: 0,
    width: 0
  });
 	$('#myButton').click(function(){
    if( $('#name').val() == '' || $('#contact').val() =='' || $('#email').val() ==''){
      alert('Please Enter all the fields');
    }
    else {
    	$('#modal1').modal('open');
    	return false;
    }

  });

  $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

 });
