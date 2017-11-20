$('.brands_carusel').slick({
  slidesToShow: 5,
  swipeToSLide: true,
  centerMode: true,
  variableWidth: true,
  prevArrow: '<div class="slick-prev"></div>',
  nextArrow: '<div class="slick-next"></div>',
  arrows: true,
  responsive: [
	  {
	    breakpoint: 992,
	    settings: {
	      slidesToShow: 3,
		  variableWidth: true,
          centerMode: true
	    }
	  },
	  {
	    breakpoint: 320,
	    settings: {
	      slidesToShow: 1,
		  variableWidth: false,
          centerMode: true
	    }
	  }
  ]
});

$('.big_product_carusel').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
  centerMode: true,
  variableWidth: true,
	arrows: false,
	fade: true,
	asNavFor: '.small_product_carusel'
});

$('.small_product_carusel').slick({
	slidesToShow: 4,
	slidesToScroll: 1,
	asNavFor: '.big_product_carusel'
});

$('.simple_products .section.tabs_slider').slick({
	slidesToShow: 3,
	swipeToSLide: true,
	centerMode: true,
	variableWidth: true,
	responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
				variableWidth: false,
				centerMode: false
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1
			}
		}
	]
});