// display ready to begin message
// button to start game
// start countdown timer
// ask it a series of questions with answer options
// display questions
// display answer options
// tally the score 
// subtract time from timer if answer is wrong
// after timer is finished, or user reaches end of questions display results
// display their score
// ask if they want to play again



// Dependencies (DOM elements)
var questionEl = document.querySelector("#question-area");
var answerArea = document.querySelector("#answer-area");
var startButton = document.querySelector("#submit-button");

// Data
var scoreCount = 0;
var timeLeft = 30;
// All messages display to user
var questions = {
    intro: "Are you read to test your knowledge?",
    questionOne: "What does HTML stand for?",
    questionTwo: ["What does CSS stand for?"],
    questionThree: ["What is Javascript?"],
    questionFour: ["What does DOM stand for?"],
    questionFive: ["Which option below is not a terminal command?"]
}

// Helper functions
// Begin the game
startButton.addEventListener("click", questions);
// hides the submit button and runs the questions function
function questions() {
    startButton.style.display = "none"

};

// Display question one
// function questions() {
//     messageArea.textContent = "What does HTML stand for?";
// }

// console.log(messageArea);






// // Variables
// var scoreCount = 0;
// var timeLeft = 30;
// var timeId = setInterval(countdown, 1000);

// // DOM Elements (depencies)
// var site1El = document.querySelector(".site1");
// var timerEl = document.getElementById("time-left")
// var myButton = document.createElement("button");
// var myButton1 = document.createElement("button");
// var myButton2 = document.createElement("button");
// var myButton3 = document.createElement("button");

// // Data
// site1El.children[0].textContent = "Are you ready to test your knowledge?";
// site1El.setAttribute("style", "text-align: center; font-family: 'VT323', monospace; font-size: 4rem;");
// timeLeft = parseInt(timeLeft);
// timerEl.textContent = timeLeft;
// myButton.textContent = "Start";
// myButton.setAttribute("class", "btn");
// myButton.addEventListener("click", questionOne);
// site1El.appendChild(myButton);


// function questionOne() {
//     myButton.style.display = "none";
//     site1El.style.display = "none";

//     site1El.children[0].textContent = "What does HTML stand for?";
//     site1El.setAttribute("style", "display:block; text-align: center; font-family: 'VT323', monospace; font-size: 4rem;");

//     myButton1.textContent = "Hypertext Markdown Language";
//     myButton1.setAttribute("class", "btn");
//     myButton1.addEventListener("click", questionTwo);
//     myButton1.onclick = scoreCount++;

//     myButton2.textContent = "Hypertext Markup Language";
//     myButton2.setAttribute("class", "btn");
//     myButton2.setAttribute("id", "answer")
//     myButton2.addEventListener("click", questionTwo);

//     myButton3.textContent = "Hypertext Marky Mark Language";
//     myButton3.setAttribute("class", "btn");
//     myButton3.addEventListener("click", questionTwo);

//     site1El.appendChild(myButton1);
//     site1El.appendChild(myButton2);
//     site1El.appendChild(myButton3);
// }

// function questionTwo() {
//     console.log(scoreCount);
//     site1El.children[0].textContent = "What does CSS stand for?";
//     site1El.setAttribute("style", "display:block; text-align: center; font-family: 'VT323', monospace; font-size: 4rem;");

//     myButton1.textContent = "Cascading Stylesheet";
//     myButton1.setAttribute("class", "btn");
//     myButton1.addEventListener("click", questionThree);
//     myButton1.onclick = scoreCount++;

//     myButton2.textContent = "Flowing Stylesheet";
//     myButton2.setAttribute("class", "btn");
//     myButton2.addEventListener("click", questionThree);

//     myButton3.textContent = "Shading Stylesheet";
//     myButton3.setAttribute("class", "btn");
//     myButton3.addEventListener("click", questionThree);

//     site1El.appendChild(myButton1);
//     site1El.appendChild(myButton2);
//     site1El.appendChild(myButton3);
// }

// function questionThree() {
//     console.log(scoreCount);
//     site1El.children[0].textContent = "What is Javascript?";
//     site1El.setAttribute("style", "display:block; text-align: center; font-family: 'VT323', monospace; font-size: 4rem;");

//     myButton1.textContent = "A typeface";
//     myButton1.setAttribute("class", "btn");
//     myButton1.addEventListener("click", questionFour);

//     myButton2.textContent = "A coffee brand";
//     myButton2.setAttribute("class", "btn");
//     myButton2.addEventListener("click", questionFour);

//     myButton3.textContent = "A programing language";
//     myButton3.setAttribute("class", "btn");
//     myButton3.addEventListener("click", questionFour);
//     myButton3.onclick = scoreCount++;

//     site1El.appendChild(myButton1);
//     site1El.appendChild(myButton2);
//     site1El.appendChild(myButton3);
// }

// function questionFour() {
//     site1El.children[0].textContent = "What does DOM stand for?";
//     site1El.setAttribute("style", "display:block; text-align: center; font-family: 'VT323', monospace; font-size: 4rem;");

//     myButton1.textContent = "Document Object Model";
//     myButton1.setAttribute("class", "btn");
//     myButton1.addEventListener("click", questionFive);
//     myButton1.onclick = scoreCount++;

//     myButton2.textContent = "Document Thingamajig";
//     myButton2.setAttribute("class", "btn");
//     myButton2.addEventListener("click", questionFive);

//     myButton3.textContent = "Donut Object Mmmmm";
//     myButton3.setAttribute("class", "btn");
//     myButton3.addEventListener("click", questionFive);

//     site1El.appendChild(myButton1);
//     site1El.appendChild(myButton2);
//     site1El.appendChild(myButton3);
// }

// function questionFive() {
//     site1El.children[0].textContent = "Which is not a terminal command?";
//     site1El.setAttribute("style", "display:block; text-align: center; font-family: 'VT323', monospace; font-size: 4rem;");

//     myButton1.textContent = "mkdir";
//     myButton1.setAttribute("class", "btn");
//     myButton1.addEventListener("click", resultsPage);

//     myButton2.textContent = "cd";
//     myButton2.setAttribute("class", "btn");
//     myButton2.addEventListener("click", resultsPage);

//     myButton3.textContent = "omg";
//     myButton3.setAttribute("class", "btn");
//     myButton3.addEventListener("click", resultsPage);
//     myButton3.onclick = scoreCount++;

//     site1El.appendChild(myButton1);
//     site1El.appendChild(myButton2);
//     site1El.appendChild(myButton3);
// }

// function resultsPage() {
//     myButton1.style.display = "none";
//     myButton2.style.display = "none";

//     site1El.children[0].textContent = "Results";
//     site1El.setAttribute("style", "display:block; text-align: center; font-family: 'VT323', monospace; font-size: 4rem;");

//     myButton3.textContent = "Retry";
//     myButton3.setAttribute("class", "btn");
//     myButton3.addEventListener("click", questionOne);

//     site1El.appendChild(myButton3);

// }