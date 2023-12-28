import React from "react";
import logoSearchMovie from "/src/assets/camcorder.svg";
import SearchMovies from "./components/searchMovies";

function App() {
  return (
    <div className="container">
      <img
        src={logoSearchMovie}
        alt="logo search movie"
        className="logo-search-movie"
      />
      <h1 className="title">Search Movie</h1>
      <SearchMovies />
    </div>
  );
}
export default App;
