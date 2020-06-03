function makeSound(letter) {
  switch (letter) {
    case 'w':
      playSound('tom-1');
      break;
    case 'a':
      playSound('tom-2');
      break;
    case 's':
      playSound('tom-3');
      break;
    case 'd':
      playSound('tom-4');
      break;
    case 'j':
      playSound('crash');
      break;
    case 'k':
      playSound('kick-bass');
      break;
    case 'l':
      playSound('snare');
      break;
  }
}

function playSound(soundName) {
  let audio = new Audio(`./sounds/${soundName}.mp3`);
  audio.play();
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector('.' + currentKey);

  activeButton.classList.add('pressed');

  setTimeout(function () {
    activeButton.classList.remove('pressed');
  }, 100);
}

document.querySelectorAll('.drum').forEach((drum) => {
  drum.addEventListener('click', () => {
    makeSound(drum.classList[0]);
    buttonAnimation(drum.classList[0]);
  });
});

document.addEventListener('keydown', function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});
