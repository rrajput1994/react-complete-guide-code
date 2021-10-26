import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = async () => {
    setIsLoading(true);

    try {
      const response = await fetch("https://swapi.dev/api/films");
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
      const formatedMovies = data.results.map((movie) => {
        return {
          id: movie.episode_id,
          title: movie.title,
          openingText: movie.opening_crawl,
          releaseDate: movie.release_date,
        };
      });
      setMovies(formatedMovies);
    } catch (error) {
      setError(error.message);
    }

    setIsLoading(false);
  };

  // dynamic values will be store in content variable

  let content = <p>No Movies Found!</p>;

  // if movies array has data
  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }

  // this condition run when proper response not coming from server may be some typo in api url
  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {/* content this is the alternative way of below lines  */}
        {content}

        {/* {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && !error && (
          <p>No Moives Found! Plz Click on Button.</p>
        )}
        {!isLoading && error && <p>{error}</p>}
        {isLoading && <p>Plz wait Movies are Loading...</p>} */}
      </section>
    </React.Fragment>
  );
}

export default App;
