const menu = document.querySelector('.header__menu--adaptive');
const burger = document.querySelector('.header__burger');
const html = document.querySelector('html');

burger.addEventListener('click', () => {
    menu.classList.toggle('active')
    burger.classList.toggle('active')
    html.classList.toggle('lock')
})