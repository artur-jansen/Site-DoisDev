const hamburguer = document.querySelector('.header-hamburguer');
const nav = document.querySelector('.header-nav');

const toggler = document.querySelector('.navbar-toggler');
const iconBars = toggler.querySelector('.fa-bars');
const iconTimes = toggler.querySelector('.fa-times');

hamburguer.addEventListener('click', () => {
    hamburguer.classList.toggle('active');
    nav.classList.toggle('active');
});

toggler.addEventListener('click', () => {
    iconBars.style.display = iconBars.style.display === 'none' ? 'block' : 'none';
    iconTimes.style.display = iconTimes.style.display === 'none' ? 'block' : 'none';
});

function trocarImagem(novaImagem) {
    const img = document.querySelector('.img-accordion');
    img.classList.add('fade-out');
    setTimeout(() => {
        img.src = novaImagem;
        img.classList.remove('fade-out');
    }, 400);
}

AOS.init({
    duration: 1200,
    easing: 'ease-in-out',
    once: true
});

window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.navbar-burger');
    const menu = document.querySelector('.navbar-menu');

    burger.addEventListener('click', () => {
        const isExpanded = burger.getAttribute('aria-expanded') === 'true';
        burger.setAttribute('aria-expanded', !isExpanded);
        menu.classList.toggle('is-active');
        burger.classList.toggle('active');
    });
});