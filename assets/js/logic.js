var timer = document.getElementById("time");
var startButton = document.getElementById("start");
var startScreen = document.getElementById("start-screen");
var questions = document.getElementById("questions");
var feedback = document.getElementById("feedback");
var endScreen = document.getElementById("end-screen");
var score = localStorage.getItem("score");
//index for array questios and answers
var currentIndex = 0;
// var score = [];


var selectedAnswer = "";



var secondsLeft = 60;

//timer function
function setTimer() {
    var timerInterval = setInterval(function () {
        secondsLeft--;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
        }
        // set the content of timer to seconds left
        timer.textContent = secondsLeft;

    }, 1000);
}

// Function to subtract time from the timer
function subtractTimeFromTimer(timeToSubtract) {
    if (secondsLeft > timeToSubtract) {
        // Subtract time from the current remaining time
        secondsLeft -= timeToSubtract;
        // Optionally, you can update the timer display immediately
        timer.textContent = secondsLeft;
    } else {
        // Handle the case where subtracting the specified time exceeds the remaining time
        console.log("Cannot subtract more time than remaining.");
    }
}


//hide start screen function
function hideScreen() {
    startScreen.classList.toggle("hide");
}

//sounds

function correctSound() {
    var audio = new Audio("./assets/sfx/correct.wav");
    audio.play();
}

function incorrectSound() {
    var audio = new Audio("./assets/sfx/incorrect.wav");
    audio.play();
}

//-------------------------------
function correctAnswer() {
    console.log("correct");
    correctSound();
    feedback.classList.remove("hide");
    feedback.textContent = "Correct!"
    setTimeout(function () {
        feedback.classList.add("hide");
    }, 1000);
    score++
    localStorage.setItem("score", score);
}

function incorrectAnswer() {
    console.log("incorrect");
    incorrectSound();
    feedback.classList.remove("hide");
    feedback.textContent = "Incorrect!"
    setTimeout(function () {
        feedback.classList.add("hide");
    }, 1000);
    score--
    localStorage.setItem("score", score);
    setTimeout(function () {
        subtractTimeFromTimer(10);
    });
}
//------------------------------------

//make questions div visible
function showQuestions() {
    questions.classList.remove("hide");
    Question();
    console.log(currentIndex);
}

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

function nextQuestion() {
    currentIndex++
    Question();

    console.log(currentIndex);

    if (currentIndex >= quiz.length) {
        questions.classList.add("hide");
        endScreen.classList.remove("hide");
    }
}

function handleButtonClick(event) {

    // var clickedIndex = parseInt(event.target.dataset.index);
    // console.log("clicked index: " + clickedIndex);

    // if (currentIndex === 0 && clickedIndex.textContent === correctAnswers[0]) {
    //     console.log("it works!");
    // } else {
    //     console.log("no workin");
    // }

    // Get the clicked button element
    var clickedButton = event.target;

    // Set selectedAnswer to the clicked button's textContent
    selectedAnswer = clickedButton.textContent;

    // You can now use selectedAnswer to check against the correct answer
    if (currentIndex === 0 && selectedAnswer === correctAnswers[0]) {
        console.log("Correct!");
        correctAnswer();
        // Optionally, you can store the score or perform other actions
        // Example: score++;
    } else if (currentIndex === 1 && selectedAnswer === correctAnswers[1]) {
        console.log("yay");
        correctAnswer();
    } else if (currentIndex === 2 && selectedAnswer === correctAnswers[2]) {
        console.log("awesome");
        correctAnswer();
    } else if (currentIndex === 3 && selectedAnswer === correctAnswers[3]) {
        console.log("super");
        correctAnswer();
    } else if (currentIndex === 4 && selectedAnswer === correctAnswers[4]) {
        console.log("yabadadabuuuu");
        correctAnswer();
    }




    else {
        console.log("Incorrect!");
        incorrectAnswer();
        // Optionally, you can subtract time or perform other actions
        // Example: subtractTimeFromTimer(10); // Subtract 10 seconds
    }

    // Move to the next question
    // nextQuestion();
}



































function startQuiz() {
    setTimer();
    hideScreen();
    showQuestions();
}

















//set timer on click
startButton.addEventListener("click", startQuiz);

button1.addEventListener("click", handleButtonClick);
button2.addEventListener("click", handleButtonClick);
button3.addEventListener("click", handleButtonClick);
button4.addEventListener("click", handleButtonClick);

button1.addEventListener("click", nextQuestion);
button2.addEventListener("click", nextQuestion);
button3.addEventListener("click", nextQuestion);
button4.addEventListener("click", nextQuestion);

// button1.addEventListener("click", clickCount);
// button2.addEventListener("click", clickCount);
// button3.addEventListener("click", clickCount);
// button4.addEventListener("click", clickCount);
// startButton.addEventListener("click", hideScreen);
// startButton.addEventListener("click", showQuestions);