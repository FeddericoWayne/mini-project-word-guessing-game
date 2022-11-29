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
var randomWord = wordList[Math.floor(Math.random()*wordList.length)];




function displayWord() {
    
    for (var x=0; x<randomWord.length; x++) {
        blindWord[x] = "_";
        wordDisplay.textContent = blindWord.join(" ");

    }
}

function guessWord(event) {
    var key = event.key;

    for (var y=0; y<randomWord.length; y++) {
        if (key === randomWord[y]) {
            console.log(event.key);
            //randomWord[y]=blindWord[y];
            //wordDisplay.textContent = blindWord.join(" ");
        }

    }
}





function timerOn() {
    var countDownToZero = setInterval(function(){
        timer.textContent = "You have "+ timeLeft + " seconds left!"
        timeLeft--;

        if (timeLeft === -1) {
            clearInterval(countDownToZero);
    
        }
    },1000);



}


startGame.addEventListener("click",displayWord);
document.addEventListener("keydown",guessWord);
countDown.addEventListener("click",timerOn)

