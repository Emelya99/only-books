$(function () {
    $('.products__slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: true,
        autoplay: false,
        speed: 500,
        pauseOnHover: false,
        nextArrow: '<img class="arrow-next" src="../img/next.svg" alt="icon">',
        prevArrow: '<img class="arrow-prev" src="../img/prev.svg" alt="icon">',
        responsive: [
            {
                breakpoint: 1201,
                settings: {
                  slidesToShow: 4,
                }
              },
            {
              breakpoint: 1025,
              settings: {
                slidesToShow: 3,
              }
            },
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 2,
                }
              },
            {
                breakpoint: 576,
                settings: {
                  slidesToShow: 1,
                }
              },
          ]
    });

})