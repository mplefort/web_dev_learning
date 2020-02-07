// call geocode
// API_KEY = AIzaSyDUZoXwGC8odW4crKzjNw5c6cLEuF_VpUY
async function geocode(e) {
  // prevent actual submit
  e.preventDefault();

  // let location = '22 Main st Boston MA';
  let location = document.getElementById('location-input').value;
  console.log(location);
  let base_req = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
  let api_key = '&key=AIzaSyDUZoXwGC8odW4crKzjNw5c6cLEuF_VpUY';
  let req = '';
  req = base_req + location + api_key;
  console.log(req);
  // ?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=

  // const resp = await fetch(
  //   'https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyDUZoXwGC8odW4crKzjNw5c6cLEuF_VpUY'
  // );
  const resp = await fetch(req);
  // console.log(resp);

  const data = await resp.json();
  // console.log(data);

  console.log(data);

  let formattedAddress = data.results[0].formatted_address;
  let formattedAddressOutput = ` 
    <ul class="list-group">
    <li class="list-group-item">${formattedAddress}</li>
    </ul>
  `;

  // address Components
  let addressComponents = data.results[0].address_components;
  let addressComponentsOutput = '<ul class="list-group">';
  addressComponents.forEach(cmpn => {
    addressComponentsOutput += `
    <li class="list-group-item"><span class="text-primary font-weight-bold">${cmpn.types[0]}:</span> ${cmpn.long_name}</li>
    `;
  });
  addressComponentsOutput += '</ul>';

  // Geometry componet
  let lat = data.results[0].geometry.location.lat;
  let lng = data.results[0].geometry.location.lng;
  let geometryOutput = ` 
    <ul class="list-group">
    <li class="list-group-item"><span class="text-primary font-weight-bold">Latitude:</span> ${lat}</li>
    <li class="list-group-item"><span class="text-primary font-weight-bold">Longitude:</span> ${lng}</li>
    </ul>
  `;

  // Add items to HTML
  // formatted address
  document.getElementById(
    'formatted-address'
  ).innerHTML = formattedAddressOutput;

  // address components
  document.getElementById(
    'address-components'
  ).innerHTML = addressComponentsOutput;

  // Lat / Long
  document.getElementById('geometry').innerHTML = geometryOutput;
  return data;
}

// geocode();

let locationForm = document.getElementById('location-form');

locationForm.addEventListener('submit', geocode);
