$(document).ready(function () {
    filterGallery("all");
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
 * Set active or block class to filtered data
 * @param {element} element 
 * @param {String} name 
 */
const showGallery = (element, name) => {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    console.log('arr1', arr1)
    arr2 = name.split(" ");
    console.log('arr2', arr2)
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) { element.className += " " + arr2[i]; }
    }
}

/**
 * Set Inactive or hidden classes to unfiltered data
 * @param {element} element 
 * @param {String} name 
 */
const hideGallery = (element, name) => {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
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