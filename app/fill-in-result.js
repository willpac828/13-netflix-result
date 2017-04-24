export default function fillInResult(element, data) {
  // filling in the elements inside of .bottom with the data api
  element.querySelector('.movie-title').innerText = data.show_title;
  element.querySelector('.movie-genre').innerText = data.category;
  element.querySelector('.movie-score').innerHTML = `<p> ${data.rating} <i class="fa fa-star" aria-hidden="true"></i></p>`;
  element.querySelector('.movie-profile__img').src = data.poster;  // innerHTML ?  (is the image considered text here?)
  element.querySelector('.movie-summary__text').innerText = data.summary;
  element.querySelector('.movie-actors__text').innerText = data.show_cast;

  // MUST REMEMBER TO RETURN so that w/e is calling this function gets a value back2
  return element;
}
