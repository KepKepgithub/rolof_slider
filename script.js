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
  // when user opens page load the animations onto the first slide
window.onload = ()=>{
  const active_slide_image = document.querySelector(".swiper-slide-active .slide_image");
  // "New product text"
  const active_slide_text1 = document.querySelector(".swiper-slide-active .slider_content span");
  // Product description text
  const active_slide_text2 = document.querySelector(".swiper-slide-active .slider_content h1");

  active_slide_image.classList.add("slide_animation");
  active_slide_text1.classList.add("slide_animation");
  active_slide_text2.classList.add("slide_animation");
}
  mySwiper.on('slideChangeTransitionEnd', function () {
    // Removes the class from all other slides 
    const all_slides_image = document.querySelectorAll(".swiper-slide .slide_image");
    const all_slides_text1 = document.querySelectorAll(".swiper-slide .slider_content span");
    const all_slides_text2 = document.querySelectorAll(".swiper-slide .slider_content h1");
    all_slides_image.forEach((e)=>{
      e.classList.remove("slide_animation");
    })
    all_slides_text1.forEach((e)=>{
      e.classList.remove("slide_animation");
    })
    all_slides_text2.forEach((e)=>{
      e.classList.remove("slide_animation");
    })
    // adds the class to the active 
    // QUERRIES NEED TO BE UPPDATED EVERY TIME THE SLIDE CHANGES THAT'S WHY THEY ARE HERE
    const active_slide_image = document.querySelector(".swiper-slide-active .slide_image");
    // "New product text"
    const active_slide_text1 = document.querySelector(".swiper-slide-active .slider_content span");
    // Product description text
    const active_slide_text2 = document.querySelector(".swiper-slide-active .slider_content h1");

    console.log('slide changed');
    active_slide_image.classList.add("slide_animation");
    active_slide_text1.classList.add("slide_animation");
    active_slide_text2.classList.add("slide_animation");
  });