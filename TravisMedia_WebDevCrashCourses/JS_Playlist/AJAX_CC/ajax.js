// // HTTP status:
// 200 = ok
// 403 = Forbidden
// 404 = not found

// // readyState Values - if using onreadyshtatechange , need to confirm readystate == 4
// 0: reuest not initialized
// 1: server connection established
// 2: request received
// 3: processing request
// 4: request finished and response is ready

// create event listener
document.getElementById('button').addEventListener('click', loadText);

function loadText() {
  // Create XHR object
  let xhr = new XMLHttpRequest();
  console.log(xhr);
  // OPEN - type, url/file, async
  xhr.open('GET', 'simple.txt', true);

  console.log('ReadyState ', xhr.readyState);

  // optional - used for loaders css animations msotly
  // runs when readyState == 3: processing request
  xhr.onprogress = function() {
    console.log('ReadyState ', xhr.readyState);
  };

  // only ran once readystate == 4
  xhr.onload = function() {
    console.log('ReadyState ', xhr.readyState);

    // if status ok
    if (this.status == 200) {
      // console.log(this.responseText);
      document.getElementById('text').innerHTML = this.responseText;
    } else if (this.status == 404) {
      document.getElementById('text').innerHTML = 'Not found';
    }
  };

  // runs only if error returned
  xhr.onerror = function() {
    console.log('request error ...');
  };

  // // On ready state change ILO of onload - runs constantly until readystate = 4
  // xhr.onreadystatechange = function() {
  //   console.log('ReadyState ', xhr.readyState);

  //   if (this.readyState == 4 && this.status == 200) {
  //     console.log(this.responseText);
  //   }
  // };

  // sends request
  xhr.send();
}
