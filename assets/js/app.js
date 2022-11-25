// HIGHT SLIDE
function hightSlide(id, hSize) {
     if (id.classList.contains("h-0")) {
          id.classList.remove("h-0", "opacity-0", "invisible");
          id.classList.add(`${hSize}`, "opacity-100", "visible");
     } else {
          id.classList.add("h-0", "opacity-0", "invisible");
          id.classList.remove(`${hSize}`, "opacity-100", "visible");
     }
}

// COUNTER JS SETUP
$('.counter').counterUp({
     delay: 20,
     time: 2000
});


//DROPDOWN MOBILE MENU

$(document).ready(function () {
     $("#navToggler").each(function (_, navToggler) {
          var target = $(navToggler).data("target");
          $(navToggler).on("click", function () {
               $(target).animate({
                    height: "toggle",
               });
          });
     });
});

//DROPDOWN NESTED MENU
