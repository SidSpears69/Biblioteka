$(document).ready(function () {
  $.scrollify({
    section: ".scroll-block",
    setHeights: false,
    after: function (index) {
      if (index == 1) {
        $(".page-header__top--main").addClass("fixed");
      }
      else {
        $(".page-header__top--main").removeClass("fixed");
      }
    }
  });
  var mySwiper = new Swiper('.reviews__slider', {
    loop: true,
    slidesPerView: 1,
    centeredSlides: true,
    pagination: {
      el: '.pagination--reviews',
    },
    navigation: {
      nextEl: '.reviews__button--next',
      prevEl: '.reviews__button--prev',
    },
    breakpoints: {
      1200: {
        slidesPerView: 3,
      }
    }
  })

  
  var breakpoint = window.matchMedia('(min-width:768px)');
  function breakpointChecker() {
    if (breakpoint.matches === true) {
      if ($('.gallery__slider')[0].swiper !== undefined) $('.gallery__slider')[0].swiper.destroy(true, true);
      return;
    } else if (breakpoint.matches === false) {
      return enableSlider();
    }
  };
  breakpoint.addListener(breakpointChecker);
  breakpointChecker();
  function enableSlider() {
    mySwiper = new Swiper('.gallery__slider', {
      loop: true,
      slidesPerView: 1,
      autoHeight: true,
      pagination: {
        el: '.pagination--gallery',
      },
    })
  }
  $(".menu__toggle--open").click(function(){
    $("body").addClass("menu-opened");
    $(".menu__wrapper").addClass("open");
  })
  $(".menu__toggle--close").click(function(){
    $("body").removeClass("menu-opened");
    $(".menu__wrapper").removeClass("open");
  })
});
