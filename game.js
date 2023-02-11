const btnColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];




function nextSequence() {
    console.log('function for next sequence')
let randomNum = Math.floor(Math.random() * 4)
let randomColor = btnColors[randomNum];
const audio = new Audio(`./sounds/${randomColor}`);

gamePattern.push(randomColor);
}

nextSequence();
console.log(gamePattern)

$("#blue").fadeOut(100).fadeIn(100);