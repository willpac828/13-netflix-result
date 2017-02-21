import 'whatwg-fetch';
import fillInResult from './fill-in-result';

const searchForm = document.querySelector('.search-submit'); // not sure where to use these
const searchInput = document.querySelector('.search');  // not sure where to use these
const searchResult = document.querySelector('.bottom');

// Not sure about the wrapping a function around the fetch here.
// Why would it be necessary? Does it not call otherwise?
function searchForShow(name) {
  fetch(`http://netflixroulette.net/api/api.php?title=${name}`)
    .then((res) => res.json())
    .then((data) => {
      fillInResult(searchResult, data);
    });
}

searchForShow('Attack On Titan'); // argument is unnecessary here since the fetch fetches data for Attack on Titan no matter what right?

  // do I need the %20 to represent spaces?
searchForm.addEventListener('click', () => {

  return searchForShow(searchInput.value);
});
