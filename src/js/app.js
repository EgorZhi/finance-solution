import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

/*
import Swiper, { Navigation, Pagination } from 'swiper';
const swiper = new Swiper();
*/

// Меню бургер
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.header__menu');
if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		// Добавляем класс _active для body для того чтобы
		// убрать возможность прокрутки сайт при открытом меню "бургер"
		document.body.classList.toggle('_lock');
		// Добавляем класс _active для menu__icon для ее анимирования
		iconMenu.classList.toggle('_active');
		// Добавляем класс _active для header__menu для анимирования
		// состояния появления и исчезания блока
		menuBody.classList.toggle('_active');
	});
}