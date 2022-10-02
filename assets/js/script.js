// create variables to connect to the buttons
    // *start-btn
var startBtn = document.getElementById("start-btn");
    // *next-btn
var nextBtn = document.getElementById("next-btn");
    // *score-btn
var scoreBtn = document.getElementById("score-btn");

var questionCardEle = document.getElementById("question-card");

var questionEle = document.getElementById("question");

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
    displayQuestion(question);
}
// function to move to  the next question



// time counter 
// create a function that display the question
function displayQuestion(question) {
    questionEle.innerText = question.question; //property sets or returns the text content of an element.
    question.answer.forEach(answer =>{
        var button = document.createElement("button")
        button.innerText = answer.option;
        button.classList.add("btn");
    })

}

// create a function to random select a question  

// create an object array that contain the questions and answers 

var questions = [
    {
        question: "Question number 1",
        answer:[
            {option: "1985", correct:false},
            {option: "1986", correct:false},
            {option: "1987", correct:true},
            {option: "1988", correct:false},
        ]
    },
    {
        question: "Question number 2",
        answer:[
            {option: "1985", correct:true},
            {option: "1985", correct:false},
            {option: "1985", correct:false},
            {option: "1985", correct:false},
        ]
    },
    {
        question: "Question number 3",
        answer:[
            {option: "1985", correct:false},
            {option: "1985", correct:false},
            {option: "1985", correct:true},
            {option: "1985", correct:false},
        ]
    },
    {
        question: "Question number 4",
        answer:[
            {option: "1985", correct:false},
            {option: "1985", correct:false},
            {option: "1985", correct:false},
            {option: "1985", correct:true},
        ]
    },
    {
        question: "Question number 5?",
        answer:[
            {option: "1985", correct:false},
            {option: "1985", correct:false},
            {option: "1985", correct:false},
            {option: "1985", correct:true},
        ]
    },
]