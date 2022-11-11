; (function () {
	// Owl Carousel
	var owlCrouselFeatureSlide = function () {
		var owl = $('.owl-carousel1');
		owl.owlCarousel({
			items: 1,
			loop: true,
			margin: 0,
			responsiveClass: true,
			nav: true,
			dots: true,
			smartSpeed: 500,
			navText: [
				"<i class='icon-chevron-left owl-direction'></i>",
				"<i class='icon-chevron-right owl-direction'></i>"
			]
		});

		$('.owl-carousel2').owlCarousel({
			loop: true,
			margin: 10,
			nav: true,
			dots: true,
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 3
				},
				1000: {
					items: 3
				}
			},
			navText: [
				"<i class='icon-chevron-left owl-direction'></i>",
				"<i class='icon-chevron-right owl-direction'></i>"
			]
		})
	};
	var parallax = function () {
		$(window).stellar();
	};

	var contentWayPoint = function () {
		var i = 0;
		$('.animate-box').waypoint(function (direction) {

			if (direction === 'down' && !$(this.element).hasClass('animated')) {

				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function () {

					$('body .animate-box.item-animate').each(function (k) {
						var el = $(this);
						setTimeout(function () {
							var effect = el.data('animate-effect');
							if (effect === 'fadeIn') {
								el.addClass('fadeIn animated');
							} else {
								el.addClass('fadeInUp animated');
							}

							el.removeClass('item-animate');
						}, k * 200, 'easeInOutExpo');
					});

				}, 100);

			}

		}, { offset: '85%' });
	};

	$(function () {
		owlCrouselFeatureSlide();
		contentWayPoint();
		parallax();
	});
}());