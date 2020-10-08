// Dependencies (DOM elements)
var questionEl = document.querySelector("#question-area");
var questionDisplay = document.querySelector("#question")
var answerArea = document.querySelector("#answer-area");
var answerButton = document.querySelector("#submit-button")
var startButton = document.querySelector("#submit-button");

// Data
var scoreCount = 0;
var timeLeft = 30;
// All questions and answers
var questions = [
    {
        question: "What does HTML stand for?",
        answer1: "Hypertext Markdown Language",
        answer2: "Hypertext Markup Language",
        answer3: "Hypertext Marky Mark Language",
        correct: 2
    },

    {
        question: "What does CSS stand for?",
        answer1: "Cascading Stylesheet",
        answer2: "Flowing Stylesheet",
        answer3: "Shading Stylesheet",
        correct: 1
    },

    {
        question: "What is Javascript",
        answer1: "A typeface",
        answer2: "A coffee brand",
        answer3: "A programming language",
        correct: 3
    },

    {
        question: "What does DOM stand for?",
        answer1: "Document Object Model",
        answer2: "Document Thingamajig",
        answer3: "Donut Object Mmmmmm",
        correct: 1
    }

]
console.log(questions.length);

var numQuestions = questions.length;
var questionIndex = 0;

// Helper functions
startButton.addEventListener("click", function () {
    startButton.style.display = "none";
    renderQuestions();
});

function renderQuestions() {
    var currentQuestionIndex = Math.floor(questionIndex * numQuestions);
    yourQuestion = questions[currentQuestionIndex]
    questionDisplay.textContent = yourQuestion.question
    questionIndex++;
    if (questionIndex > 3) {
        renderresults();
    }

}

function renderresults() {

}


// function questionOne() {
//     questionDisplay.innerHTML = "";
//     var h2 = document.createElement("h2");
//     h2.textContent = questions[0].question;
//     h2.classList.add("question")
//     questionDisplay.appendChild(h2);

// }

// function questionTwo() {
//     questionDisplay.innerHTML = "";
//     var h2 = document.createElement("h2");
//     h2.textContent = questions[1].question;
//     h2.classList.add("question")
//     questionDisplay.appendChild(h2);

// }

// function questionThree() {
//     questionDisplay.innerHTML = "";
//     var h2 = document.createElement("h2");
//     h2.textContent = questions[2].question;
//     h2.classList.add("question")
//     questionDisplay.appendChild(h2);

// }

// function questionFour() {
//     questionDisplay.innerHTML = "";
//     var h2 = document.createElement("h2");
//     h2.textContent = questions[3].question;
//     h2.classList.add("question")
//     questionDisplay.appendChild(h2);

// }
