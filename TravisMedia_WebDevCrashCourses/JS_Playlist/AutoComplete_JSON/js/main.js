const search = document.getElementById('search');
const matchList = document.getElementById('match-list');

search.addEventListener('input', () => searchStates(search.value));

// Search states.json and filter it
const searchStates = async searchText => {
  const res = await fetch('data/states.json');
  console.log(res);

  const states = await res.json();
  console.log(states);

  // get matches to current text input
  let = matches = states.filter(state => {
    const regex = new RegExp(`^${searchText}`, 'gi');
    return state.name.match(regex) || state.abbr.match(regex);
  });

  if (searchText.length === 0) {
    matches = [];
  }

  console.log(matches);
  outputHtml(matches);
};

// show result in html
const outputHtml = matches => {
  if (matches.length > 0) {
    const html = matches
      .map(
        match => `
        <div class="card card-body mb-4">
        <h4>${match.name}, (${match.abbr} <span class="text-primary">${match.capital}</span></h4>
        <small>Lat: ${match.lat} \ Long: ${match.long}</small>
        </div>`
      )
      .join('');

    matchList.innerHTML = html;
  }

  if (matches.length === 0) {
    matchList.innerHTML = '';
  }
};
