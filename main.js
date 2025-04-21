let index = 1; // Start at the first movie
let maxIndex = 40; // This will be dynamically set on load

// Cache DOM elements
const backBtn = document.querySelector('.backBtn');
const forwardBtn = document.querySelector('.forwardBtn');

document.querySelector('.firstBtn').addEventListener('click', firstMarvel);
document.querySelector('.lastBtn').addEventListener('click', latestMarvel);
backBtn.addEventListener('click', lastMarvel);
forwardBtn.addEventListener('click', nextMarvel);
window.onload = initializeMarvel;

function initializeMarvel() {
  fetch('https://mcuapi.herokuapp.com/api/v1/movies')
    .then(res => res.json())
    .then(data => {
      maxIndex = data.total;
      getMarvel(index);
      updateButtonVisibility(); // Initialize button visibility
    });
}

function updateButtonVisibility() {
  // Hide back button if on first movie
  backBtn.style.display = index <= 1 ? 'none' : 'block';
  
  // Hide forward button if on last movie
  forwardBtn.style.display = index >= maxIndex ? 'none' : 'block';
}

function firstMarvel() {
  if (index > 1) {
    index = 1;
    getMarvel(index);
    updateButtonVisibility();
  }
}

function latestMarvel() {
  if (index < maxIndex) {
    index = maxIndex;
    getMarvel(index);
    updateButtonVisibility();
  }
}

function lastMarvel() {
  if (index > 1) {
    index--;
    getMarvel(index);
    updateButtonVisibility();
  }
}

function nextMarvel() {
  if (index < maxIndex) {
    index++;
    getMarvel(index);
    updateButtonVisibility();
  }
}

function getMarvel(movieIndex) {
  fetch(`https://mcuapi.herokuapp.com/api/v1/movies/${movieIndex}`)
    .then(res => res.json())
    .then(data => {
      // Update DOM with movie data
      document.querySelector('img').src = data.cover_url;
      document.querySelector('.description').innerText = data.overview;
      document.querySelector('.mTitle').innerText = data.title
      document.querySelector('.release').innerText = `Release date: ${data.release_date}`
      document.querySelector('.directed').innerText = `Directed by: ${data.directed_by}`
      document.querySelector('iframe').src = data.trailer_url        
      document.querySelector('.trailer').href = data.trailer_url        
      document.querySelector('.trailer').innerText = `Watch the Trailer for ${data.title}`
      document.querySelector('.imdb').innerText = `Explore ${data.title} on IMDB`
      document.querySelector('.imdb').href = `https://www.imdb.com/title/${data.imdb_id}`
    });
}