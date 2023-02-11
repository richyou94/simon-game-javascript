const btnColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];


function nextSequence() {
    console.log('function for next sequence')
let randomNum = Math.floor(Math.random() * 4)
let randomColor = btnColors[randomNum];
gamePattern.push(randomColor);
}

nextSequence();
console.log(gamePattern)
