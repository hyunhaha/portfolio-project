'use strict';
const navbar = document.querySelector('#navbar');
const navbar__height = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    console.log(window.scrollY);
    console.log(`navbarHeight:${navbar__height}`)
    if (scrollY > navbar__height) {
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }
});

//네비게이션바 선택시 이동
function navbartosection(classname) {
    const navbar_menu = document.querySelector(classname);
    navbar_menu.addEventListener('click', (event) => {

        const event_targat = event.target;
        const link = event_targat.dataset.link;
        if (link == null) {
            return;
        } else {
            console.log(event.target.dataset.link);
            const scrolltoview = document.querySelector(link);
            scrolltoview.scrollIntoView({ behavior: "smooth" });
        }
    });
}
navbartosection('.nav');

//네비게이션 엑티브

const icon = document.querySelector(".nav");
icon.addEventListener('click', (event) => {
    console.log(`icon ${icon}`)
    const link = event.target.dataset.link;

    if (link == null) {
        return;
    }
    const active = document.querySelector('.icon.active')
    active.classList.remove('active');
    event.target.classList.add('active');
});


//레시피전체보기 선택시 이동
const recipe = document.querySelector(".recipe__again");
recipe.addEventListener('click', (event) => {
    console.log(recipe);
    console.log(event.target.dataset.link);
    const recipe_target = event.target;
    const recipe__link = recipe_target.dataset.link;
    console.log(recipe__link);
    const scroll = document.querySelector(recipe__link);
    scroll.scrollIntoView({ behavior: "smooth" });
});

//이미지 패이드아웃되게
function opacity(classname) {
    const title = document.querySelector(classname);
    const title_height = title.getBoundingClientRect().height;
    document.addEventListener('scroll', () => {
        console.log(`title h ${title_height}`);
        console.log(`window${window.scrollY}`)
        title.style.opacity = 1 - window.scrollY / title_height;
    });
}
opacity('.title__img__box');
//opacity('.creator__img__box')


//top내비게이션 버튼
const top__nav = document.querySelector(".top");
const title = document.querySelector(".title__img__box");
const title_h = title.getBoundingClientRect().height;
document.addEventListener('scroll', () => {

    if (scrollY > title_h) {
        top__nav.classList.add('reveal');
    } else {
        top__nav.classList.remove('reveal');
    }
});

navbartosection(".top");


//item filtering
const category__bar = document.querySelector(".category");
const store__items = document.querySelector(".store__list");
const item = document.querySelectorAll('.store__item')

category__bar.addEventListener('click', (event) => {
    const store__filter = event.target.dataset.filter || event.target.parentNode.dataset.filter;

    const selected = document.querySelector('.category__btn.selected');
    selected.classList.remove('selected');
    const target = event.target.nodeName === 'BUTTON' ? event.target : event.target.parentNode;
    target.classList.add('selected');
    if (store__filter == null) {
        return;
    }
    store__items.classList.add('anima__out');

    setTimeout(() => {
        item.forEach((item) => {
            console.log(item.dataset.type);
            if (item.dataset.type === store__filter || store__filter === '*') {
                item.classList.remove('invisible');
            } else {
                item.classList.add('invisible');
            }
        })
        store__items.classList.remove('anima__out');
    }, 300);

});