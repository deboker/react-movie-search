import { useState } from "react";
import SearchMovies from "./components/searchMovies";

function App() {
  return (
    <div className="container">
      <h1 className="title">Search Movie</h1>
      <SearchMovies />
    </div>
  );
}
export default App;
