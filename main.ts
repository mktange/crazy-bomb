
var startButton: HTMLButtonElement;
var minField: HTMLInputElement;
var maxField: HTMLInputElement;
const boom = new Audio("bomb.mp3");

window.onload = () => {
    startButton = document.getElementById("startButton") as HTMLButtonElement;
    minField = document.getElementById("min") as HTMLInputElement;
    maxField = document.getElementById("max") as HTMLInputElement;
}


function setInputDisabled(disable = true) {
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

    const from = parseInt(minField.value);
    const to = parseInt(maxField.value);

    const seconds = Math.random()*(to-from) + from;
    
    setTimeout(bombExplode, seconds*1000);
}