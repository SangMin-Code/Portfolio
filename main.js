'use strict';

// transparent NavBar when it on the top
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

// navbar scrollTo
const navbarMenu = document.querySelector('ul.navbar__menu');
navbarMenu.addEventListener('click', (e) => {
	const target = e.target;
	if (target.classList.contains('navbar__menu__item')) {
		removeActive('navbar__menu__item');
		target.classList.add('active');
		const toSection = target.dataset.section;
		const section = document.querySelector(`#${toSection}`);
		section.scrollIntoView({ behavior: 'smooth' });
	}
});

//contactme scrollTo
const contactBtn = document.querySelector('.home_btn');
contactBtn.addEventListener('click', (e) => {
	const contact = document.querySelector('#contact');
	contact.scrollIntoView({ behavior: 'smooth' });
});

function removeActive(className) {
	const elements = document.querySelectorAll(`.${className}`);
	elements.forEach((element) => {
		if (element.classList.contains('active')) {
			element.classList.remove('active');
		}
	});
}
