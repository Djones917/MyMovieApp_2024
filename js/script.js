// test API KEY FOR TMDB - 51cb1709f168a62834a8059395fb0fec

const global = {    
    currentPage: window.location.pathname,
};

// Highlight active link
function highlightActiveLink() {
   const links = document.querySelectorAll('.nav-link');
   links.forEach((link) => {
    if (link.getAttribute('href') === global.currentPage) {

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
}

document.addEventListener('DOMContentLoaded', init);