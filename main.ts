
var startButton: HTMLButtonElement;
var minField: HTMLInputElement;
var maxField: HTMLInputElement;
var taskDiv: HTMLDivElement;
var wordDiv: HTMLDivElement;
const boom = new Audio("bomb.mp3");


window.onload = () => {
    startButton = document.getElementById("startButton") as HTMLButtonElement;
    minField = document.getElementById("min") as HTMLInputElement;
    maxField = document.getElementById("max") as HTMLInputElement;
    taskDiv = document.getElementById("taskDiv") as HTMLDivElement;
    wordDiv = document.getElementById("wordDiv") as HTMLDivElement;
    reset();
}


function setInputDisabled(disable = true) {
    startButton.disabled = disable;
    startButton.style.display = disable ? "none" : null;
    wordDiv.style.display = disable ? null : "none";
    minField.disabled = disable;
    maxField.disabled = disable;
}

function getRandomEntry<T>(arr: T[]) {
    return arr[Math.floor(Math.random()*arr.length)]
}

function reset() {
    document.body.style.background = "white";
    taskDiv.style.color = "black";
    taskDiv.innerText = getRandomEntry(taskList)
    setInputDisabled(false);
}

function bombExplode() {
    boom.play();
    document.body.style.background = "red";
    setTimeout(reset, 3000);
}


function start() {
    setInputDisabled(true);
    taskDiv.style.color = "white";
    document.body.style.background = "green";
    wordDiv.innerText = getRandomEntry(cardList).toUpperCase();

    const from = parseInt(minField.value);
    const to = parseInt(maxField.value);

    const seconds = Math.random()*(to-from) + from;
    
    setTimeout(bombExplode, seconds*1000);
}


const taskList = 
[
    "Må ikke være i starten af ordet",
    "Må ikke være i slutningen af ordet",
    "Må være overalt i ordet",
];


const cardList = [
    "lt",
    "hin",
    "sl",
    "ul",
    "mer",
    "of",
    "hav",
    "mod",
    "ok",
    "ho",
    "se",
    "bus",
    "rus",
    "små",
    "im",
    "ki",
    "rat",
    "om",
    "pla",
    "fa",
    "mel",
    "ur",
    "fu",
    "ne",
    "und",
    "jo",
    "le",
    "at",
    "på",
    "ja",
    "ste",
    "sti",
    "en",
    "gn",
    "ang",
    "ple",
    "ven",
    "res",
    "kant",
    "lå",
    "flu",
    "fan",
    "ca",
    "er",
    "ig",
    "ag",
    "ran",
    "id",
    "ga",
    "mu",
    "akt",
    "rag",
    "ud",
    "nap",
    "år",
    "bes",
    "bb",
    "over",
    "per",
    "am",
    "os",
    "pre",
    "sve",
    "fo",
    "gla",
    "to",
    "pin",
    "ve",
    "arm",
    "pap",
    "or",
    "ska",
    "pp",
    "tå",
    "kar",
    "kt",
    "re",
    "ond",
    "rk",
    "ting",
    "so",
    "tri",
    "men",
    "ras",
    "mb",
    "sen",
    "ins",
    "str",
    "fre",
    "us",
    "rt",
    "gt",
    "sag",
    "sta",
    "kri",
    "not",
    "gen",
    "lb",
    "bo",
    "kus",
    "ent",
    "åg",
    "lo",
    "var",
    "hal",
    "ld",
    "sin",
    "ta",
    "gr",
    "is",
    "ger",
    "ak",
    "nå",
    "nu",
    "cy",
    "pu",
    "rig",
    "val",
    "ske",
    "ung",
    "reg",
    "fer",
    "as",
    "må",
    "vå",
    "kol",
    "ir",
    "ee",
    "den",
    "yd",
    "el",
    "om",
    "br",
    "et",
    "gu",
    "rr",
    "il",
    "duk",
    "pa",
    "ål",
    "by",
    "eks",
    "int",
    "rod",
    "vi",
    "inf",
    "he",
    "ken",
    "der",
    "ke",
    "stå",
    "end",
    "ind",
    "lag",
    "åb",
    "art",
    "hun",
    "så",
    "pil",
    "ol",
    "ff",
    "bat",
    "sit",
    "tur",
    "dg",
    "ri",
    "imp",
    "ei",
    "zo",
    "kat",
    "da",
    "tel",
    "op",
    "ank",
    "spa",
    "ver",
    "do",
    "pos",
    "last",
    "bli",
    "em",
    "tig",
    "nit",
    "ot",
    "red",
    "te",
    "ns",
    "rå",
    "ber",
    "tab",
    "tra",
    "god",
    "it",
    "rug",
    "min",
    "arn",
    "ma",
    "ek",
    "ped",
    "rib",
    "gg",
    "od",
    "vo",
    "su",
    "dri",
    "få",
    "mm",
    "abs",
    "af",
    "pol",
    "kl",
    "sor",
    "pro",
    "par",
    "inv",
    "van",
    "tor",
    "bi",
    "kk",
]