var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    allowTouchMove: false,
    speed: 1000,
    autoplay: {
        delay: 1000,
      },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }
  })

  mySwiper.on('slideChange', function () {
    console.log('slide changed');
  });