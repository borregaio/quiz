//Get elements by id
var timer = document.getElementById("time");
var startButton = document.getElementById("start");
var startScreen = document.getElementById("start-screen");
var questions = document.getElementById("questions");
var feedback = document.getElementById("feedback");
var endScreen = document.getElementById("end-screen");
var finalScore = document.getElementById("final-score");
var submit = document.getElementById("submit");

// Local storage
localStorage.setItem("score", 0);
var score = localStorage.getItem("score");
localStorage.setItem("userInitials", "");
var userInitials = localStorage.getItem("userInitials");

//Timer function
var secondsLeft = 60;

function setTimer() {
    var timerInterval = setInterval(function () {
        secondsLeft--;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            questions.classList.add("hide");
            endScreen.classList.remove("hide");
            finalScore.textContent = score;
        }
        // Set the content of timer to seconds left
        timer.textContent = secondsLeft;

    }, 1000);
}

// Function to subtract time from the timer
function subtractTimeFromTimer(timeToSubtract) {
    if (secondsLeft > timeToSubtract) {
        // Subtract time from the current remaining time
        secondsLeft -= timeToSubtract;
        // Update the timer display immediately
        timer.textContent = secondsLeft;
    } else {
        console.log("Cannot subtract more time than remaining.");
    }
}

//Sounds for correct and wrong answers
function correctSound() {
    var audio = new Audio("./assets/sfx/correct.wav");
    audio.play();
}

function incorrectSound() {
    var audio = new Audio("./assets/sfx/incorrect.wav");
    audio.play();
}

//Correct answer function
function correctAnswer() {
    //Sound function
    correctSound();
    //Show "Correct!" for a few seconds
    feedback.classList.remove("hide");
    feedback.textContent = "Correct!"
    setTimeout(function () {
        feedback.classList.add("hide");
    }, 1000);
    //Update score
    score++
    localStorage.setItem("score", score);
}

//Incorrect answer function
function incorrectAnswer() {
    //Sound function
    incorrectSound();
    //Show "Incorrect!" for a few seconds
    feedback.classList.remove("hide");
    feedback.textContent = "Incorrect!"
    setTimeout(function () {
        feedback.classList.add("hide");
    }, 1000);
    //Prevent score to be negative
    if (score < 1) {
        score = 0;
    } else {
        return
    }
    localStorage.setItem("score", score);
    setTimeout(function () {
        subtractTimeFromTimer(10);
    });
}

//Hide start screen function
function hideScreen() {
    startScreen.classList.toggle("hide");
}

//Make questions div visible and show first question
function showQuestions() {
    questions.classList.remove("hide");
    Question();
}

//Function to show the first question and answers
//Index number for quiz array
var currentIndex = 0;

function Question() {
    if (currentIndex < quiz.length) {
        // Change textContent using the current index
        questionTitle.textContent = quiz[currentIndex].question;
        button1.textContent = quiz[currentIndex].answers[0];
        button2.textContent = quiz[currentIndex].answers[1];
        button3.textContent = quiz[currentIndex].answers[2];
        button4.textContent = quiz[currentIndex].answers[3];

        choices.innerHTML = ""; // Clear previous buttons
        choices.appendChild(button1);
        choices.appendChild(button2);
        choices.appendChild(button3);
        choices.appendChild(button4);
    }
}

//Function to show the next question
function nextQuestion() {
    currentIndex++
    Question();

    //Show final score screen quen questions are finished
    if (currentIndex >= quiz.length) {
        questions.classList.add("hide");
        endScreen.classList.remove("hide");
        finalScore.textContent = score;
    }
}

// Function for marching clicked answers to correct answers
var selectedAnswer = "";

function handleButtonClick(event) {
    // Get the clicked button element
    var clickedButton = event.target;

    // Set selectedAnswer to the clicked button's textContent
    selectedAnswer = clickedButton.textContent;

    // Check if selectedAnswer matches the correct answer for the current index
    if (currentIndex < correctAnswers.length && selectedAnswer === correctAnswers[currentIndex]) {
        console.log("Correct!");
        correctAnswer();
    } else {
        console.log("Incorrect!");
        incorrectAnswer();
    }
}

//Event listener for submit button and store user initials
submit.addEventListener("click", function () {
    // Get the user input from the text input
    var userInput = document.getElementById("initials").value;

    // Retrieve existing highscores from local storage
    var existingHighscores = JSON.parse(localStorage.getItem("highscores")) || [];

    // Add the new score object to the highscores array
    existingHighscores.push({ userInitials: userInput.toUpperCase(), score: localStorage.getItem("score") });

    // Store the updated highscores in local storage
    localStorage.setItem("highscores", JSON.stringify(existingHighscores));

    // Change the window location to the desired HTML page
    window.location.href = "highscores.html";
});

//Function to start the quiz
function startQuiz() {
    setTimer();
    hideScreen();
    showQuestions();
}

//Event listeners
startButton.addEventListener("click", startQuiz);

button1.addEventListener("click", handleButtonClick);
button2.addEventListener("click", handleButtonClick);
button3.addEventListener("click", handleButtonClick);
button4.addEventListener("click", handleButtonClick);

button1.addEventListener("click", nextQuestion);
button2.addEventListener("click", nextQuestion);
button3.addEventListener("click", nextQuestion);
button4.addEventListener("click", nextQuestion);