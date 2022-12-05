$(document).ready(function () {
     counter('counter')
 });

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
function counter(className){
     $('.'+ className).counterUp({
          delay: 20,
          time: 2000
     });
};

//Toggle HOME SCREEN SIDEMENU & OVERLAY

const togglesideMenu = document.querySelector("#menuBtn");
const sideMenu = document.querySelector("#sliderMenu");
const toggleOverlay = document.querySelector("#overlay");
