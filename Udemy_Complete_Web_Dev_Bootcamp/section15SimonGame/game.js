const buttonColors = ['red', 'blue', 'green', 'yellow'];
let gamePattern = [];
let userClickedPattern = [];
let level = 0;

function nextSequence() {
  userClickedPattern = [];
  level++;
  console.log($('#level-title'));
  $('#level-title').text(`Level ${level}`);
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);

  $(`#${randomChosenColor}`).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(`${randomChosenColor}`);
}

function playSound(name) {
  let audio = new Audio(`sounds/${name}.mp3`);
  audio.play();
}

function animatePress(currentColor) {
  let currentBtn = $(`#${currentColor}`);
  currentBtn.addClass('pressed');
  setTimeout(() => {
    currentBtn.removeClass('pressed');
  }, 100);
}

$('.btn').on('click', handleClick);

function handleClick() {
  let buttonColor = $(this).attr('id');
  userClickedPattern.push(buttonColor);
  playSound(`${buttonColor}`);
  animatePress(buttonColor);

  let result = checkAnswer(level);
  if (!result) {
    startOver();
    return;
  } else if (userClickedPattern.length === gamePattern.length) {
    console.log('Correct Sequence');
    setTimeout(function () {
      nextSequence();
    }, 1000);
  }
}

function checkAnswer(currentLevel) {
  let roundIdx = userClickedPattern.length - 1;
  if (gamePattern[roundIdx] !== userClickedPattern[roundIdx]) {
    playSound('wrong');
    $('body').addClass('game-over');
    setTimeout(() => {
      $('body').removeClass('game-over');
    }, 200);
    console.log('wrong');
    $('#level-title').text('Game Over, Press any key to restart');
    return false;
  } else {
    console.log('Success');
    return true;
  }
}

function startOver() {
  level = 0;
  gamePattern = [];
  userClickedPattern = [];
}

$('body').keypress(function () {
  console.log('Handler for .keypress() called.');
  nextSequence();
});

// nextSequence();
// nextSequence();
// nextSequence();
// nextSequence();
// nextSequence();
// console.log(gamePattern);
// showSequence(gamePattern);
