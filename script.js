/* Global Variables */
var title = document.querySelector("#title");
var startGame = document.querySelector(".start-game");
var guess = document.querySelector("#word");
var countDown = document.querySelector(".count-down");
var timer = document.querySelector("#timer");
var winCount = document.querySelector("#wins");
var loseCount = document.querySelector("#loses");
var wordDisplay = document.querySelector("#word");
var wordList = ["cat", "dog", "house", "journey", "thanksgiving", "bootcamp"];
var timeLeft = 20;
var blindWord = [];
var randomWord = "";
var wins = 0;
var loses = 0;
var tryAgain = document.querySelector("#play-again");
var lostGame = document.createElement('h3');

tryAgain.setAttribute("style","display:none");

/* Sets up Countdown Timer */
function timerOn() {

    timeLeft=20;

    var countDownToZero = setInterval(function(){
        timer.textContent = "You have "+ timeLeft + " seconds left!"
        timeLeft--;

        /* Losing Scenario: out of Tiome */
        if (timeLeft === -1) {
            clearInterval(countDownToZero);
            lose();
        }
    },1000);

}

/* To Display Word */
function displayWord() {

    randomWord = wordList[Math.floor(Math.random()*wordList.length)];

    lostGame.setAttribute("style","display:none");

    timerOn();

    winCount.innerHTML = "Your Wins: " + wins;
    loseCount.innerHTML = "Your Loses: " + loses;

    startGame.remove();
    
    for (var x=0; x<randomWord.length; x++) {
        blindWord[x] = "_";
        wordDisplay.textContent = blindWord.join(" ");

    }

    /* Winning Scenario */
}


/* For Player to Gues Word */
function guessWord(event) {
 

    for (var y=0; y<randomWord.length; y++) {
        if (event.key === randomWord[y]) {
            console.log(event.key);
            blindWord[y] = randomWord[y];
             wordDisplay.textContent = blindWord.join(" ");
        }

    }
}




/* If Player Runs out of Time */
function lose() {

    lostGame.removeAttribute("style","display:none");
    lostGame.textContent = "You Lost!"
    title.appendChild(lostGame);
    loses ++;
    loseCount.innerHTML = "Your Loses: " + loses;

    playAgain();
    

}

/* Play-Again Function */
function playAgain() {
    tryAgain.removeAttribute("style","display:none");

}

/* Event Listerners */
startGame.addEventListener("click",displayWord);
document.addEventListener("keydown",guessWord);
tryAgain.addEventListener("click",displayWord);

