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

// WIDTH SLIDE
function widthSlide(id) {
     const navigation = id.querySelector('nav');

     if (id.classList.contains("invisible")) {
          id.classList.remove("opacity-0", "invisible");
          navigation.classList.add("sidebarShow");
     } else {
          id.classList.add("opacity-0", "invisible");
          navigation.classList.remove("sidebarShow");
     }
}

// MENU TOGGLE
function menuToggle(btn) {
     const dropdown = btn.nextElementSibling;
     hightSlide(dropdown, 'h-fit');
}
