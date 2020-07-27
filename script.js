var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    allowTouchMove: true,
    speed: 1000,
    autoplay: {
        delay: 2000,
      },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }
  })

var slide_content = document.querySelectorAll(".slider_text_wrap span, .slider_text_wrap h1, .slide_image");
window.onload = function(){
  slide_content.forEach((e)=>{
    e.classList.add("slide_animation");
  })
}
  mySwiper.on('slideChangeTransitionStart', function () {
    // when the slide changes hides all the elements
    console.log('slide changed');
    slide_content.forEach((e)=>{
      e.classList.remove("slide_animation");
    })
    // after a short timeout applies the animation (class)
    setTimeout(function(){
    slide_content.forEach((e)=>{
      e.classList.add("slide_animation");
    })
    },640)
  });