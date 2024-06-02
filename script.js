console.log("yay");

// alle constanten 
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

// let
let gebruikersnaam;
let energieBar = 80;

// hieronder staan al mijn gebruikte functions
// bij deze function zorg ik ervoor dat het plaatje van pusheen veranderd in een plaatje 
// dat ze aan het eten is wanneer je op de button klikt. 
// ook zorg ik ervoor dat als er op de button word geklikt haar energie omhoog gaat.
function eten() {
    console.log("Ik eet mijn voer");
    pusheen.src = "gif/pusheenkoekje.gif";
    groter (10);
}

// bij deze function zorg ik ervoor dat het plaatje van pusheen veranderd in een plaatje
// dat ze aan het slapen is wanneer je op de button klikt.
// ook zorg ik ervoor dat haar energie met 5 omhoog gaat als er op de button word geklikt.
function slapen() {
    console.log("zzz");
    pusheen.src = "gif/pusheenslaap.gif";
    groter (5);
}

// bij deze function zorg ik ervoor dat het plaatje van pusheen veranders in een plaatje
// dat ze aan het spelen is wanneer je op de button klikt.
// ook zorg ik ervoor dat haar energie omlaag gaat met 5 omdat spelen veel moeite kost. 
function spelen() {
    console.log("wat leuk");
    pusheen.src = "gif/pusheenspelen.gif";
    kleiner (5);
}

// bij deze function zorg ik ervoor dat het plaatje van pusheen veranders in een plaatje
// dat ze aan het zingen is met haar vriendjes wanneer je op de button klikt.
function feestje() {
    console.log("Party!");
    pusheen.src = "gif/pusheenparty.webp";
    
}

// door deze function kan je wanneer je je naam hebt ingevuld in de form je naam tussen de 
// rest van de tekst zien.
function logInput() {
    gebruikersnaam = naamInvullen.value;
    h1.textContent = "Hi, " + gebruikersnaam + ". Ik ben Pusheen";
}


// bij deze function zorg ik ervoor dat de energiemeter van pusheen voller raakt wanneer je 
// bepaalde dingen met haar uitvoert en op die buttons klikt. 
// ook zorg ik er hiermee voor dat de energiebar niet te vol kan komen.
function groter(waardePlus) {
    if (energieBar > 0 && energieBar < 90){
        energieBar = energieBar + waardePlus;
        updateBar();
    } else {(energieBar = 90);
        hintP.textContent = "Zullen we weer spelen?";
        setTimeout(hideHint, 3000);
    } 
}

// bij deze function zorg ik ervoor dat de energiemeter van pusheen leger raakt wanneer je 
// bepaalde dingen met haar uitvoert en op die buttons klikt. 
// ook zorg ik er hiermee voor dat de energiebar niet te leeg kan komen, dus in de min. 
function kleiner(waardeMin) {
    console.log("kleiner");
    if (energieBar > 5 && energieBar <= 90){
        energieBar = energieBar - waardeMin;
        updateBar();
    }  else {(energieBar = 5);
        hintP.textContent = " Ik wil slapen";
        setTimeout(hideHint, 3000);
    }
}

// bij deze function zorg ik ervoor dat de energiebar van pusheen elke keer word geupdate na het
// klikken van bepaalde buttons. 
function updateBar() {
    document.querySelector("#progressBinnen").style.width = energieBar + "%";
}

// bij deze function zorg ik ervoor dat er audio afgespeeld word die ik onder de button "slapen" heb gezet.
function geluid() {
    const audio = new Audio('slaapgeluid.mp4');
    audio.play();
}

// bij deze function zorg ik ervoor dat er audio word afgespeeld die ik onder de button "verassing" heb gezet.
function play() {
    const audio = new Audio('partymuziek.mp3');
    audio.play();
}
// code en informatie van https://stackoverflow.com/questions/69405821/music-in-javascript-when-on-button-click 
// audio van https://pixabay.com/sound-effects/search/happy%20birthday%20cartoon/ 

// bij deze function zorg ik ervoor dat er gelijk in het begin een hint verschijnt dat pusheen honger heeft.
// die hint gaat na 3 sec weer weg en komt de algemene tekst er te staan. 
function showHint() {
    hintP.textContent = "Ik heb honger";
    setTimeout(hideHint, 3000);
}

// bij deze function zorg ik ervoor dat de algemene tekst waar ik het hierboven over had verschijnt op de 
// plek waar eerst de hint stond.
function hideHint() {
    hintP.textContent = "Wat zullen we gaan doen";
}

showHint();

// eventlistener
buttonEten.addEventListener('click', eten);
buttonSlapen.addEventListener('click', slapen);
buttonSpelen.addEventListener('click',spelen);
buttonFeestje.addEventListener('click',feestje);
buttonFeestje.addEventListener('click', play);
buttonSlapen.addEventListener('click', geluid);
buttonNaam.addEventListener('click', logInput);
