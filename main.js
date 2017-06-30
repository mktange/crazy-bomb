"use strict";
function start() {
    var button = document.getElementById("startButton");
    var minEl = document.getElementById("min");
    var maxEl = document.getElementById("max");
    button.disabled = true;
    minEl.disabled = true;
    maxEl.disabled = true;
    document.body.style.background = "green";
    var from = parseInt(minEl.value);
    var to = parseInt(maxEl.value);
    var time = Math.random() * (to - from) + from;
    var boom = new Audio("bomb.mp3");
    setTimeout(function () {
        boom.play();
        document.body.style.background = "red";
        minEl.disabled = false;
        maxEl.disabled = false;
        button.disabled = false;
    }, time * 1000);
}
