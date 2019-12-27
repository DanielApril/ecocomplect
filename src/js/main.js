$(document).ready(function () {
	var firstScreenSlider = new Swiper('.first-screen-slider', {
		// Optional parameters
		loop: true,

		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true
		},
	})
})
