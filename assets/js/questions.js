var questionTitle = document.getElementById("question-title");
var choices = document.getElementById("choices");
var button1 = document.createElement("button");
var button2 = document.createElement("button");
var button3 = document.createElement("button");
var button4 = document.createElement("button");


//questions and answers
var quiz = {
    question1: "What is the correct way to declare a variable in JavaScript?",
    answers1: [
        "variable x;",
        "var x;",
        "x = var;",
        "declare x;"
    ],
    question2: "What is the result of the following expression? 10 + '5'",
    answers2: [
        "15",
        "'105'",
        "105",
        "Error"
    ],
    question3: "How do you write an 'if' statement in JavaScript?",
    answers3: [
        "if x == 5 then",
        "if (x = 5)",
        "if x = 5",
        "if (x === 5)"
    ],
    question4: "How do you access the third element in an array named myArray?",
    answers4: [
        "myArray(2)",
        "myArray[2]",
        "myArray.3",
        "myArray.third"
    ],
    question5: "How do you define a function in JavaScript?",
    answers5: [
        "function myFunction() => { }",
        "myFunction = function() { }",
        "def myFunction() { }",
        "function = myFunction() { }"
    ]
};




