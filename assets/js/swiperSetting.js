$(document).ready(function () {
     // currentProjectSwiper('all');
     homeBannerSlider();
     footerProductSlider();
     brandLogoSwiper();
     recentWorkSwiper();
});

/**
 * Home Banner Slider
 */
function homeBannerSlider() {
     var swiper = new Swiper(".homeBannerSlider", {
          
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
 * Footer Products Slider
 */
function footerProductSlider() {
     var swiper = new Swiper(".footerSlider", {
          spaceBetween: 1,
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
          // navigation: {
          //      nextEl: ".swiper-button-next",
          //      prevEl: ".swiper-button-prev",
          // },
     });
}


/**
 * Brand Logo Slider
 */

function brandLogoSwiper() {
     var swiper = new Swiper(".brandSwiper", {
          slidesPerView: 1,
          spaceBetween: 1,
          loop: true,
          centeredSlides: true,
          autoplay: {
               delay: 2500,
               disableOnInteraction: false,
          },
          breakpoints: {
               640: {
                    slidesPerView: 3,
               },
               768: {
                    slidesPerView: 3,
               },
               1024: {
                    slidesPerView: 5,
               },
          },
     });
}

/**
 * Recent Work Slider
 */
function recentWorkSwiper() {
     var swiper = new Swiper(".recentWorkSwiper", {
          slidesPerView: 1,
          spaceBetween: 1,
          loop: true,
          // centeredSlides: true,
          autoplay: {
               delay: 2500,
               disableOnInteraction: false,
          },
          navigation: {
               nextEl: ".swiper-button-next",
               prevEl: ".swiper-button-prev",
          },
     });
}

