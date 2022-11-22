"use strict";

// DOM elements
const movieTitle = document.querySelector(".js-movie-title");
const movieImg = document.querySelector(".js-movie-img");
const button = document.querySelector(".js-button");

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
  const url = `http://www.omdbapi.com/?i=${imdbId}&apikey=${apiKey}`;
  const res = await fetch(`${url}`);
  const movie = await res.json();
  movieTitle.innerHTML = movie.Title;
  movieImg.src = movie.Poster;

}

// Init
window.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed");
  button.addEventListener("click", fetchMovieData(getRandomMovieId()));
  console.log(imdbIdArray.length);
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
  "tt1745960"
];