$(document).ready(function () {
     counter('counter')
 });
 

// COUNTER JS SETUP
function counter(className){
     $('.'+ className).counterUp({
          delay: 20,
          time: 2000
     });
}

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

//Toggle HOME SCREEN SIDEMENU & OVERLAY

const togglesideMenu = document.querySelector("#menuBtn");
const sideMenu = document.querySelector("#sliderMenu");
const toggleOverlay = document.querySelector("#overlay");


//DROPDOWN NESTED MENU

function sidemenuShow(){
     sideMenu.classList.toggle("hidden");
     toggleOverlay.classList.toggle("hidden");
     
}

function sidemenuHide() {
     sideMenu.classList.toggle("hidden");
     toggleOverlay.classList.toggle("hidden");
}


togglesideMenu.addEventListener("click", (e) => {
     sidemenuShow();
})

toggleOverlay.addEventListener("click", (e) => {
     sidemenuHide();
})

//NESTED NAVBAR MENU OPTIONS


//const nestedHome = document.querySelector("#submenuBtn");
//const home = document.querySelector("#submenuHome");

/*function nestedoptionShow(){
     home.classList.toggle('hidden');
}

nestedHome.addEventListener("click", (e)=>{
     nestedoptionShow();
})
8document.addEventListener('click', function(event) {
     const home = document.getElementById('submenuHome');

     if (home.classList.contains('hidden')) {
          console.log('true');

     }
     else{
          console.log('false');
     }
});  */









// ACTIVITIES GALLERY FILTER
// $(window).on("load", function () {
//      var t = $("#gallery");
//      t.isotope({
//           filter: ".showAll",
//      }), 
     
//      $("#filter li").click(function () {
//           $("#filter .gallery-active").removeClass("gallery-active"), $(this).addClass("gallery-active");
//           var i = $(this).attr("data-filter");
//           return t.isotope({
//                filter: i,
//           });
//      });
// });