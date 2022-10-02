// create variables to connect to the buttons
    
var startBtn = document.getElementById("start-btn");
var nextBtn = document.getElementById("next-btn");
var scoreBtn = document.getElementById("score-btn");


var questionCardEle = document.getElementById("question-card");
var questionEle = document.getElementById("question"); // get the questions
var answerBtn = document.getElementById("answer-buttons")// get the answer element

startBtn.addEventListener("click",startGame); //eventListener to activate start btn, it also call the function startGame

nextBtn.addEventListener("click", ()=> {
    currentIndex++;
    setNextQuestion()
  })

    // hold the score
    // count the score
var randomQuestion, currentIndex;

// function to start the game
function startGame(){
    startBtn.classList.add("hide");
    scoreBtn.classList.add("hide");
    //remove the class hide from html
    randomQuestion = questions.sort(() => Math.random() -.5); // added negative number to sort in oppo way
    currentIndex = 0;
    questionCardEle.classList.remove("hide");
    nextQuestion();
}
// function to move to  the next question
function nextQuestion() {
    resetState();
    displayQuestion(randomQuestion[currentIndex]);
}


// time counter 
// create a function that display the question
function displayQuestion(question) {
    questionEle.innerText = question.question; //property sets or returns the text content of an element.
    question.answer.forEach(answer =>{// create random select a question 
        var button = document.createElement("button")
        button.innerText = answer.option;
        button.classList.add("btn");
        if(answer.correct) {
        button.dataset.correct = answer.correct;
    }
    button.addEventListener("click",selectAnswer)
    answerBtn.appendChild(button);
    })
    
}
// will hide the HTML button child
function resetState() {
    nextBtn.classList.add("hide");
    while(answerBtn.firstChild) {
        answerBtn.removeChild(answerBtn.firstChild)
    }
  }

function selectAnswer(e) {
    var selectBtn= e.target;
    var correct = selectBtn.dataset.correct;
    setStatusClass(document.body,correct);
    Array.from(answerBtn.children).forEach(button =>{
        setStatusClass(button, button.dataset.correct)
    });
    if(randomQuestion.length > currentIndex +1) {
        nextBtn.classList.remove("hide")
      } else {
        startBtn.innerText = "Restart";
        startBtn.classList.remove("hide")
      }
}

function setStatusClass(element,correct) {
    clearStatusClass(element)
    if(correct) {
      element.classList.add("correct")
    } else {
      element.classList.add("wrong"); 
    }
  }
  
/*This is to clear it out the classList*/
function clearStatusClass(element) {
    element.classList.remove("correct");
    element.classList.remove("wrong");
  }

// create an array object that contain the questions and answers 

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