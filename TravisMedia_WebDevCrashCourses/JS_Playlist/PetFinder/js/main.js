// import fetchJsonp from 'fetch-jsonp';
import { isValidZip, alertMessage } from './validate';
import {key, secret} from './keys';

let token = '';
let tokenType = '';

// Call API, POST request for API to generate a new token for us
// curl -d "grant_type=client_credentials&client_id={CLIENT-ID}&client_secret={CLIENT-SECRET}" https://api.petfinder.com/v2/oauth2/token
fetch('https://api.petfinder.com/v2/oauth2/token', {
  method: 'POST',
  body:
    'grant_type=client_credentials&client_id=' +
    key +
    '&client_secret=' +
    secret,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})
  .then(res => res.json())
  .then(data => {
    token = data.access_token;
    tokenType = data.token_type;
    // console.log(token);
    // console.log(tokenType);
  })
  .catch(err => console.log('Unable to reach petfinder', err));

const petForm = document.querySelector('#pet-form');

petForm.addEventListener('submit', fetchAnimals);

// Fetch animals from API
function fetchAnimals(e) {
  e.preventDefault();
  // console.log('Token submit', token);

  // Get User Input
  const animal = document.getElementById('animal').value;
  const zip = document.getElementById('zip').value;

  if (!isValidZip(zip)) {
    alertMessage('Please enter valide zip', 'danger');
    return;
  }

  console.log(`Animal: ${animal} | zip: ${zip}`);

  // fetch pets
  fetch(`https://api.petfinder.com/v2/animals?type=${animal}&location=${zip}`, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': tokenType + ' ' + token
    }
  })
    .then(res => res.json())
    .then(data => {
      showAnimals(data.animals);
    });
}

// Show listings of pets
function showAnimals(data) {
  console.log(data);
  // output
  const results = document.querySelector('#results');
  // clear old results
  results.innerHTML = '';

  // Loop through pets
  data.forEach(pet => {
    const div = document.createElement('div');
    div.classList.add('card', 'card-body', 'mb-3');

    let img =
      pet.photos.length > 0
        ? pet.photos[0].medium
        : 'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/47372917/1/?bust=1581625543&width=300';
    let email = pet.contact.email ? pet.contact.email : '';

    div.innerHTML = `
      <div class="row">
        <div class="col-sm-6">
          <h4>${pet.name} (${pet.age})</h4>
          <p class="text-secondary">${pet.breeds.primary}</p>
          <p>${pet.contact.address.address1} ${pet.contact.address.city} ${pet.contact.address.postcode}</p>
          <ul class="list-group">
            <li class="list-group-item">Phone: ${pet.contact.phone}</li>
            <li class="list-group-item">email: ${email}</li>
          </ul>
        </div>
        <div class="col-sm-6">
          <img src="${img}" alt="pet-image" class="img-fluid rounded-circle mt-2">
        </div>
      </div>
    `;
    results.appendChild(div);
  });
}
