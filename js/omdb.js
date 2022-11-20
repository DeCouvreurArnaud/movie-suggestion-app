"use strict";

const movieTitle = document.querySelector(".js-movie-title");
const button = document.querySelector(".js-button");

const apiKey = "96fab62e";
const imdbMovies = ["tt3896198", "tt9114286", "tt4786824"];

function getRandomMovieId() {
  var movieId = imdbMovies[Math.floor(Math.random() * imdbMovies.length)];
  console.log(movieId);
  return movieId;
}

async function getMovie(imdbId) {
  const url = `http://www.omdbapi.com/?i=${imdbId}&apikey=${apiKey}`;
  const res = await fetch(`${url}`);
  const data = await res.json();
  console.log(data.Title);
  movieTitle.innerHTML = data.Title;
}

window.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed");
  document.addEventListener("click", getMovie(getRandomMovieId()));
});
