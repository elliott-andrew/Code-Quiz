// DOM Elements (depencies)

var site1El = document.querySelector(".site1");
var myButton = document.createElement("button");

// Data
site1El.children[0].textContent = "Are you ready to test your knowledge?";
site1El.setAttribute("style", "text-align: center; font-family: 'VT323', monospace; font-size: 4rem;");
myButton.textContent = "I'm a button";
myButton.setAttribute("style", "font-family: 'VT323', monospace; font-size: 2rem; border: white solid 1px; background-color: black; color: white");
myButton.addEventListener("click", codeQuiz);
site1El.appendChild(myButton);

function codeQuiz() {
    myButton.style.display = "none";
    site1El.style.display = "none";
}