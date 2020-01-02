$(document).ready(function () {

	var firstScreenSlider = new Swiper('.first-screen-slider', {
		loop: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true
		},
		breakpoints: {
			300: {
				simulateTouch: true
			},
			1024: {
				simulateTouch: false
			}
		}
	});


	var fullpageSlider = new Swiper('.fullpage-slider', {
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		slidesPerView: 'auto',
		spaceBetween: 40

	});


	var reviewSlider = new Swiper('.reviews-slider', {
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		slidesPerView: 'auto',
		centeredSlides: true,
		spaceBetween: 32

	});


});
