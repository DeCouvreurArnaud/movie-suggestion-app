"use strict";

// DOM elements
const button = document.querySelector(".js-button");
const movieTitle = document.querySelector(".js-title");
const movieImg = document.querySelector(".js-img");
const movieYear = document.querySelector(".js-year");
const moviePlot = document.querySelector(".js-plot");
const movieDirector = document.querySelector(".js-director");
const movieWriter = document.querySelector(".js-writer");
const movieActors = document.querySelector(".js-actors");
const movieRuntime = document.querySelector(".js-runtime");
const movieReleased = document.querySelector(".js-released");
const movieRated = document.querySelector(".js-rated");
const movieLanguage = document.querySelector(".js-language");
const movieCountry = document.querySelector(".js-country");
const movieAwards = document.querySelector(".js-awards");
const movieBoxOffice = document.querySelector(".js-boxoffice");
const movieDvd = document.querySelector(".js-dvd");
const genreList = document.querySelector(".js-genre-list");
const movieScore = document.querySelector(".js-score");
const result = document.querySelector(".js-result");
const movieId = document.querySelector(".js-imdb");
const modal = document.querySelector(".js-modal");
const modalButton = document.querySelector(".js-modal-details");
const modalOverlay = document.querySelector(".js-modal-overlay");
const modalClose = document.querySelector(".js-modal-close");
const modalContent = document.querySelector(".js-modal-content");

// API key
const apiKey = "96fab62e";

// Get random IMDB ID from array
function getRandomMovieId() {
  var movieId = imdbIdArray[Math.floor(Math.random() * imdbIdArray.length)];
  console.log(`IMDB ID: ${movieId}`);
  return movieId;
}

// Fetch movie data from OMDB API
async function fetchMovieData(imdbId) {
  const url = `https://www.omdbapi.com/?i=${imdbId}&apikey=${apiKey}`;
  const res = await fetch(`${url}`);
  const movie = await res.json();

  // Display movie info
  movieTitle.textContent = movie.Title;
  movieImg.src = movie.Poster;
  movieImg.alt = movie.Title;
  movieYear.textContent = movie.Year;
  moviePlot.textContent = movie.Plot;
  movieDirector.textContent = movie.Director;
  movieWriter.textContent = movie.Writer;
  movieActors.textContent = movie.Actors;
  movieScore.textContent = movie.Metascore;
  movieId.href = `https://www.imdb.com/title/${movie.imdbID}`;
  movieRuntime.textContent = movie.Runtime;
  movieReleased.textContent = movie.Released;
  movieRated.textContent = movie.Rated;
  movieLanguage.textContent = movie.Language;
  movieCountry.textContent = movie.Country;
  movieAwards.textContent = movie.Awards;
  movieBoxOffice.textContent = movie.BoxOffice;
  movieDvd.textContent = movie.DVD;

  // Seperate string
  const genreStr = movie.Genre;
  const separatedArray = genreStr.split(", ");
  // Display genres
  separatedArray.forEach((item) => {
    const genre = document.createElement("li");
    genre.textContent = item;
    genreList.appendChild(genre);
  });

  // Rating
  const ratingStr = movie.Metascore;
  const rating = parseInt(ratingStr);
  switch (true) {
    case rating >= 85:
      result.textContent = " - Excellent";
      break;
    case rating >= 70:
      result.textContent = " - Very Good";
      break;
    case rating >= 50:
      result.textContent = " - Good";
      break;
    case rating < 50:
      result.textContent = " - Underwhelming";
      break;
  }
}

function openModal() {
  modalButton.addEventListener("click", () => {
    modal.classList.remove("u-hidden");
    modal.style
    modalContent.classList.add("u-transition-modal");
    modalOverlay.classList.add("u-transition-overlay");
  });
}

function closeModal() {
  modalOverlay.addEventListener("click", () => {
    modal.classList.add("u-hidden");
    modalContent.classList.remove("u-transition-modal");
    modalOverlay.classList.remove("u-transition-overlay");
  });
  modalClose.addEventListener("click", () => {
    modal.classList.add("u-hidden");
    modalContent.classList.remove("u-transition-modal");
    modalOverlay.classList.remove("u-transition-overlay");
  });
}

// Init
window.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed");

  // generate new movie
  button.addEventListener("click", fetchMovieData(getRandomMovieId()));

  // open modal
  openModal();

  // close modal
  closeModal();
});

// IMDB IDs
const imdbIdArray = [
  "tt9114286",
  "tt14641788",
  "tt17076046",
  "tt13833688",
  "tt10731256",
  "tt1016150",
  "tt15791034",
  "tt6443346",
  "tt10403420",
  "tt7846844",
  "tt1630029",
  "tt13139228",
  "tt13640696",
  "tt15474916",
  "tt4273800",
  "tt11564570",
  "tt11813216",
  "tt12593682",
  "tt14715170",
  "tt1745960",
  "tt12530246",
  "tt0111161",
  "tt0068646",
  "tt0468569",
  "tt0050083",
  "tt0108052",
  "tt0167260",
  "tt0110912",
  "tt0109830",
  "tt0137523",
  "tt1375666",
  "tt0133093",
  "tt0099685",
  "tt0073486",
  "tt0816692",
  "tt0076759",
  "tt0088763",
  "tt0054215",
  "tt0253474",
  "tt6751668",
  "tt0110413",
  "tt0110357",
  "tt0172495",
  "tt0407887",
  "tt0482571",
  "tt2582802",
  "tt1675434",
  "tt0078748",
  "tt1853728",
  "tt0082971",
];
