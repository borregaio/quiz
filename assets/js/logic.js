var timer = document.getElementById("time");
var startButton = document.getElementById("start");
var startScreen = document.getElementById("start-screen");
var questions = document.getElementById("questions");

var secondsLeft = 60;

//timer function
function setTimer() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        
        if(secondsLeft === 0) {
            clearInterval(timerInterval);
        }
        // set the content of timer to seconds left
        timer.textContent = secondsLeft;

    }, 1000);
}


//hide start screen function

function hideScreen() {
    startScreen.classList.toggle("hide");
}

//make questions div visible

function showQuestions() {
    questions.classList.remove("hide");
}

function startQuiz() {
    setTimer();
    hideScreen();
    showQuestions();
}















//set timer on click
startButton.addEventListener("click", startQuiz);
// startButton.addEventListener("click", hideScreen);
// startButton.addEventListener("click", showQuestions);