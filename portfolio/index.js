const html = document.querySelector("html");

const toggleOpen = document.getElementById('toggle-open');

const toggleClose = document.getElementById('toggle-close');

const navMenu = document.getElementsByClassName('nav-menu')[0];

html.addEventListener('click', function () {
    navMenu.classList.remove('open');
});

toggleOpen.addEventListener('click', function (e) {
    e.stopPropagation();
    navMenu.classList.toggle('open');
});

toggleClose.addEventListener('click', function (e) {
    e.stopPropagation();
    navMenu.classList.toggle('open');
});