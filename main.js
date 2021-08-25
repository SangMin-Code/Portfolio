'use strict';

const body = document.body;
const navBar = document.querySelector('#navbar');
const navBarRect = navBar.getBoundingClientRect();

document.addEventListener('scroll', (e) => {
	if (window.scrollY > navBarRect.height) {
		body.classList.add('scroll');
		navBar.classList.add('onscroll');
	} else {
		body.classList.remove('scroll');
		navBar.classList.remove('onscroll');
	}
});
