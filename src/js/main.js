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
	// const headerHeight = 60;
	const headerHeight = 0;
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

	var sourceButton;
	$('[data-type="open"]').on('click', function() {
		var target = $(this).attr('data-target');
		sourceButton = $(this);
		$(target).slideDown(900).addClass('_active');
		var destination = $(target).offset().top - headerHeight;
		if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
			$('body').animate({ scrollTop: destination }, 1000);
		} else {
			$('html').animate({ scrollTop: destination }, 1000);
		}
		$(this).addClass('_disabled');
		return false;
	});

	$('[data-type="close"]').on('click', function() {
		var target = $(this).parents('.section');
		$(target).slideUp(1000).removeClass('_active');
		sourceButton.removeClass('_disabled');
	});


	// Social cointer
	$('.social__amount').counterUp({
		delay: 10,
		time: 1000
	});



	// Header like "Medium.com"
	// Hide Header on on scroll down
	var didScroll;
	var lastScrollTop = 0;
	var delta = 5;
	var navbarHeight = $('.header').outerHeight();

	$(window).scroll(function (event) {
		didScroll = true;
	});

	setInterval(function () {
		if (didScroll) {
			hasScrolled();
			didScroll = false;
		}
	}, 250);

	function hasScrolled() {
		var st = $(this).scrollTop();

		// Make sure they scroll more than delta
		if (Math.abs(lastScrollTop - st) <= delta)
			return;

		// If they scrolled down and are past the navbar, add class .nav-up.
		// This is necessary so you never see what is "behind" the navbar.
		if (st > lastScrollTop && st > navbarHeight) {
			// Scroll Down
			$('header').removeClass('nav-down').addClass('nav-up');
		} else {
			// Scroll Up
			if (st + $(window).height() < $(document).height()) {
				$('header').removeClass('nav-up').addClass('nav-down');
			}
		}

		lastScrollTop = st;
	}

	$.fancybox.defaults.autoFocus = "false";

});
