$(function(){
  $('.banner-section__slider').slick({
    dots: true,
    prevArrow:
      '<button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="./images/slider/arrow-left.svg" alt=""></button>',
    nextArrow:
      '<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="./images/slider/arrow-right.svg" alt=""></button>',
  });

  $('.tab').on('click', function (e) {
    e.preventDefault();

    $($(this).siblings()).removeClass('tab--active');
    $($(this).parent().siblings().find('div')).removeClass(
      'tabs-content--active'
    );

    $(this).addClass('tab--active');
    $($(this).attr('href')).addClass('tabs-content--active');
  });

  $('.product-item__favorite').on('click', function () {
    $(this).toggleClass('product-item__favorite--active');
  });

  // Подключаем слайдер в разделе популярные товары
  $('.product-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow:
      '<button class="product-slider__slider-btn product-slider__slider-btnprev"><img src="./images/slider/arrow-black-left.svg" alt=""></button>',
    nextArrow:
      '<button class="product-slider__slider-btn product-slider__slider-btnnext"><img src="./images/slider/arrow-black-right.svg" alt=""></button>',
  });

  // Подключаем jQuery Form Styler
  $('.filter-style').styler();

  $('.filter__item-drop').on('click', function () {
    $(this).toggleClass('filter__item-drop--active');
    $(this).next().slideToggle(200);
  });

  // Подключаем RangeSlider
  $('.js-range-slider').ionRangeSlider({
    
    type: 'double',
    min: 100000,
    max: 500000,
  });
});