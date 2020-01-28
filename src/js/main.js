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
		spaceBetween: slideGutter,
		centeredSlides: true,
	});


	var reviewsSlider = new Swiper('.reviews-slider', {
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		spaceBetween: slideGutter,

		breakpoints: {
			300: {
				slidesPerView: 1,
				// slidesOffsetBefore: 20,
				// slidesOffsetAfter: 20,
			},
			600: {
				slidesPerView: 2,
			},
			900: {
				slidesPerView: 2,
			},
			1200: {
				slidesPerView: 3,
				slidesOffsetBefore: 120,
				slidesOffsetAfter: 120,
			}
		}
	});


	var showroomsSlider = new Swiper('.showrooms-slider', {
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		spaceBetween: slideGutter,

		breakpoints: {
			300: {
				slidesPerView: 1,
				// slidesOffsetBefore: 48,
				// slidesOffsetAfter: 48,
			},
			600: {
				slidesPerView: 2,
			},
			900: {
				slidesPerView: 3,
				slidesOffsetBefore: 120,
				slidesOffsetAfter: 120,
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
			1000: {
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


	// Mobile menu
	var mobileMenu = $('.mobile-menu');
	var mobileMenuOpen = $('.header__menu-button');
	var mobileMenuClose = $('.mobile-menu__close');
	var pageBackdrop = $('.page-backdrop');
	var body = $('body');

	mobileMenuOpen.on('click', function() {
		mobileMenu.addClass('_visible');
		pageBackdrop.fadeIn(700);
		body.addClass('no-scroll');
	});

	mobileMenuClose.on('click', function() {
		mobileMenu.removeClass('_visible');
		pageBackdrop.fadeOut(700);
		body.removeClass('no-scroll');
	});

	pageBackdrop.on('click', function () {
		mobileMenu.removeClass('_visible');
		pageBackdrop.fadeOut(700);
		body.removeClass('no-scroll');
	});

	
	// "More" button function
	const headerHeight = 60;
	$('a').click(function () {
		var elementClick = $(this).attr("href");
		var destination = $(elementClick).offset().top - headerHeight;
		if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
			$('body').animate({ scrollTop: destination }, 1000);
		} else {
			$('html').animate({ scrollTop: destination }, 1000);
		}
		return false;
	});

	$('[data-type="open"]').on('click', function() {
		var target = $(this).attr('data-target');
		$(target).slideDown(900).addClass('_active');
		var destination = $(target).offset().top - headerHeight;
		if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
			$('body').animate({ scrollTop: destination }, 1000);
		} else {
			$('html').animate({ scrollTop: destination }, 1000);
		}
		return false;
	});

	$('[data-type="close"]').on('click', function() {
		var target = $(this).parents('.section');
		$(target).slideUp(1000).removeClass('_active');
	});


	// Scroll scale down images
	var scaleDown = 1;
	$(window).on('scroll', function() {
		var offset = $('#tech').offset().top;
		scaleDown ++;

		// console.log($(window).scrollTop());
		
		
		$('._anim').css(
			{
				"transform": "translateX("+scaleDown+")"
			}
		);
	});


	// Social cointer
	$('.social__amount').counterUp({
		time: 1000
	});

});
