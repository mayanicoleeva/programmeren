console.log("yay")

let gebruikersnaam;
let energieBar = 80;
let energie = document.querySelector('#energie');
const naam = document.querySelector("#naamInvullen");
const buttonNaam = document.querySelector("#buttonNaam");
const h1 = document.querySelector("h1");
const hintP = document.querySelector("#hint");
const pusheen = document.querySelector("#pusheen");
const buttonEten = document.querySelector("#buttonEten");
const buttonSlapen = document.querySelector('#buttonSlapen');
const buttonSpelen = document.querySelector('#buttonSpelen');
const buttonFeestje = document.querySelector('#buttonFeestje');
// alle gebruikte GIF van https://giphy.com/pusheen 

let todoLijst = ["eten geven", "slapen", "spelen"];
console.log( todoLijst[0]);

function eten() {
    console.log("Ik eet mijn voer");
    pusheen.src = "pusheenkoekje.gif";
    groter (10);
}

function slapen() {
    console.log("zzz");
    pusheen.src = "pusheenslaap.gif";
    groter (5);
}

function spelen() {
    console.log("wat leuk");
    pusheen.src = "pusheenspelen.gif";
    kleiner (5);
}

function feestje() {
    console.log("Party!");
    pusheen.src = "pusheenparty.webp";
    
}

function logInput() {
    gebruikersnaam = naamInvullen.value;
    h1.textContent = "Hi, " + gebruikersnaam + ". Ik ben Pusheen";
}

function groter(waardePlus) {
    if (energieBar > 0 && energieBar < 90){
        energieBar = energieBar + waardePlus;
        updateBar()
    } else if (energieBar = 90){
        hintP.textContent = "Zullen we weer spelen?";
        setTimeout(hideHint, 3000)
    } else {}
}

function kleiner(waardeMin) {
    console.log("kleiner");
    if (energieBar > 5 && energieBar <= 90){
        energieBar = energieBar - waardeMin;
        updateBar()
    }  else if (energieBar = 5){
        hintP.textContent = " Ik wil slapen";
        setTimeout(hideHint, 3000)
    } else {}
}
function updateBar() {
    document.querySelector("#progressBinnen").style.width = energieBar + "%";
}

function geluid() {
    const audio = new Audio('slaapgeluid.mp3');
    audio.play();
}

function play() {
    const audio = new Audio('partymuziek.mp3');
    audio.play();
}
// code en informatie van https://stackoverflow.com/questions/69405821/music-in-javascript-when-on-button-click 
// audio van https://pixabay.com/sound-effects/search/happy%20birthday%20cartoon/ 

function showHint() {
    hintP.textContent = "Ik heb honger";
    setTimeout(hideHint, 3000)
}

function hideHint() {
    hintP.textContent = "Wat zullen we gaan doen";
}

showHint()

buttonEten.addEventListener('click', eten);
buttonSlapen.addEventListener('click', slapen);
buttonSpelen.addEventListener('click',spelen);
buttonFeestje.addEventListener('click',feestje);
buttonFeestje.addEventListener('click', play);
buttonSlapen.addEventListener('click', geluid);
buttonNaam.addEventListener('click', logInput);
