$(document).ready(function () {
    currentProjectSwiper('all');
});

/**
 * Current Project Slider
 */
 function currentProjectSwiper(item) {
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
