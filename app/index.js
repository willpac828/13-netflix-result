import 'whatwg-fetch';
import fillInResult from './fill-in-result';

const searchForm = document.querySelector('.search-submit');
const searchInput = document.querySelector('.search');
const searchResult = document.querySelector('.bottom');

fetch('http://netflixroulette.net/api/api.php?title=Attack%20on%20titan')
  .then((res) => res.json())
  .then((data) => {
    fillInResult(searchResult, data); //  not sure about quotes inside of parentheses
  });


// searchForm.addEventListener('click', () => {
//    fillInResult(searchInput.value);
// });
