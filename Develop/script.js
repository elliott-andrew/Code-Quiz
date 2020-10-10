// Dependencies (DOM elements)
var questionDisplay = document.querySelector("#question")
var answerArea = document.querySelector("#answer-area");
var startButton = document.querySelector("#submit-button");
var timeDisplay = document.querySelector("#time-left")
var nameInput = document.querySelector("#name");
var signUpButton = document.querySelector("#sign-up");
var msgDiv = document.querySelector("#msg");
var userNameSpan = document.querySelector("#user-name");
var scoreSpan = document.querySelector("#user-score");
var yourScore = document.querySelector("#your-score");
var resultsSection = document.querySelector("#results");

// Data
// All questions and answers
let quiz = [
    {
        question: "What does HTML stand for?",
        choices: [
            "Hypertext Markdown Language",
            "Hypertext Markup Language",
            "Hypertext Marky Mark Language"
        ],
        answer: "2"
    },
    {
        question: "What does CSS stand for?",
        choices: [
            "Cascading Stylesheet",
            "Flowing Stylesheet",
            "Shading Stylesheet"
        ],
        answer: "1"
    },
    {
        question: "What is Javascript?",
        choices: ["A typeface", "A coffee brand", "A programming language"],
        answer: "3"
    },
    {
        question: "What does DOM stand for?",
        choices: [
            "Document Object Model",
            "Document Thingamajig",
            "Donut Object Mmmmmm"
        ],
        answer: "1"
    }
];
// Initial score
var scoreCount = 0;
// Initial time left
var secondsLeft = 30;
// Number of questions in quiz
var numQuestions = questions.length;
// Starting question index number
var questionIndex = 0;

// new variable to test nesting arrays and index numbers
// variable to hold questions
var question = new Array("What does HTML stand for?", "What does CSS stand for?", "What is Javascript?", "What does DOM stand for?");
// variable to hold choices
var choices = new Array()
// choices for question 1
choices[1] = new Array("Hypertext Markdown Language", "Hypertext Markup Language", "Hypertext Markup Language");
// choices for question 2
choices[2] = new Array("Casecading Stylesheets", "Flowing Stylesheet", "Shading Stylesheet");
// choices for question 3
choices[3] = new Array("A typeface", "A coffee brand", "A programming language");
// answers for each question
var answer = new Array("2", "1", "3", "1");
console.log(question[0] + " It stands for " + choices[1][1] + ". " + answer[0]);


// Helper functions
// Starts game with click of start button
startButton.addEventListener("click", function () {
    startGame();
});
// Being the game
function startGame() {
    // Start the timer
    function setTime() {
        var timerInterval = setInterval(function () {
            // knock a second off the clock
            secondsLeft--;
            // display the new countdown time
            timeDisplay.textContent = secondsLeft + " seconds left";

            // check if we are out of time
            if (secondsLeft < 1) {
                // if so, sotp the timer
                clearInterval(timerInterval);
                // trigger the results
                renderResults();
            }

        }, 1000);
    }
    for (let i = 0; i < question.length; i++) {
        var yourQuestion = question[i];
        console.log(yourQuestion);
    }
    // Display and cycle through questions
    function renderQuestions() {
        // pulls the current index number, adds it to the questions variable and attaches both to yourQuestion
        var yourQuestion = questions[questionIndex]
        // replaces questionDisplay with the content of the current question
        questionDisplay.textContent = yourQuestion.question;
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
        answer1.addEventListener("click", function () {
            // parse the data-answer to return a number
            var answerData = parseInt(answer1.getAttribute("data-answer"));
            // if the data-answer is equal to the correct button number
            if (answerData === questions[questionIndex].correct) {
                // increase score by 1
                scoreCount++;
                // else deduct time from timer
            } else {
                secondsLeft -= 10;
            }
            // add 1 to the question index
            questionIndex++;
            // if question index is 3 or less
            if (questionIndex < 4) {
                // run next question
                renderQuestions();
                // run next series of answers
                renderAnswers();
            } else if (secondsLeft < 1) {
                renderResults();
            } else {
                // else render results
                renderResults();
            }

        })
        answer2.addEventListener("click", function () {
            // parse the data-answer to return a number
            var answerData = parseInt(answer2.getAttribute("data-answer"));
            // if the data-answer is equal to the correct button number
            if (answerData === questions[questionIndex].correct) {
                // increase score by 1
                scoreCount++;
                // else deduct time from timer
            } else {
                secondsLeft -= 10;;
            }
            // add 1 to the question index to cycle to next question
            questionIndex++;
            // if question index is 3 or less
            if (questionIndex < 4) {
                // run next question
                renderQuestions();
                // run next series of answers
                renderAnswers();
            } else if (secondsLeft < 1) {
                renderResults();
            } else {
                // else render results
                renderResults();
            }

        })
        answer3.addEventListener("click", function () {
            // parse the data-answer to return a number
            var answerData = parseInt(answer3.getAttribute("data-answer"));
            // if the data-answer is equal to the correct button number
            if (answerData === questions[questionIndex].correct) {
                // increase score by 1
                scoreCount++;
                // else deduct time from timer
            } else {
                secondsLeft -= 10;
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
                // else render results
                renderResults();
            }
        })

    }

    function renderResults() {
        // empty out the answer area
        answerArea.innerHTML = " ";
        timeDisplay.innerHTML = " ";
        // Switch the results section class to make it visible
        resultsSection.setAttribute("class", "col results");
        // display the score
        questionDisplay.textContent = scoreCount + "/4 correct!";
        // create a restart button
        var restart = document.createElement("button");
        // set the button type to submit
        restart.setAttribute("type", "submit");
        // set id of submit-button
        restart.setAttribute("id", "submit-button");
        // on click refresh window
        restart.setAttribute("onClick", "window.location.href=window.location.href")
        // Add text to restart button
        restart.textContent = "Restart"
        // Place restart button
        answerArea.appendChild(restart);

        renderLastRegistered();
        // Display success message when name registered
        function displayMessage(type, message) {
            msgDiv.textContent = message;
            msgDiv.setAttribute("class", type);
        }
        // Display last registered name
        function renderLastRegistered() {
            // Pull the name from local storage
            var lastName = localStorage.getItem("name");
            // Pull the score from score storage
            var lastScore = localStorage.getItem("score");
            // if no name, do nothing
            if (!lastName) {
                return;
            }
            // add the last saved name
            userNameSpan.textContent = lastName;
            // add the last saved score
            scoreSpan.textContent = lastScore;
            // display user's current score
            yourScore.textContent = scoreCount;
        }
        // Event listener for the register sign up button
        signUpButton.addEventListener("click", function (event) {
            // prevent the default
            event.preventDefault();
            // create a variable to hold the name
            var name = document.querySelector("#name").value;
            // set the score to the users current score
            var score = scoreCount;
            // if name is blank display error
            if (name === "") {
                displayMessage("error", "Name cannot be blank");
            } else {
                // else, show success message
                displayMessage("success", "Registered successfully");
                // Save email and password to localStorage and render the last registered.
                localStorage.setItem("name", name);
                localStorage.setItem("score", score);
                renderLastRegistered();
            }
        });

    }

    setTime();
    renderQuestions();
    renderAnswers();
    renderLastRegistered();
}