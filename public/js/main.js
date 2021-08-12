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
$('#institute-button-one').click(function () {
    $('#institute-button-one').addClass('menu__button-active')
    $('#institute-button-two').removeClass('menu__button-active')
    $('#institute-button-three').removeClass('menu__button-active')
    $('#general-information').addClass('institute-block__active');
    $('#staff').removeClass('institute-block__active');
    $('#network-resources').removeClass('institute-block__active');
})
$('#institute-button-two').click(function () {
    $('#institute-button-two').addClass('menu__button-active')
    $('#institute-button-one').removeClass('menu__button-active')
    $('#institute-button-three').removeClass('menu__button-active')
    $('#staff').addClass('institute-block__active');
    $('#general-information').removeClass('institute-block__active');
    $('#network-resources').removeClass('institute-block__active');
})
$('#institute-button-three').click(function () {
    $('#institute-button-three').addClass('menu__button-active')
    $('#institute-button-one').removeClass('menu__button-active')
    $('#institute-button-two').removeClass('menu__button-active')
    $('#network-resources').addClass('institute-block__active');
    $('#staff').removeClass('institute-block__active');
    $('#general-information').removeClass('institute-block__active');
})