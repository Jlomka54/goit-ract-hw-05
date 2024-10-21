import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCastByID } from "../../api/films";

const MovieCast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState([]);

  useEffect(() => {
    const fetchCastDetails = async () => {
      try {
        const data = await getCastByID(movieId);

        setMovieCast(data.cast);
      } catch (error) {
        console.error("Error fetching movie cast:", error);
      }
    };
    fetchCastDetails();
  }, [movieId]);

  if (!movieCast.length) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {movieCast.map((castMember) => {
        return (
          <div key={castMember.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${castMember.profile_path}`}
              alt={castMember.name}
              width="150"
            />
            <p>{castMember.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default MovieCast;
