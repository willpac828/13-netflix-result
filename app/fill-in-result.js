export default function fillInResult(element, data) {
  element.querySelector('.movie-title').innerText = data.show_title;
  element.querySelector('.movie-genre').innerText = data.category;
  element.querySelector('.movie-score').innerText = data.rating;
  element.querySelector('.movie-profile__img').innerText = data.poster;
  element.querySelector('.movie-summary__text').innerText = data.summary;
  element.querySelector('.movie-actors__text').innerText = data.show_cast;
  return element;
}
