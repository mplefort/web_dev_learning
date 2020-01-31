document.getElementById('output').style.visibility = 'hidden';

document.getElementById('lbsInput').addEventListener('input', function(e) {
  console.log(e);
  let pounds = e.target.value;

  // get output elemetns
  document.getElementById('grams-output').innerHTML = pounds / 0.0022046;
  document.getElementById('kg-output').innerHTML = pounds / 2.2046;
  document.getElementById('ounces-output').innerHTML = pounds * 16;
  document.getElementById('output').style.visibility = 'visible';
});
