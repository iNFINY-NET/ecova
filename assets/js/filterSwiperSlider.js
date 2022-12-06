/**
 * To Filter Current Project Data
 * @param {String} item
 *  @return Element, Class Name
 */
const filterProject = (item) => {
     // Set active button
     var buttons = document.getElementsByClassName('filterBtn');
     for (let j = 0; j < buttons.length; j++) {
          hideClass(buttons[j], "hidden");
          if (buttons[j].id == item) {
               console.log('true', true)
               showClass(buttons[j], "bg-green-500 border-green-500")
               hideClass(buttons[j], "bg-transparent border-white/80")
          } else {
               hideClass(buttons[j], "bg-green-500 border-green-500")
               showClass(buttons[j], "bg-transparent border-white/80")
          };
     }
     // Data filtering
     var x, i;
     var activeElement = [];
     x = document.getElementsByClassName("showAll");
     if (item == "all") item = "";
     for (i = 0; i < x.length; i++) {
          hideClass(x[i], "hidden");
          if (x[i].className.indexOf(item) > -1) {
               showClass(x[i], "block");
               activeElement.push(x[i]);
          } else {
               showClass(x[i], "hidden");
               hideClass(x[i], "block");
          };
     }

     if (activeElement.length < 4) {
          document.getElementById("swiperSliderBtn").style.display = "none";
     } else {
          document.getElementById("swiperSliderBtn").style.display = "block";
     }
}


/**
 * Set active or block class to filtered data
 * @param {element} element 
 * @param {String} name 
 */
const showClass = (element, name) => {
     var i, elementArray, classArray;
     elementArray = element.className.split(" ");
     classArray = name.split(" ");
     for (i = 0; i < classArray.length; i++) {
          if (elementArray.indexOf(classArray[i]) == -1) { element.className += " " + classArray[i]; }
     }
}

/**
 * Set Inactive or hidden classes to unfiltered data
 * @param {element} element 
 * @param {String} name 
 */
const hideClass = (element, name) => {
     var i, elementArray, classArray;
     elementArray = element.className.split(" ");
     classArray = name.split(" ");
     for (i = 0; i < classArray.length; i++) {
          while (elementArray.indexOf(classArray[i]) > -1) {
               elementArray.splice(elementArray.indexOf(classArray[i]), 1);
          }
     }
     element.className = elementArray.join(" ");
}

filterProject("all");
