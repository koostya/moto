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