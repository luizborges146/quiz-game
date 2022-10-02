// create variables to connect to the buttons
    // *start-btn
var startBtn = document.getElementById("start-btn");
    // *next-btn
var nextBtn = document.getElementById("next-btn");
    // *score-btn
var scoreBtn = document.getElementById("score-btn");

var questionCardEle = document.getElementById("question-card");

startBtn.addEventListener("click",startGame); //eventListener to activate start btn, it also call the function startGame

    // hold the score
    // count the score


// function to start the game
function startGame(){
    startBtn.classList.add("hide");
    scoreBtn.classList.add("hide");
    //remove the class hide from html
    questionCardEle.classList.remove("hide");
    nextBtn.classList.remove("hide");



}

// function to move to  the next question


// time counter 


// create a function to random select a question  

// create an object array that contain the questions and answers 

