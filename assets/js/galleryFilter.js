$(document).ready(function () {
    filterGallery("all");
    filterSlider("filterWildlife");
    activeButton();
});

/**
 * To Filter Activities Gallery Data
 * @param {String} item
 *  @return Element, Class Name
 */
const filterGallery = (item) => {
    var x, i;
    x = $(".showAll");
    if (item == "all") item = "";
    for (i = 0; i < x.length; i++) {
        hideGallery(x[i], "hidden");
        if (x[i].className.indexOf(item) > -1) {
            showGallery(x[i], "block")
        } else {
            showGallery(x[i], "hidden")
        };
    }
}



/**
 * To Filter Slider Data
 * @param {String} item
 *  @return Element, Class Name
 */
 const filterSlider = (item) => {
    var x, i;
    x = $(".showWildlife");
    if (item == "filterWildlife") item = "";
    for (i = 0; i < x.length; i++) {
        hideGallery(x[i], "hidden");
        if (x[i].className.indexOf(item) > -1) {
            showGallery(x[i], "block")
        } else {
            showGallery(x[i], "hidden")
        };
    }
}



/**
 * Set active or block class to filtered data
 * @param {element} element 
 * @param {String} name 
 */
const showGallery = (element, name) => {
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
const hideGallery = (element, name) => {
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

// Add active class to the current button (highlight it)
const activeButton = () => {
    var btnContainer = document.getElementById("filterButtonGroup");
    var buttons = btnContainer.getElementsByClassName("filterBtn");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function () {
            var current = document.getElementsByClassName("bg-[#80b744]");
            current[0].className = current[0].className.replace(" bg-[#80b744]", "");
            this.className += " bg-[#80b744]";
        });
    }
}