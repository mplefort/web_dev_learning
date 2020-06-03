let img1 = document.querySelector('.img1');
let img2 = document.querySelector('.img2');
let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

// document.onload = () => {
//   img1.setAttribute('src', './images/dice6.png');
// });

window.addEventListener('load', () => {
  img1.setAttribute('src', `./images/dice${randomNumber1}.png`);
  img2.setAttribute('src', `./images/dice${randomNumber2}.png`);

  console.log(document.querySelector('h1'));
  if (randomNumber1 === randomNumber2) {
    document.querySelector('h1').innerHTML = 'Draw';
  } else if (randomNumber1 > randomNumber2) {
    document.querySelector('h1').innerHTML = 'Player 1 Wins';
  } else {
    document.querySelector('h1').innerHTML = 'Player 2 Wins';
  }
});
