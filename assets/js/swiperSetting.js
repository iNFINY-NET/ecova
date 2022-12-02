$(document).ready(function () {
     currentProjectSwiper('all');
     homeBannerSlider();
     footerProductSlider();
     brandLogoSwiper();
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
function currentProjectSwiper(item) {
     var swiper = new Swiper(".current-project", {
          slidesPerView: 1,
          spaceBetween: 1,
          loop: false,
          pagination: {
               el: ".swiper-pagination",
               clickable: true,
          },
          breakpoints: {
               640: {
                    slidesPerView: 2,
               },
               768: {
                    slidesPerView: 2,
               },
               1024: {
                    slidesPerView: 4,
               },
          },
          navigation: {
               nextEl: ".swiper-button-next",
               prevEl: ".swiper-button-prev",
          },
     });

     // Filter Slider
     $(".current-project button").addClass("bg-transparent border-white/80");
     $(".current-project button").removeClass("bg-green-500 border-green-500");
     $(`#${item}`).addClass("bg-green-500 border-green-500");
     $(`#${item}`).removeClass("bg-transparent border-white/80");

     if (item == "all") {
          $("[data-filter]").removeClass("non-swiper-slide").addClass("swiper-slide").show();
          swiper.destroy();
     }
     else {
          $(".swiper-slide").not("[data-filter='" + item + "']").addClass("non-swiper-slide").removeClass("swiper-slide").hide();
          $("[data-filter='" + item + "']").removeClass("non-swiper-slide").addClass("swiper-slide").attr("style", null).show();
          // swiper.destroy();
     }
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
