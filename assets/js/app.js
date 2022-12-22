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

// INPUT TOGGLE
function inputToggle(field) {
     const input = field.target
     const label = input.nextElementSibling;

     if (field.key == "Backspace" && input.value.length <= 1) {
          input.classList.remove("pt-3");
          label.classList.add("opacity-0", "invisible");
          label.classList.remove("opacity-100", "visible");
     } else {
          input.classList.add("pt-3");
          label.classList.remove("opacity-0", "invisible");
          label.classList.add("opacity-100", "visible");
     }
}

// DROPDOWN TOGGLE
function dropdown(btn) {
     const dropdownMenu = document.getElementById("dropdownMenu");

     if (btn.classList.contains("fa-chevron-down")) {
          hightSlide(dropdownMenu, 'h-[27rem]');
          btn.classList.remove("fa-chevron-down");
          btn.classList.add("fa-chevron-up");
     }else{
          hightSlide(dropdownMenu, 'h-[27rem]');
          btn.classList.remove("fa-chevron-up");
          btn.classList.add("fa-chevron-down");
     }
}