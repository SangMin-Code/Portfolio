'use strict';

const body = document.body;
const navBar = document.querySelector('#navbar');
const navBarRect = navBar.getBoundingClientRect();
const home = document.querySelector('#home');
const homeRect = home.getBoundingClientRect();

// transparent NavBar when it on the top,
// transparent HomeContents when it on some scroll
// scroll to top when arrowbtn clicked
document.addEventListener('scroll', (e) => {
	scrollHome();
	scrollNavbar();
	scrollArrow();
});

// When navbarMenu cilicked scroll to each menu section
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

function scrollNavbar() {
	if (window.scrollY > navBarRect.height) {
		body.classList.add('scroll');
		navBar.classList.add('onscroll');
	} else {
		body.classList.remove('scroll');
		navBar.classList.remove('onscroll');
	}
}

//When Home ContactBtn clicked scroll to contact section
const contactBtn = document.querySelector('.home_btn');
contactBtn.addEventListener('click', (e) => {
	scrollIntoView('#contact');
});

function scrollHome() {
	const homeContainer = document.querySelector('.home__container');
	const homeContainerRect = homeContainer.getBoundingClientRect();
	const homeContainerHeight = homeContainerRect.height;
	homeContainer.style.opacity = 1 - window.scrollY / homeContainerHeight;
}

// When Arrow btn Click, scroll to top
const arrow = document.querySelector('.arrow');

arrow.addEventListener('click', (e) => {
	scrollIntoView('#home');
});

function scrollArrow() {
	if (window.scrollY > homeRect.height / 2) {
		arrow.classList.add('visible');
	} else {
		arrow.classList.remove('visible');
	}
}

// util
// ScrollInto selector
function scrollIntoView(selector) {
	const section = document.querySelector(selector);
	section.scrollIntoView({ behavior: 'smooth' });
}
//removeActive Class in elements that have same className
function removeActive(className) {
	const elements = document.querySelectorAll(`.${className}`);
	elements.forEach((element) => {
		if (element.classList.contains('active')) {
			element.classList.remove('active');
		}
	});
}

//when works button clicked, reorder project list
const category = document.querySelector('.work__categories');
category.addEventListener('click', (e) => {
	const target = e.target;

	if (target.dataset.project === undefined) {
		return;
	}
	removeActive('category__btn');
	target.classList.add('active');

	const projects = document.querySelectorAll('.project');

	projects.forEach((project) => {
		project.classList.add('invisible');
	});

	switch (target.dataset.project) {
		case 'all':
			projects.forEach((project) => {
				project.classList.remove('invisible');
			});
			break;
		case 'front-end':
			projects.forEach((project) => {
				if (project.dataset.project === 'front-end') {
					project.classList.remove('invisible');
				} else {
					project.classList.add('invisible');
				}
			});
			break;
		case 'back-end':
			projects.forEach((project) => {
				if (project.dataset.project === 'back-end') {
					project.classList.remove('invisible');
				} else {
					project.classList.add('invisible');
				}
			});
			break;
	}
});
