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
    // run start game function
    startGame();
});

// start game function
function startGame() {
    // begin the timer
    function setTime() {
        var timerInterval = setInterval(function () {
            // knock a second off the clock
            secondsLeft--;
            // display the new countdown time
            timeDisplay.textContent = secondsLeft + " seconds left";

            // check if we are out of time
            if (secondsLeft <= 0) {
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
        // Click event listener for first button
        answer1.addEventListener("click", function () {
            // parse the data-answer attriute to return a number
            var answerData = parseInt(answer1.getAttribute("data-answer"));
            // if the data-answer attribute is equal to the correct answer number
            if (answerData === questions[questionIndex].correct) {
                // increase score by 1
                scoreCount++;
                // else deduct time from timer
            } else {
                secondsLeft -= 7;;
            }
            // add 1 to the question index
            questionIndex++;
            // if question index is less than the number of questions
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
        // event listener for the second button
        answer2.addEventListener("click", function () {
            // parse the data-answer attriute to return a number
            var answerData = parseInt(answer2.getAttribute("data-answer"));
            // if the data-answer attribute is equal to the correct answer number
            if (answerData === questions[questionIndex].correct) {
                // increase score by 1
                scoreCount++;
                // else deduct time from timer
            } else {
                secondsLeft -= 7;;
            }
            // add 1 to the question index to cycle to next question
            questionIndex++;
            // if question index is less than the number of questions
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
        answer3.addEventListener("click", function () {
            // parse the data-answer attriute to return a number
            var answerData = parseInt(answer3.getAttribute("data-answer"));
            // if the data-answer attribute is equal to the correct answer number
            if (answerData === questions[questionIndex].correct) {
                // increase score by 1
                scoreCount++;
                // else deduct time from timer
            } else {
                secondsLeft -= 7;
            }
            // add 1 to the question index to cycle to next question
            questionIndex++;
            // if question index is less than number of questions
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
        // empty out the time element
        answerArea.innerHTML = " ";
        // change the class of the div holding the results content to display block
        resultsSection.setAttribute("class", "col results");
        // display the number of correct answers to the uder
        questionDisplay.textContent = scoreCount + "/4 correct!";
        // create a restart button
        var restart = document.createElement("button");
        // set the type to submit
        restart.setAttribute("type", "submit");
        // set id of submit-button
        restart.setAttribute("id", "submit-button");
        // on click, button will restart the quiz
        restart.setAttribute("onClick", "window.location.href=window.location.href")
        // adds text to the button
        restart.textContent = "Restart"
        // place the button in on the screen
        answerArea.appendChild(restart);
        // display the users current score to be sumitted 
        yourScore.textContent = scoreCount;

        // display success notification when name is submitted
        function displayMessage(type, message) {
            // populate 
            msgDiv.textContent = message;
            msgDiv.setAttribute("class", type);
        }
        // pull from local storage
        function renderLastRegistered() {
            // pull last saved name
            var lastName = localStorage.getItem("name");
            // pull last saved score
            var lastScore = localStorage.getItem("score");
            // if no name or last score return nothing
            if (!lastName || !lastScore) {
                return;
            }
            // fill the user name space with the last saved name
            userNameSpan.textContent = lastName;
            // fill the score space with the last saved score
            scoreSpan.textContent = lastScore;
        }
        // sign up button click event
        signUpButton.addEventListener("click", function (event) {
            // stop the page from refreshing
            event.preventDefault();
            // create a variable to hold the submitted name
            var name = document.querySelector("#name").value;
            // create a variable to hold the users score
            var score = scoreCount;
            // if name is not entered
            if (name === "") {
                // display error message
                displayMessage("error", "Name cannot be blank");
            } else {
                // if entered display success message
                displayMessage("success", "Registered successfully");
                // save name to local storage
                localStorage.setItem("name", name);
                // save score to local storage
                localStorage.setItem("score", score);
                // run last registered to update with new information
                renderLastRegistered();
            }
        });
    }
    // intialize functions
    setTime();
    renderQuestions();
    renderAnswers();
    renderLastRegistered();
}