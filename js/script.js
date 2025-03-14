// test API KEY FOR TMDB - 51cb1709f168a62834a8059395fb0fec

const global = {    
    currentPage: window.location.pathname,
};

async function displayPopularMovies() {
  const results = await fetchAPIData();
}

// Fetch data from TMDB API
async function fetchAPIData(endpoint) {
  const API_KEY = '';
  const API_URL = 'https://api.themoviedb.org/3/';

  const response = await fetch ('${API_URL}${endpoint}?api_key=${API_KEY}&language=en-US');

  const data = await response.json();

  return data;
}

// Highlight active link
function highlightActiveLink() {
   const links = document.querySelectorAll('.nav-link');
   links.forEach((link) => {
    if (link.getAttribute('href') === global.currentPage) {
      link.classList.add('active');
    }
   });
}

// init app
function init() {
    switch (global.currentPage) {
      case '/':
        case '/index.html':
      console.log('home');
      break;
      case '/shows.html':
        console.log('Shows');
      break;
      case '/movies-details.html':
        console.log('Movie Details');
        break;
      case '/tv-details.html':
        console.log('TV Details');
        break; 
      case '/search.html':
        console.log('Search');
        break;  
    }

    highlightActiveLink();
}

document.addEventListener('DOMContentLoaded', init);