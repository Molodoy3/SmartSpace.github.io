"use strict";
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';
import { delegationClick } from './modules/script.js';
import { headerScroll } from './modules/script.js';
import { MousePRLX } from './modules/parallax-mouse.js';
import "./modules/lightgallery.min.js"
import { isMobile } from './modules/functions.js';
import { formValidate } from './modules/formValidate.js';
import { animOnScroll } from './modules/animOnScroll.js';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger.js';
gsap.registerPlugin(ScrollTrigger);
import { ScrollSmoother } from 'gsap/ScrollSmoother.js';
gsap.registerPlugin(ScrollSmoother);

/* import { MousePRLX } from "./modules/parallax-mouse.js"; */
window.addEventListener("load", windowLoad);
function windowLoad() {
    document.body.classList.add('load');
    delegationClick();
    headerScroll();
    initSliders();
    if (!isMobile()) {
        const MoPRLX = new MousePRLX();
    }
    animOnScroll();
    //Одинаковая ширина кнопки и декора
    const buttonMainBlock = document.querySelector('.main-block__button');
    if (buttonMainBlock) {
        if (window.innerWidth > 479.98 && window.innerWidth < 992.98) {
            buttonMainBlock.style.cssText = `flex: 0 0 ${(window.innerWidth * 0.354) - 10}px`;
        }
        window.addEventListener('resize', (e) => {
            if (window.innerWidth > 479.98 && window.innerWidth < 992.98) {
                buttonMainBlock.style.cssText = `flex: 0 0 ${(window.innerWidth * 0.354) - 10}px`;
            } else{
                buttonMainBlock.style.cssText = `flex: 1 1 auto`;
            }
        });

    }

    formValidate();


    window.addEventListener('scroll', () => {

    });
    //Создание плавного скролла
    ScrollSmoother.create({
        wrapper: '.wrapper',
        content: '.content',
        smooth: 1.4,
        effects: true,
    });
    //Инициализация слайдера
    function initSliders() {
        const slider = document.querySelector('.slider-main-block');
        if (slider) {
            new Swiper(slider, {
                modules: [Navigation, Pagination, Autoplay],
                wrapperClass: 'slider-main-block__wrapper',
                slideClass: 'slider-main-block__slide',
                navigation: {
                    prevEl: '.slider-main-block__arrow_prev',
                    nextEl: '.slider-main-block__arrow_next',
                },
                direction: 'horizontal',
                slidesPerView: 1,
                loop: true,
                speed: 800,
                observer: true,
                observeParents: true,
                observeSlideChildren: true,
                spaceBetween: 10,
            });
        }
    }
}