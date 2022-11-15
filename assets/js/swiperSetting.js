$(document).ready(function () {
     currentProjectSwiper();
     homeBannerSlider();
});

/**
 * Home Banner Slider
 */
function homeBannerSlider() {
     var swiper = new Swiper(".mySwiper", {
          spaceBetween: 30,
          centeredSlides: true,
          autoplay: {
               delay: 2500,
               disableOnInteraction: false,
          },
          loop: true,
          pagination: {
               el: ".swiper-pagination",
               clickable: true,
          },
          navigation: {
               nextEl: ".swiper-button-next",
               prevEl: ".swiper-button-prev",
          },
     });
}

/**
 * Current Project Slider
 */
function currentProjectSwiper() {
     var swiper = new Swiper(".current-project", {
          slidesPerView: 1,
          spaceBetween: 1,
          loop: true,
          pagination: {
               el: ".swiper-pagination",
               clickable: true,
          },
          breakpoints: {
               640: {
                    slidesPerView: 2,
               },
               768: {
                    slidesPerView: 4,
               },
               1024: {
                    slidesPerView: 4,
               },
          },
     });
}