import { Link, useLocation } from "react-router-dom";

import c from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  const location = useLocation();

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
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                width="150"
              />
              {movie.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MovieList;
