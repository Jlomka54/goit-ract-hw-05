import { useEffect, useState } from "react";

import { fetchFilms, getFilms } from "../../api/films";
import { Link } from "react-router-dom";

const MovieList = ({ searchValue }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        if (searchValue) {
          const data = await getFilms(searchValue);
          setMovies(data.results);
        } else {
          const data = await fetchFilms();
          setMovies(data.results);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getMovies();
  }, [searchValue]);

  return (
    <ul>
      {movies.map((movie) => {
        return (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MovieList;
