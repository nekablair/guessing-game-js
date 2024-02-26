// Your function(s) should go here that will interact with the webpage or DOM
let userInput = document.querySelector("input")
let userNum = document.querySelector("#userNumber")
let btn = document.querySelector("button")
let output = document.querySelector("#output")
let overBtn = document.querySelector("#over");
let randNum = Math.floor(Math.random() * 100) + 1;

let check = () => {
    const userGuess = Number(userNum.value);
    if (userGuess === randNum) {
        output.innerHTML = "You guessed the right number!";
    } else if (userGuess > randNum) {
        output.textContent = "You are too high!"
    } else {
        output.textContent = "You are too low!"
    } 
}

let reset = () => {
    userInput.value = ""
    userNum.value = ""
    output.innerHTML = ""
}

btn.addEventListener("click", check);
overBtn.addEventListener("click", reset);
