var highscores = document.getElementById("highscores");

var score = localStorage.getItem("score");

var userInitials = localStorage.getItem("userInitials");
console.log(userInitials);


function handleSubmission() {

}

// Create a new li element
var listItem = document.createElement("li");

// Set the text content of the li element to the user's initials
listItem.textContent = userInitials.toUpperCase() + " - Score: " + score;
console.log(listItem);
// Append the li element to an existing list (replace 'yourListId' with the actual ID of your list)
highscores.appendChild(listItem);