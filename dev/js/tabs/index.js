var tabs = document.querySelectorAll('.tabs .navigation > .item'),
	tabs_items = document.querySelectorAll('.tabs .products > .section');

for(var i = 0; i < tabs.length; i++) {
	tabs[i].addEventListener('click', openTab(i), false);
}

function openTab(index) {
	return function() {
		for(var i = 0; i < tabs_items.length; i++) {
			tabs_items[i].classList.remove('active_tab');
			tabs[i].classList.remove('active');
		}
		tabs_items[index].classList.add('active_tab');
		tabs[index].classList.add('active');
	}
}