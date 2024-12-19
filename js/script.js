// test API KEY FOR TMDB - 51cb1709f168a62834a8059395fb0fec

const global = {    
    currentPage: window.location.pathname,
};

// init app
function init() {
    switch (global.currentPage) {
      case '/':
      console.log('home');
      break;
      case '/shows.html':
        console.log('Shows');
      break;
      case '/movies-details.html':
        console.log('Movie Details');
        break;
    }
}

document.addEventListener('DOMContentLoaded', init);