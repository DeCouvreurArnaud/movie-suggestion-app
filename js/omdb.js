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
const genreList = document.querySelector(".js-genre-list");
const movieScore = document.querySelector(".js-score");
const result = document.querySelector(".js-result");
const movieId = document.querySelector(".js-imdb");

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

// Init
window.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed");
  button.addEventListener("click", fetchMovieData(getRandomMovieId()));
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
];
