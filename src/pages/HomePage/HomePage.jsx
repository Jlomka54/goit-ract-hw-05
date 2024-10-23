import { useEffect, useState } from "react";

import MovieList from "../../components/MovieList/MovieList";

import { fetchFilms } from "../../api/films";

const HomePage = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getTrandMovies = async () => {
      try {
        const data = await fetchFilms();
        setTrendMovies(data.results);
      } catch (error) {
        setError(error.message);
      }
    };
    getTrandMovies();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>

      {error && (
        <p>
          Oops, some error occured &quot;{error}&quot;. Please, try again later.
        </p>
      )}
      {trendMovies.length > 0 && <MovieList from="home" />}
    </div>
  );
};

export default HomePage;
