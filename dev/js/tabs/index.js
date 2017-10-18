var tabs = document.querySelectorAll('.tabs .navigation > .item'),
	tabs_items = document.querySelectorAll('.tabs .products > .section');

for(var i = 0; i < tabs.length; i++) {
	tabs[i].addEventListener('click', openTab(i), false);
}

createSlick(tabs_items[0]);

function openTab(index) {
	return function() {
		for(var i = 0; i < tabs_items.length; i++) {
			tabs_items[i].classList.remove('active_tab');
			tabs[i].classList.remove('active');

			if(tabs_items[i].classList.contains('slick-initialized')) {
				$(tabs_items[i]).slick('unslick');
			}
		}
		tabs_items[index].classList.add('active_tab');
		tabs[index].classList.add('active');
		createSlick(tabs_items[index]);
	}
}

function createSlick(itemClass) {
	$(itemClass).slick({
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
}