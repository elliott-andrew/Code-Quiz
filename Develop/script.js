// Dependencies (DOM elements)
var questionEl = document.querySelector("#question-area");
var questionDisplay = document.querySelector("#question")
var answerArea = document.querySelector("#answer-area");
var answerButton = document.querySelector("#submit-button")
var startButton = document.querySelector("#submit-button");
var scoreDisplay = document.querySelector("#results")

// Data
// Initial score
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

// Number of questions in quiz
var numQuestions = questions.length;
// Starting question index number
var questionIndex = 0;

// Helper functions
// Starts game with click of start button
startButton.addEventListener("click", function () {
    startGame();
});

function startGame() {
    // Display and cycle through questions
    function renderQuestions() {
        // pulls the current index number, adds it to the questions variable and attaches both to yourQuestion
        yourQuestion = questions[questionIndex]
        // replaces questionDisplay with the content of the current question
        questionDisplay.textContent = yourQuestion.question;
    }

    // display the answers
    function renderAnswers() {
        // resets and clears the answer section for each click
        answerArea.innerHTML = "";
        // creates three buttons to hold each answer
        var answer1 = document.createElement("button");
        var answer2 = document.createElement("button");
        var answer3 = document.createElement("button");
        // pulls the current index number, adds it to the questions variable and attaches both to yourAnswers
        yourAnswers = questions[questionIndex];
        // adds current answer options to buttons
        answer1.textContent = yourAnswers.answer1;
        answer2.textContent = yourAnswers.answer2;
        answer3.textContent = yourAnswers.answer3;
        // set type attribute of submit to each button
        answer1.setAttribute("type", "submit")
        answer2.setAttribute("type", "submit")
        answer3.setAttribute("type", "submit")
        // set id of submit-button to each button
        answer1.setAttribute("id", "submit-button")
        answer2.setAttribute("id", "submit-button")
        answer3.setAttribute("id", "submit-button")
        // set data-answer attribute to each button
        answer1.setAttribute("data-answer", "1")
        answer2.setAttribute("data-answer", "2")
        answer3.setAttribute("data-answer", "3")
        // add each button to the answerArea space on page
        answerArea.appendChild(answer1);
        answerArea.appendChild(answer2);
        answerArea.appendChild(answer3);
        // Click event listener
        answer1.addEventListener("click", function () {
            console.log(questionIndex);
            // parse the data-answer to return a number
            var answerData = parseInt(answer1.getAttribute("data-answer"));
            console.log("data:", answerData);
            console.log("correct:", questions[questionIndex].correct);
            // if the data-answer is equal to the correct button number
            if (answerData === questions[questionIndex].correct) {
                // add 1 to your score
                scoreCount++;
                // else deduct time from timer
            }
            // add 1 to the question index to cycle to next question
            questionIndex++;
            // if question index is 3 or less
            if (questionIndex < 4) {
                // run next question
                renderQuestions();
                // run next series of answers
                renderAnswers();
            } else {
                alert("yay");
            }
            // else render results

        })
        answer2.addEventListener("click", function () {
            console.log(questionIndex);
            var answerData = parseInt(answer2.getAttribute("data-answer"));
            console.log("data:", answerData);
            console.log("correct:", questions[questionIndex].correct);
            if (answerData === questions[questionIndex].correct) {
                scoreCount++;
            }
            questionIndex++;
            if (questionIndex < 4) {
                // run next question
                renderQuestions();
                // run next series of answers
                renderAnswers();
            } else {
                alert("yay");
            }
        })
        answer3.addEventListener("click", function () {
            console.log(questionIndex);
            var answerData = parseInt(answer3.getAttribute("data-answer"));
            console.log("data:", answerData);
            console.log("correct:", questions[questionIndex].correct);
            if (answerData === questions[questionIndex].correct) {
                scoreCount++;
            }
            questionIndex++;
            if (questionIndex < 4) {
                // run next question
                renderQuestions();
                // run next series of answers
                renderAnswers();
            } else {
                alert("yay");
            }

        })

    }

    renderQuestions();
    renderAnswers();

}