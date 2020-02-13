// validate zipcode
export function isValidZip(zip){
  return /^\d{5}(-\d{4})?$/.test(zip);
}

// Display ALert message
export function alertMessage(msg, className){
    // create div
    const div = document.createElement('div');
    // add classes
    div.className = `alert alert-${className}`;
    // add text
    div.appendChild(document.createTextNode(msg));
  
    // inject HTML
    // get Parent
    const container = document.querySelector('.container');
    const form = document.getElementById('pet-form');
  
    container.insertBefore(div, form);
    setTimeout(() => document.querySelector('.alert').remove(), 3000);
}

