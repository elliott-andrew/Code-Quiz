// Dependencies (DOM elements)
var questionEl = document.querySelector("#question-area");
var questionDisplay = document.querySelector("#question")
var answerArea = document.querySelector("#answer-area");
var answerButton = document.querySelector("#submit-button")
var startButton = document.querySelector("#submit-button");
var scoreDisplay = document.querySelector("#results")
var timeDisplay = document.querySelector("#time-left")

// Data
// Initial score
var scoreCount = 0;
var secondsLeft = 30;

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
    function setTime() {
        var timerInterval = setInterval(function () {
            // knock a second off the clock
            secondsLeft--;
            // display the new countdown time
            timeDisplay.textContent = secondsLeft + " seconds left";

            // check if we are out of time
            if (secondsLeft === 0) {
                // if so, sotp the timer
                clearInterval(timerInterval);
                // trigger the message
                renderResults();
            }

        }, 1000);
    }
    // Display and cycle through questions
    function renderQuestions() {
        // pulls the current index number, adds it to the questions variable and attaches both to yourQuestion
        yourQuestion = questions[questionIndex]
        // replaces questionDisplay with the content of the current question
        questionDisplay.textContent = yourQuestion.question;
        console.log("before", questionIndex);
    }

    // display the answers and check if correct
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
        // This is listening for a click in the answer area
        answerArea.addEventListener("click", function (event) {
            // event.target picks up EXACTLY what was clicked
            if (event.target.matches("button")) {
                // if so, get the index of the button
                var selectedAnswer = parseInt(event.target.getAttribute("data-answer"));
                console.log(selectedAnswer);
                console.log(questions[questionIndex].correct)
                if (selectedAnswer === questions[questionIndex].correct) {
                    scoreCount++
                    console.log("Your ", scoreCount);
                }
                questionIndex++;
                // if there are less than 4 remaining questions
                if (questionIndex < 4) {
                    // display the questions
                    renderQuestions();
                    // display the answer
                    renderAnswers;
                } else {
                    renderResults();
                }

            }
            console.log("after", questionIndex);
        });
    }

    function renderResults() {
        // empty out the time element
        answerArea.innerHTML = " ";

        questionDisplay.textContent = scoreCount + "/4 correct!";
        // create a restart button
        var restart = document.createElement("button");
        // set the type to submit
        restart.setAttribute("type", "submit")
        // set id of submit-button
        restart.setAttribute("id", "submit-button")
        // Place
        answerArea.appendChild(restart);

    }

    setTime();
    renderQuestions();
    renderAnswers();

}