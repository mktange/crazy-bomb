

function start() {
    var button = document.getElementById("startButton") as HTMLButtonElement;
    var minEl = document.getElementById("min") as HTMLInputElement;
    var maxEl = document.getElementById("max") as HTMLInputElement;

    button.disabled = true;
    minEl.disabled = true;
    maxEl.disabled = true;

    document.body.style.background = "green";

    const from = parseInt(minEl.value);
    const to = parseInt(maxEl.value);

    const time = Math.random()*(to-from) + from;
    const boom = new Audio("bomb.mp3");

    setTimeout(() => {
        boom.play();
        document.body.style.background = "red";
        minEl.disabled = false;
        maxEl.disabled = false;
        button.disabled = false;

    }, time*1000);
}
