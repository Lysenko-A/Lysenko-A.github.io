$(document).ready(function(){

		$('.toogle').click(function(){
				$('.drop-toogle').toggleClass('active-login')
		});

		$(".fixed-bg").removeClass("scroll");
		$(window).scroll(function () {
				if($(this).scrollTop() > 110) {
						$(".fixed-bg").addClass("scroll");
				} else  {
						$(".fixed-bg").removeClass("scroll");
				}
		});
// .fadeIn('300')
		$('.search-btn').click(function () {
				$('.form-search').toggleClass('search-active')
		});

		var swiper = new Swiper('.swiper-container', {
				autoplay: {
						delay: 3000,
						disableOnInteraction: false,
				},
				loop: true,
				slidesPerView: 4,
				spaceBetween: 20,
				breakpoints: {
						480: {
								slidesPerView: 1,
								spaceBetween: 10
						},
						768: {
								slidesPerView: 2,
								spaceBetween: 20
						},
						1024: {
								slidesPerView: 3,
								spaceBetween: 20
						}
				}
		});

		$('.toogle-menu').click(function(){
				$('.menu').toggleClass('active-menu')
		});

		$('.fa-angle-down').click(function(){
				$('.drop-link').toggleClass('show')
		});

		var mainNav = $('.drop-link > .link-col > h4');
		$('h4').click(function(e) {
				e.preventDefault();
		});
		mainNav.click(function() {
				$(this).siblings('ul').slideToggle(1000, 'swing');
		});
});