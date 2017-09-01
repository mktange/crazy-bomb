"use strict";
var startButton;
var minField;
var maxField;
var boom = new Audio("bomb.mp3");
window.onload = function () {
    startButton = document.getElementById("startButton");
    minField = document.getElementById("min");
    maxField = document.getElementById("max");
};
function setInputDisabled(disable) {
    if (disable === void 0) { disable = true; }
    startButton.disabled = disable;
    startButton.style.display = disable ? "none" : null;
    minField.disabled = disable;
    maxField.disabled = disable;
}
function reset() {
    document.body.style.background = "white";
    setInputDisabled(false);
}
function bombExplode() {
    boom.play();
    document.body.style.background = "red";
    setTimeout(reset, 3000);
}
function start() {
    setInputDisabled(true);
    document.body.style.background = "green";
    var from = parseInt(minField.value);
    var to = parseInt(maxField.value);
    var seconds = Math.random() * (to - from) + from;
    setTimeout(bombExplode, seconds * 1000);
}
