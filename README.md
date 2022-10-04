# Description

This project applies all the skills learned on week 2 of the Boot-camp, the focus is JavaScript APIs and how to manipulate variables, functions and access user input from the web, also add information to HTML file, apply timer to the page and create Local Storage.

The application is a quiz game about JavaScript, it allow the user to see their last score in the system before it start. For every right question the user get right the system count 1 point to the user score. As the user click in the answer, it will show what answer is correct as green and incorrect as red. The next button appears every time the user answer a question, so it can move to the next one by clicking on it.

The game stop when the user answer all the questions or  when the time finishes. Once it finish, the user will see the Name, to add the name and the Max score will be available for the user.


### Link to the password generator: [Quiz Game]()

## Installation

N/A

## Usage

* Functionalities:.
 * It allow the user see previous score, before start the game.
 * Set a time to the user to answer 9 questions in 60 seconds.
 * Display the correct and wrong answer as soon as the user click in one of the options.
 * Once the time is done, set the length of the question to max, so the user can't select any other answer.
 

 ```
//To make sure the user does not go over the max number of question.
    if(randomQuestion.length > currentIndex +1) {
        nextBtn.classList.remove("hide")
      } else {
        startBtn.innerText = "Restart";
        startBtn.classList.remove("hide"); //  if the user complete all the questions, give the option to restart or add to the score.
        scoreBtn.classList.remove("hide"); 
        localStorage.setItem("lastScore", gameScore);
      }

// Function to add a timer in the page
function setTimer() {
    var timerInterval = setInterval(function(){
        if (timeLeft > 0) {
            timeDown.textContent = timeLeft + " second remaining"
            timeLeft--;
        } else {
            timeDown.textContent ="";
            clearInterval(timerInterval);
            currentIndex = randomQuestion.length; // add the length of the question to the last one, so the user can no longer answer question, unless start a new game.
            //------------------------------------------------------------------------
        }
    }, 1000)
    
}

 ```


## External support documentation

As part of the process, I used some references to complete the task:

- [Font Awesome](https://fontawesome.com/)<br />
- [W3School](https://www.w3schools.com/)<br />
- [Mozilla](https://developer.mozilla.org)<br />
- [READ.me](https://docs.readme.com/docs/linking-to-pages")<br />
- [GitHub](https://pages.github.com/)<br />
- [Git_cheat_sheet_pdf](https://education.github.com/git-cheat-sheet-education.pdf)<br />

## Social

[<img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/github.svg' alt='github' height='40'>](https://github.com/luizborges146) [<img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg' alt='linkedin' height='40'>](https://www.linkedin.com/in/https://www.linkedin.com/in/luiz-borges-2377b7142//)

N/A

## License

Please refer to the LICENSE in the repo.