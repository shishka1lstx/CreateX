var silde_menu = document.querySelector(".header__nav");

var btn = document.querySelector(".burger");

btn.addEventListener('click', () => {
    silde_menu.classList.toggle('active-menu')
})