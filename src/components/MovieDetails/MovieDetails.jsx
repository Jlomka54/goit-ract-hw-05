import { Link, useParams, useNavigate, useLocation } from "react-router-dom";
import { getFilmsById } from "../../api/films";
import { useEffect, useState } from "react";

import c from "./MovieDetails.module.css";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const data = await getFilmsById(movieId);
        setMovieDetails(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };
    fetchMovieDetails();
  }, [movieId]);

  if (!movieDetails) {
    return <p>Loading...</p>;
  }
  const backUrl = location.state?.from || "movies";
  const goBack = () => navigate(backUrl);
  return (
    <div className={c.movieDetailsContainer}>
      <button className={c.backButton} onClick={goBack}>
        GO back
      </button>
      <div className={c.movieDetailsWrapper}>
        <img
          className={c.moviePoster}
          src={`https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}`}
          alt={movieDetails.original_title}
        />
        <div>
          <h2 className={c.movieInfo}>{movieDetails.original_title}</h2>
          <p className={c.movieInfo}>{movieDetails.overview}</p>
          <p className={c.movieInfo}>Country: {movieDetails.origin_country}</p>
          <p className={c.movieInfop}>
            Data release: {movieDetails.release_date}
          </p>
        </div>
        <Link
          className={c.a}
          state={{ from: location.state.from }}
          to={`/movies/${movieId}/cast`}
        >
          Cast
        </Link>
        <Link
          className={c.a}
          state={{ from: location.state.from }}
          to={`/movies/${movieId}/reviews`}
        >
          Reviews
        </Link>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
