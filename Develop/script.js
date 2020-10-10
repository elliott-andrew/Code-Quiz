// DOM elements
var questionSection = document.querySelector("#question-area");
var answerSection = document.querySelector("#answer-area");
var scoreSection = document.querySelector("#score-area");
var timeSection = document.querySelector("#time-area");
var nameInput = document.querySelector("#name");
var signUpButton = document.querySelector("#sign-up");
var msgDiv = document.querySelector("#msg");
var userNameSpan = document.querySelector("#user-name");
var scoreSpan = document.querySelector("#user-score");
var yourScore = document.querySelector("#your-score");
var resultsSection = document.querySelector("#results");

// Data
// Questions, answers, correct answer
let quiz = [
    {
        question: "What does HTML stand for?",
        choices: [
            "Hypertext Markdown Language",
            "Hypertext Markup Language",
            "Hypertext Marky Mark Language"
        ],
        answer: "1"
    },
    {
        question: "What does CSS stand for?",
        choices: [
            "Cascading Stylesheet",
            "Flowing Stylesheet",
            "Shading Stylesheet"
        ],
        answer: "0"
    },
    {
        question: "What is Javascript?",
        choices: ["A typeface", "A coffee brand", "A programming language"],
        answer: "2"
    },
    {
        question: "What does DOM stand for?",
        choices: [
            "Document Object Model",
            "Document Thingamajig",
            "Donut Object Mmmmmm"
        ],
        answer: "0"
    }
];
// Starting index
var currentIndex = 0;
// Starting score
var scoreCount = 0;
// Starting time
var secondsLeft = 30;

// Displays initial ready to begin message
function clickToStart() {
    // Create h2 element
    var areYouReady = document.createElement("h2");
    // Add message to h2 element
    areYouReady.textContent = "Are you ready to test your knowledge?"
    // Insert the message on the page
    questionSection.appendChild(areYouReady);
    // Create a start button
    let button = document.createElement("button");
    // Add text inside button
    button.textContent = "Start";
    // Set button type
    button.setAttribute("type", "submit");
    // Add button to the page
    answerSection.appendChild(button);
    // When user clicks start, quiz, time and score begin 
    button.addEventListener("click", function () {
        renderQuiz();
        setTime();
        addScore();
    });
}
// Timer
function setTime() {
    var timerInterval = setInterval(function () {
        timeSection.textContent = " ";
        // Knock a second off the clock
        secondsLeft--;
        // Display the new countdown time
        var time = document.createElement("p");
        time.textContent = secondsLeft + " seconds left";
        timeSection.appendChild(time)
        // Check if we are out of time
        if (secondsLeft <= 0 || currentIndex > 3) {
            // if so, stop the timer
            clearInterval(timerInterval);
            // Clear the timer from the page
            timeSection.textContent = " ";
            // trigger the results
            renderResults();
        }
    }, 1000);
}
// Score keeper 
function addScore() {
    // Clear the current score to replace with updated
    scoreSection.innerHTML = " ";
    // Create a p element to hold score
    var score = document.createElement("p")
    // Insert text to the score
    score.textContent = "Your score is " + scoreCount + "/4 correct";
    // Add the score to the page
    scoreSection.appendChild(score);
}
// Quiz
function renderQuiz() {
    // Clear the current question to replace with updated
    questionSection.innerHTML = " ";
    // Clear the current answer to replace with updated
    answerSection.innerHTML = " ";

    // Insert questions on the page
    function renderQuestions() {
        // Create an h2 element
        let yourQuestion = document.createElement("h2");
        // insert text to the h2 element
        yourQuestion.textContent = quiz[currentIndex].question;
        // Add the h2 element to the page
        questionSection.appendChild(yourQuestion);
    }

    function renderAnswers() {
        // Loop through each question's choices
        for (i = 0; i < quiz[currentIndex].choices.length; i++) {
            // Create a button element to hold each question
            let button = document.createElement("button");
            // Insert text to the button with corresponding options
            button.textContent = quiz[currentIndex].choices[i];
            // Add a number to track which button is clicked
            button.setAttribute("data-answer", i);
            // Add the button to the page
            answerSection.appendChild(button);

            // Listen for button click
            button.addEventListener("click", function () {
                // Create a variable to hold the button's answer number
                var buttonClicked = this.getAttribute("data-answer");
                // Create a variable to hold the correct answer number
                var correctButton = quiz[currentIndex].answer;
                // Compare selected answer with correct answer
                // If correct
                if (buttonClicked === correctButton) {
                    // Increase the score
                    scoreCount++
                    // Add it to the score
                    addScore();
                    // If not correct
                } else {
                    // Deduct from timer
                    secondsLeft -= 10;
                }
                // Increase the number number to cycle to the next question
                currentIndex++;
                // Check how many questions are left
                // If there are less than 4 questions
                if (currentIndex < 4) {
                    // Run the quiz function again
                    renderQuiz();
                    // if on last question
                } else {
                    // Display results
                    renderResults()
                }
            });
        };
    };

    renderQuestions();
    renderAnswers();
}

function renderResults() {
    // empty out the answer area
    answerSection.innerHTML = " ";
    // empty out timer area
    timeSection.innerHTML = " ";
    // empty out score section
    scoreSection.innerHTML = " ";
    // Switch the results section class to make it visible
    resultsSection.setAttribute("class", "col results");
    // display the score
    questionSection.textContent = scoreCount + "/4 correct!";
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
    answerSection.appendChild(restart);

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

clickToStart();