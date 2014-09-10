(function($) {

	$(function() {
		
		$('body').toggleMenu();
			
	});

})(jQuery);

(function($) {

	$.fn.toggleMenu = function() {
		
		var trigger = $('.menu-trigger');
		
		trigger.click(function() {
			
			if ( $('body').hasClass('menu-active') ) {
				$('body').removeClass('menu-active');
			} else {
				$('body').addClass('menu-active');
			}
			
		});
		
	
	}

})(jQuery);