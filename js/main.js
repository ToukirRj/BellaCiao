
// Selecting window and header elements
var wind = window;
var sticky = document.querySelector('.header-area');


// Adding scroll event listener to window
wind.addEventListener('scroll', function() {
    var scroll = wind.scrollY || wind.pageYOffset;
    if (scroll < 150) {
        sticky.classList.remove('menu-fixed');
    } else {
        sticky.classList.add('menu-fixed');
    }
});


// Preloader
window.addEventListener('load', function() {
    var pageLoader = document.querySelector('.page-loader');
    if (pageLoader) {
        pageLoader.style.display = 'none';
    }
});
