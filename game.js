const btnColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userPattern = [];

$(".btn").click(function () {
  const colorClicked = this.id;
  userPattern.push(colorClicked);
  playSound(colorClicked)
  animatePress(colorClicked);
});

function playSound(name) {
    let audio = new Audio(`sounds/${name}.mp3`);
    audio.play();
}

function animatePress(color) {
    $(`#${color}`).addClass('pressed');
    setTimeout(() => {
        $(`#${color}`).removeClass('pressed');
    }, 100);
}
function nextSequence() {
  let randomNum = Math.floor(Math.random() * 4);
  let randomColor = btnColors[randomNum];

  $(`#${randomColor}`).fadeOut(100).fadeIn(100);
  playSound(randomColor)
  gamePattern.push(randomColor);
}

nextSequence();
