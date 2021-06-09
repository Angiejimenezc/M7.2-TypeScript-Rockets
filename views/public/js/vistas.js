"use strict";
//Disparadores
let createRocket_1 = document.querySelector("#createRocket1");
let infoRocket_1 = document.querySelector("#printRocket1");
let acelerateRocket_1 = document.querySelector("#accelRocket1");
let brakeRocket_1 = document.querySelector("#breakRocket1");
let createRocket_2 = document.querySelector("#createRocket2");
let infoRocket_2 = document.querySelector("#printRocket2");
let acelerateRocket_2 = document.querySelector("#accelRocket2");
let brakeRocket_2 = document.querySelector("#breakRocket2");
// Creación de cohetes
createRocket_1.addEventListener("click", function () {
    let rocket_1Img = document.querySelector("#rocket_1");
    createRocket_1.classList.add("d-none");
    rocket_1Img.classList.remove("d-none");
    infoRocket_1.classList.remove("d-none");
    rocketCreate(0);
    console.log(rocket1);
});
createRocket_2.addEventListener("click", function () {
    let rocket_2Img = document.querySelector("#rocket_2");
    createRocket_2.classList.add("d-none");
    rocket_2Img.classList.remove("d-none");
    infoRocket_2.classList.remove("d-none");
    rocketCreate(1);
    console.log(rocket2);
});
//Mostrar información
infoRocket_1.addEventListener("click", function () {
    let rocket_1 = showRocket(0);
    let rocket_1Text = "";
    let showRocket_1Text = document.querySelector("#rocket_1Info");
    let showRocket1Name = document.querySelector("#rocket_1Name");
    showRocket1Name.innerHTML = rocket_1["rocketID"];
    rocket_1Text += "<h6>";
    rocket_1Text += "El Cohete tiene: " + rocket_1["propellers"] + " thrusters.";
    for (let m = 0; m < rocket_1["propellersMaxpower"].length; m++) {
        rocket_1Text += rocket_1["propellersMaxpower"][m] + ", ";
    }
    rocket_1Text = rocket_1Text.slice(0, -2);
    rocket_1Text += "</h2>Velocidad Inicial: " + rocketSpeed(0);
    rocket_1Text += "</h2>";
    showRocket_1Text.innerHTML = rocket_1Text;
});
infoRocket_2.addEventListener("click", function () {
    let rocket_2 = showRocket(1);
    let rocket_2Text = "";
    let showRocket_2Text = document.querySelector("#rocket_2Info");
    let showRocket2Name = document.querySelector("#rocket_2Name");
    showRocket2Name.innerHTML = rocket_2["rocketID"];
    rocket_2Text += "<h6>";
    rocket_2Text += "El Cohete Tiene: " + rocket_2["propellers"] + " thrusters.";
    for (let m = 0; m < rocket_2["propellersMaxpower"].length; m++) {
        rocket_2Text += rocket_2["propellersMaxpower"][m] + ", ";
        console.log(m);
    }
    rocket_2Text = rocket_2Text.slice(0, -2);
    rocket_2Text += "</h2>Velocidad Inicial: " + rocketSpeed(1);
    rocket_2Text += "</h2>";
    showRocket_2Text.innerHTML = rocket_2Text;
});
//Acelerar cohetes
var showRocket1Acelerate = document.querySelector("#acelerate1");
var showRocket2Acelerate = document.querySelector("#acelerate2");
acelerateRocket_1.addEventListener("click", function () {
    showRocket1Acelerate.innerHTML =
        "<h4>Velocidad: " + rocketSpeedUp(0) + "Km/h";
    animateCSS("#rocket_1", "backOutUp");
    console.log(showRocket1Acelerate);
});
acelerateRocket_2.addEventListener("click", function () {
    showRocket2Acelerate.innerHTML =
        "<h4>Velocidad: " + rocketSpeedUp(1) + "Km/h";
    animateCSS("#rocket_2", "backOutUp");
    console.log(showRocket2Acelerate);
});
//Frenar cohetes
brakeRocket_1.addEventListener("click", function () {
    showRocket1Acelerate.innerHTML = "<h4>Velocidad: " + rocketBrake(0) + "<Km/h";
    animateCSS("#rocket_1", "bounceInDown");
});
brakeRocket_2.addEventListener("click", function () {
    showRocket2Acelerate.innerHTML = "<h4>Velocidad: " + rocketBrake(1) + "Km/h";
    animateCSS("#rocket_2", "bounceInDown");
});
// promesa para reiniciar las animaciones
const animateCSS = (element, animation, prefix = "animate__") => 
// We create a Promise and return it
new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    const node = document.querySelector(element);
    node.classList.add(`${prefix}animated`, animationName);
    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd() {
        node.classList.remove(`${prefix}animated`, animationName);
        node.removeEventListener("animationend", handleAnimationEnd);
        resolve("Animation ended");
    }
    node.addEventListener("animationend", handleAnimationEnd);
});
