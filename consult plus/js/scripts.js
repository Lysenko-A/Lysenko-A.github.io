$(document).ready(function(){
		$('.multiple-items').slick({
				infinite: true,
				slidesToShow: 5,
				slidesToScroll: 1
		});

		$("#testimonial-slider").owlCarousel({
				items:1,
				itemsDesktop:[1000,1],
				itemsDesktopSmall:[979,1],
				itemsTablet:[768,1],
				pagination:true,
				navigation:true,
				navigationText:["",""],
				autoPlay:false
		});

		$('.menu-toogle').click(function(){
				$('.small-menu').toggleClass('active-menu')
		});

		$(window).scroll(function() {
				if ($(this).scrollTop() >= 800) {
						$('.arrow-up').fadeIn(100);
				} else {
						$('.arrow-up').fadeOut(100);
				}
		});
		$('.arrow-up').click(function() {
				$('body,html').animate({
						scrollTop : 0
				}, 500);
		});

		new WOW().init();
});