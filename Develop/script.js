// Dependencies (DOM elements)
var questionEl = document.querySelector("#question-area");
var questionDisplay = document.querySelector("#question")
var answerArea = document.querySelector("#answer-area");
var answerButton = document.querySelector("#submit-button")
var startButton = document.querySelector("#submit-button");
var scoreDisplay

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
        // adds current answer1 to answer1 button 
        answer1.textContent = yourAnswers.answer1;
        // adds current answer2 to answer2 button 
        answer2.textContent = yourAnswers.answer2;
        // adds current answer3 to answer3 button 
        answer3.textContent = yourAnswers.answer3;
        // set type attribute of submit to each button
        answer1.setAttribute("type", "submit")
        answer2.setAttribute("type", "submit")
        answer3.setAttribute("type", "submit")
        // set id of submit-button to each button
        answer1.setAttribute("id", "submit-button")
        answer2.setAttribute("id", "submit-button")
        answer3.setAttribute("id", "submit-button")
        // set data-answer attribute to verify if answer is correct
        answer1.setAttribute("data-answer", "1")
        answer2.setAttribute("data-answer", "2")
        answer3.setAttribute("data-answer", "3")
        // add each button to the answerArea space on page
        answerArea.appendChild(answer1);
        answerArea.appendChild(answer2);
        answerArea.appendChild(answer3);
        // on click, +1 current index number and rerun both the question and answers functions
        answer1.addEventListener("click", function () {
            findCorrent()
            questionIndex++;
            renderQuestions();
            renderAnswers();

        })

        answer2.addEventListener("click", function () {
            findCorrent()
            questionIndex++;
            renderQuestions();
            renderAnswers();

        })

        answer3.addEventListener("click", function () {
            findCorrent()
            questionIndex++;
            renderQuestions();
            renderAnswers();

        })

        function findCorrent() {
            // pulls the current index number, adds it to the corrent asnwer variable and attaches both to correctAnswer
            correctAnswer = questions[questionIndex].correct
            console.log(correctAnswer)
            // checks if the button selected matches the correct answer
            if (answer1.getAttribute("data-answer") == correctAnswer || answer2.getAttribute("data-answer") == correctAnswer || answer3.getAttribute("data-answer") == correctAnswer) {
                alert("yay!");
            }
        }

    }

    renderQuestions();
    renderAnswers();

}