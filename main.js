'use strict';

// transparent NavBar when it on the top
const body = document.body;
const navBar = document.querySelector('#navbar');
const homeSection = document.querySelector('#home');
const navBarRect = navBar.getBoundingClientRect();
const homeSectionRect = homeSection.getBoundingClientRect();

document.addEventListener('scroll', (e) => {
	scrollHome();
	scrollNavbar();
});

function scrollNavbar() {
	if (window.scrollY > navBarRect.height) {
		body.classList.add('scroll');
		navBar.classList.add('onscroll');
	} else {
		body.classList.remove('scroll');
		navBar.classList.remove('onscroll');
	}
}

function scrollHome() {
	const homeSectionHeight = homeSectionRect.height;
	if (window.scrollY < homeSectionHeight) {
		homeSection.style.opacity = 1 - window.scrollY / homeSectionHeight;
	}
}

// navbar scrollTo
const navbarMenu = document.querySelector('ul.navbar__menu');
navbarMenu.addEventListener('click', (e) => {
	const target = e.target;
	if (target.classList.contains('navbar__menu__item')) {
		removeActive('navbar__menu__item');
		target.classList.add('active');
		const section = target.dataset.section;
		scrollIntoView(section);
	}
});

//contactme scrollTo
const contactBtn = document.querySelector('.home_btn');
contactBtn.addEventListener('click', (e) => {
	scrollIntoView('#contact');
});

function scrollIntoView(selector) {
	const section = document.querySelector(selector);
	section.scrollIntoView({ behavior: 'smooth' });
}

function removeActive(className) {
	const elements = document.querySelectorAll(`.${className}`);
	elements.forEach((element) => {
		if (element.classList.contains('active')) {
			element.classList.remove('active');
		}
	});
}
