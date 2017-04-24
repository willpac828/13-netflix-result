import 'whatwg-fetch';
import fillInResult from './fill-in-result';

// Are these the starting values??
const searchForm = document.querySelector('.search-submit');
const searchInput = document.querySelector('.search');
const searchResult = document.querySelector('.bottom');

// Not sure about the wrapping a function around the fetch here.
// Why would it be necessary? Does it not call otherwise?
function searchForShow(name) {
  fetch(`http://netflixroulette.net/api/api.php?title=${name}`)
    // once I have data, turn it into a javascript object and perform work
    .then(res => res.json())
    .then((data) => {
      // I defined searchResult to represent .bottom
      fillInResult(searchResult, data);
    });
}

searchForShow('Attack On Titan');

// argument is unnecessary here since the fetch fetches data for Attack on Titan no matter what right?

searchForm.addEventListener('click', () => searchForShow(searchInput.value) // searchInput.value finds whatever searchInput/.search contains at present
);

// when button is clicked, function runs for whatever value is typed
