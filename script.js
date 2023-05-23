// script.js
var liElement = document.getElementById("level");
var level = getLevel(liElement);

alert("The level of the element is: " + level);

// Function to get the level of an element
function getLevel(element) {
    var level = 0;
    while (element.parentNode) {
        element = element.parentNode;
        if (element.nodeName === "UL") {
            level++;
        }
    }
    return level;
}
