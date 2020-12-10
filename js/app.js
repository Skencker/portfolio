let burger = document.querySelector('.burger');
let nav = document.querySelector('nav');
let ul = document.querySelector('ul');

let i = 0;


burger.addEventListener('click', () => {
    nav.classList.toggle('transition')
    ul.classList.toggle('transition')
})


