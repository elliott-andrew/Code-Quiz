// DOM Elements (depencies)

var site1El = document.querySelector(".site1");
var myButton = document.createElement("button");
var myButton1 = document.createElement("button");
var myButton2 = document.createElement("button");
var myButton3 = document.createElement("button");

// Data
site1El.children[0].textContent = "Are you ready to test your knowledge?";
site1El.setAttribute("style", "text-align: center; font-family: 'VT323', monospace; font-size: 4rem;");
myButton.textContent = "I'm a button";
myButton.setAttribute("style", "font-family: 'VT323', monospace; font-size: 2rem; border: white solid 1px; background-color: black; color: white");
myButton.addEventListener("click", questionOne);
site1El.appendChild(myButton);

function questionOne() {
    myButton.style.display = "none";
    site1El.style.display = "none";

    site1El.children[0].textContent = "What does HTML stand for?";
    site1El.setAttribute("style", "display:block; text-align: center; font-family: 'VT323', monospace; font-size: 4rem;");

    myButton1.textContent = "Hypertext Markup Language";
    myButton1.setAttribute("class", "btn");
    myButton1.addEventListener("click", questionTwo);

    myButton2.textContent = "Hypertext Markup Language";
    myButton2.setAttribute("class", "btn");
    myButton2.addEventListener("click", questionTwo);

    myButton3.textContent = "Hypertext Markup Language";
    myButton3.setAttribute("class", "btn");
    myButton3.addEventListener("click", questionTwo);

    site1El.appendChild(myButton1);
    site1El.appendChild(myButton2);
    site1El.appendChild(myButton3);
}

function questionTwo() {
    myButton.style.display = "none";
    site1El.style.display = "none";

    site1El.children[0].textContent = "What does CSS stand for?";
    site1El.setAttribute("style", "display:block; text-align: center; font-family: 'VT323', monospace; font-size: 4rem;");

    myButton1.textContent = "Hypertext Markup Language";
    myButton1.setAttribute("class", "btn");
    myButton1.addEventListener("click", questionThree);

    myButton2.textContent = "Hypertext Markup Language";
    myButton2.setAttribute("class", "btn");
    myButton2.addEventListener("click", questionThree);

    myButton3.textContent = "Hypertext Markup Language";
    myButton3.setAttribute("class", "btn");
    myButton3.addEventListener("click", questionThree);

    site1El.appendChild(myButton1);
    site1El.appendChild(myButton2);
    site1El.appendChild(myButton3);
}

function questionThree() {
    myButton.style.display = "none";
    site1El.style.display = "none";

    site1El.children[0].textContent = "What does Javascript stand for?";
    site1El.setAttribute("style", "display:block; text-align: center; font-family: 'VT323', monospace; font-size: 4rem;");

    myButton1.textContent = "Hypertext Markup Language";
    myButton1.setAttribute("class", "btn");
    myButton1.addEventListener("click", questionFour);

    myButton2.textContent = "Hypertext Markup Language";
    myButton2.setAttribute("class", "btn");
    myButton2.addEventListener("click", questionFour);

    myButton3.textContent = "Hypertext Markup Language";
    myButton3.setAttribute("class", "btn");
    myButton3.addEventListener("click", questionFour);

    site1El.appendChild(myButton1);
    site1El.appendChild(myButton2);
    site1El.appendChild(myButton3);
}

function questionFour() {
    myButton.style.display = "none";
    site1El.style.display = "none";

    site1El.children[0].textContent = "What does DOM stand for?";
    site1El.setAttribute("style", "display:block; text-align: center; font-family: 'VT323', monospace; font-size: 4rem;");

    myButton1.textContent = "Hypertext Markup Language";
    myButton1.setAttribute("class", "btn");
    myButton1.addEventListener("click", questionFive);

    myButton2.textContent = "Hypertext Markup Language";
    myButton2.setAttribute("class", "btn");
    myButton2.addEventListener("click", questionFive);

    myButton3.textContent = "Hypertext Markup Language";
    myButton3.setAttribute("class", "btn");
    myButton3.addEventListener("click", questionFive);

    site1El.appendChild(myButton1);
    site1El.appendChild(myButton2);
    site1El.appendChild(myButton3);
}

function questionFive() {
    myButton.style.display = "none";
    site1El.style.display = "none";

    site1El.children[0].textContent = "What does Console stand for?";
    site1El.setAttribute("style", "display:block; text-align: center; font-family: 'VT323', monospace; font-size: 4rem;");

    myButton1.textContent = "Hypertext Markup Language";
    myButton1.setAttribute("class", "btn");
    myButton1.addEventListener("click", questionOne);

    myButton2.textContent = "Hypertext Markup Language";
    myButton2.setAttribute("class", "btn");
    myButton2.addEventListener("click", questionOne);

    myButton3.textContent = "Hypertext Markup Language";
    myButton3.setAttribute("class", "btn");
    myButton3.addEventListener("click", questionOne);

    site1El.appendChild(myButton1);
    site1El.appendChild(myButton2);
    site1El.appendChild(myButton3);
}