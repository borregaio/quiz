var score = localStorage.getItem("score");
var userInitials = localStorage.getItem("userInitials");
console.log("User Initials:", localStorage.getItem("userInitials"));
var clear = document.getElementById("clear");


// Retrieve highscores from local storage
var highscores = JSON.parse(localStorage.getItem("highscores")) || [];

// Get the UL element where the highscores will be displayed
var highscoresList = document.getElementById("highscores");

// Iterate through the highscores and create an LI element for each
highscores.forEach(function(scoreObj) {
    var listItem = document.createElement("li");
    listItem.textContent = scoreObj.userInitials + " - Score: " + scoreObj.score;
    highscoresList.appendChild(listItem);
});


//clear data

// Add an event listener to the "clear" button
clear.addEventListener("click", function () {
    // Remove all child elements from the highscoresList
    while (highscoresList.firstChild) {
        highscoresList.removeChild(highscoresList.firstChild);
    }

    // Optionally, you may want to clear the highscores array and update the local storage
    highscores = [];
    localStorage.setItem("highscores", JSON.stringify(highscores));
});