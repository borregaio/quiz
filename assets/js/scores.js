// Create local storage
var score = localStorage.getItem("score");
var userInitials = localStorage.getItem("userInitials");
var clear = document.getElementById("clear");


// Retrieve highscores from local storage
var highscores = JSON.parse(localStorage.getItem("highscores")) || [];

// Get the ul element where the highscores will be displayed
var highscoresList = document.getElementById("highscores");

// Iterate through the highscores and create an li element for each
highscores.forEach(function(scoreObj) {
    var listItem = document.createElement("li");
    listItem.textContent = scoreObj.userInitials + " - Score: " + scoreObj.score;
    highscoresList.appendChild(listItem);
});

// Add an event listener to the "clear" button
clear.addEventListener("click", function () {
    // Remove all child elements from the highscoresList
    while (highscoresList.firstChild) {
        highscoresList.removeChild(highscoresList.firstChild);
    }

    // Clear the highscores array and update the local storage
    highscores = [];
    localStorage.setItem("highscores", JSON.stringify(highscores));
});