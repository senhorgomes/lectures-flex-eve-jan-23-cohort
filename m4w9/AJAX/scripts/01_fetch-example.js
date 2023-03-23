// https://api.tvmaze.com/search/shows?q=big%20bang%20theory
fetch("https://api.tvmaze.com/search/shows?q=big%20bang%20theory")
  .then((response) => response.json())
  .then((data) => console.log(data));