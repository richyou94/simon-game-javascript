const btnColors = ["red", "blue", "green", "yellow"];
let isStarted = false;
let level = 0;
let gamePattern = [];
let userPattern = [];

$(document).keypress(function () {
  if (!isStarted) {
    $("#level-title").text(`Level ${level}`);
    nextSequence();
    isStarted = true;
  }
});

$(".btn").click(function () {
  const colorClicked = this.id;
  userPattern.push(colorClicked);

  playSound(colorClicked);
  animatePress(colorClicked);

  checkAnswer(userPattern.length - 1);
});

function playSound(name) {
  let audio = new Audio(`sounds/${name}.mp3`);
  audio.play();
}

function animatePress(color) {
  $(`#${color}`).addClass("pressed");
  setTimeout(() => {
    $(`#${color}`).removeClass("pressed");
  }, 100);
}

function nextSequence() {
  userPattern = [];

  level++;
  $("#level-title").text(`Level ${level}`);

  let randomNum = Math.floor(Math.random() * 4);
  let randomColor = btnColors[randomNum];
  gamePattern.push(randomColor);

  $(`#${randomColor}`).fadeOut(100).fadeIn(100);
  playSound(randomColor);
}

function checkAnswer(currentLevel) {
  if (userPattern[currentLevel] === gamePattern[currentLevel]) {
    console.log("success");
    if (userPattern.length === gamePattern.length) {
      setTimeout(() => {
        nextSequence();
      }, 1000);
    }
  } else {
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(() => {
      $("body").removeClass("game-over");
    }, 200);
    isStarted = false;
    $("#level-title").text('Game Over, Press Any Key to Restart');
  }
}
