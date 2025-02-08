$(function () {
  var mixer = mixitup('.our-works__content');
})

$(function () {
  $('.hero__slider').slick({
    arrows: false,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    autoplaySpeed: 10000,
    cssEase: 'linear',
    speed: 500,
  });
})