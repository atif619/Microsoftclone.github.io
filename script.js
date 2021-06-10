var toggler = document.querySelector('.box');
var mainsec = document.querySelector('.main-sec');
toggler.addEventListener('click', function () {
    toggler.classList.toggle('active');
    mainsec.classList.toggle('active');
})

$(document).ready(function () {
    $('.sub-btn').click(function () {
        $(this).next('.sub-menu').slideToggle();
        $(this).find('.fa-angle-down').toggleClass('rotate');
    })
})

