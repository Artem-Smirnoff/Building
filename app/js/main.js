$(function () {
  $('.burger').on('click', function () {
    $('.header__menu').toggleClass('header__menu--active');
    $('.burger').toggleClass('burger__close');
    $('.header__btn').toggleClass('header__btn--active');
  })
});

$(function () {

      $(".rate-star").rateYo({
        rating: 5,
        starWidth: "12px",
        readOnly: true
      });
});

$(".rating-star").rateYo({
  starWidth: '16px',
  normalFill: '#d2d1d1',
  ratedFill: '#febb35',
  readOnly: true,
  spacing: '4px',
  starSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path d="M0.285039 6.16429C0.340001 5.99457 0.486223 5.87088 0.662263 5.84526L5.60768 5.12448L7.81939 0.629902C7.8981 0.469903 8.06058 0.368622 8.23846 0.368622C8.41637 0.368622 8.57883 0.469903 8.65756 0.629902L10.8694 5.12448L15.8147 5.84526C15.9907 5.87088 16.137 5.99457 16.1919 6.16426C16.2469 6.33397 16.2011 6.52025 16.0737 6.64478L12.4953 10.1433L13.3399 15.0834C13.37 15.2593 13.2979 15.437 13.154 15.5419C13.0726 15.6012 12.9761 15.6314 12.8792 15.6314C12.8048 15.6314 12.7302 15.6136 12.6618 15.5775L8.23849 13.2451L3.81534 15.5775C3.65784 15.6605 3.46706 15.6467 3.32315 15.5418C3.17923 15.437 3.1071 15.2592 3.13717 15.0833L3.98207 10.1433L0.403282 6.64475C0.27591 6.52025 0.230015 6.33397 0.285039 6.16429Z"/></svg>'
});
