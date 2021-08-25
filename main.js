'use strict';

const body = document.body;
const navBar = document.querySelector('#navbar');
const navBarRect = navBar.getBoundingClientRect();

window.addEventListener('scroll', (e) => {
	navBar.style.backgroundColor = `rgba(141, 191, 248, ${
		window.scrollY / 1000
	})`;

	if (
		window.scrollY > navBarRect.height &&
		!body.classList.contains('scroll')
	) {
		body.classList.add('scroll');
	} else if (window.scrollY <= 200) {
		body.classList.remove('scroll');
	}
});
