window.addEventListener('scroll', function () {
    let header = document.querySelector('header');

    header.classList.toggle('scroll__active', window.scrollY > 120);
})