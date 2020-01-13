$(document).ready(function () {

	const slideGutter = 32;

	var firstScreenSlider = new Swiper('.first-screen-slider', {
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		pagination: {
			el: '.swiper-pagination',
			// clickable: true
		},
		breakpoints: {
			300: {
				simulateTouch: true
			},
			1024: {
				simulateTouch: false
			}
		},
	});


	var newProjectSlider = new Swiper('.new-project-slider', {
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true
		},
		spaceBetween: slideGutter,
	});


	var fullpageSlider = new Swiper('.fullpage-slider', {
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		slidesPerView: 'auto',
		spaceBetween: slideGutter
	});


	var reviewsSlider = new Swiper('.reviews-slider', {
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		// centeredSlides: true,
		spaceBetween: slideGutter,

		breakpoints: {
			300: {
				slidesPerView: 1,
			},
			600: {
				slidesPerView: 2,
			},
			900: {
				slidesPerView: 3
			}
		}
	});


	var showroomsSlider = new Swiper('.showrooms-slider', {
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		// centeredSlides: true,
		spaceBetween: slideGutter,

		breakpoints: {
			300: {
				slidesPerView: 1,
			},
			600: {
				slidesPerView: 2,
			},
			900: {
				slidesPerView: 3
			}
		}
	});


	var plansSlider = new Swiper('.plans-slider', {
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		// centeredSlides: true,
		spaceBetween: slideGutter,

		breakpoints: {
			300: {
				slidesPerView: 1,
			},
			900: {
				slidesPerView: 2
			}
		}
	});


	var interiorSlider = new Swiper('.interior-slider', {
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		// centeredSlides: true,
		spaceBetween: slideGutter,

		breakpoints: {
			300: {
				slidesPerView: 1,
			},
			600: {
				slidesPerView: 2
			},
			900: {
				slidesPerView: 3
			},
			1200: {
				slidesPerView: 4
			}
		}
	});


});
