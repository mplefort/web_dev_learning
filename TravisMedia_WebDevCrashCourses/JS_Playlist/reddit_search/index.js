import reddit from './redditapi';

const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');

searchForm.addEventListener('submit', searchCallback);

function searchCallback(e) {
  e.preventDefault();

  // Get search term
  const searchTerm = searchInput.value;
  // get sort
  const sortBy = document.querySelector('input[name="sortby"]:checked').value;
  // get limit
  const searchLimit = document.getElementById('limit').value;
  // Check input:
  if (searchTerm === '') {
    // show a message
    showMessage('Please add a search term', 'alert-danger');
  }

  // if search done, clearn search input
  searchInput.value = '';

  // search reddit with fetch API
  reddit.search(searchTerm, searchLimit, sortBy).then(results => {
    console.log(results);
    let output = '<div class="card-columns">';

    // Loop through posts
    results.forEach(post => {
      // Check for image
      let image = post.preview
        ? post.preview.images[0].source.url
        : 'https://www.slashgear.com/wp-content/uploads/2019/09/reddit_logo_main-1280x720.jpg';

      output += `
        <div class="card">
          <img class="card-img-top" src=${image} alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">${post.title}</h5>
            <p class="card-text">${truncateText(post.selftext, 100)}</p>
            <a href="${
              post.url
            }" target="_blank" class="btn btn-primary">Read more</a>
            <hr>
            <span class="badge badge-secondary">Subreddit: ${
              post.subreddit
            }</span>
            <span class="badge badge-dark">Score: ${post.score}</span>
          </div>
        </div>
      `;
    });
    output += '</div>';
    document.getElementById('results').innerHTML = output;
  });
}

// display messages
function showMessage(msg, className) {
  // create div
  const div = document.createElement('div');
  // add classes
  div.className = `alert ${className}`;
  // add text
  div.appendChild(document.createTextNode(msg));

  // inject HTML
  // get Parent
  const searchContainer = document.getElementById('search-container');
  const search = document.getElementById('search');

  searchContainer.insertBefore(div, search);
  setTimeout(() => document.querySelector('.alert').remove(), 3000);
}

// truncate text
function truncateText(text, limit) {
  // string.indexOf('string', starting_index) => first index of 'string' starting from starting_index
  const shortened = text.indexOf(' ', limit);
  if (shortened == -1) return text;
  return text.substring(0, shortened);
}
