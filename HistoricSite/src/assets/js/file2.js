$(function() {
  $('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    appendArrows: $('.your-class-arrow'),
    prevArrow: '<button id="prev" type="button" class="slick-prev"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',
    nextArrow: '<button id="next" type="button" class="slick-next"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>'
  })
})


