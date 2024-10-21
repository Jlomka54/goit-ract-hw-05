import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviewsByID } from "../../api/films";

const MovieRevies = () => {
  const { movieId } = useParams();
  const [movieRevies, setMovieRevies] = useState([]);

  useEffect(() => {
    const fetchCastDetails = async () => {
      try {
        const data = await getReviewsByID(movieId);
        console.log("🚀 ~ fetchCastDetails ~ data:", data);

        setMovieRevies(data.results);
      } catch (error) {
        console.error("Error fetching movie cast:", error);
      }
    };
    fetchCastDetails();
  }, [movieId]);

  return (
    <div>
      {movieRevies.map((review) => {
        return (
          <div key={review.id}>
            <h3>{review.author}</h3>
            <p>{review.content}</p>
          </div>
        );
      })}
    </div>
  );
};

export default MovieRevies;
