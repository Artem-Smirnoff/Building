$(function () {
  $('.burger').on('click', function () {
    $('.header__menu').toggleClass('header__menu--active');
    $('.burger').toggleClass('burger__close');
    $('.header__btn').toggleClass('header__btn--active');
  })
})