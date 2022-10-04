// create variables to connect to the buttons
    
var startBtn = document.getElementById("start-btn");
var nextBtn = document.getElementById("next-btn");
var scoreBtn = document.getElementById("score-btn");


var questionCardEle = document.getElementById("question-card");
var questionEle = document.getElementById("question"); // get the questions
var answerBtn = document.getElementById("answer-buttons")// get the answer element

var userName = document.querySelector("#user-Name"); // display user Name
var userHighScore = document.querySelector("#user-highScore"); //display the user highScore

var userName = document.querySelector("#name");

var form = document.getElementById("form");// ----------------------add the Score page

var countHeader = document.getElementById("countDown");// ----------------------add the Score page
var timeDown = document.querySelector(".time");// ----------------------add the Score page
var timeLeft = 10;


var randomQuestion, currentIndex;

startBtn.addEventListener("click",startGame); //eventListener to activate start btn, it also call the function startGame
scoreBtn.addEventListener("click",score); // -------------------------------add the Score page

var gameScore = 0; // count the score



nextBtn.addEventListener("click", ()=> {
    
    currentIndex++;
    console.log(currentIndex + "  check current index ");//check the next index
    nextQuestion()
  })

// function to start the game
function startGame(){
    gameScore = 0;
    startBtn.classList.add("hide");
    scoreBtn.classList.add("hide");
    form.classList.add("hide");
    //remove the class hide from html
    randomQuestion = questions.sort(() => Math.random() -.5); // added negative number to sort in oppo way
    currentIndex = 0;
    questionCardEle.classList.remove("hide");
    countHeader.classList.remove("hide");// -------------------------------add the Score page
    setTimer()
    nextQuestion();
}

 function score(event) { // ----------------------------------------------add the Score page
    event.preventDefault();
    form.classList.remove("hide");

    userHighScore.textContent = localStorage.getItem("lastScore");

}


// function to move to  the next question
function nextQuestion() {
    gameScore--;
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
    //console.log(e.target + " selectAnswer");//checking the returning information
    var correct = selectBtn.dataset.correct;
    setStatusClass(document.body,correct);
    Array.from(answerBtn.children).forEach(button =>{
        setStatusClass(button, button.dataset.correct)
    });
    if(randomQuestion.length > currentIndex +1) {
        nextBtn.classList.remove("hide")
      } else {
        startBtn.innerText = "Restart";
        startBtn.classList.remove("hide"); //  if the user complete all the questions, give the option to restart or add to the score.
        scoreBtn.classList.remove("hide"); 
        localStorage.setItem("lastScore", gameScore);
      }
}



function setStatusClass(element,correct) {
    clearStatusClass(element)
    if(correct) {
      element.classList.add("correct");
      gameScore++;
      //console.log(gameScore);
      
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
        question: "How do you create a variable in JavaScript?",
        answer:[
            {option: "100", correct:false},
            {option: "var = 100", correct:false},
            {option: "var number = 100", correct:true},
            {option: "var num: 100", correct:false},
        ]
    },
    {
        question: "What are the JavaScript data types?",
        answer:[
            {option: "Number, String, Boolean, Object, Undefined, Function, Null", correct:true},
            {option: "Number, Method, Array, Object, Undefined", correct:false},
            {option: "Number, String, Array", correct:false},
            {option: "Number, Method, Null, Object, Undefined", correct:false},
        ]
    },
    {
        question: "What are the 3 keyword in JavaScript to create a variable?",
        answer:[
            {option: "var, test, const", correct:false},
            {option: "var, let, null", correct:false},
            {option: "var, let, const", correct:true},
            {option: "var1, let, const", correct:false},
        ]
    },
    {
        question: "var num = 5; var str = '5'",
        answer:[
            {option: "(num === str) = true", correct:false},
            {option: "!(num === str) = false", correct:false},
            {option: "!(num == str) = true", correct:false},
            {option: "(num == str) = true", correct:true},
        ]
    },
    {
        question: "Which Company developed JavaScript?",
        answer:[
            {option: "Sun Microsystems", correct:false},
            {option: "NetBeans", correct:false},
            {option: "Apache", correct:false},
            {option: "Netscape company", correct:true},
        ]
    },
    {
        question: "What is meant by NULL in JavaScript?",
        answer:[
            {option: "If no value has been given to the variable", correct:true},
            {option: "A variable that has been re-assigned", correct:false},
            {option: "When a variable is created equal to 0", correct:false},
            {option: "None the above", correct:false},
        ]
    },
    {
        question: "What are the pop-ups available in JavaScript?",
        answer:[
            {option: "Prompt, Alert, Banner", correct:false},
            {option: "Alert, Prompt, and Confirm.", correct:true},
            {option: "Confirmation, Alert, Prompt", correct:false},
            {option: "Prompt, Pop-up, Alert", correct:false},
        ]
    },
    {
        question: "What is the Different between Null and Undefined?",
        answer:[
            {option: "undefined & null - assign a zero value to the variable", correct:false},
            {option: "undefined & null - no value for the variable", correct:false},
            {option: "undefined - assign a zero value to the variable, null - no value for the variable", correct:false},
            {option: "undefined - no value for the variable, null - we assign a zero value to the variable", correct:true},
        ]
    },
    {
        question: "How to submit a form in JavaScript?",
        answer:[
            {option: ".submit(form)", correct:false},
            {option: "form[index].submit();", correct:false},
            {option: "document.submit();", correct:false},
            {option: "document.form[index].submit();", correct:true},
        ]
    },
]

function setTimer() {
    var timerInterval = setInterval(function(){
        if (timeLeft > 0) {
            timeDown.textContent = timeLeft + " second remaining"
            timeLeft--;
        } else {
            timeDown.textContent ="";
            clearInterval(timerInterval);
            currentIndex = randomQuestion.length;// add the length of the question to the last one, so the user can no longer answer question, unless start a new game.
            
        }
    }, 1000)
    
}



