$(function () {
    $('.slider').slick({
        arrows: false,
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
    });

    $('.header__top-btn').on('click', function() {
        $('.menu').addClass('active'); 
    });

    $('.close__btn').on('click', function () {
        $('.menu').removeClass('active');
    });
});