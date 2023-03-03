'use strict';

document.addEventListener('DOMContentLoaded', () => {
    //accordion
    const accordionBody = document.querySelectorAll('.accordion__item__body'),
        accordionHeader = document.querySelectorAll('.accordion__item__header'),
        accordionButton = document.querySelectorAll('.accordion__item__button');

    accordionHeader.forEach((item, index) => {
        item.addEventListener("click", function () {
            accordionBody[index].classList.toggle("visible");
            accordionButton[index].classList.toggle("active");
        });
    })

    //navbar
    const navbarMenuButton = document.querySelector('.navbar__menu'),
        navbarMenuList = document.querySelector('.navbar__menu__list'),
        navbarMenuLinks = document.querySelectorAll('.navbar__menu__list__link'),
        navbarMenuBurger = document.querySelector('.navbar__menu__burger'),
        navbarMenuCross = document.querySelector('.navbar__menu__cross');

    navbarMenuButton.addEventListener('click', () => {
        navbarMenuList.classList.toggle('active');
        navbarMenuButton.classList.toggle('active');
        navbarMenuBurger.classList.toggle('active');
        navbarMenuCross.classList.toggle('active');
    })

    navbarMenuLinks.forEach((link) => {
        link.addEventListener('click', () => {
            navbarMenuList.classList.remove('active');
            navbarMenuBurger.classList.toggle('active');
            navbarMenuCross.classList.toggle('active');
        })
    })



    //swiper
    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        lazy: true,
        loop: true,
        slidesPerView: 2.5,
        spaceBetween: 24,
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                navigation: {
                    nextEl: '.swiper-button-next-md',
                    prevEl: '.swiper-button-prev-md'
                },
            },
            992: {
                slidesPerView: 1.5,
                navigation: {
                    nextEl: '.swiper-button-next-md',
                    prevEl: '.swiper-button-prev-md'
                },
            },
            1241: {
                slidesPerView: 2.5,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            }
        },

        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });

    const swiper1 = new Swiper('.kunden__swiper', {
        direction: 'horizontal',
        slidesPerView: 2.5,
        spaceBetween: 24,

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        320: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 1.5,
        },
        1300: {
            slidesPerView: 2.5,
        }
    });

})