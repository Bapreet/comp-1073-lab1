const red = document.querySelector("#red");
const green = document.querySelector("#green");
const blue = document.querySelector("#blue");
const text = document.querySelector("html");

red.addEventListener('change', getRedValue);
green.addEventListener('change', getGreenValue);
blue.addEventListener('change', getBlueValue);

function getRedValue() {
    let redValue = Number(red.value);
    console.log("red = " + redValue);
}
function getGreenValue() {
    let greenValue = Number(green.value);
    console.log("green = " + greenValue);
}
function getBlueValue() {
    let blueValue = Number(blue.value);
    console.log("blue = " + blueValue);
}

function updatebodyColor() {
    text.style.backgroundColor = 'rgb(${red'
}