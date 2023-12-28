var questionTitle = document.getElementById("question-title");
var choices = document.getElementById("choices");
var button1 = document.createElement("button");
var button2 = document.createElement("button");
var button3 = document.createElement("button");
var button4 = document.createElement("button");

button1.dataset.index = 0;
button2.dataset.index = 1;
button3.dataset.index = 2;
button4.dataset.index = 3;

var currentIndex = 1;

// var answer2 = document.getElementById


//questions and answers
var quiz = [
    {
        question: "What is the correct way to declare a variable in JavaScript?",
        answers: [
            "variable x;",
            "var x;",
            "x = var;",
            "declare x;"
        ]
    },
    {
        question: "What is the result of the following expression? 10 + '5'",
        answers: [
            "15",
            "'105'",
            "105",
            "Error"
        ]
    },
    {
        question: "How do you write an 'if' statement in JavaScript?",
        answers: [
            "if x == 5 then",
            "if (x = 5)",
            "if x = 5",
            "if (x === 5)"
        ]
    },
    {
        question: "How do you access the third element in an array named myArray?",
        answers: [
            "myArray(2)",
            "myArray[2]",
            "myArray.3",
            "myArray.third"
        ]
    },
    {
        question: "How do you define a function in JavaScript?",
        answers: [
            "function myFunction() => { }",
            "myFunction = function() { }",
            "def myFunction() { }",
            "function = myFunction() { }"
        ]
    }
];





