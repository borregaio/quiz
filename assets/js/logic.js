var timer = document.getElementById("time");
var startButton = document.getElementById("start");
var startScreen = document.getElementById("start-screen");
var questions = document.getElementById("questions");
var feedback = document.getElementById("feedback");
var score = localStorage.getItem("score");
// var score = [];

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
    questionTitle.textContent = quiz.question1;

    button1.textContent = quiz.answers1[0];
    button2.textContent = quiz.answers1[1];
    button3.textContent = quiz.answers1[2];
    button4.textContent = quiz.answers1[3];
    choices.appendChild(button1);
    choices.appendChild(button2);
    choices.appendChild(button3);
    choices.appendChild(button4);

    button1.addEventListener("click", handleButtonClick);
    button2.addEventListener("click", handleButtonClick);
    button3.addEventListener("click", handleButtonClick);
    button4.addEventListener("click", handleButtonClick);
}

function handleButtonClick(event) {
    var clickedIndex = parseInt(event.target.dataset.index);

    if (clickedIndex === 1) {
        console.log("correct");
        feedback.classList.remove("hide");
        feedback.textContent = "Correct!"
        setTimeout(function() {
            feedback.classList.add("hide");
        }, 1000);
        score++
        localStorage.setItem("score", score);

    } else {
        console.log("incorrect");
    }
}

    // var isClicked = true;

    // answer1.addEventListener("click", function() {
    //     if (isClicked) {
    //         console.log("incorrect");
    //     } 
    // });

    // answer2.addEventListener("click", function() {
    //     if (isClicked) {
    //         console.log("correct");
    //     } 
    // });

    // answer3.addEventListener("click", function() {
    //     if (isClicked) {
    //         console.log("incorrect");
    //     } 
    // });

    // answer4.addEventListener("click", function() {
    //     if (isClicked) {
    //         console.log("incorrect");
    //     } 
    // });

function startQuiz() {
    setTimer();
    hideScreen();
    showQuestions();
}















//set timer on click
startButton.addEventListener("click", startQuiz);
// startButton.addEventListener("click", hideScreen);
// startButton.addEventListener("click", showQuestions);