import { Link, useParams } from "react-router-dom";
import { getFilmsById } from "../../api/films";
import { useEffect, useState } from "react";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

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
  return (
    <div>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}`}
          alt={movieDetails.original_title}
        />
        <div>
          <h2>{movieDetails.original_title}</h2>
          <p>{movieDetails.overview}</p>
          <p>Country: {movieDetails.origin_country}</p>
          <p>Data release: {movieDetails.release_date}</p>
        </div>
        <Link to={`/movies/${movieId}/cast`}>Cast</Link>
        <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
