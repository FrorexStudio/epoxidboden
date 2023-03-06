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

    //calc
    const checkRadio = (selector) => {
        const foo = document.querySelectorAll(`[name=${selector}]`);
        let fooIndex = 0;
        foo.forEach((item, index) => {
            if (item.checked) {
                fooIndex = index;
            }
        })
        return fooIndex;
    }

    const numberWithDots = (num) => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }


    const viewResult = () => {
        const grose = document.querySelector('#grose');
        const beschich = document.querySelector('#beschichtungsdicke');
        const calcResult = document.querySelector('#calcResult');
        const bodensArray = [40, 75, 60];
        const kundentypArray = [1.19, 1];

        if (grose.value >= 0 && beschich.value >= 0 && grose.value !== '' && beschich.value !== '') {
            const result = numberWithDots(Math.floor(grose.value * beschich.value * kundentypArray[checkRadio('Kundentyp')] * bodensArray[checkRadio('Boden')]));
            calcResult.innerHTML = result + '€';
        }
    }

    const calcButton = document.querySelector('#calcButton');
    calcButton.addEventListener('click', (event) => {
        event.preventDefault();
        viewResult();
    });


    //swiper
    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        lazy: true,
        loop: true,
        slidesPerView: 1,
        spaceBetween: 24,
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
        breakpoints: {
            0: {
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
        slidesPerView: 2,
        spaceBetween: 24,

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        breakpoints: {
            0: {
                slidesPerView: 1,
                loop: true
            },
            768: {
                slidesPerView: 1.5
            },
            1439: {
                slidesPerView: 2
            }
        }
    });


    //toast
    let x;
    let toast = document.querySelector("#toast");
    function showToast() {
        clearTimeout(x);
        toast.style.transform = "translateX(0)";
        x = setTimeout(() => {
            toast.style.transform = "translateX(400px)"
        }, 4000);
    }
    function closeToast() {
        toast.style.transform = "translateX(50px)";
    }


    //form
    const form = document.querySelector('#form');
    const scriptUrl = 'https://script.google.com/macros/s/AKfycbwmSzSymMTuOaPhn4UHCeBAv4Kkhm7fdiigb0KrytTID8Q0qLOFxvortsC3oBqB5IoSsQ/exec';
    const submitBtn = document.querySelector('#submit');

    form.addEventListener('submit', e => {
        e.preventDefault();

        submitBtn.disabled = true;
        submitBtn.value = 'Loading...';

        fetch(scriptUrl, { method: 'POST', body: new FormData(form) })
            .then(response => {
                submitBtn.disabled = false;
                submitBtn.value = 'Versenden';
                form.reset();
                showToast();
                response
            })
            .catch(error => {
                submitBtn.disabled = false;
                submitBtn.value = 'Versenden';
                alert('Error', error.message)
            });
    })
})