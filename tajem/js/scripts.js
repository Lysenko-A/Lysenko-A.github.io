$(document).ready(function(){
		$('.slider').bxSlider();

		$('.slider-for').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
				fade: true,
				asNavFor: '.slider-nav'
		});
		$('.slider-nav').slick({
				slidesToShow: 3,
				slidesToScroll: 1,
				asNavFor: '.slider-for',
				dots: true,
				centerMode: true,
				focusOnSelect: true
		});

		$('.menu-toogle').click(function(){
				$('.wrap-nav').toggleClass('active-menu');
				$('.nav').toggleClass('active-menu');
		});

		$(window).scroll(function() {
				if ($(this).scrollTop() >= 700) {
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