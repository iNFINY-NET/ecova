/**
 * To Filter Activities Gallery Data
 * @param {String} item
 *  @return Element, Class Name
 */
const filterGallery = (item) => {

    // Set active button
    var buttons = document.getElementsByClassName('filterBtn');
    for (let j = 0; j < buttons.length; j++) {
        hideGallery(buttons[j], "hidden");
        if (buttons[j].id == item) {
            showGallery(buttons[j], "bg-green-500")
        } else {
            hideGallery(buttons[j], "bg-green-500")
        };
    }

    // Data filtering
    var x, i;
    x = document.getElementsByClassName("showAll");
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

filterGallery("all");
