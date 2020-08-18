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
})

//네비게이션바 선택시 이동
const navbar_menu = document.querySelector('.nav');
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
})

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
})

//이미지 패이드아웃되게

const title = document.querySelector(".title__img__box");
const title_height = title.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    console.log(`title h ${title_height}`);
    console.log(`window${window.scrollY}`)
    title.style.opacity = 1 - window.scrollY / title_height;
})