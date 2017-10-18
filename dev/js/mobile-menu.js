var burger = document.getElementById('burger'),
		menu = document.getElementById('mobile_menu');

burger.addEventListener('click', function() {
	if(this.classList.contains('active')) {
		menu.style.top = '-100%';
		menu.style.visibility = 'hidden';
		this.classList.remove('active');
	} else {
		menu.style.top = '0%';
		menu.style.visibility = 'visible';
		this.classList.add('active');
	}
});