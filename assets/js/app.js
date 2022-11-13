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
// HEADER TOGGLE
function headerToggle(activeBtn) {
     const mainNav = document.getElementById('mainNav');
     // const items = document.querySelectorAll(`[data-role="accordionIcon"]`);
     // TOGGLE HEADER BACKGROUND
     hightSlide(mainNav, "h-[27rem]")
     // HIDDEN ALL BUTTON
     // for (let i = 0; i < items.length; i++) {
     //      const item = items[i];
     //      if (item.classList.contains("block")) {
     //           item.classList.remove("block");
     //           item.classList.add("hidden");
     //      }
     // }
     // ACTIVE ITEM SHOW
     //      activeBtn.classList.remove("hidden");
     //      activeBtn.classList.add("block");
}