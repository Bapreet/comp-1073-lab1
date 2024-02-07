// Selecting HTML elements
const red = document.querySelector("#red");
const green = document.querySelector("#green");
const blue = document.querySelector("#blue");
const text = document.querySelector("html");

//Adding EventListeners
red.addEventListener('change', getTheValue);
green.addEventListener('change', getTheValue);
blue.addEventListener('change', getTheValue);

//Function to handle the change event
function getTheValue() {
    let redValue = Number(red.value);
    console.log("red = " + redValue);
    let greenValue = Number(green.value);
    console.log("green = " + greenValue);
    let blueValue = Number(blue.value);
    console.log("blue = " + blueValue);

    //setting the background color of HTML element to RBG values obtained
    text.style.backgroundColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
}


