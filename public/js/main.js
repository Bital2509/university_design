$('#news-button-one').click(function () {
    $('#news-button-one').addClass('menu__button-active')
    $('#news-button-two').removeClass('menu__button-active')
    $('#swiper-three').addClass('swiper-active');
    $('#swiper-four').removeClass('swiper-active');
})
$('#news-button-two').click(function () {
    $('#news-button-two').addClass('menu__button-active')
    $('#news-button-one').removeClass('menu__button-active')
    $('#swiper-four').addClass('swiper-active');
    $('#swiper-three').removeClass('swiper-active');
})