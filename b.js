let homescore = document.getElementById('homescore');
let guestscore = document.getElementById('guestscore');
let oldhomescore = document.getElementById('oldhomescore');
let oldguestscore = document.getElementById('oldguestscore');

let homeScore = 0;
let guestScore = 0;

function plusOneHome() {
    homeScore += 1;
    homescore.innerText = homeScore;
}
function plusTwoHome() {

    homeScore += 2;
    homescore.innerText = homeScore;
}
function plusThreeHome() {
    homeScore += 10;
    homescore.innerText = homeScore;
}

function plusOneGuest() {
    guestScore += 1;
    guestscore.innerText = guestScore;
}
function plusTwoGuest() {
    guestScore += 2;
    guestscore.innerText = guestScore;
}
function plusThreeGuest() {
    guestScore += 10;
    guestscore.innerText = guestScore;
}

function newGame() {
    guestscore.textContent = 0;
    guestScore = 0;
    homescore.innerText = 0;
    homeScore = 0;


}
function saveScore() {
    countHome = homeScore + " , ";
    countGuest = guestScore + " , ";
    oldhomescore.textContent += countHome;
    oldguestscore.textContent += countGuest;

}