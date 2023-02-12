const btnColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];




function nextSequence() {
    
let randomNum = Math.floor(Math.random() * 4)
let randomColor = btnColors[randomNum];

$(`#${randomColor}`).fadeOut(100).fadeIn(100);
var audio = new Audio(`sounds/${randomColor}.mp3`);
audio.play();
gamePattern.push(randomColor);
}

nextSequence();


