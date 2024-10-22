import { useEffect, useState } from "react";

import { fetchFilms, getFilms } from "../../api/films";
import { Link, useLocation } from "react-router-dom";

import c from "./MovieList.module.css";

const MovieList = ({ searchValue }) => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

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
    <ul className={c.movieList}>
      {movies.map((movie) => {
        return (
          <li className={c.movieItem} key={movie.id}>
            <Link
              className={c.movieLink}
              state={{
                from: location,
              }}
              to={`/movies/${movie.id}`}
            >
              {movie.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MovieList;
